// Records the Decoded #02 demo video from the REAL output of the demo script.
// Usage: node video.js <before.txt> <after.txt> <outDir> <video.json>
// video.json: {num, hook, sub, beforeLabel, afterLabel, beforeCmd, afterCmd, fixTitle, fixSub, repo}
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const [buggy, fixed, out, cfgPath] = process.argv.slice(2);
const V = JSON.parse(fs.readFileSync(cfgPath, "utf8"));
const e = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const lines = (f) => fs.readFileSync(f, "utf8").split("\n").filter((l) => l.trim());
const B = JSON.stringify(lines(buggy)), F = JSON.stringify(lines(fixed));

const html = `<!doctype html><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:1080px;height:1350px;background:#FBFBFD;font-family:Inter,sans-serif;color:#1D1D1F;overflow:hidden}
.scene{position:absolute;inset:0;padding:96px 80px;display:flex;flex-direction:column;justify-content:center;gap:40px;opacity:0;transition:opacity .5s}
.on{opacity:1}
.top{position:absolute;top:60px;left:80px;right:80px;display:flex;justify-content:space-between;font-size:26px;font-weight:600;letter-spacing:.08em;color:#86868B;text-transform:uppercase}
.top b{color:#1D1D1F}
.big{font-family:'Inter Display',Inter;font-size:86px;font-weight:700;line-height:1.05;letter-spacing:-.02em}
.sub{font-size:40px;color:#424245;line-height:1.35}
.pill{align-self:flex-start;font-weight:700;font-size:28px;letter-spacing:.06em;padding:12px 24px;border-radius:999px;text-transform:uppercase}
.term{background:#1D1D1F;border-radius:32px;padding:48px;font-family:'DejaVu Sans Mono',monospace;font-size:30px;line-height:1.6;color:#F5F5F7;min-height:640px;white-space:pre-wrap}
.cmd{color:#64D2FF}.bad{color:#FF6B5E;font-weight:700}.good{color:#5BE37D;font-weight:700}
.cap{font-size:40px;font-weight:700}
.note{font-size:26px;color:#86868B}
</style>
<div class="top"><span><b>Decoded</b> #${e(V.num)}</span><span>Live demo</span></div>
<section class="scene" id="s0"><div class="pill" style="background:#FDECEA;color:#C2331B">The leak</div>
 <div class="big">${e(V.hook)}</div>
 <div class="sub">${e(V.sub)}</div></section>
<section class="scene" id="s1"><div class="cap" style="color:#C2331B">${e(V.beforeLabel)}</div><div class="term" id="t1"></div>
 <div class="note">Real output of <code>${e(V.beforeCmd)}</code></div></section>
<section class="scene" id="s2"><div class="cap" style="color:#1F7A3A">${e(V.afterLabel)}</div><div class="term" id="t2"></div>
 <div class="note">Real output of <code>${e(V.afterCmd)}</code></div></section>
<section class="scene" id="s3"><div class="pill" style="background:#E7F6EC;color:#1F7A3A">The fix</div>
 <div class="big">${e(V.fixTitle)}</div>
 <div class="sub">${e(V.fixSub)}</div>
 <div class="sub" style="color:#0066CC;font-weight:600">Code: ${e(V.repo)}</div></section>
<script>
const B=${B},F=${F};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const show=id=>{document.querySelectorAll('.scene').forEach(s=>s.classList.remove('on'));document.getElementById(id).classList.add('on')};
function cls(l){return /❌|Asha's private/.test(l)?'bad':(/✅/.test(l)?'good':(/Your note: my-otp/.test(l)?'bad':''))}
async function type(el,cmd){el.innerHTML='<span class="cmd">$ </span>';for(const c of cmd){el.innerHTML+=c;await sleep(55)}el.innerHTML+='\\n';}
async function run(el,cmd,ls){await type(el,cmd);await sleep(400);for(const l of ls){const s=document.createElement('span');s.className=cls(l);s.textContent=l+'\\n';el.appendChild(s);await sleep(900)}}
(async()=>{show('s0');await sleep(4000);show('s1');await sleep(500);await run(document.getElementById('t1'),${JSON.stringify(V.beforeCmd)},B);await sleep(2500);
show('s2');await sleep(500);await run(document.getElementById('t2'),${JSON.stringify(V.afterCmd)},F);await sleep(2500);show('s3');await sleep(5000);window.done=true})();
</script>`;

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1080, height: 1350 }, recordVideo: { dir: out, size: { width: 1080, height: 1350 } } });
  const page = await ctx.newPage();
  await page.setContent(html);
  await page.waitForFunction(() => window.done === true, null, { timeout: 120000 });
  const v = await page.video().path();
  await ctx.close(); await browser.close();
  fs.renameSync(v, path.join(out, "raw.webm"));
  console.log("recorded");
})();
