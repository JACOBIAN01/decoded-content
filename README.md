# Decoded: content workspace (private)

Production workspace for the *Decoded* LinkedIn series. Readers never see this repo. Since 6 Nov 2026 the series has no demos: the public repo [JACOBIAN01/decoded](https://github.com/JACOBIAN01/decoded) only hosts PDFs for Buffer (older demo folders stay there) and is never linked from a caption.

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

## Layout

Weeks 1 and 2 (3 posts each, with demo video) stay in `weeks/` as history. From Week 3 each post gets its own folder:

```
posts/2026-11-09-<slug>/
  research.md      # sources; every claim tagged Documented or Our build
  post.md          # 5 hooks (best marked), caption, comment for Subhadeep, checklist
  deck.js          # 9-slide carousel (slide 7 = worked example, no code)
  slides/          # exported PDF and PNGs
  meta.json        # due date, Buffer post id, status, topic type, hook style
```

## Schedule

| When | Posts (10:00 IST) | Topic | Source |
|---|---|---|---|
| 2026-W44 | 25, 28, 29 Oct | PHP2Shell | Trending |
| 2026-W45 | 2, 4, 5 Nov | Binance $6.3B theft | Trending |
| From 9 Nov | **Mon, Wed, Fri**, PDF carousels only | One topic per post (max 2 on the same topic) | Trending, or a stand-alone post from `archive/` on quiet days |

The producer runs Sun/Tue/Thu at 21:08 IST and builds the next post. No videos, no demos, no GitHub links in captions.
