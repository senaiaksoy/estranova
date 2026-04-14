export const bannedPhraseRules = [
  { label: "randevu al", re: /\brandevu\s+al\b/u },
  { label: "tedaviye basla", re: /\btedaviye\s+basla\b/u },
  { label: "hemen basla", re: /\bhemen\s+basla\b/u },
  { label: "simdi basla", re: /\bsimdi\s+basla\b/u },
  { label: "hemen basvur", re: /\bhemen\s+basvur\b/u },
  { label: "ucretsiz muayene", re: /\bucretsiz\s+muayene\b/u },
  { label: "ucretsiz konsultasyon", re: /\bucretsiz\s+konsultasyon\b/u },
  { label: "en iyi", re: /\ben\s+iyi\b/u },
  { label: "en basarili", re: /\ben\s+basarili\b/u },
  { label: "garantili", re: /\bgarantili\b/u },
  { label: "garanti", re: /\bgaranti\b/u },
  { label: "kesin cozum", re: /\bkesin\s+cozum\b/u },
  { label: "mucize", re: /\bmucize\b/u },
  { label: "basari orani", re: /\bbasari\s+orani\b/u },
  { label: "fiyat al", re: /\bfiyat\s+al\b/u },
  { label: "kampanya", re: /\bkampanya\b/u },
  { label: "indirim", re: /\bindirim\b/u },
  { label: "paket", re: /\bpaket(lerimiz)?\b/u },
];

export const bannedLinkRules = [
  { label: "/assessment path", re: /\/assessment\b/u },
  { label: "/appointment path", re: /\/appointment\b/u },
  { label: "/book path", re: /\/book\b/u },
  { label: "/booking path", re: /\/booking\b/u },
  { label: "/consult path", re: /\/consult\b/u },
];

export const riskyCtaRules = [
  { label: "basvur", re: /\bbasvur\b/u },
  { label: "kayit ol", re: /\bkayit\s+ol\b/u },
  { label: "teklif al", re: /\bteklif\s+al\b/u },
  { label: "hemen", re: /\bhemen\b/u },
  { label: "ucretsiz degerlendirme", re: /\bucretsiz\s+degerlendirme\b/u },
];
