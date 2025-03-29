const fs = require("fs");

const baseUrl = "https://rensa.vercel.app";

const pages = [
  "", // Homepage
  "docs",
  ];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);
console.log("Sitemap generated!");

