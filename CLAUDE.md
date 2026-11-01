# Instructions for Claude working in this repo

- Before writing any post, read `decoded/post-selection-rules.md` and `decoded/content-plan.md` and `decoded/archive.md` from the claude.ai Project "LinkedIn Agent". The 9-slide structure and hook rules there are mandatory.
- Audience: students and curious beginners in India. Explain from zero.
- Every scary or surprising claim needs a primary source in `research.md`. Tag claims Documented vs Our build. No fake urgency, no how-to-attack details.
- Visual style: light theme, Apple-like, one sans font, ≤25 words per slide.
- Demo code goes in the public repo JACOBIAN01/decoded, under ~100 lines of plain JS, no paid keys.
- Never publish or schedule to Buffer without the post passing the checklist in post-selection-rules §6.
- Quiet weeks (no verified trending story scoring 18+/26) use a ready-made week from `archive/` and `decoded/archive.md`; mark it used.
- Each week also gets a blog post on subhadeepghorai.in/blog (one JSON file per post in JACOBIAN01/subhadeep-portfolio, no code changes; follow `tools/blog/README.md`, validate with `tools/blog/validate.mjs`). **The blog link never goes in a LinkedIn caption**: Subhadeep posts it as a comment. Captions say "link in the comments"; put the ready-to-paste comment in each `NN-post.md` (see tools/README.md).
- Wednesday videos are motion graphics, never terminal recordings: follow `tools/MOTION-GRAPHICS.md` (v3 muted-first: 12 rules, storyboard, engine, QA checklist; 30–40 s, ≥96 px hook on frame 0, kinetic captions, binary comment question, no voiceover), start from `tools/motion-template.html`, render with `tools/frames.js`.
- Carousel covers: keep the top 200 px empty (LinkedIn overlays a title chip), document title ≤ 20 characters, cover text ≥ 38 px, attribute claims. See tools/README.md.
