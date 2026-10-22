// Records a hand-authored animated HTML explainer (motion graphic) to MP4.
// Usage: node motion.js <page.html> <outDir> <name.mp4>
// The page must set window.done = true when its animation ends. Viewport 1080x1350.
const { chromium } = require("playwright");
const { execFileSync } = require("child_process");
const fs = require("fs"), path = require("path");
const [page_, out, name] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1080, height: 1350 }, recordVideo: { dir: out, size: { width: 1080, height: 1350 } } });
  const page = await ctx.newPage();
  await page.goto("file://" + path.resolve(page_));
  await page.waitForFunction(() => window.done === true, null, { timeout: 300000 });
  const v = await page.video().path();
  await ctx.close(); await browser.close();
  const raw = path.join(out, "raw.webm");
  fs.renameSync(v, raw);
  execFileSync("ffmpeg", ["-y", "-i", raw, "-ss", "0.4", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20", "-r", "30", "-movflags", "+faststart", path.join(out, name)], { stdio: "ignore" });
  console.log("wrote", path.join(out, name));
})();
