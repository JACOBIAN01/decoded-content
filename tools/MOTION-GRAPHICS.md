# How to make a Decoded motion graphic (use this every week)

The Wednesday post of every Decoded week is a **motion-graphic explainer**: a 45–55 s silent video that teaches one mechanism from zero, then goes one level deeper for engineers. It is **never** a screen recording of terminal logs.

Reference build: `weeks/2026-W44-php2shell/motion-v2.html` (Decoded #02, PHP2Shell).
Starter file: `tools/motion-template.html`. Renderer: `tools/frames.js`.

---

## 1. The 10 rules (from the Week 1 critique)

| # | Rule | Why |
|---|---|---|
| 1 | **Open on the payoff in the first 2 s.** The scariest or most surprising moment comes first; explain afterwards. | The feed is decided in the first seconds. A static title card loses viewers. |
| 2 | **45–55 s total.** Never over 60 s. | The 98 s version was cut to 51.5 s with nothing lost. |
| 3 | **Something moves every second.** No scene holds still for more than about 1.5 s. | Dead holds cause drop-off. |
| 4 | **Animate cause and effect.** Show data *travelling* (a packet, a note flying, a path being drawn), not just a box changing colour. | The viewer has to see *why* B happens after A. |
| 5 | **Smallest text is 28 px; body text 38 px; headlines 60 px+.** Never wrap a key token (passwords, version numbers): use `white-space:nowrap`. | Phones show the video at about 0.36× scale, so 20 px becomes about 7 px. |
| 6 | **Nothing overlaps.** Check every still for collisions between bubbles, avatars, labels and pills. | Collisions look broken and hurt credibility. |
| 7 | **One short engineer layer** (8–12 s), labelled with the real terms (allocator, worker types, the CVE). Keep it at the level of how it works and how it is defended. | Engineers share posts that teach them something; students still follow because the metaphor came first. |
| 8 | **Every scene carries a badge:** `DOCUMENTED · source` or `OUR BUILD / SIMPLIFIED EXPLAINER`. | This is the series' honesty rule (post-selection-rules §5). |
| 9 | **End card is 2.5–3 s:** a 4-line summary, the repo, "Next: …". | Long end cards cause drop-off, and URLs in a video can't be clicked anyway. |
| 10 | **Render frame by frame,** never by screen-recording. Set the Buffer thumbnail to the hook frame (`thumbnailOffset` ≈ 1500–2000 ms). | Smooth motion, sharp text and a thumbnail that sells the post. |

No how-to-attack details, ever: show the bug class and the fix, not payloads, requests or configuration tricks.

---

## 2. Storyboard first (fill this before writing code)

Write it in `weeks/<week>/02-post.md` under `## Storyboard`. Use these beats and timings:

| Beat | Time | Purpose | Example (PHP2Shell) |
|---|---|---|---|
| **0 · Cold open** | 0–4 s | The payoff, frozen in its scariest form. Caption line 1 = hook (≤12 words), line 2 = what this is. | A browser card: "Your note: **my-otp-4821**" stamped in red, "↑ That's Akshat's one-time password." |
| **1 · Basics** | 4–15 s | The two or three building blocks, from zero, with one everyday metaphor. | Visitors → server → worker → memory; the request lifecycle Start · Work · Clean up. |
| **2 · The bug** | 15–29 s | The failure, step by step, ending on the payoff we opened with (the viewer now understands it). | The note goes into memory → OUT OF MEMORY → Clean up struck out → the note flies to the next visitor. |
| **3 · Under the hood** | 29–41 s | Zoom from the metaphor into the real system. Real terms, one causal path. | Memory blocks, half-cleaned blocks, a path from request 2 into them, "Remote code execution · no login". |
| **4 · The fix** | 41–49 s | The fix as a visible change to the system, then replay the bug and show it failing. Then what the viewer should do. | "Clean up" moves to the front and becomes "Reset"; the crash replays; the next visitor sees "(none)"; patched versions. |
| **5 · Decoder Card** | 49–52 s | The 4-line summary, the repo, "Next: …". | 1 reuse → 2 crash → 3 leftovers → 4 reset first. |

For every beat, write: the caption (h2 ≤ 9 words, p ≤ 18 words), what moves, and the badge (Documented / Our build).

---

## 3. Design system (light, Apple-like, one font)

```
Canvas   1080 × 1350 (4:5), background #FBFBFD, font Inter (Inter Display for headlines)
Ink      #1D1D1F   Muted #6E6E73   Line #E5E5EA
Blue     #0071E3 (normal / in use / person A)
Orange   #FF9500 (person B / the "next request")
Red      #D93025 (danger, the bug)      Green #1F9D55 (the fix, OK)
Yellow   #FFE680 (data / a note)
Mono     DejaVu Sans Mono for tokens (passwords, code, versions)
Radius   20–44 px cards, 999 px pills. Soft shadow 0 20px 60px rgba(0,0,0,.06)
```

**Layout zones** (keep every scene inside them):

| Zone | y range | Contents |
|---|---|---|
| Top bar | 0–110 | progress bar (8 px, blue, width = t/T), `DECODED #NN`, level chip |
| Stage | 170–880 | actors on the left (x 40–360), the system card on the right (x 360–1010) |
| Caption | 930–1200 | h2 62 px + p 38 px, crossfade between beats |
| Badge | 1240 | Documented (blue tint) / Our build (grey) |

---

## 4. The engine (how the HTML works)

The page is a **pure function of time**: `window.render(t)` sets every element's style for time `t` (seconds). There are no CSS animations, transitions or `setTimeout`s. That is what makes every frame exact and re-renderable.

Required globals:

```js
window.DURATION = 51.5;          // seconds
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
| **Captions** | `CAPS = [[t0, t1, h2, p]]`; opacity `win(t,t0,t1,.3,.25)` + 16 px rise |

---

## 5. Render and check (commands)

```bash
cd decoded-content && export NODE_PATH=$(npm root -g)
# 1) Stills first: check every beat for overlap, wrapping and readability
node tools/frames.js weeks/<week>/motion.html /tmp/out/x.mp4 --stills 2,6,11,17,20,26,31,35,38,42,46,50
# 2) Full render (≈1.5 min for 50 s): deterministic, 30 fps, x264 crf 16, -tune animation
node tools/frames.js weeks/<week>/motion.html /tmp/out/decoded-NN.mp4 30
# 3) Sample real frames from the MP4 and look at them (contact sheet)
for t in 1.5 10 25 34 46; do ffmpeg -v error -y -ss $t -i /tmp/out/decoded-NN.mp4 -frames:v 1 /tmp/out/m$t.png; done
```

Preview in a normal browser: open the HTML file and it plays itself (the loop runs only when not under automation).

**QA checklist (all must pass before publishing):**
- [ ] The payoff is visible by 1.5 s; the thumbnail frame (`thumbnailOffset`) shows it
- [ ] Duration 45–55 s; no hold longer than about 1.5 s without motion
- [ ] All text ≥ 28 px; no wrapped tokens; no overlaps in any still
- [ ] Every scene has a badge; every Documented claim is in `research.md`
- [ ] No exploit steps, payloads or request shapes
- [ ] Any "real output" quoted on screen matches what the demo actually prints (`npm start`)
- [ ] The caption's first 2 lines = the hook + the trending name; the question is within the first 400 characters

---

## 6. Publish

1. Copy the MP4 to `decoded/NN-slug/slides/decoded-NN.mp4` and `decoded-content/weeks/<week>/slides/`; save the hook frame as `decoded-NN-cover.png`.
2. Commit and push `decoded` first. Use the pinned commit in the URL:
   `https://cdn.jsdelivr.net/gh/JACOBIAN01/decoded@<commit>/NN-slug/slides/decoded-NN.mp4`
3. Buffer: `create_post` (or `edit_post` if it's already scheduled) with
   `assets: [{video:{url, metadata:{title, thumbnailOffset:1800}}}]`. Keep `dueAt`. Check that `durationMs` in the response matches the render.
4. Update `meta.json` (`video_seconds`, `asset_base`) and the caption in `02-post.md`; commit `decoded-content`.

---

## 7. Pitfalls we already hit

- Screen-recording a live page (`recordVideo`) gives judder and soft text. Use `frames.js`.
- `.t` class names collided (an absolute-positioned title landed on top of the grid). Give every component unique class names.
- Speech bubbles attached to a moving avatar ran under the system card. Position bubbles in stage coordinates, not inside the avatar.
- Long names ("Subhadeep") overflowed 120 px labels. Use a wider label box with `white-space:nowrap`.
- Changing names or text means changing the demo too, so quoted "real output" stays true.
- Buffer's free plan has no first comment: the repo name goes in the caption as plain text.
