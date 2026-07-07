"""
Inline all local assets (CSS, JS, images, favicons) into a standalone HTML file.
Usage: python inline_assets.py <package_dir>
Reads <package_dir>/makale-tam.html, discovers ./_astro/* and ./images/* refs,
inlines CSS/JS as <style>/<script> blocks and images as data URIs.
"""
import re, base64, sys, os, mimetypes

PKG = sys.argv[1]
html_path = os.path.join(PKG, 'makale-tam.html')
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

def read_bytes(p):
    with open(p, 'rb') as f: return f.read()

def b64data(p, mime):
    return f'data:{mime};base64,' + base64.b64encode(read_bytes(p)).decode('ascii')

def resolve(rel):
    return os.path.join(PKG, rel.replace('./', '').replace('/', os.sep))

# Inline CSS link tags
def replace_css_link(m):
    href = m.group(1)
    p = resolve(href)
    if os.path.exists(p):
        return '<style>' + read_bytes(p).decode('utf-8') + '</style>'
    return m.group(0)
html = re.sub(r'<link\s+rel="stylesheet"\s+href="(\./[^"]+\.css)"\s*/?>', replace_css_link, html)

# Inline JS script tags
def replace_js(m):
    src = m.group(1)
    p = resolve(src)
    if os.path.exists(p):
        return '<script type="module">' + read_bytes(p).decode('utf-8') + '</script>'
    return m.group(0)
html = re.sub(r'<script[^>]*src="(\./[^"]+\.js)"[^>]*></script>', replace_js, html)

# Inline images / icons by replacing attribute values
mime_map = {
    '.webp': 'image/webp',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.webmanifest': 'application/manifest+json',
}
refs = sorted(set(re.findall(r'"(\./[^"]+\.(?:webp|png|jpe?g|svg|gif|ico|webmanifest))"', html, re.IGNORECASE)))
for rel in refs:
    ext = os.path.splitext(rel)[1].lower()
    mime = mime_map.get(ext, 'application/octet-stream')
    p = resolve(rel)
    if os.path.exists(p):
        data = b64data(p, mime)
        html = html.replace(f'"{rel}"', f'"{data}"')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
print(f'inlined OK; new size: {os.path.getsize(html_path):,} bytes; assets discovered: {len(refs)}')
