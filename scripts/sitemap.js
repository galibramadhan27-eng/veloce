// Dijalankan otomatis setelah `npm run build`
import { writeFileSync, existsSync } from "node:fs";

const base = "https://veloce.example.com";
const pages = ["", "about", "services", "gallery", "articles", "contact"];
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages.map((p) => `  <url><loc>${base}/${p}</loc></url>`).join("\n") +
  `\n</urlset>\n`;

if (existsSync("dist")) {
  writeFileSync("dist/sitemap.xml", xml);
  console.log("sitemap.xml dibuat");
}
