# Decoded: content workspace (private)

Production workspace for the *Decoded* LinkedIn series. Readers never see this repo; the public demo code lives in [JACOBIAN01/decoded](https://github.com/JACOBIAN01/decoded).

## Where things live

| What | Where |
|---|---|
| Rules for choosing every post (hook + trend first) | claude.ai Project "LinkedIn Agent" → `decoded/post-selection-rules.md` |
| Current plan + log of weeks run | Project → `decoded/content-plan.md` |
| Reserve weeks for quiet news weeks | Project → `decoded/archive.md`; drafts in `archive/` here |
| Trend scans and weekly picks | Project → `decoded/trend-log.md` (written daily by a scheduled task) |
| Metrics snapshots and retros | Project → `decoded/metrics-log.md` (written daily by a scheduled task) |
| Each week's posts, slide scripts, exports | This repo → `weeks/<ISO-week>-<topic>/` |

The project docs are the source of truth for plans and logs; this repo holds the produced content.

## Week folder layout

```
weeks/2026-W44-php2shell/
  research.md      # sources; every claim tagged Documented or Our build
  01-post.md       # Tue: post text, 5 hooks (best marked), first comment
  02-post.md       # Wed: demo video script + post text
  03-post.md       # Thu: post text + repo link for first comment
  slides/          # HTML source and exported PDFs, MP4
  meta.json        # dates, Buffer post ids, status, content features for metrics
```

## Schedule

| Week | Posts (~10 AM IST) | Topic | Source |
|---|---|---|---|
| 2026-W44 | 27, 28, 29 Oct | PHP2Shell: the 14-year-old flaw AI helped find | Trending |

From Week 2, each Sunday picks the biggest verified trending story (18+/26). In quiet weeks, a ready-made week from `archive/` is used instead (A1 LinkedIn feed, A2 browser agents, A3 sandbox).
