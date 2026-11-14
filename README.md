# Decoded: content workspace

Production workspace for the *Decoded* LinkedIn series: short "how it actually works" PDF carousels on trending tech stories, for students and curious beginners in India.

This repo is **public** (since 14 Nov 2026) for one reason: it also hosts each post's PDF and cover image, which Buffer fetches through jsDelivr. Readers never see it, and no caption, slide or comment links to it. It is the only repo for the series: the old `JACOBIAN01/decoded` repo was deleted on 14 Nov 2026, and there is no blog.

## Where things live

| What | Where |
|---|---|
| Rules for choosing every post (hook + trend first) | claude.ai Project "LinkedIn Agent" → `decoded/post-selection-rules.md` |
| Current plan + log of weeks run | Project → `decoded/content-plan.md` |
| Reserve posts for quiet news weeks | Project → `decoded/archive.md` (no local copy) |
| Weekly trend scan (Thursday) | Project → `decoded/trend-log.md` |
| Sunday slate for the coming Mon/Wed/Fri | Project → `decoded/weekly-slate.md` |
| Metrics snapshots and retros | Project → `decoded/metrics-log.md` |
| Each post's research, caption, slides, PDF | This repo → `posts/<YYYY-MM-DD>-<slug>/` |
| How a post is built and scheduled | This repo → `tools/README.md` (runbook) |

The project docs are the source of truth for plans and logs; this repo holds the produced content and its files.

## Layout

Weeks 1 and 2 (old format, with videos and demos) stay in `weeks/` as history. From Week 3 each post gets its own folder, named for the day it goes out:

```
posts/2026-11-13-<slug>/
  research.md          # sources; every claim tagged Documented or Our build
  post.md              # 5 hooks (best marked), caption, comment for Subhadeep, checklist
  deck.js              # 9-slide carousel (slide 7 = worked example, no code)
  decoded-NN.pdf       # the carousel Buffer posts (served by jsDelivr)
  decoded-NN-cover.png # slide 1, used as the document thumbnail
  meta.json            # due date, Buffer post id, status, topic type, hook style
```

File links are pinned to a commit:
`https://cdn.jsdelivr.net/gh/JACOBIAN01/decoded-content@<commit>/posts/<YYYY-MM-DD>-<slug>/<file>`

## Schedule

| When | Posts (10:00 IST) | Topic | Source |
|---|---|---|---|
| 2026-W44 | 25, 28, 29 Oct | PHP2Shell | Trending |
| 2026-W45 | 2, 4, 5 Nov | Binance $6.3B theft | Trending |
| From 9 Nov | **Mon, Wed, Fri**, PDF carousels only | One topic per post (max 2 on the same topic) | Trending, or a stand-alone post from the Project's `archive.md` on quiet days |

Scheduled runs (IST): trend scan Thu 7:38 AM, metrics snapshot Thu 8:38 PM, retro and slate Sun 7:37 PM, and the producer Sun/Tue/Thu 9:08 PM, which builds the next post and schedules it in Buffer. No videos, no demos, no blog, no GitHub links in captions.
