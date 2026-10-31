# How to make a Decoded motion graphic (use this every week)

The Wednesday post of every Decoded week is a **silent, muted-first motion-graphic explainer**: 30–40 s that teaches one mechanism from zero, then goes one level deeper for engineers. It is **never** a screen recording of terminal logs, and it never relies on sound: most people watch the feed muted, and we have no voiceover.

Reference build: `weeks/2026-W44-php2shell/motion-v2.html` (Decoded #02, PHP2Shell). It predates the v3 rules below; follow the rules, not its timings.
Starter file: `tools/motion-template.html`. Renderer: `tools/frames.js`.

---

## 0. Why v3 (Week 1 data, Decoded #02)

| Metric | #02 (51.5 s) | EventLoop baseline | v3 target |
|---|---|---|---|
| Video hook rate (views ÷ impressions) | **24.7%** | 43% | **≥ 35%** |
| Avg watch (watch time ÷ views) | **7.7 s** (15% of the video) | ~11 s | **≥ 12 s** |
| Comments | 0 | 0 | **≥ 2** |

Read: people decided in the first 1–2 s (the opening card was small and unclear at feed size), and the ones who started left at about 8 s, before the payoff was explained. So v3 front-loads the payoff in **huge text**, shortens the video, and puts every idea on screen as words, not sound.

Check these three numbers in every metrics snapshot and log them against this table.

---

## 1. The 12 rules (v3, muted-first)

| # | Rule | Why |
|---|---|---|
| 1 | **Frame 0 is the thumbnail and the hook.** One line, ≤ 7 words, **≥ 96 px**, centred in the stage, with the shocking number or fact (e.g. "$6.3 billion. One laptop."). Something moves before 0.5 s. | At feed size (~0.36×) 96 px reads as ~35 px. The 28–44 px hook card in #02 read as ~12 px: invisible. |
| 2 | **30–40 s total, never over 45 s.** | Average watch was 7.7 s. Shorter means a larger share watched and more completions. |
| 3 | **The payoff is understood by 12 s.** Beat 1 (0–3 s) shows the result; beat 2 (3–12 s) answers "how?" in one picture. Everything after is a bonus for engineers. | Most viewers leave around 8–10 s. They must leave having learned the one idea. |
| 4 | **Kinetic captions carry the story.** Every beat has an on-screen line that appears word by word (`words()` helper): ≤ 6 words per line, **64–80 px**, bold, high contrast, placed **in the stage next to the action**, not at the bottom. Max 2 lines on screen. | Muted viewers read; the eye follows motion, so words must sit where things move. |
| 5 | **A visual change every 2–3 s.** Cut, zoom, counter, colour flip or a new object. No hold longer than 1.5 s. | Pattern interrupts reset attention; dead holds cause drop-off. |
| 6 | **Numbers count up** (`count()` helper) and money/sizes are shown as **physical comparisons** (stacks, bars, a laptop vs a vault). | A number that moves is watched; a static number is skimmed. |
| 7 | **Open a loop early, close it late.** By 2 s, ask the question in text ("How did one laptop do this?"); answer it in the last third. Show a 3-step **chapter strip** (e.g. `1 HOW · 2 WHY · 3 FIX`) that fills as the video plays. | Visible progress and an open question give a reason to keep watching. |
| 8 | **Animate cause and effect.** Data *travels* (packets, arrows, a path being drawn), never just changes colour. | The viewer must see why B follows A. |
| 9 | **Type scale:** hook ≥ 96 px · kinetic captions 64–80 px · labels ≥ 36 px · nothing below 28 px. Never wrap a key token (`white-space:nowrap`). Keep text out of the **bottom 140 px and left/right 60 px** (LinkedIn's mute/controls overlay and feed crop). | Phones show the video at ~0.36×. |
| 10 | **Nothing overlaps.** Check every still for collisions. | Collisions look broken and cost credibility. |
| 11 | **Every scene carries a badge:** `DOCUMENTED · source` or `OUR BUILD / SIMPLIFIED`. The engineer layer (6–10 s) uses real terms. | The series' honesty rule (post-selection-rules §5). |
| 12 | **End on a comment prompt, then loop.** Last 2–3 s: a one-line takeaway + a **binary question** on screen ("A or B? Comment below"). The final frame visually matches frame 0 so the autoplay loop looks seamless. | Comments are our biggest gap; a choice is easier to answer than an open question. Loops add replays. |

Always: render frame by frame (never screen-record), and no how-to-attack details: show the bug class and the defence, never payloads, requests or configuration tricks.

---

## 2. Storyboard first (fill this before writing code)

Write it in `weeks/<week>/02-post.md` under `## Storyboard`. Beats and timings for a 34 s video:

| Beat | Time | Purpose | On-screen text (kinetic) | Example (Binance, Week 2) |
|---|---|---|---|---|
| **0 · Hook** | 0–3 s | The result, huge. Motion by 0.5 s. | ≤ 7 words, ≥ 96 px | "$6.3 billion" counts up, then "One laptop." stamps in |
| **1 · Open loop** | 3–5 s | Ask the question the video answers; chapter strip appears | the question | "How did one laptop move it?" |
| **2 · The one idea** | 5–14 s | The mechanism as one picture with one metaphor. Payoff understood by 12 s. | 2–3 lines, ≤ 6 words each | laptop → trusted service → "sign" stamp → coins fly out of the vault |
| **3 · Under the hood** | 14–24 s | One level deeper, real terms, one causal path (engineers) | real terms as labels | hot vs cold wallet; the withdrawal service signs what it's told |
| **4 · The fix / defence** | 24–31 s | The defence as a visible change, then replay and show it failing | the rule in 4–6 words | two approvals + a limit; the fake request bounces; "$3B frozen" counter |
| **5 · Comment + loop** | 31–34 s | Takeaway + binary question; last frame matches frame 0 | "A or B? Comment below" | "Freeze crypto: A) good safety net B) too much control" |

For every beat, write: the kinetic line(s), what moves, the badge, and the change that happens every 2–3 s.

**Caption (post text) rules for the video post:**
- Line 1 = the same hook as frame 0. Line 2 = the open question.
- Put the binary question from the end card within the first 400 characters.
- End with "Watch to the end: the fix is at 0:25", using the real timestamp.

---

## 3. Design system (light, Apple-like, one font)

```
Canvas   1080 × 1350 (4:5), background #FBFBFD, font Inter (Inter Display for headlines)
Ink      #1D1D1F   Muted #6E6E73   Line #E5E5EA
Blue     #0071E3 (normal / in use / person A)
Orange   #FF9500 (person B / the "next request")
Red      #D93025 (danger, the bug)      Green #1F9D55 (the fix, OK)
Yellow   #FFE680 (data / a note; also the kinetic-caption highlight)
Mono     DejaVu Sans Mono for tokens (passwords, code, versions)
Radius   20–44 px cards, 999 px pills. Soft shadow 0 20px 60px rgba(0,0,0,.06)
```

**Layout zones** (keep every scene inside them):

| Zone | y range | Contents |
|---|---|---|
| Top bar | 0–120 | progress bar (8 px), `DECODED #NN`, chapter strip |
| Stage | 140–1000 | the action **and** its kinetic caption (caption sits beside or above the moving thing) |
| Support line | 1020–1160 | optional second line, ≥ 44 px |
| Badge | 1170–1210 | Documented (blue tint) / Our build (grey), ≥ 28 px |
| Safe margin | 1210–1350 | **empty**: LinkedIn's video controls overlay this |

---

## 4. The engine (how the HTML works)

The page is a **pure function of time**: `window.render(t)` sets every element's style for time `t` (seconds). There are no CSS animations, transitions or `setTimeout`s. That is what makes every frame exact and re-renderable.

Required globals:

```js
window.DURATION = 34;            // seconds
window.render = function (t) {}; // draws the frame at time t
```

Helpers (copy from `motion-template.html`):

| Helper | Meaning |
|---|---|
| `P(t, a, b, ease)` | eased progress 0→1 between times a and b |
| `L(a, b, k)` | interpolate a→b by k |
| `win(t, a, b, fadeIn, fadeOut)` | 0→1→0 visibility window |
| `wins(t, [[a,b,fi,fo], …])` | several windows; max wins |
| `at(list, t)` | discrete schedule `[[time, value], …]` → value at t (captions, badges, states) |
| `tf(el, {x, y, s, r, o})` | set transform and opacity |
| `shake(t, a, b, amp)` | decaying horizontal shake for crashes |
| `txt(el, value, html)` | set text only when it changes (fast) |
| **`words(el, text, t0, t1, hi)`** | **kinetic caption**: reveals `text` word by word between t0 and t1 (each word rises and fades in); words listed in `hi` get the yellow highlight |
| **`count(el, from, to, t0, t1, fmt)`** | **counter**: eases a number from → to and writes `fmt(n)` (e.g. `n => '$' + n.toFixed(1) + 'B'`) |
| **`chapters(t, marks)`** | fills the chapter strip: `marks = [[t, 0], [t, 1], [t, 2]]` |
| Easing: `E` (in-out cubic), `EO` (out cubic), `EB` (back-out, for "stamps") | |

Patterns used in #02 (all in `motion-v2.html`):

| Pattern | How |
|---|---|
| **Packet travels** A → system | `[t0, t1, from]` list; position = `L(src, dst, P(t,t0,t1))`, with an arc of `-sin(πk)·60` px |
| **Data flies to the victim** | the same, from the memory centre to the speech bubble; the bubble appears as the chip lands |
| **State pills** (Start/Work/Clean up) | per pill an `at()` schedule of `idle/act/ok/bad/skip` → colours from a style table |
| **Reorder = the fix** | the pill moves from slot 3 to slot 1 on an arc (`y = -74·sin(πk)`); its label switches halfway |
| **Crash** | red banner (back-out scale) + `shake()` on the box + a 0.3 s red full-screen flash at 20% opacity |
| **Sweep / clean** | a green gradient bar crossing the memory; the data fades as it passes |
| **Zoom into the real system** | the zoom panel scales 0.42→1 from the memory's centre (`transform-origin`), while the metaphor card fades |
| **Causal path** | SVG path, `stroke-dasharray = length`, `dashoffset = length·(1-k)`; a dot rides `getPointAtLength` |

New in v3:

| Pattern | How |
|---|---|
| **Hook stamp** | hook line at s 1.4 → 1 with `EB` between 0.1 and 0.5 s; a counter runs underneath it from 0.2 s |
| **Kinetic caption** | `words()` for every line; start each line 0.1 s after the action it describes starts |
| **Seamless loop** | the last 0.4 s cross-fades to the exact frame-0 layout (same hook text, same position) |

---

## 5. Render and check (commands)

```bash
cd decoded-content && export NODE_PATH=$(npm root -g)
# 1) Stills first: hook frame, every beat, end card
node tools/frames.js weeks/<week>/motion.html /tmp/out/x.mp4 --stills 0,0.5,2,4,8,12,16,20,24,28,32,33.9
# 2) Full render: deterministic, 30 fps, x264 crf 16, -tune animation
node tools/frames.js weeks/<week>/motion.html /tmp/out/decoded-NN.mp4 30
# 3) Feed-size check: shrink the hook and a mid frame to phone-feed size and look at them
for t in 0.5 10 30; do ffmpeg -v error -y -ss $t -i /tmp/out/decoded-NN.mp4 -frames:v 1 -vf scale=390:-1 /tmp/out/feed$t.png; done
```

Preview in a normal browser: open the HTML file and it plays itself (the loop runs only when not under automation).

**QA checklist (all must pass before publishing):**
- [ ] **Muted test:** watching with no sound, the 390 px-wide frames at 0.5 s and 10 s are readable and say what happened
- [ ] Hook line ≥ 96 px, ≤ 7 words, on screen and moving by 0.5 s; `thumbnailOffset` is set to that frame
- [ ] The payoff is understood by 12 s (someone who stops at 12 s learned the one idea)
- [ ] Duration 30–40 s; a visual change at least every 3 s; no hold longer than 1.5 s
- [ ] Every beat has a kinetic caption (≤ 6 words per line, 64–80 px), placed next to the action
- [ ] Nothing in the bottom 140 px or the side 60 px; all text ≥ 28 px; no wrapped tokens; no overlaps in any still
- [ ] End card has a binary comment question; the last frame matches frame 0
- [ ] Every scene has a badge; every Documented claim is in `research.md`
- [ ] No exploit steps, payloads or request shapes
- [ ] Any "real output" on screen matches what the demo actually prints (`npm start`)
- [ ] Caption: line 1 = frame-0 hook; binary question within the first 400 characters; "the fix is at 0:NN" line

---

## 6. Publish

1. Copy the MP4 to `decoded/NN-slug/slides/decoded-NN.mp4` and `decoded-content/weeks/<week>/slides/`; save the hook frame as `decoded-NN-cover.png`.
2. Commit and push `decoded` first. Use the pinned commit in the URL:
   `https://cdn.jsdelivr.net/gh/JACOBIAN01/decoded@<commit>/NN-slug/slides/decoded-NN.mp4`
3. Buffer: `create_post` (or `edit_post` if it's already scheduled) with
   `assets: [{video:{url, metadata:{title, thumbnailOffset:500}}}]` (the hook frame). Keep `dueAt`. Check that `durationMs` in the response matches the render.
4. Update `meta.json` (`video_seconds`, `asset_base`) and the caption in `02-post.md`; commit `decoded-content`.

---

## 7. Pitfalls we already hit

- **#02 opened on a small card** (44 px label, 88 px token inside a card): unreadable in the feed. Hook rate 24.7%. The hook must be the biggest thing on screen.
- **#02 ran 51.5 s** and held the explanation until after 15 s; viewers left at ~8 s.
- **#02's captions sat at the bottom** (y 930+), far from the action; muted viewers had to look in two places.
- Screen-recording a live page (`recordVideo`) gives judder and soft text. Use `frames.js`.
- `.t` class names collided (an absolute-positioned title landed on top of the grid). Give every component unique class names.
- Speech bubbles attached to a moving avatar ran under the system card. Position bubbles in stage coordinates, not inside the avatar.
- Long names ("Subhadeep") overflowed 120 px labels. Use a wider label box with `white-space:nowrap`.
- Changing names or text means changing the demo too, so quoted "real output" stays true.
- Buffer's free plan has no first comment: the repo name goes in the caption as plain text.
- No voiceover for now (decided 31 Oct 2026). Don't add audio tracks; the video must work fully muted.
