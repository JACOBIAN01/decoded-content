// Renders decks to PDF + slide PNGs. Usage: node render.js <outDir> <path/to/deck.js>
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const decks = require(path.resolve(process.argv[3] || "./deck.js"));
const out = process.argv[2] || "out";
fs.mkdirSync(out, { recursive: true });

const esc = (s = "") => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const C = { blue: "#0057D9", purple: "#6A3FC6", green: "#1F7A3A", red: "#C2331B", orange: "#C75B00" };

const css = `
*{box-sizing:border-box;margin:0;padding:0}
@page{size:1080px 1350px;margin:0}
body{font-family:Inter,sans-serif;color:#1D1D1F;-webkit-font-smoothing:antialiased}
.s{width:1080px;height:1350px;background:#FFFFFF;position:relative;padding:96px 88px;display:flex;flex-direction:column;page-break-after:always;overflow:hidden}
.s.cover{padding-top:200px}.s.cover .top{display:none}
.top{display:flex;justify-content:space-between;font-size:28px;font-weight:600;letter-spacing:.08em;color:#86868B;text-transform:uppercase}
.top b{color:#1D1D1F}
.main{flex:1;display:flex;flex-direction:column;justify-content:center;gap:40px}
.label{font-size:34px;font-weight:700;color:${C.purple};letter-spacing:.02em}
.kicker{font-size:38px;color:#424245;font-weight:600}
.title{font-family:'Inter Display',Inter;font-size:92px;line-height:1.04;font-weight:700;letter-spacing:-.025em}
.sub{font-size:52px;font-weight:600;color:${C.blue}}
.big{font-family:'Inter Display',Inter;font-size:84px;line-height:1.06;font-weight:700;letter-spacing:-.02em}
.body{font-size:40px;line-height:1.4;color:#1D1D1F;max-width:860px}
.foot{display:flex;justify-content:space-between;align-items:flex-end;font-size:28px;font-weight:500;color:#3A3A3C}
.foot>span{flex-shrink:0;margin-right:40px}
.foot>div{text-align:right}
.pill{align-self:flex-start;background:#FDECEA;color:#C2331B;font-weight:700;font-size:28px;letter-spacing:.06em;padding:12px 24px;border-radius:999px;text-transform:uppercase}
.swipe{font-size:38px;font-weight:700;color:#424245;margin-top:24px}
.badge{display:inline-block;padding:10px 20px;border-radius:999px;font-weight:700;font-size:26px;letter-spacing:.04em;text-transform:uppercase}
.Documented{background:#E8F1FB;color:${C.blue}}
.Our{background:#EEE8FA;color:${C.purple}}
.src{font-size:28px;color:#3A3A3C;margin-top:12px;max-width:640px;line-height:1.25}
.tl{display:flex;flex-direction:column;gap:44px;border-left:4px solid #D2D2D7;padding-left:48px}
.tl div{position:relative}
.tl div:before{content:"";position:absolute;left:-64px;top:10px;width:28px;height:28px;border-radius:50%;background:var(--c,${C.blue})}
.tl i{display:block;font-style:normal;font-weight:800;font-size:32px;color:var(--c,${C.blue});margin-bottom:6px}
.tl span{font-size:44px;font-weight:600;line-height:1.2}
.flow{display:flex;flex-direction:column;gap:18px}
.step{border-radius:28px;padding:30px 40px;font-size:42px;font-weight:700;color:#fff}
.step small{display:block;font-size:28px;font-weight:500}
.arrow{text-align:center;font-size:40px;color:#AEAEB2;line-height:1}
.note{font-size:34px;color:#1D1D1F;font-weight:500;line-height:1.35}
pre{background:#fff;border:2px solid #E5E5EA;border-radius:28px;padding:44px;font-family:'DejaVu Sans Mono',monospace;font-size:31px;line-height:1.5;white-space:pre-wrap}
.cm{color:#5A5A5F}.bug{color:#C2331B;font-weight:700}.fix{color:#1F7A3A;font-weight:700}
ul{list-style:none;display:flex;flex-direction:column;gap:40px}
li{font-size:44px;font-weight:600;line-height:1.25;padding-left:64px;position:relative}
li:before{content:"✓";position:absolute;left:0;color:${C.green};font-weight:800}
.wk{display:flex;align-items:center;justify-content:space-between;gap:20px}
.av{width:200px;height:200px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;color:#fff}
.box{flex:1;height:240px;border-radius:36px;border:4px dashed ${C.purple};display:flex;align-items:center;justify-content:center;font-size:46px;font-weight:700;color:${C.purple};background:#F5F1FD}
.card{background:#fff;border:2px solid #E5E5EA;border-radius:40px;padding:64px;display:flex;flex-direction:column;gap:44px;box-shadow:0 20px 60px rgba(0,0,0,.06)}
.rows{display:flex;flex-direction:column;gap:22px}.row{display:flex;align-items:center;gap:28px;padding:28px 36px;border-radius:28px;background:#fff;border:2px solid #E5E5EA;font-size:46px;font-weight:600;line-height:1.15}.row .n{width:68px;height:68px;border-radius:50%;color:#fff;font-size:34px;font-weight:700;display:flex;align-items:center;justify-content:center;flex:none}.map{display:flex;gap:14px;flex-wrap:wrap}.map span{background:#F2F2F7;border-radius:999px;padding:14px 26px;font-size:30px;font-weight:600;color:#424245}.box small{display:block;font-size:28px;font-weight:500;margin-top:8px;text-align:center}.chain{display:flex;align-items:center;gap:12px}.ch{color:#fff;font-weight:700;font-size:30px;padding:14px 22px;border-radius:999px}.chain .ar{font-size:30px;color:#AEAEB2}
.q{font-size:38px;line-height:1.35;color:${C.blue};font-weight:600}
.next{font-size:30px;font-weight:700;color:${C.green};text-transform:uppercase;letter-spacing:.06em}
.chips{display:flex;gap:14px;flex-wrap:wrap}.chips .ch{font-size:34px;padding:16px 28px}
.pth{display:flex;flex-direction:column;gap:12px}.node{border-radius:28px;padding:26px 36px;font-size:46px;font-weight:800;color:#fff}.node small{display:block;font-size:30px;font-weight:500}.pth .lbl{font-size:32px;font-weight:700;color:#3A3A3C;text-align:center}
.fan{display:flex;flex-direction:column;gap:16px;border-left:8px solid #AEAEB2;margin-left:70px;padding-left:40px;margin-top:6px}.br{position:relative;border-radius:28px;padding:20px 32px;background:#fff;border:6px solid var(--c)}.br:before{content:"";position:absolute;left:-46px;top:50%;width:40px;height:8px;background:#AEAEB2;transform:translateY(-50%)}.br b{display:block;font-size:42px;color:var(--c)}.br small{display:block;font-size:30px;color:#1D1D1F;font-weight:500}
.tg{display:flex;flex-direction:column;gap:28px}.tcard{display:flex;gap:32px;align-items:flex-start;background:#fff;border:6px solid #D2D2D7;border-radius:32px;padding:36px}.tcard b{font-size:44px;display:block;margin-bottom:10px}.tcard p{font-size:32px;line-height:1.3;margin-top:8px;font-weight:600}.gd{color:#1F7A3A}.bd{color:#C2331B}
.sw{width:150px;height:80px;border-radius:999px;background:#8E8E93;position:relative;flex:none;margin-top:4px}.sw:after{content:"";position:absolute;top:8px;left:8px;width:64px;height:64px;border-radius:50%;background:#fff}
.sp{display:flex;gap:24px}.col{flex:1;border:6px solid var(--c);border-radius:32px;padding:28px;background:#fff;display:flex;flex-direction:column;gap:16px}.col i{font-style:normal;font-weight:800;font-size:32px;color:var(--c);text-transform:uppercase}.col h3{font-size:38px;line-height:1.15}.bub{border-radius:24px;padding:14px 22px;font-size:32px;font-weight:700;color:#fff}.col p{font-size:32px;font-weight:700;line-height:1.25}
`;

function badge(sl) {
  if (!sl.badge) return "";
  const cls = sl.badge === "Documented" ? "Documented" : "Our";
  return `<div><span class="badge ${cls}">${sl.badge}</span>${sl.src ? `<div class="src">${esc(sl.src)}</div>` : ""}</div>`;
}
function hl(code) {
  return esc(code).split("\n").map(l => { const t = l.trim(); if (!t.startsWith("//")) return l; const k = t.startsWith("// BUG") ? "bug" : t.startsWith("// FIX") ? "fix" : "cm"; return `<span class="${k}">${l}</span>`; }).join("\n");
}

function slide(num, sl, i, n) {
  let m = "";
  switch (sl.type) {
    case "hook": m = `${sl.pill ? `<div class="pill">${esc(sl.pill)}</div>` : ""}${sl.kicker ? `<div class="kicker">${esc(sl.kicker)}</div>` : ""}<div class="title">${esc(sl.title)}</div><div class="sub">${esc(sl.sub)}</div><div class="swipe">${esc(sl.swipe || "Swipe →")}</div>`; break;
    case "big": m = `<div class="label">${esc(sl.label)}</div><div class="big">${esc(sl.big)}</div><div class="body">${esc(sl.body)}</div>${sl.chips ? `<div class="chips">${sl.chips.map(([t, c]) => `<span class="ch" style="background:${C[c]}">${esc(t)}</span>`).join("")}</div>` : ""}`; break;
    case "timeline": m = `<div class="label">${esc(sl.label)}</div><div class="tl">${sl.items.map(([d, t, c]) => `<div${c ? ` style="--c:${C[c]}"` : ""}><i>${esc(d)}</i><span>${esc(t)}</span></div>`).join("")}</div>`; break;
    case "worker": m = `<div class="label">${esc(sl.label)}</div><div class="big">${esc(sl.big)}</div>
      <div class="wk"><div class="av" style="background:${C.blue}">${esc(sl.a || "Visitor 1")}</div><div class="arrow">→</div><div class="box"><div>Worker<small>${esc(sl.boxsub || "handles every request")}</small></div></div><div class="arrow">→</div><div class="av" style="background:${C.green}">${esc(sl.b || "Visitor 2")}</div></div>
      <div class="body">${esc(sl.body)}</div>`; break;
    case "analogy": m = `<div class="label">${esc(sl.label)}</div><div class="big">${esc(sl.big)}</div><div class="rows">${sl.rows.map(([t, c], k) => `<div class="row"><span class="n" style="background:${C[c]}">${k + 1}</span>${esc(t)}</div>`).join("")}</div><div class="map">${sl.map.map(t => `<span>${esc(t)}</span>`).join("")}</div>`; break;
    case "flow": m = `<div class="label">${esc(sl.label)}</div><div class="flow">${sl.steps.map(([t, s, c], k) => `${k ? '<div class="arrow">↓</div>' : ""}<div class="step" style="background:${C[c]}">${esc(t)}${s ? `<small>${esc(s)}</small>` : ""}</div>`).join("")}</div><div class="note">${esc(sl.note)}</div>`; break;
    case "code": m = `<div class="label">${esc(sl.label)}</div><pre>${hl(sl.code)}</pre><div class="body">${esc(sl.body)}</div>`; break;
    case "paths": m = `<div class="label">${esc(sl.label)}</div><div class="pth"><div class="node" style="background:${C[sl.source[2]]}">${esc(sl.source[0])}<small>${esc(sl.source[1])}</small></div><div class="lbl">↓ ${esc(sl.arrow)}</div><div class="node" style="background:${C[sl.center[2]]}">${esc(sl.center[0])}<small>${esc(sl.center[1])}</small></div><div class="fan">${sl.branches.map(([t, u, c]) => `<div class="br" style="--c:${C[c]}"><b>${esc(t)}</b><small>${esc(u)}</small></div>`).join("")}</div></div><div class="note">${esc(sl.note)}</div>`; break;
    case "toggles": m = `<div class="label">${esc(sl.label)}</div><div class="tg">${sl.items.map(([name, c, good, bad]) => `<div class="tcard"><div class="sw off" style="--c:${C[c]}"></div><div><b>${esc(name)}</b><p class="gd">✓ ${esc(good)}</p><p class="bd">✗ ${esc(bad)}</p></div></div>`).join("")}</div><div class="note">${esc(sl.note)}</div>`; break;
    case "split": m = `<div class="label">${esc(sl.label)}</div><div class="sp">${sl.cols.map(c => `<div class="col" style="--c:${C[c.color]}"><i>${esc(c.day)}</i><h3>${esc(c.head)}</h3>${c.bubbles.map(b => `<div class="bub" style="background:${C[c.bcolor]}">${esc(b)}</div>`).join("")}${c.lines.map(([t, k]) => `<p class="${k}">${k === "gd" ? "✓" : "✗"} ${esc(t)}</p>`).join("")}</div>`).join("")}</div><div class="note">${esc(sl.note)}</div>`; break;
    case "list": m = `<div class="label">${esc(sl.label)}</div><ul>${sl.items.map(t => `<li>${esc(t)}</li>`).join("")}</ul>`; break;
    case "card": m = `<div class="label">Decoder card</div><div class="card"><div class="big" style="font-size:66px">${esc(sl.big)}</div>${sl.chain ? `<div class="chain">${sl.chain.map(([t, c], k) => `${k ? '<span class="ar">→</span>' : ""}<span class="ch" style="background:${C[c]}">${esc(t)}</span>`).join("")}</div>` : ""}<div class="q">${esc(sl.question)}</div><div class="next">${esc(sl.next)} →</div></div>`; break;
  }
  return `<section class="s${i === 0 ? " cover" : ""}"><div class="top"><span><b>Decoded</b> #${num}</span><span>${i + 1} / ${n}</span></div>
  <div class="main">${m}</div>
  <div class="foot"><span>Subhadeep Ghorai</span>${badge(sl)}</div></section>`;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const [name, d] of Object.entries(decks)) {
    const html = `<!doctype html><meta charset="utf-8"><style>${css}</style>${d.slides.map((s, i) => slide(d.num, s, i, d.slides.length)).join("")}`;
    fs.writeFileSync(path.join(out, `${name}.html`), html);
    await page.setContent(html, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: path.join(out, `${name}.pdf`), width: "1080px", height: "1350px", printBackground: true });
    const secs = await page.$$("section");
    for (let i = 0; i < secs.length; i++) await secs[i].screenshot({ path: path.join(out, `${name}-${i + 1}.png`) });
    console.log("rendered", name, secs.length, "slides");
  }
  await browser.close();
})();
