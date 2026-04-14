const forbidden = [
  "randevu al",
  "tedaviye başla",
  "hemen başvur",
  "en iyi",
  "en başarılı",
  "garantili",
  "başarı oranı",
  "paket",
  "kampanya",
  "indirim"
];

const fs = require("fs");
const path = require("path");

let hasError = false;

function scanDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (file.endsWith(".md") || file.endsWith(".astro")) {
      const content = fs.readFileSync(fullPath, "utf-8").toLowerCase();

      forbidden.forEach((word) => {
        if (content.includes(word)) {
          console.log(`⚠️ Forbidden word "${word}" in ${fullPath}`);
          hasError = true;
        }
      });
    }
  });
}

scanDir("./src");

if (hasError) {
  console.log("❌ Compliance check failed.");
  process.exit(1);
} else {
  console.log("✅ Compliance check passed.");
}
