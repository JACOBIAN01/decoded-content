// Generates the 1200x630 LinkedIn/link-preview card for every blog post, in the same style
// as the portfolio's case-study cards. Run from decoded-content with the portfolio clone:
//   node tools/blog/og.mjs <portfolio>/client
// Reads <client>/src/content/blog/*.json, writes <client>/public/og/blog-<slug>.png.
// Needs playwright (pre-installed in the agent sandbox; NODE_PATH=$(npm root -g) if ESM can't find it).
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { mkdirSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Use the Inter already installed for the site, so cards render identically offline.
const CLIENT = process.argv[2];
if (!CLIENT) {
  console.error("usage: node tools/blog/og.mjs <portfolio>/client");
  process.exit(2);
}
const POSTS_DIR = join(CLIENT, "src/content/blog");
const POSTS = readdirSync(POSTS_DIR)
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(readFileSync(join(POSTS_DIR, f), "utf8")));
// The portfolio's own Inter, so cards render identically offline.
const INTER = pathToFileURL(
  join(CLIENT, "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2")
).href;

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Trim to a whole word, so the card never cuts mid-word. */
const clamp = (s, n) =>
  s.length <= n ? s : `${s.slice(0, s.lastIndexOf(" ", n)).replace(/[,;:.]$/, "")}…`;

const card = (p) => `<!doctype html><meta charset="utf-8">
<style>
  @font-face {
    font-family: "Inter Variable";
    src: url("${INTER}") format("woff2-variations");
    font-weight: 100 900;
  }
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; background: #000; color: #fff;
    font-family: "Inter Variable", -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
    padding: 80px; display: flex; flex-direction: column; justify-content: center;
  }
  .kicker { color: #0a84ff; font-size: 30px; font-weight: 600; letter-spacing: -0.01em; }
  h1 {
    font-size: 68px; line-height: 1.06; font-weight: 700; letter-spacing: -0.03em;
    margin-top: 26px; max-width: 1000px;
  }
  p { color: #a1a1a6; font-size: 29px; line-height: 1.35; margin-top: 26px; max-width: 940px; }
  footer {
    position: absolute; left: 80px; bottom: 72px;
    color: #86868b; font-size: 26px;
  }
</style>
<div class="kicker">${esc(p.series || "Writing")}${p.seriesNo ? ` #${esc(p.seriesNo)}` : ""}</div>
<h1>${esc(p.title)}</h1>
<p>${esc(clamp(p.dek, 120))}</p>
<footer>Subhadeep Ghorai · subhadeepghorai.in</footer>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
mkdirSync(join(CLIENT, "public/og"), { recursive: true });

for (const p of POSTS) {
  await page.setContent(card(p), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(CLIENT, `public/og/blog-${p.slug}.png`) });
  console.log(`og: blog-${p.slug}.png`);
}

await browser.close();
