# Production runbook (used by the weekly producer task)

All rendering is headless and needs only Node 18+, Playwright (Chromium) and ffmpeg.

## 1. Write the week's content in `weeks/<ISO-week>-<slug>/`
- `research.md`: Documented / Our build / Do NOT claim / Sources
- `01-post.md`, `02-post.md`, `03-post.md`: 5 hooks (★ best), `## Caption`
- `deck.js`: two decks (`decoded-NN` keys), 9 slides each. Slide types: `hook` (pill, kicker, title, sub), `big` (label, big, body), `timeline` (label, items[[date,text]]), `worker` (label, big, body), `flow` (label, steps[[title,sub,color]], note), `code` (label, code, body), `list` (label, items), `card` (big, question, next). Optional `badge` ("Documented" | "Our build") + `src`. Max ~25 words per slide. See `weeks/2026-W44-php2shell/deck.js`.
- `video.json`: scene text for the Wednesday demo video.

## 2. Demo code in the public repo `JACOBIAN01/decoded/NN-slug/`
Under ~100 lines, plain JS, `npm start` shows the "before", a second script the "after". Run both and save output:
`node <script> > before.txt` and the fixed/after run `> after.txt`.

## 3. Render
```
NODE_PATH=$(npm root -g) node tools/render.js <outDir> weeks/<week>/deck.js
NODE_PATH=$(npm root -g) node tools/video.js before.txt after.txt <outDir> weeks/<week>/video.json
ffmpeg -y -i <outDir>/raw.webm -ss 0.3 -c:v libx264 -pix_fmt yuv420p -crf 20 -r 30 -movflags +faststart decoded-NN.mp4
```
Look at the PNGs before publishing (text overflow, wrapping).

## 4. Publish assets
Copy PDFs, MP4 and slide-1 PNGs (`decoded-NN-cover.png`) to `JACOBIAN01/decoded/NN-slug/slides/`, commit, push. Use the commit hash in links:
`https://cdn.jsdelivr.net/gh/JACOBIAN01/decoded@<commit>/NN-slug/slides/<file>` (correct MIME types; raw.githubusercontent serves octet-stream).

## 5. Schedule in Buffer (org 6a362e3c1b724c3630804b98, channel 6ad39ac9778b240e2f3afb31)
- Tue/Thu: `document` asset (url, title, thumbnailUrl); Wed: `video` asset.
- `mode: customScheduled`, `dueAt: YYYY-MM-DDT10:00:00+05:30`, `schedulingType: automatic`.
- **No first comment** (needs a paid plan). Put sources and "GitHub → JACOBIAN01/decoded" as plain text in the caption.
- Caption must contain "Decoded #NN" (the metrics tracker detects posts by it).
- Free plan holds 10 scheduled posts.

## 6. Record
Update `meta.json` (status, buffer_post_id per post, asset_base) and add the week to the log in the project's `content-plan.md`.

## Motion-graphic video (preferred over the terminal-log video)
`NODE_PATH=$(npm root -g) node tools/motion.js weeks/<week>/motion.html <outDir> decoded-NN.mp4` records a hand-authored animated HTML explainer (set `window.done=true` at the end). See `weeks/2026-W44-php2shell/motion.html`: levels 1-6 from basics to the real bug to the fix. `video.js` (terminal logs) is kept only as a fallback.

## Motion graphic v2 (default from Week 2): full guide in `tools/MOTION-GRAPHICS.md`
Write the video as a timeline: the page defines `window.DURATION` and `window.render(t)` (pure function of time). Render deterministically, one frame at a time:
`NODE_PATH=$(npm root -g) node tools/frames.js weeks/<week>/motion.html <out>.mp4 30` (use `--stills 2,10,20` to check frames first).
Rules (v3, muted-first, from Week 1 data: hook rate 24.7%, avg watch 7.7 s): frame 0 = a ≥96 px hook of ≤7 words, moving by 0.5 s; 30-40 s total; payoff understood by 12 s; kinetic word-by-word captions (64-80 px) next to the action; a visual change every 2-3 s; counters for numbers; chapter strip; keep the bottom 140 px empty; end on a binary comment question and loop back to frame 0; Buffer thumbnailOffset 500 ms; no voiceover. Full rules in `tools/MOTION-GRAPHICS.md`; start from `tools/motion-template.html`.

## Carousel cover and document-title rules (learned from Decoded #01 on LinkedIn mobile)
- LinkedIn shows a document post as a swipeable strip (page 1 next to a sliver of page 2) and overlays a grey chip with the document title and page count on the top ~12% of page 1. So: **keep the top 200 px of the cover empty** (the renderer hides the header bar on slide 1 for this), and set the Buffer document `title` to **20 characters or fewer** (e.g. "How AI hunts bugs").
- Cover text: pill (optional), headline, one blue supporting line, "Swipe →" at 38 px. No kicker or date lines under 38 px; nothing on any slide under 28 px.
- Cover claims carry their qualifier or attribution ("OpenAI says…", "about 7 in 10 sites we can identify").
- A full-screen look in the feed only comes from a single image or a video; documents always render as the strip.
