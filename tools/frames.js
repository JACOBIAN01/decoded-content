// Deterministic frame-by-frame renderer for timeline-driven motion graphics.
// The page must define window.DURATION (seconds) and window.render(t), which draws the exact frame at time t.
// Usage: node frames.js <page.html> <out.mp4> [fps=30] [--stills t1,t2,...]   (--stills writes PNGs next to out.mp4 instead of a video)
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const path = require("path");
const args = process.argv.slice(2);
const [pagePath, out] = args;
const fps = Number(args[2] && !args[2].startsWith("--") ? args[2] : 30);
const si = args.indexOf("--stills");
const stills = si >= 0 ? args[si + 1].split(",").map(Number) : null;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  await page.goto("file://" + path.resolve(pagePath));
  await page.evaluate(() => document.fonts.ready);
  const D = await page.evaluate(() => window.DURATION);
  if (stills) {
    for (const t of stills) {
      await page.evaluate((t) => window.render(t), t);
      await page.screenshot({ path: path.join(path.dirname(out), `still-${t}.png`) });
    }
    await browser.close();
    return console.log("stills", stills.length);
  }
  const ff = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(fps), "-c:v", "mjpeg", "-i", "-",
    "-c:v", "libx264", "-preset", "slow", "-tune", "animation", "-crf", "16", "-pix_fmt", "yuv420p",
    "-movflags", "+faststart", out], { stdio: ["pipe", "ignore", "inherit"] });
  const n = Math.round(D * fps);
  for (let f = 0; f <= n; f++) {
    await page.evaluate((t) => window.render(t), f / fps);
    const buf = await page.screenshot({ type: "jpeg", quality: 95 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
  }
  ff.stdin.end();
  await new Promise((r) => ff.on("close", r));
  await browser.close();
  console.log(`wrote ${out}: ${n + 1} frames @ ${fps}fps`);
})();
