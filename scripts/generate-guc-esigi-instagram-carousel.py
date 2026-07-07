from __future__ import annotations

from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "icerik" / "sosyal" / "2026-06-guc-esigi-instagram-carousel"
EDITORIAL = ROOT / "public" / "images" / "library" / "editorial"
GEN = Path.home() / ".codex" / "generated_images" / "019e848d-a1d4-7d71-9d74-f84d00221879"

W, H = 1080, 1350
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


def gradient(img: Image.Image, side="left", max_alpha=190, color=BLACK) -> Image.Image:
    grad = Image.new("RGBA", img.size, (0, 0, 0, 0))
    px = grad.load()
    for x in range(W):
        for y in range(H):
            if side == "left":
                a = int(max_alpha * max(0, 1 - x / (W * 0.78)))
            elif side == "bottom":
                a = int(max_alpha * max(0, (y - H * 0.3) / (H * 0.7)))
            else:
                a = int(max_alpha * max(0, x / W))
            px[x, y] = (*color, a)
    return Image.alpha_composite(img.convert("RGBA"), grad)


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
    f, lines, line_h = fit_text(draw, text, font_path, max_width, size, 24)
    x, y = xy
    for line in lines:
        draw.text((x, y), line, font=f, fill=fill)
        y += line_h + line_gap
    return y


def multiline_bbox(draw, xy, text, f, spacing=4):
    return draw.multiline_textbbox(xy, text, font=f, spacing=spacing)


def letterspace(draw, xy, text, f, fill, spacing=5):
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


def add_issue_marks(draw, idx, dark=False):
    small = font(KULIM_SEMIBOLD, 22)
    fill = (255, 246, 232) if dark else PRIMARY_PINK
    accent = (255, 231, 188) if dark else GOLD
    letterspace(draw, (72, 64), "ESTRANOVA YAYINI", small, fill, 4)
    draw.text((900, 62), f"{idx:02d}/09", font=small, fill=accent)
    draw.line((72, 116, 1008, 116), fill=accent, width=2)


def slide_cover(bg_path: Path):
    img = cover_crop(bg_path, focus=(0.43, 0.5))
    img = gradient(img, "left", 220)
    img = gradient(img, "bottom", 115)
    d = ImageDraw.Draw(img)
    add_issue_marks(d, 1, dark=True)
    d.text((72, 206), "Eşik", font=font(MANROPE_BOLD, 142), fill=WHITE)
    d.text((78, 360), "SAYI 02 · HAZİRAN 2026", font=font(MANROPE_BOLD, 28), fill=(255, 231, 188))
    title_font = font(MANROPE_BOLD, 134)
    title_xy = (72, 770)
    title_text = "Güç\nEşiği"
    d.multiline_text(title_xy, title_text, font=title_font, fill=WHITE, spacing=6)
    title_bbox = multiline_bbox(d, title_xy, title_text, title_font, spacing=6)
    rule_y = title_bbox[3] + 36
    d.line((72, rule_y, 540, rule_y), fill=(255, 231, 188), width=6)
    draw_wrapped(
        d,
        (72, rule_y + 34),
        "40'tan sonra bedeni zorlamadan yeniden kurmak.",
        KULIM_ITALIC,
        42,
        (255, 247, 232),
        720,
        8,
    )
    return img


def slide_theme(bg_path: Path):
    img = cover_crop(bg_path, focus=(0.3, 0.54))
    img = overlay(img, CREAM, 150)
    d = ImageDraw.Draw(img)
    add_issue_marks(d, 2)
    d.text((72, 190), "Bu ay güç,", font=font(MANROPE_BOLD, 92), fill=PRIMARY_PINK)
    d.text((72, 296), "hızlanmak değil.", font=font(MANROPE_BOLD, 88), fill=BLACK)
    d.line((72, 428, 720, 428), fill=GOLD, width=5)
    draw_wrapped(
        d,
        (72, 486),
        "Kası, kemiği, dengeyi, uykuyu ve enerjiyi aynı hayatın içinde yeniden duymak.",
        KULIM_ITALIC,
        46,
        INK,
        780,
        8,
    )
    d.rounded_rectangle((72, 1110, 870, 1212), radius=0, outline=PRIMARY_PINK, width=2, fill=(255, 253, 249, 220))
    d.text((104, 1140), "GÜÇ EŞİĞİ · HAZİRAN DOSYASI", font=font(MANROPE_BOLD, 24), fill=PRIMARY_PINK)
    return img


def article_slide(idx: int, image: Path, author: str, title: str, note: str, focus=(0.5, 0.5)):
    img = paper_base().convert("RGBA")
    photo = cover_crop(image, size=(W, 690), focus=focus)
    photo = ImageEnhance.Color(photo).enhance(0.88)
    photo = ImageEnhance.Contrast(photo).enhance(0.96)
    photo = overlay(photo, BLACK, 42)
    img.alpha_composite(photo.convert("RGBA"), (0, 0))
    d = ImageDraw.Draw(img)
    d.rectangle((0, 610, W, 690), fill=(255, 253, 249, 232))
    add_issue_marks(d, idx, dark=True)
    d.text((72, 740), f"0{idx-2}", font=font(MANROPE_BOLD, 92), fill=GOLD)
    letterspace(d, (72, 858), author.upper(), font(KULIM_SEMIBOLD, 24), PRIMARY_PINK, 3)
    y = draw_wrapped(d, (72, 910), title, MANROPE_BOLD, 64, BLACK, 900, 4)
    d.line((72, y + 32, 540, y + 32), fill=SECONDARY_PINK, width=4)
    draw_wrapped(d, (72, y + 74), note, KULIM_ITALIC, 39, INK, 820, 6)
    return img


def slide_closing(bg_path: Path):
    img = cover_crop(bg_path, focus=(0.24, 0.5))
    img = overlay(img, BLACK, 126)
    d = ImageDraw.Draw(img)
    add_issue_marks(d, 9, dark=True)
    d.text((72, 226), "Yeni sayı\nyayında.", font=font(MANROPE_BOLD, 112), fill=WHITE, spacing=6)
    d.line((72, 530, 620, 530), fill=(255, 231, 188), width=6)
    draw_wrapped(
        d,
        (72, 590),
        "Eşik · Sayı 02 · Güç Eşiği",
        MANROPE_BOLD,
        54,
        (255, 247, 232),
        760,
        8,
    )
    draw_wrapped(
        d,
        (72, 742),
        "Haziran dosyasını Estranova’da okuyabilirsiniz.",
        KULIM_ITALIC,
        44,
        WHITE,
        760,
        8,
    )
    d.rounded_rectangle((72, 1090, 760, 1196), radius=0, fill=(255, 253, 249, 235))
    d.text((108, 1122), "İÇERİKLERİ İNCELE", font=font(MANROPE_BOLD, 28), fill=PRIMARY_PINK)
    d.text((108, 1160), "estranova.com", font=font(KULIM, 26), fill=INK)
    return img


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    cover_bg = GEN / "ig_0578498265e14b50016a1ea1f0ba0881968eacc4ec79d1d62f.png"
    still_bg = GEN / "ig_0578498265e14b50016a1ea2ce6cb8819692f7e51415417bb2.png"

    slides = [
        ("slide-01-kapak.png", slide_cover(cover_bg)),
        ("slide-02-tema.png", slide_theme(still_bg)),
        (
            "slide-03-anil-yalmaz.png",
            article_slide(
                3,
                EDITORIAL / "anil-yalmaz-harekete-yeniden-baslamak-byline.webp",
                "Anıl Yalmaz",
                "Harekete Yeniden Başlamak",
                "Daha sert değil; bugünkü kapasiteyi okuyarak daha akıllı başlamak.",
                (0.48, 0.45),
            ),
        ),
        (
            "slide-04-bulent-aksoy.png",
            article_slide(
                4,
                EDITORIAL / "bulent-kemik-gucu-kirik-beklemeden.webp",
                "Prof. Dr. Bülent Aksoy",
                "Kemik Gücü",
                "Kırığı beklemeden; ölçüm, düşme riski ve kas gücünü birlikte düşünmek.",
                (0.52, 0.42),
            ),
        ),
        (
            "slide-05-ersin-sarac.png",
            article_slide(
                5,
                EDITORIAL / "ersin-denge-ayak-kalca-govde.webp",
                "Fzt. Ersin Saraç",
                "Denge Kaybolmadan",
                "Ayak, kalça ve gövde hattında küçük sinyalleri güvenle duymak.",
                (0.50, 0.45),
            ),
        ),
        (
            "slide-06-metin-alis.png",
            article_slide(
                6,
                EDITORIAL / "metin-yorgunluk-kas-tiroid-metabolizma.webp",
                "Dr. Metin Alış",
                "Yorgunluk: Kas mı, Tiroid mi?",
                "Tek etikete sıkıştırmadan; laboratuvarı, bedeni ve hikayeyi yan yana okumak.",
                (0.48, 0.46),
            ),
        ),
        (
            "slide-07-alara-baykent.png",
            article_slide(
                7,
                EDITORIAL / "alara-yaz-baslamadan-bedeni-uyandirmak.webp",
                "Alara Baykent",
                "Yaz Başlamadan Bedeni Uyandırmak",
                "Performans baskısı değil; mevsime daha sürdürülebilir bir ritimle girmek.",
                (0.50, 0.46),
            ),
        ),
        (
            "slide-08-basak-pelister.png",
            article_slide(
                8,
                EDITORIAL / "basak-guc-canta-hafifletmek.webp",
                "Başak Pelister",
                "Çantayı Daha Hafif Hazırlamak",
                "Gücü bazen omuzdan, takvimden ve içimizdeki fazla yükten okumak.",
                (0.48, 0.45),
            ),
        ),
        ("slide-09-kapanis.png", slide_closing(cover_bg)),
    ]

    for filename, img in slides:
        img.convert("RGB").save(OUT / filename, quality=96)


if __name__ == "__main__":
    main()
