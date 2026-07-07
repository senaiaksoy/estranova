/**
 * Makale içi TOC etkileşimi — sticky kolonun (data-toc) iki davranışı:
 *
 * 1. Active section highlight — IntersectionObserver ile makaledeki
 *    H2 başlıkları izlenir; viewport'un üst yarısına giren bölümün
 *    TOC link'i `data-active="true"` olur.
 *
 * 2. Scroll progress — makale gövdesinin (article) sayfa içinde ne
 *    kadar kaydığı yüzde olarak gold çubuğa yansır.
 *
 * Hiçbir TOC bulunmayan sayfalarda erken çıkar; varsayılan davranış
 * yok. Smooth scroll için `<html class="scroll-smooth">` zaten kurulu.
 */

function initToc(): void {
  const toc = document.querySelector<HTMLElement>('[data-toc]');
  if (!toc) return;

  const links = Array.from(toc.querySelectorAll<HTMLAnchorElement>('[data-toc-link]'));
  if (links.length === 0) return;

  const progressBar = toc.querySelector<HTMLElement>('[data-toc-progress-bar]');

  // TOC link'lerinin işaret ettiği H2 başlıklarını topla
  const headings: HTMLElement[] = [];
  links.forEach((link) => {
    const id = link.dataset.tocLink;
    if (!id) return;
    const el = document.getElementById(id);
    if (el) headings.push(el);
  });

  if (headings.length === 0) return;

  // Active highlight
  const setActive = (id: string | null) => {
    links.forEach((link) => {
      if (id && link.dataset.tocLink === id) {
        link.dataset.active = 'true';
      } else {
        delete link.dataset.active;
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      // En son intersect olan başlığı al; birden fazla varsa ekrana
      // en yakın olanı seç
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length > 0) {
        setActive(visible[0].target.id);
        return;
      }
      // Hiç görünmüyorsa sayfanın en üstündeyse ilk başlığı,
      // en altındaysa son başlığı işaretle
      const allTops = headings.map((h) => h.getBoundingClientRect().top);
      const aboveViewport = allTops.filter((t) => t < 0).length;
      if (aboveViewport === 0) {
        setActive(headings[0].id);
      } else if (aboveViewport >= headings.length) {
        setActive(headings[headings.length - 1].id);
      }
    },
    {
      // Üst %20'lik şerit aktif "okuma penceresi" — H2 buraya girince
      // sayılır
      rootMargin: '-15% 0px -70% 0px',
      threshold: 0,
    },
  );
  headings.forEach((h) => observer.observe(h));

  // Scroll progress
  if (progressBar) {
    const article =
      document.querySelector<HTMLElement>('article') ??
      document.querySelector<HTMLElement>('main');
    if (article) {
      const updateProgress = () => {
        const rect = article.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) {
          progressBar.style.width = '100%';
          return;
        }
        const scrolled = Math.max(0, -rect.top);
        const pct = Math.min(100, Math.max(0, (scrolled / total) * 100));
        progressBar.style.width = `${pct.toFixed(2)}%`;
      };
      let raf = 0;
      window.addEventListener(
        'scroll',
        () => {
          if (raf) return;
          raf = window.requestAnimationFrame(() => {
            updateProgress();
            raf = 0;
          });
        },
        { passive: true },
      );
      window.addEventListener('resize', updateProgress, { passive: true });
      updateProgress();
    }
  }

  // İlk açılışta sayfanın URL hash'ine göre active state
  if (location.hash) {
    const id = location.hash.replace('#', '');
    if (id && links.some((l) => l.dataset.tocLink === id)) {
      setActive(id);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initToc);
} else {
  initToc();
}
