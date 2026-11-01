# Writing the weekly blog post (JSON only, no code)

Each Decoded week gets one long-form post on `subhadeepghorai.in/blog/<slug>`. The portfolio
(`JACOBIAN01/subhadeep-portfolio`) has one React template; **a post is a single JSON file**.
Never change portfolio code for a post.

## Steps

```bash
# 1. Clone or pull the portfolio, branch off main
git -C ../subhadeep-portfolio fetch origin main && git -C ../subhadeep-portfolio checkout -b blog/<slug> origin/main

# 2. Write  ../subhadeep-portfolio/client/src/content/blog/<slug>.json   (file name = slug; format below)

# 3. Validate: fails with the exact block and field if anything is wrong
node tools/blog/validate.mjs ../subhadeep-portfolio/client/src/content/blog

# 4. Link-preview image -> client/public/og/blog-<slug>.png
NODE_PATH=$(npm root -g) node tools/blog/og.mjs ../subhadeep-portfolio/client

# 5. Build check in the portfolio, then push the branch and open a PR (never push to main)
cd ../subhadeep-portfolio/client && npm ci && npm run lint && npm run build
```

The PR's Vercel preview is the page Subhadeep reviews. Once merged, the post is live.

**The link never goes in a LinkedIn caption.** Captions end with "link in the comments";
put the ready-to-paste comment in each `NN-post.md` (see `../README.md`). Section anchors
are the heading text in kebab-case, e.g. `#the-confused-deputy`.

Reference post: `client/src/content/blog/binance-6-3-billion.json` in the portfolio.

---

## The file

The **file name is the slug**: `discord-on-google.json` becomes `/blog/discord-on-google`. Use kebab-case.

```json
{
  "title": "Your Discord messages are about to be googleable",
  "dek": "One or two sentences under the title: the hook plus the open question.",
  "description": "~150 characters for Google and the LinkedIn link preview.",
  "date": "2026-11-09",
  "tags": ["Privacy", "Search"],
  "series": "Decoded",
  "seriesNo": "07",
  "blocks": [ ]
}
```

Inline formatting in any text: `**bold**`, `` `code` ``, `[text](https://…)`. Nothing else.

## Text blocks

| Block | Shape | Use |
|---|---|---|
| lead | `{ "t": "lead", "c": "…" }` | First paragraph, larger. One per post. |
| p | `{ "t": "p", "c": "…" }` | Paragraph. |
| h2 / h3 | `{ "t": "h2", "c": "…" }` | Section headings (anchor = kebab-case of the text). |
| ul / ol | `{ "t": "ul", "items": ["…"] }` | Lists. |
| quote | `{ "t": "quote", "c": "…" }` | Pull quote. |
| callout | `{ "t": "callout", "kind": "documented", "c": "…", "src": "…" }` | `documented` (needs `src`), `ourbuild`, `note`. |
| timeline | `{ "t": "timeline", "items": [{ "when": "29 Oct", "what": "…" }] }` | What happened. |
| code | `{ "t": "code", "code": "…" }` | 8–15 lines. |
| keytakeaway | `{ "t": "keytakeaway", "title": "Decoder card", "items": ["…"] }` | Summary near the end. |
| sources | `{ "t": "sources", "items": [{ "label": "…", "href": "https://…" }] }` | **Required**, last. |
| divider | `{ "t": "divider" }` | Section break. |

## Figures

Every figure: `{ "t": "figure", "kind": "…", "label": "…", "caption": "…", "alt": "…" }`.
**`alt` is required**: one or two sentences explaining the mechanism in words (screen
readers and search engines get this). Say "Our build" in the caption for teaching models.

Tones: `blue orange red green purple grey`. Icons: `key lock unlock laptop server database
globe user users mail search shield alert cloud file phone`.

**`flow`**: a path through a system, a packet travelling box to box; runs cycle in turn.
```json
{ "t": "figure", "kind": "flow", "label": "How a crawler finds a message",
  "steps": [
    { "title": "Public channel", "sub": "message posted", "icon": "users" },
    { "title": "Crawler", "sub": "reads every public page", "icon": "search", "focus": true },
    { "title": "Search index", "sub": "anyone can query", "icon": "database" } ],
  "runs": [ { "label": "Setting on: indexed", "tone": "red" },
            { "label": "Setting off: skipped", "tone": "green" } ],
  "note": "Usernames are not published either way.", "caption": "…", "alt": "…" }
```
2–5 steps, 1–3 runs.

**`compare`**: same input, different outcomes; `blocked` lanes stop at a wall.
```json
{ "t": "figure", "kind": "compare", "label": "Same message, two settings",
  "lanes": [
    { "title": "Setting off", "status": "not indexed", "blocked": true, "chip": "stays", "note": "…" },
    { "title": "Setting on", "status": "searchable", "blocked": false, "chip": "public", "note": "…" } ],
  "caption": "…", "alt": "…" }
```
2–3 lanes; optional `tone` per lane.

**`split`**: where things live; two panes, optional share bars and a moving token.
```json
{ "t": "figure", "kind": "split", "label": "Where your data lives",
  "panes": [
    { "kicker": "Private", "title": "DMs and private servers", "body": "…", "icon": "lock", "tone": "green", "share": 80, "shareLabel": "most messages" },
    { "kicker": "Public", "title": "Discoverable servers", "body": "…", "icon": "globe", "tone": "orange", "share": 20 } ],
  "mover": "✉", "out": "shown to strangers", "caption": "…", "alt": "…" }
```
Exactly 2 panes.

**`gate`** (interactive): the reader switches rules on, presses the button, and sees which
requests get through. Usually the post's "try it" moment.
```json
{ "t": "figure", "kind": "gate", "label": "Who can find this message? · our build",
  "action": "Search for it",
  "rules": [
    { "id": "optout", "name": "Your opt-out switch", "hint": "Data & Privacy setting.",
      "why": "the author opted out", "block": { "field": "optedOut", "op": "is", "value": true } } ],
  "requests": [
    { "id": "a", "label": "Your message", "tag": "yours", "fields": { "optedOut": true } },
    { "id": "b", "label": "A stranger's message", "tag": "public", "bad": true, "fields": { "optedOut": false } } ],
  "passed": "Found by search.", "passedBad": "Found by anyone.", "stopped": "Hidden",
  "openNote": "Shown after a run where everything got through.", "caption": "…", "alt": "…" }
```
1–6 rules, 1–3 requests. A rule blocks a request when `block` is true for its `fields`.
Ops: `> >= < <= is not in notIn includes`; combine with `{ "any": [...] }` / `{ "all": [...] }`.
First blocking rule wins.

If a story truly needs a picture none of these can draw, propose a new generic figure kind
to Subhadeep (a code change to `BlogFigures.jsx` plus `validate.mjs` and this file). Never a
one-off for a single post.

## Writing rules

Same as the series: students and beginners in India, from zero, then one layer deeper.
Every scary claim in a `documented` callout with its source; contested facts say who
disagrees. "Our build" on simplifications. No how-to-attack detail, no fake urgency. End
with `keytakeaway`, a question for comments, then `sources`.
