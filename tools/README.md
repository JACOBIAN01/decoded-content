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

## Motion graphic v2 (default from Week 2)
Write the video as a timeline: the page defines `window.DURATION` and `window.render(t)` (pure function of time). Render deterministically, one frame at a time:
`NODE_PATH=$(npm root -g) node tools/frames.js weeks/<week>/motion.html <out>.mp4 30` (use `--stills 2,10,20` to check frames first).
Rules learned from the Week 1 critique: open on the payoff in the first 2 s; 45-55 s total; every second has motion; text at least 28 px; animate cause and effect (data moving), not just state swaps; one short labelled engineer layer; end card 3 s; Buffer thumbnailOffset on the hook frame (~1500-2000 ms). See `weeks/2026-W44-php2shell/motion-v2.html`.
