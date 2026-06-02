declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackPreferredSourceClick(link: HTMLAnchorElement): void {
  window.gtag?.('event', 'add_preferred_source_click', {
    event_category: 'engagement',
    link_url: link.href,
    link_text: link.textContent?.trim() ?? '',
    surface: link.dataset.preferredSourceSurface ?? 'unknown',
    transport_type: 'beacon',
  });
}

function initPreferredSourceTracking(): void {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const link = target.closest<HTMLAnchorElement>('a[data-preferred-source-link]');
    if (!link) return;

    trackPreferredSourceClick(link);
  });
}

initPreferredSourceTracking();
