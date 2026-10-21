# Decoded: content workspace (private)

Production workspace for the *Decoded* LinkedIn series. Readers never see this repo; the public demo code lives in [JACOBIAN01/decoded](https://github.com/JACOBIAN01/decoded).

## Where things live

| What | Where |
|---|---|
| Rules for choosing every post (hook + trend first) | claude.ai Project "LinkedIn Agent" → `decoded/post-selection-rules.md` |
| Locked plan for weeks 1–3 | Project → `decoded/content-plan.md` |
| Trend scans and weekly picks | Project → `decoded/trend-log.md` (written daily by a scheduled task) |
| Metrics snapshots and retros | Project → `decoded/metrics-log.md` (written daily by a scheduled task) |
| Each week's posts, slide scripts, exports | This repo → `weeks/<ISO-week>-<topic>/` |

The project docs are the source of truth for plans and logs; this repo holds the produced content.

## Week folder layout

```
weeks/2026-W44-linkedin-feed/
  research.md      # sources; every claim tagged Documented or Our build
  01-post.md       # Tue: post text, 5 hooks (best marked), first comment
  02-post.md       # Wed: demo video script + post text
  03-post.md       # Thu: post text + repo link for first comment
  slides/          # HTML source and exported PDFs, MP4
  meta.json        # dates, Buffer post ids, status, content features for metrics
```

## Schedule

| Week | Posts (~10 AM IST) | Topic |
|---|---|---|
| 2026-W44 | 27, 28, 29 Oct | How LinkedIn decides who sees your post |
| 2026-W45 | 3, 4, 5 Nov | How AI browser agents click around websites |
| 2026-W46 | 10, 11, 12 Nov | What a sandbox is, and how agents escaped one |
