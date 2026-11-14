# Instructions for Claude working in this repo

- Before writing any post, read `decoded/post-selection-rules.md` and `decoded/content-plan.md` and `decoded/archive.md` from the claude.ai Project "LinkedIn Agent". The 9-slide structure, hook rules and the Mon/Wed/Fri format rules there are mandatory.
- **Format (set by Subhadeep, 6 Nov 2026):** 3 posts a week, **Monday, Wednesday and Friday at 10:00 IST**, every post a **PDF carousel** (9 slides). **No videos for now** (motion graphics are paused; `tools/MOTION-GRAPHICS.md` stays on file). **No demos at all**: no runnable demo code, no repo to publish, no "Run it yourself" line, and **no GitHub link or "GitHub → …" text in any caption, slide or comment.**
- **One topic per post.** At most 2 posts on the same topic (the second must stand alone and open with a one-line recap). Never 3 in a row on one topic.
- Audience: students and curious beginners in India. Explain from zero.
- Every scary or surprising claim needs a primary source in `research.md`. Tag claims Documented vs Our build. No fake urgency, no how-to-attack details.
- Visual style: light theme, Apple-like, one sans font, ≤25 words per slide.
- Slide 7 is a **worked example**: one concrete walk-through with real numbers or a before/after, drawn with the existing slide types (`flow`, `timeline`, `big`, `list`). No code slide, no repo link.
- Never publish or schedule to Buffer without the post passing the checklist in post-selection-rules §7.
- Quiet days (no verified trending story scoring 18+/26) use a ready-made post from `decoded/archive.md` (the Tue/Thu carousels of an archive week work as stand-alone posts; ignore its Wednesday demo); mark it used.
- **No blog** (Subhadeep, 14 Nov 2026): nothing goes to subhadeepghorai.in or the portfolio repo. The comment in each `post.md` is a plain discussion prompt with no link, and no caption says "link in the comments".
- Carousel covers: keep the top 200 px empty (LinkedIn overlays a title chip), document title ≤ 20 characters, cover text ≥ 38 px, attribute claims. See tools/README.md.
- Assets (PDF, cover PNG) are committed into the post's folder in this repo (public since 14 Nov 2026) and served by jsDelivr pinned to the commit, only because Buffer needs a public URL. The old `JACOBIAN01/decoded` repo is deleted. Never link to this repo from a caption, slide or comment.
