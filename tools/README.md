# Production runbook (used by the producer task)

Format since 6 Nov 2026: **one PDF carousel per run, posted Mon / Wed / Fri at 10:00 IST. No video, no demo, no GitHub links in captions.** Since 14 Nov 2026: **no blog**, nothing goes to the portfolio site or repo. All rendering is headless and needs only Node 18+ and Playwright (Chromium).

The producer runs Sun, Tue and Thu at 21:08 IST. Each run builds the **next** post: Sunday builds Monday's, Tuesday builds Wednesday's, Thursday builds Friday's. Two or more posts on one topic are allowed only if the second stands alone (see CLAUDE.md).

## 1. Write the post in `posts/<YYYY-MM-DD>-<slug>/` (date = the posting day)
- `research.md`: Documented / Our build / Do NOT claim / Sources. Verify the main claim against a primary source plus one independent report.
- `post.md`: 5 hooks (★ best), `## Caption`, `## Comment (Subhadeep posts this)`, checklist (post-selection-rules §7).
- `deck.js`: one deck with key `decoded-NN`, 9 slides. Slide types: `hook` (pill, kicker, title, sub), `big` (label, big, body), `timeline` (label, items[[date,text]]), `worker` (label, big, body), `flow` (label, steps[[title,sub,color]], note), `list` (label, items), `card` (big, question, next). Optional `badge` ("Documented" | "Our build") + `src`. Max ~25 words per slide. See `weeks/2026-W45-binance/deck.js`.
- **Slide 7 = worked example** (no `code` slide): one concrete walk-through with real numbers or a before/after, built from `flow`, `timeline`, `big` or `list`.
- `meta.json`: number, slot, due, topic, topic_type, hook_style, score, status, buffer_post_id, asset_base.
- Old weeks stay in `weeks/` (history). Do not move them.

## 2. Render
```
NODE_PATH=$(npm root -g) node tools/render.js <outDir> posts/<dir>/deck.js
```
Look at the PNGs before publishing (text overflow, wrapping). Fix and re-render.

## 3. Publish the assets (file hosting only)
Since 14 Nov 2026 this repo (`JACOBIAN01/decoded-content`, now public) hosts the files itself; the old public `JACOBIAN01/decoded` repo was deleted. Commit the PDF (`decoded-NN.pdf`) and the slide-1 PNG (`decoded-NN-cover.png`) into the post's own folder `posts/<YYYY-MM-DD>-<slug>/`, push, and use that commit hash in the links:
`https://cdn.jsdelivr.net/gh/JACOBIAN01/decoded-content@<commit>/posts/<YYYY-MM-DD>-<slug>/<file>` (correct MIME types; raw.githubusercontent serves octet-stream).
Hosting only: **never mention or link the repo in a caption, slide or comment.**

## 4. Schedule in Buffer (org 6a362e3c1b724c3630804b98, channel 6ad39ac9778b240e2f3afb31)
- `document` asset (url, title, thumbnailUrl). Never a video.
- `mode: customScheduled`, `dueAt: YYYY-MM-DDT10:00:00+05:30`, `schedulingType: automatic`.
- **No first comment** (needs a paid plan). Put sources as plain text in the caption.
- **No links in caption or comment.** No blog exists; the comment in `post.md` is a plain discussion prompt and the caption has no "link in the comments" line.
- Caption must contain "Decoded #NN" (the metrics tracker detects posts by it).
- Free plan holds 10 scheduled posts.

## 5. Record
Update `meta.json` (status "scheduled", buffer_post_id, asset_base), commit and push decoded-content, and add a row to the log in the project's `content-plan.md`. If an archive post was used, mark it used in `archive.md`.

## Paused: motion-graphic video
Videos are paused (Subhadeep, 6 Nov 2026: viewers found them confusing). `tools/MOTION-GRAPHICS.md`, `frames.js` and `motion-template.html` stay for a possible return (the older `video.js` and `motion.js` were deleted on 6 Nov). Do not make videos until Subhadeep asks.

## Carousel cover and document-title rules (learned from Decoded #01 on LinkedIn mobile)
- LinkedIn shows a document post as a swipeable strip (page 1 next to a sliver of page 2) and overlays a grey chip with the document title and page count on the top ~12% of page 1. So: **keep the top 200 px of the cover empty** (the renderer hides the header bar on slide 1 for this), and set the Buffer document `title` to **20 characters or fewer** (e.g. "How AI hunts bugs").
- Cover text: pill (optional), headline, one blue supporting line, "Swipe →" at 38 px. No kicker or date lines under 38 px; nothing on any slide under 28 px.
- Cover claims carry their qualifier or attribution ("OpenAI says…", "about 7 in 10 sites we can identify").
- A full-screen look in the feed only comes from a single image or a video; documents always render as the strip.
