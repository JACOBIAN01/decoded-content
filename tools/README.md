# Production runbook (used by the producer task)

Format since 6 Nov 2026: **one PDF carousel per run, posted Mon / Wed / Fri at 10:00 IST. No video, no demo, no GitHub links in captions.** All rendering is headless and needs only Node 18+ and Playwright (Chromium).

The producer runs Sun, Tue and Thu at 21:08 IST. Each run builds the **next** post: Sunday builds Monday's, Tuesday builds Wednesday's, Thursday builds Friday's. Two or more posts on one topic are allowed only if the second stands alone (see CLAUDE.md).

## 1. Write the post in `posts/<YYYY-MM-DD>-<slug>/` (date = the posting day)
- `research.md`: Documented / Our build / Do NOT claim / Sources. Verify the main claim against a primary source plus one independent report.
- `post.md`: 5 hooks (★ best), `## Caption`, `## Comment (Subhadeep posts this)`, checklist (post-selection-rules §7).
- `deck.js`: one deck with key `decoded-NN`, 9 slides. Slide types: `hook` (pill, kicker, title, sub), `big` (label, big, body), `timeline` (label, items[[date,text]]), `worker` (label, big, body), `flow` (label, steps[[title,sub,color]], note), `list` (label, items), `card` (big, question, next). Optional `badge` ("Documented" | "Our build") + `src`. Max ~25 words per slide. See `weeks/2026-W45-binance/deck.js`.
- **Slide 7 = worked example** (no `code` slide): one concrete walk-through with real numbers or a before/after, built from `flow`, `timeline`, `big` or `list`.
- `meta.json`: number, slot, due, topic, topic_type, hook_style, score, blog (yes/no and URL), status, buffer_post_id, asset_base.
- Old weeks stay in `weeks/` (history). Do not move them.

## 2. Render
```
NODE_PATH=$(npm root -g) node tools/render.js <outDir> posts/<dir>/deck.js
```
Look at the PNGs before publishing (text overflow, wrapping). Fix and re-render.

## 3. Publish the assets (file hosting only)
Copy the PDF and the slide-1 PNG (`decoded-NN-cover.png`) to `JACOBIAN01/decoded/slides/<YYYY-MM-DD>-<slug>/`, commit, push. Use the commit hash in links:
`https://cdn.jsdelivr.net/gh/JACOBIAN01/decoded@<commit>/slides/<YYYY-MM-DD>-<slug>/<file>` (correct MIME types; raw.githubusercontent serves octet-stream).
This repo is only a file host for Buffer. **No demo code, no README demo section, and never mention or link the repo in a caption.**

## 4. Schedule in Buffer (org 6a362e3c1b724c3630804b98, channel 6ad39ac9778b240e2f3afb31)
- `document` asset (url, title, thumbnailUrl). Never a video.
- `mode: customScheduled`, `dueAt: YYYY-MM-DDT10:00:00+05:30`, `schedulingType: automatic`.
- **No first comment** (needs a paid plan). Put sources as plain text in the caption.
- **Blog link: never in the caption.** If the post has a blog, the caption ends with "Full deep dive: link in the comments." and `post.md` carries the ready-to-paste comment, e.g. "Full explainer with diagrams: https://www.subhadeepghorai.in/blog/<slug>". If it has no blog, omit that line and write a plain discussion-prompt comment.
- Caption must contain "Decoded #NN" (the metrics tracker detects posts by it).
- Free plan holds 10 scheduled posts.

## 5. Blog post (only when the post has depth; about one a week)
Follow `tools/blog/README.md`: one JSON file `client/src/content/blog/<slug>.json` plus its preview image in `JACOBIAN01/subhadeep-portfolio`, dated the day the PR is opened (never in the future), validated with `tools/blog/validate.mjs`. Branch → PR, never push to `main`. No `gate` (interactive demo) figure. If the repo can't be reached, finish the post without a blog line and say so in the report.

## 6. Record
Update `meta.json` (status "scheduled", buffer_post_id, asset_base), commit and push decoded-content, and add a row to the log in the project's `content-plan.md`. If an archive post was used, mark it used in `archive.md`.

## Paused: motion-graphic video
Videos are paused (Subhadeep, 6 Nov 2026: viewers found them confusing). `tools/MOTION-GRAPHICS.md`, `motion.js`, `frames.js`, `video.js` and `motion-template.html` stay for a possible return. Do not make videos until Subhadeep asks.

## Carousel cover and document-title rules (learned from Decoded #01 on LinkedIn mobile)
- LinkedIn shows a document post as a swipeable strip (page 1 next to a sliver of page 2) and overlays a grey chip with the document title and page count on the top ~12% of page 1. So: **keep the top 200 px of the cover empty** (the renderer hides the header bar on slide 1 for this), and set the Buffer document `title` to **20 characters or fewer** (e.g. "How AI hunts bugs").
- Cover text: pill (optional), headline, one blue supporting line, "Swipe →" at 38 px. No kicker or date lines under 38 px; nothing on any slide under 28 px.
- Cover claims carry their qualifier or attribution ("OpenAI says…", "about 7 in 10 sites we can identify").
- A full-screen look in the feed only comes from a single image or a video; documents always render as the strip.
