from __future__ import annotations

from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageEnhance, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "icerik" / "sosyal" / "2026-08-libido-degisimi-carousel"
EDITORIAL = ROOT / "public" / "images" / "library" / "editorial"
BRAIN = Path("C:/Users/KC3/.gemini/antigravity/brain/abfce2d4-ef37-4662-9b8c-225d3f1df2a5")

W, H = 1080, 1350
PASTEL_ROSE = (247, 229, 236)
CREAM = (255, 253, 249)
WARM = (247, 241, 234)
INK = (45, 45, 45)
PRIMARY_PINK = (216, 27, 96)
SECONDARY_PINK = (194, 24, 91)
GOLD = (201, 169, 110)
BLACK = (28, 28, 25)
WHITE = (255, 255, 255)

FONTS = ROOT / "scripts" / "fonts"
MANROPE = FONTS / "Manrope-Regular.ttf"
MANROPE_MEDIUM = FONTS / "Manrope-Medium.ttf"
MANROPE_BOLD = FONTS / "Manrope-Bold.ttf"
KULIM = FONTS / "KulimPark-Regular.ttf"
KULIM_SEMIBOLD = FONTS / "KulimPark-SemiBold.ttf"
KULIM_ITALIC = FONTS / "KulimPark-Italic.ttf"


def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size)


def cover_crop(path: Path, size=(W, H), focus=(0.5, 0.5)) -> Image.Image:
    img = Image.open(path).convert("RGB")
    src_w, src_h = img.size
    dst_w, dst_h = size
    scale = max(dst_w / src_w, dst_h / src_h)
    new = img.resize((int(src_w * scale), int(src_h * scale)), Image.LANCZOS)
    x = int((new.width - dst_w) * focus[0])
    y = int((new.height - dst_h) * focus[1])
    return new.crop((x, y, x + dst_w, y + dst_h))


def overlay(img: Image.Image, color, alpha: int) -> Image.Image:
    layer = Image.new("RGBA", img.size, (*color, alpha))
    return Image.alpha_composite(img.convert("RGBA"), layer)


def fit_text(draw: ImageDraw.ImageDraw, text: str, font_path: Path, max_width: int, start_size: int, min_size: int):
    for size in range(start_size, min_size - 1, -2):
        f = font(font_path, size)
        words = text.split()
        lines = []
        line = ""
        for word in words:
            trial = f"{line} {word}".strip()
            if draw.textbbox((0, 0), trial, font=f)[2] <= max_width:
                line = trial
            else:
                if line:
                    lines.append(line)
                line = word
        if line:
            lines.append(line)
        line_h = int(size * 1.15)
        if all(draw.textbbox((0, 0), line, font=f)[2] <= max_width for line in lines):
            return f, lines, line_h
    f = font(font_path, min_size)
    return f, wrap(text, width=24), int(min_size * 1.15)


def draw_wrapped(draw, xy, text, font_path, size, fill, max_width, line_gap=10):
    f, lines, line_h = fit_text(draw, text, font_path, max_width, size, 20)
    x, y = xy
    for line in lines:
        draw.text((x, y), line, font=f, fill=fill)
        y += line_h + line_gap
    return y


def letterspace(draw, xy, text, f, fill, spacing=4):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=f, fill=fill)
        x += draw.textbbox((0, 0), ch, font=f)[2] + spacing


def paper_base() -> Image.Image:
    img = Image.new("RGB", (W, H), CREAM)
    d = ImageDraw.Draw(img)
    for i in range(0, H, 9):
        shade = 248 + (i % 27)
        d.line((0, i, W, i), fill=(shade, max(238, shade - 8), max(226, shade - 18)), width=1)
    return img


def add_marks(draw, idx, total=8, dark=False):
    small = font(KULIM_SEMIBOLD, 22)
    fill = PRIMARY_PINK if not dark else (255, 246, 232)
    accent = GOLD if not dark else (255, 231, 188)
    letterspace(draw, (72, 64), "ESTRANOVA YAYINI · BEDEN & YAKINLIK", small, fill, 3)
    draw.text((910, 62), f"{idx:02d}/{total:02d}", font=small, fill=accent)
    draw.line((72, 116, 1008, 116), fill=accent, width=2)


def slide_01_cover() -> Image.Image:
    img = Image.new("RGB", (W, H), PASTEL_ROSE)
    d = ImageDraw.Draw(img)
    add_marks(d, 1)

    letterspace(d, (72, 220), "CİNSEL SAĞLIK · MENOPOZ REHBERİ", font(KULIM_SEMIBOLD, 24), PRIMARY_PINK, 4)
    y = draw_wrapped(d, (72, 280), "Menopozda Libido Değişimi", MANROPE_BOLD, 92, PRIMARY_PINK, 920, 12)
    d.line((72, y + 20, 480, y + 20), fill=GOLD, width=5)

    y = draw_wrapped(d, (72, y + 54), "Sessiz Bir Konunun Açık Sözlü Rehberi", KULIM_SEMIBOLD, 48, INK, 900, 10)

    d.rounded_rectangle((72, y + 60, 1008, y + 260), radius=18, fill=CREAM, outline=GOLD, width=2)
    draw_wrapped(
        d,
        (104, y + 90),
        '"Yalnız değilsiniz, bu bir musluk değil; birden fazla katmanı olan ortak bir geçiş."',
        KULIM_ITALIC,
        38,
        INK,
        840,
        8,
    )

    d.line((72, 1180, 1008, 1180), fill=GOLD, width=2)
    d.text((72, 1210), "Doç. Dr. Senai Aksoy Tıbbi İncelemesiyle", font=font(KULIM_SEMIBOLD, 26), fill=PRIMARY_PINK)
    d.text((72, 1250), "estranova.com", font=font(KULIM, 24), fill=INK)

    return img


def photo_slide(idx: int, img_path: Path, title: str, subtitle: str, bullets: list[str], level_tag=""):
    img = paper_base().convert("RGBA")
    if img_path.exists():
        photo = cover_crop(img_path, size=(W, 580), focus=(0.5, 0.45))
        photo = overlay(photo, BLACK, 30)
        img.alpha_composite(photo.convert("RGBA"), (0, 0))
    d = ImageDraw.Draw(img)
    d.rectangle((0, 520, W, 580), fill=(255, 253, 249, 230))
    add_marks(d, idx, dark=True)

    d.text((72, 620), f"0{idx}", font=font(MANROPE_BOLD, 76), fill=GOLD)
    y = draw_wrapped(d, (72, 710), title, MANROPE_BOLD, 54, BLACK, 900, 6)
    if level_tag:
        d.text((72, y + 10), level_tag, font=font(KULIM_ITALIC, 28), fill=PRIMARY_PINK)
        y += 44

    d.line((72, y + 15, 420, y + 15), fill=PRIMARY_PINK, width=4)
    y += 40

    for bullet in bullets:
        f, lines, line_h = fit_text(d, f"• {bullet}", KULIM, 860, 32, 22)
        for line in lines:
            d.text((72, y), line, font=f, fill=INK)
            y += line_h + 4
        y += 8

    return img


def text_slide(idx: int, title: str, subtitle: str, content_items: list[tuple[str, str]], note: str = ""):
    img = paper_base().convert("RGBA")
    d = ImageDraw.Draw(img)
    add_marks(d, idx)

    d.text((72, 160), f"0{idx}", font=font(MANROPE_BOLD, 80), fill=GOLD)
    y = draw_wrapped(d, (72, 250), title, MANROPE_BOLD, 58, PRIMARY_PINK, 900, 8)
    if subtitle:
        y = draw_wrapped(d, (72, y + 10), subtitle, KULIM_ITALIC, 36, INK, 900, 6)

    d.line((72, y + 18, 480, y + 18), fill=GOLD, width=4)
    y += 45

    for label, detail in content_items:
        if label:
            d.text((72, y), f"• {label}:", font=font(KULIM_SEMIBOLD, 32), fill=BLACK)
            y += 40
            f, lines, line_h = fit_text(d, detail, KULIM, 860, 30, 22)
            for line in lines:
                d.text((104, y), line, font=f, fill=INK)
                y += line_h + 4
            y += 12
        else:
            f, lines, line_h = fit_text(d, f"• {detail}", KULIM, 880, 32, 22)
            for line in lines:
                d.text((72, y), line, font=f, fill=INK)
                y += line_h + 4
            y += 12

    if note:
        d.rounded_rectangle((72, y + 20, 1008, y + 140), radius=16, fill=WARM, outline=GOLD, width=2)
        draw_wrapped(d, (100, y + 45), note, KULIM_SEMIBOLD, 30, PRIMARY_PINK, 840, 6)

    return img


def slide_closing() -> Image.Image:
    img = paper_base().convert("RGBA")
    d = ImageDraw.Draw(img)
    add_marks(d, 8)

    d.text((72, 180), "08", font=font(MANROPE_BOLD, 92), fill=GOLD)
    y = draw_wrapped(d, (72, 280), "Kendinizi Yargılamadan Dinleyin", MANROPE_BOLD, 64, PRIMARY_PINK, 900, 8)
    d.line((72, y + 20, 540, y + 20), fill=GOLD, width=5)

    y = draw_wrapped(
        d,
        (72, y + 54),
        "Libido değişimi bir son değil; bedenin yeni dengesini ararken yazdığı sade bir cümledir.",
        KULIM_ITALIC,
        40,
        INK,
        900,
        8,
    )

    y += 40
    d.text((72, y), "✓ Doğru bilgiyle buluşun.", font=font(KULIM_SEMIBOLD, 34), fill=BLACK)
    d.text((72, y + 50), "✓ Seçeneklerinizi hekiminizle güvenle değerlendirin.", font=font(KULIM_SEMIBOLD, 34), fill=BLACK)

    d.rounded_rectangle((72, 880, 1008, 1140), radius=20, fill=PASTEL_ROSE, outline=PRIMARY_PINK, width=2)
    d.text((110, 920), "REHBERİN TAMAMINI İNCELEYİN", font=font(MANROPE_BOLD, 30), fill=PRIMARY_PINK)
    draw_wrapped(
        d,
        (110, 970),
        "estranova.com/beden-yakinlik/cinsel-saglik/libido-degisimi-menopoz/",
        KULIM_SEMIBOLD,
        28,
        INK,
        800,
        6,
    )
    d.text((110, 1060), "— Doç. Dr. Senai Aksoy Tıbbi İncelemesiyle", font=font(KULIM_ITALIC, 26), fill=PRIMARY_PINK)

    return img


def main():
    OUT.mkdir(parents=True, exist_ok=True)

    img_portrait = BRAIN / "vogue_woman_portrait_1785252837056.jpg"
    img_terrace = BRAIN / "vogue_women_terrace_1785252850744.jpg"

    slides = [
        ("slide-01-kapak.png", slide_01_cover()),
        (
            "slide-02-yalniz-degilsiniz.png",
            photo_slide(
                2,
                img_portrait,
                "Yaşadığınız Bir Yalnızlık Değil",
                "",
                [
                    "Postmenopoz dönemindeki kadınların yaklaşık 1/3'ünde belirgin libido değişimi bildirilmektedir.",
                    "Çoğu kadın bunu 'yalnızca bende var' sanarak sessizce taşır.",
                    "İlk adım: Bedeninizdeki değişimi bir kusur değil, biyolojik bir ritim değişimi olarak okumaktır.",
                ],
                level_tag="(güçlü kanıt — Level 5)",
            ),
        ),
        (
            "slide-03-tek-neden-yok.png",
            text_slide(
                3,
                '"Libido Bir Musluk Değildir"',
                "Cinsel istek tek bir tuşla açılıp kapanmaz; 4 ayrı katmandan beslenen bir akıştır:",
                [
                    ("Hormonal", "Östrojen ve testosteron seviyelerindeki dalgalanma."),
                    ("Fiziksel", "Vajinal kuruluk, mukozal hassasiyet, yorgunluk, uyku bölünmesi."),
                    ("Psikolojik", "Beden imajı değişimi, stres yükü, ilişki dinamikleri."),
                    ("İlaçlar", "Antidepresanlar ve bazı tansiyon ilaçlarının etkisi."),
                ],
                'Kısa Not: "Hormon mu, yaşam mı, ilişki mi?" yanıtı genelde "üçü birden".',
            ),
        ),
        (
            "slide-04-fiziksel-engeller.png",
            text_slide(
                4,
                "Bedenin Önceliği Konfordur",
                "Bazen libido azlığı sandığımız şey, bedenin konfor önceliğidir.",
                [
                    (
                        "GSM Etkisi",
                        "Genitoüriner menopoz sendromu (vajinal kuruluk, doku incelmesi) ağrı ve rahatsızlığa yol açabilir.",
                    ),
                    (
                        "Bilinçaltı Döngü",
                        'Bir kez ağrı yaşandığında beden "yine ağrı olur mu?" beklentisi kurar ve isteği bastırır.',
                    ),
                    (
                        "Çözülebilir Durum",
                        "Kuruluk ve ağrı büyük ölçüde tedavi edilebilir; konfor sağlandığında libido sıklıkla yumuşar.",
                    ),
                ],
            ),
        ),
        (
            "slide-05-ilaclar.png",
            text_slide(
                5,
                "Arada Bir Molekül Konuşuyor Olabilir",
                "Sessiz Suçlu: Kullandığınız İlaçlar",
                [
                    ("SSRI Antidepresanlar", "Cinsel isteği ve uyarılmayı belirgin biçimde azaltabilir."),
                    ("Diğer İlaçlar", "Tansiyon, alerji ve bazı hormonal ilaçlar benzer etki yapabilir."),
                    (
                        "HAYATİ UYARI",
                        "Antidepresan veya kronik ilacınızı asla tek başınıza KESMEYİN. Hekiminizle alternatif molekül veya doz ayarı konuşulmalıdır.",
                    ),
                ],
            ),
        ),
        (
            "slide-06-cozumler.png",
            text_slide(
                6,
                "Reçete Değil, Seçenekler Yelpazesi",
                "Tek doğru çözüm yok; size uygun kombinasyonu seçebilirsiniz:",
                [
                    ("Lokal Seçenekler", "Vajinal nemlendiriciler, kayganlaştırıcılar, düşük doz lokal vajinal östrojen."),
                    ("Sistemik Seçenekler", "Hekim kontrolünde HRT veya uygun durumlarda off-label testosteron."),
                    ("Davranışsal & Beden", "Cinsel terapi, çift diyaloğu, pelvik taban farkındalığı."),
                    ("Yaşam Tarzı", "Serin uyku ortamı, stres yönetimi, sigaradan uzak durmak."),
                ],
            ),
        ),
        (
            "slide-07-diyalog.png",
            photo_slide(
                7,
                img_terrace,
                "Yanlış Anlamayı Kıracak Küçük Bir Cesaret",
                "",
                [
                    "Sessizlik mesafeyi büyütür. Çoğu erkek 'artık beni istemiyor' diye düşünürken, kadın yorgunluk veya kuruluk çekmektedir.",
                    'Küçük Cesaret Cümlesi: "Sana karşı hissim değişmedi, bedenim bu dönemde farklı çalışıyor; birlikte düşünelim mi?"',
                    "Tek başına yaşayan kadınlar için: Cinsel sağlık bedeninizle kurduğunuz nitelikli ve yargısız ilişkidir.",
                ],
            ),
        ),
        ("slide-08-kapanis.png", slide_closing()),
    ]

    for filename, img in slides:
        out_file = OUT / filename
        img.convert("RGB").save(out_file, quality=96)
        print(f"Generated: {out_file}")


if __name__ == "__main__":
    main()
