from pathlib import Path
import textwrap

from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "instagram" / "2026-06-30-menopoz-hrt-avantajlari"
PHOTO = Path(r"C:\Users\KC3\Downloads\fotograf_4x5_1080x1350.jpg")
STILL_LIFE = ROOT / "public" / "images" / "library" / "editorial" / "by-vajinal-saglik.webp"
FONT_DIR = ROOT / "scripts" / "fonts"

W, H = 1080, 1350

COLORS = {
    "cream": "#fffdf9",
    "cream_warm": "#f7f1ea",
    "ink": "#2d2d2d",
    "muted": "#6f625f",
    "pink": "#D81B60",
    "black": "#000000",
    "white": "#ffffff",
    "gold": "#b59a6a",
}


def font(name, size):
    return ImageFont.truetype(str(FONT_DIR / name), size=size)


FONTS = {
    "brand": font("Manrope-ExtraBold.ttf", 34),
    "eyebrow": font("Manrope-Bold.ttf", 48),
    "eyebrow_small": font("Manrope-Bold.ttf", 23),
    "title_xl": font("Manrope-ExtraBold.ttf", 84),
    "title_l": font("Manrope-ExtraBold.ttf", 66),
    "title": font("Manrope-ExtraBold.ttf", 58),
    "title_poster": font("Manrope-ExtraBold.ttf", 72),
    "subtitle": font("KulimPark-SemiBold.ttf", 38),
    "pull": font("KulimPark-SemiBoldItalic.ttf", 43),
    "quote": font("KulimPark-Regular.ttf", 60),
    "quote_sm": font("KulimPark-Regular.ttf", 52),
    "quote_bold": font("KulimPark-SemiBold.ttf", 48),
    "body": font("KulimPark-Regular.ttf", 35),
    "body_sm": font("KulimPark-Regular.ttf", 31),
    "body_bold": font("KulimPark-SemiBold.ttf", 36),
    "caption": font("KulimPark-Regular.ttf", 25),
    "caption_bold": font("KulimPark-SemiBold.ttf", 25),
    "number": font("Manrope-Bold.ttf", 26),
}


def hex_to_rgb(value):
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def text_size(draw, text, fnt):
    box = draw.textbbox((0, 0), text, font=fnt)
    return box[2] - box[0], box[3] - box[1]


def wrap_text(draw, text, fnt, max_width):
    lines = []
    for paragraph in text.split("\n"):
        words = paragraph.split()
        line = ""
        for word in words:
            candidate = word if not line else f"{line} {word}"
            if text_size(draw, candidate, fnt)[0] <= max_width:
                line = candidate
            else:
                if line:
                    lines.append(line)
                if text_size(draw, word, fnt)[0] > max_width:
                    chunks = textwrap.wrap(word, width=18)
                    lines.extend(chunks[:-1])
                    line = chunks[-1]
                else:
                    line = word
        if line:
            lines.append(line)
        lines.append("")
    if lines and lines[-1] == "":
        lines.pop()
    return lines


def draw_wrapped(draw, xy, text, fnt, fill, max_width, line_gap=12, paragraph_gap=16):
    x, y = xy
    lines = wrap_text(draw, text, fnt, max_width)
    for line in lines:
        if not line:
            y += paragraph_gap
            continue
        draw.text((x, y), line, font=fnt, fill=fill)
        y += text_size(draw, line, fnt)[1] + line_gap
    return y


def draw_centered_wrapped(draw, center_y, text, fnt, fill, max_width, line_gap=16, paragraph_gap=24):
    lines = wrap_text(draw, text, fnt, max_width)
    heights = []
    total = 0
    for line in lines:
        if not line:
            heights.append(paragraph_gap)
            total += paragraph_gap
        else:
            h = text_size(draw, line, fnt)[1]
            heights.append(h)
            total += h + line_gap
    if lines:
        total -= line_gap
    y = center_y - total // 2
    for line, h in zip(lines, heights):
        if not line:
            y += h
            continue
        tw, _ = text_size(draw, line, fnt)
        draw.text(((W - tw) / 2, y), line, font=fnt, fill=fill)
        y += h + line_gap
    return y


def rounded(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def add_footer(draw, idx, total=8, dark=False):
    fill = COLORS["cream"] if dark else COLORS["ink"]
    muted = "#ffffffcc" if dark else "#2d2d2dcc"
    draw.text((70, H - 86), "estranovaofficial", font=FONTS["caption_bold"], fill=fill)
    draw.text((W - 145, H - 86), f"{idx:02d}/{total:02d}", font=FONTS["number"], fill=muted)
    draw.line((70, H - 116, W - 70, H - 116), fill=fill if dark else "#00000066", width=1)


def make_gradient_overlay():
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    px = overlay.load()
    for y in range(H):
        for x in range(W):
            bottom = max(0, (y - 420) / (H - 420))
            left = max(0, (650 - x) / 650)
            alpha = int(185 * bottom + 80 * left * bottom)
            px[x, y] = (0, 0, 0, min(alpha, 215))
    return overlay.filter(ImageFilter.GaussianBlur(8))


def slide_cover():
    img = Image.open(PHOTO).convert("RGB").resize((W, H), Image.Resampling.LANCZOS)
    img = img.convert("RGBA")
    img.alpha_composite(make_gradient_overlay())
    draw = ImageDraw.Draw(img)

    rounded(draw, (70, 83, 365, 132), 24, "#00000080", outline="#ffffff55")
    draw.text((94, 94), "Bilimsel Pencere", font=FONTS["eyebrow_small"], fill=COLORS["cream"])

    y = 785
    draw.text((70, y), "Menopozda", font=FONTS["title_l"], fill=COLORS["cream"])
    y += 72
    draw.text((70, y), "HRT:", font=FONTS["title_xl"], fill=COLORS["cream"])
    y += 93
    draw.text((70, y), "Hangi faydalar", font=FONTS["title_l"], fill=COLORS["cream"])
    y += 72
    draw.text((70, y), "daha net?", font=FONTS["title_l"], fill=COLORS["cream"])

    y += 95
    draw.text(
        (70, y),
        "Hangilerinde daha temkinli olmak gerekir?",
        font=FONTS["subtitle"],
        fill="#fffdf9e8",
    )
    y += 70
    rounded(draw, (70, y, 565, y + 58), 8, "#fffdf9e8")
    draw.text((92, y + 12), "Yazar: Doç. Dr. Senai Aksoy", font=FONTS["caption_bold"], fill=COLORS["ink"])

    add_footer(draw, 1, dark=True)
    return img.convert("RGB")


def base_slide(idx, eyebrow, title):
    img = Image.new("RGB", (W, H), COLORS["cream"])
    draw = ImageDraw.Draw(img)
    draw.text((70, 74), eyebrow.upper(), font=FONTS["eyebrow_small"], fill=COLORS["pink"])
    draw.text((70, 122), title, font=FONTS["title_poster"], fill=COLORS["ink"])
    draw.line((70, 218, 188, 218), fill=COLORS["black"], width=3)
    draw.text((W - 262, 74), "ESTRANOVA", font=FONTS["caption_bold"], fill="#2d2d2d99")
    add_footer(draw, idx)
    return img, draw


def draw_body_slide(idx, eyebrow, title, body, callout=None, bullets=None):
    img, draw = base_slide(idx, eyebrow, title)
    y = 286
    if body:
        y = draw_wrapped(draw, (86, y), body, FONTS["body"], COLORS["ink"], 900, line_gap=11, paragraph_gap=24)
    if bullets:
        y += 32
        for label, text in bullets:
            rounded(draw, (86, y, 994, y + 122), 8, COLORS["cream_warm"], outline="#00000022")
            draw.text((116, y + 25), label, font=FONTS["body_bold"], fill=COLORS["pink"])
            draw_wrapped(draw, (290, y + 23), text, FONTS["body_sm"], COLORS["ink"], 660, line_gap=8, paragraph_gap=8)
            y += 145
    if callout:
        y = max(y + 36, 934)
        rounded(draw, (70, y, 1010, y + 178), 8, COLORS["cream_warm"], outline="#00000022")
        draw.rectangle((70, y, 82, y + 178), fill=COLORS["pink"])
        draw_wrapped(draw, (112, y + 34), callout, FONTS["pull"], COLORS["ink"], 830, line_gap=9)
    return img


def cover_crop(image, focus_x=0.5, focus_y=0.5):
    src_w, src_h = image.size
    scale = max(W / src_w, H / src_h)
    new_w = int(src_w * scale)
    new_h = int(src_h * scale)
    resized = image.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = int((new_w - W) * focus_x)
    top = int((new_h - H) * focus_y)
    left = max(0, min(left, new_w - W))
    top = max(0, min(top, new_h - H))
    return resized.crop((left, top, left + W, top + H))


def slide_photo_five():
    bg = cover_crop(Image.open(STILL_LIFE).convert("RGB"), focus_x=0.36, focus_y=0.5).convert("RGBA")
    wash = Image.new("RGBA", (W, H), "#fffdf9b8")
    bg.alpha_composite(wash)
    grad = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    px = grad.load()
    for y in range(H):
        alpha = int(105 * max(0, (y - 570) / (H - 570)))
        for x in range(W):
            px[x, y] = (45, 45, 45, alpha)
    bg.alpha_composite(grad.filter(ImageFilter.GaussianBlur(4)))
    draw = ImageDraw.Draw(bg)

    draw.text((70, 74), "DOKU KONFORU", font=FONTS["eyebrow_small"], fill=COLORS["pink"])
    draw.text((W - 262, 74), "ESTRANOVA", font=FONTS["caption_bold"], fill="#2d2d2d99")
    draw.text((70, 122), "Sessiz alan", font=FONTS["title_poster"], fill=COLORS["ink"])
    draw.line((70, 218, 188, 218), fill=COLORS["black"], width=3)

    panel_y = 626
    rounded(draw, (58, panel_y, 1022, 1136), 8, "#fffdf9eb", outline="#ffffff")
    body = (
        "Vajinal kuruluk, hassasiyet, yanma ya da ilişki sırasında rahatsızlık çoğu zaman yüksek sesle "
        "konuşulmaz. Ama kadının günlük konforunu ve yakınlık hissini sessizce daraltabilir.\n\n"
        "Bu alanda lokal vajinal östrojen seçenekleri sistemik HRT’den ayrı düşünülür: daha hedefli, "
        "bölgesel ve farklı bir karar mantığıyla değerlendirilir."
    )
    draw_wrapped(draw, (92, panel_y + 46), body, FONTS["body"], COLORS["ink"], 860, line_gap=10, paragraph_gap=24)
    rounded(draw, (92, 1052, 972, 1112), 8, "#2d2d2df0")
    draw.text((122, 1065), "Bazen doğru soru: sistemik mi, lokal mi?", font=FONTS["body_bold"], fill=COLORS["cream"])
    add_footer(draw, 5)
    return bg.convert("RGB")


def add_noise(img, opacity=18):
    noise = Image.effect_noise((W, H), 18).convert("L")
    alpha = Image.new("L", (W, H), opacity)
    texture = Image.new("RGBA", (W, H), (255, 255, 255, 0))
    texture.putalpha(Image.composite(alpha, Image.new("L", (W, H), 0), noise.point(lambda p: 255 if p > 128 else 0)))
    base = img.convert("RGBA")
    base.alpha_composite(texture)
    return base.convert("RGB")


def quote_base(bg="#8a8580"):
    img = Image.new("RGB", (W, H), bg)
    return add_noise(img, opacity=10).convert("RGBA")


def add_quote_brand(draw, idx, total=8):
    brand = "E S T R A N O V A"
    bw, _ = text_size(draw, brand, FONTS["brand"])
    draw.text(((W - bw) / 2, H - 178), brand, font=FONTS["brand"], fill="#fffdf9f2")
    dot_y = H - 112
    spacing = 22
    start_x = W / 2 - ((total - 1) * spacing) / 2
    for i in range(total):
        fill = "#fffdf9" if i + 1 == idx else "#fffdf96a"
        r = 6 if i + 1 == idx else 5
        x = start_x + i * spacing
        draw.ellipse((x - r, dot_y - r, x + r, dot_y + r), fill=fill)


def quote_slide(idx, top, text, bg="#8a8580", small=False):
    img = quote_base(bg)
    draw = ImageDraw.Draw(img)
    tw, _ = text_size(draw, top.upper(), FONTS["eyebrow"])
    draw.text(((W - tw) / 2, 128), top.upper(), font=FONTS["eyebrow"], fill="#fffdf9e8")
    fnt = FONTS["quote_sm"] if small else FONTS["quote"]
    draw_centered_wrapped(draw, 638, f"“{text}”", fnt, "#fffdf9", 850, line_gap=20, paragraph_gap=32)
    add_quote_brand(draw, idx)
    return img.convert("RGB")


def quote_photo_slide_five():
    bg = cover_crop(Image.open(STILL_LIFE).convert("RGB"), focus_x=0.36, focus_y=0.5).convert("RGBA")
    overlay = Image.new("RGBA", (W, H), "#514b4698")
    bg.alpha_composite(overlay)
    bg = add_noise(bg.convert("RGB"), opacity=8).convert("RGBA")
    draw = ImageDraw.Draw(bg)
    top = "DOKU KONFORU"
    tw, _ = text_size(draw, top, FONTS["eyebrow"])
    draw.text(((W - tw) / 2, 128), top, font=FONTS["eyebrow"], fill="#fffdf9e8")
    text = (
        "Kuruluk, yanma ya da cinsel birliktelikte rahatsızlık kader değildir. "
        "Bazen küçük ve hedefli bir konuşma bile günlük konforu geri çağırabilir. Doğru soru daha sade: "
        "östrojen tüm vücuda etki eden bir HRT formuyla mı düşünülmeli, yoksa vajinal bölgeye uygulanan lokal östrojen yeterli olabilir mi?"
    )
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rounded_rectangle((74, 330, 1006, 970), radius=28, fill=(40, 36, 34, 58))
    bg.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(28)))
    draw = ImageDraw.Draw(bg)
    draw_centered_wrapped(draw, 638, f"“{text}”", FONTS["quote_sm"], "#ffffff", 850, line_gap=21, paragraph_gap=32)
    add_quote_brand(draw, 5)
    return bg.convert("RGB")


def quote_final():
    img = quote_base("#807b76")
    draw = ImageDraw.Draw(img)
    top = "YAZININ TAMAMI"
    tw, _ = text_size(draw, top, FONTS["eyebrow"])
    draw.text(((W - tw) / 2, 118), top, font=FONTS["eyebrow"], fill="#fffdf9e8")
    text = (
        "HRT herkes için aynı karar değildir. Faydalar gerçek olabilir; ama yaş, risk tablosu, hedeflenen yakınma "
        "ve izlem planı birlikte okununca anlam kazanır."
    )
    draw_centered_wrapped(draw, 430, f"“{text}”", FONTS["quote_sm"], "#fffdf9", 850, line_gap=20)

    url_lines = [
        "estranova.com/bilimsel-pencere/",
        "yeni-arastirmalar/",
        "menopozda-hrt-avantajlari/",
    ]
    url_font = font("Manrope-Bold.ttf", 40)
    y = 750
    for line in url_lines:
        tw, _ = text_size(draw, line, url_font)
        draw.text(((W - tw) / 2, y), line, font=url_font, fill="#fffdf9")
        y += 55
    link = "Bağlantı profilde"
    tw, _ = text_size(draw, link, FONTS["subtitle"])
    draw.text(((W - tw) / 2, y + 36), link, font=FONTS["subtitle"], fill="#fffdf9")

    note = "Genel bilgilendirme amaçlıdır; bireysel tıbbi değerlendirme yerine geçmez."
    tw, _ = text_size(draw, note, FONTS["caption"])
    draw.text(((W - tw) / 2, H - 250), note, font=FONTS["caption"], fill="#fffdf9b8")
    add_quote_brand(draw, 8)
    return img.convert("RGB")


def slide_final():
    img, draw = base_slide(8, "Kapanış", "Herkese aynı değil")
    body = (
        "Bir arkadaşınıza çok iyi gelen bir karar, sizin için aynı anlamı taşımayabilir. HRT’de en dürüst cümle "
        "tam da burada başlar: fayda gerçektir, ama kişisel risk tablosundan bağımsız değildir.\n\n"
        "Yaş, son adetten geçen süre, rahim durumu, meme kanseri veya pıhtı öyküsü, karaciğer hastalığı, "
        "migren tipi, tansiyon, sigara ve kalp-damar riskleri aynı masada değerlendirilir."
    )
    y = draw_wrapped(draw, (86, 284), body, FONTS["body"], COLORS["ink"], 910, line_gap=12, paragraph_gap=22)

    disclaimer = "Genel bilgilendirme amaçlıdır; bireysel tıbbi değerlendirme yerine geçmez."
    draw_wrapped(draw, (86, y + 28), disclaimer, FONTS["caption"], COLORS["muted"], 860, line_gap=8)

    box_y = 925
    rounded(draw, (70, box_y, 1010, box_y + 225), 8, "#2d2d2d")
    draw.text((105, box_y + 32), "Yazının tamamı:", font=FONTS["body_bold"], fill=COLORS["cream"])
    url_lines = [
        "estranova.com/bilimsel-pencere/",
        "yeni-arastirmalar/",
        "menopozda-hrt-avantajlari/",
    ]
    uy = box_y + 88
    url_font = font("Manrope-Bold.ttf", 30)
    for line in url_lines:
        draw.text((105, uy), line, font=url_font, fill=COLORS["cream"])
        uy += 39
    draw.text((710, box_y + 142), "Link bio'da", font=FONTS["subtitle"], fill=COLORS["cream"])
    return img


SLIDES = [
    slide_cover,
    lambda: quote_slide(
        2,
        "Ana çerçeve",
        "HRT konuşulurken mesele yalnızca başlayalım mı, başlamayalım mı değildir. Daha iyi soru şudur: Hangi yakınmayı azaltmak, hangi konfor alanını geri kazanmak, hangi riski izlemek istiyoruz?",
        bg="#8c8782",
        small=True,
    ),
    lambda: quote_slide(
        3,
        "Güçlü kanıt",
        "Toplantının ortasında yüzünüzün birden alev alması, gece ter içinde uyanıp sabah hiç uyumamış gibi hissetmek... HRT’nin en net fayda alanlarından biri bu sıcak basması ve gece terlemesi yükünü azaltmasıdır.",
        bg="#7f7974",
        small=True,
    ),
    lambda: quote_slide(
        4,
        "Uyku ve yaşam",
        "HRT bir uyku ilacı değildir. Ama gece terlemesi ve sıcak basması azaldığında uykuyu bölen ana tetikleyiciler geri çekilebilir. Daha toparlanmış sabah hissi çoğu zaman bu dolaylı zincirden gelir.",
        bg="#918b85",
        small=True,
    ),
    quote_photo_slide_five,
    lambda: quote_slide(
        6,
        "Kemik sağlığı",
        "Sıcak basmaları azaldığında rahatlama günlük hayatta hızla hissedilebilir. Kemik sağlığında ise etki daha uzun vadeye yayılır: amaç kemik kaybını yavaşlatmak ve ileride oluşabilecek kırık riskini azaltmaya yardımcı olmaktır.",
        bg="#837d78",
        small=True,
    ),
    lambda: quote_slide(
        7,
        "Temkinli alanlar",
        "HRT kilo verdiren ya da gençleştiren bir yöntem gibi anlatılmamalıdır. Daha doğru cümle şudur: doğru kişide sıcak basması, gece terlemesi ve vajinal kuruluk gibi şikayetleri azaltarak yaşam kalitesini destekleyebilen tıbbi bir seçenektir.",
        bg="#8b8580",
        small=True,
    ),
    quote_final,
]


def make_contact_sheet(paths):
    thumbs = []
    for path in paths:
        img = Image.open(path).convert("RGB")
        img.thumbnail((270, 338), Image.Resampling.LANCZOS)
        thumbs.append(img.copy())
    sheet = Image.new("RGB", (4 * 300 + 50, 2 * 380 + 60), COLORS["cream"])
    draw = ImageDraw.Draw(sheet)
    for i, thumb in enumerate(thumbs):
        x = 25 + (i % 4) * 300
        y = 25 + (i // 4) * 380
        sheet.paste(thumb, (x, y))
        draw.text((x, y + thumb.height + 8), f"Slayt {i + 1}", font=FONTS["caption"], fill=COLORS["ink"])
    return sheet


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    paths = []
    for i, factory in enumerate(SLIDES, start=1):
        img = factory()
        jpg_path = OUT / f"estranova-hrt-carousel-{i:02d}.jpg"
        png_path = OUT / f"estranova-hrt-carousel-{i:02d}.png"
        img.save(jpg_path, quality=95, optimize=True, progressive=True)
        img.save(png_path)
        paths.append(jpg_path)

    sheet = make_contact_sheet(paths)
    sheet_path = OUT / "contact-sheet.jpg"
    sheet.save(sheet_path, quality=94, optimize=True)
    print(sheet_path)


if __name__ == "__main__":
    main()
