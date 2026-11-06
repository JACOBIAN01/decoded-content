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
- A blog post on subhadeepghorai.in/blog (one JSON file per post in JACOBIAN01/subhadeep-portfolio, no code changes; follow `tools/blog/README.md`, validate with `tools/blog/validate.mjs`) is written **only for a post with real depth** (score 20+ or a mechanism worth a diagram), about one a week. Blog posts have **no interactive demo** (no `gate` figure). **The blog link never goes in a LinkedIn caption**: Subhadeep posts it as a comment. A post with a blog says "link in the comments" in the caption and carries the ready-to-paste comment in its `post.md`. A post without a blog has no such line; its comment is a plain discussion prompt.
- Carousel covers: keep the top 200 px empty (LinkedIn overlays a title chip), document title ≤ 20 characters, cover text ≥ 38 px, attribute claims. See tools/README.md.
- Assets (PDF, cover PNG) are hosted on jsDelivr from the public repo JACOBIAN01/decoded only because Buffer needs a public URL. That repo is a file host, not a demo: never link to it from a caption.
