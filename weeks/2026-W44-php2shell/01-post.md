# Decoded #01 · Sun 25 Oct 2026, 20:00 IST (moved from Tue 27 Oct so the story is fresher) · Carousel (decoded-01.pdf)

## Hooks (5; ★ = used)
1. ★ An AI helped find a 14-year-old flaw in the code behind 70% of websites. Governments pulled sites offline.
2. Germany, France and Finland switched off government websites this week. Not because of hackers. Because of a bug AI helped find.
3. The code behind 7 in 10 websites had a hidden flaw for 14 years. In August, AI helped spot it.
4. One crash. One skipped clean-up. One of the worst bugs in PHP's history.
5. A server forgot to tidy up after one visitor. That's how a 14-year-old flaw worked.

## Caption (v2, as scheduled in Buffer; reposted Sun 25 Oct 20:00 IST)
OpenAI says AI helped find a 14-year-old bug in PHP. On 21 Oct, PHP shipped an emergency fix.

PHP runs about 7 in 10 sites with a known server language, from WordPress blogs to online shops. The bug is nicknamed PHP2Shell (CVSS 9.2, CVE-2026-109618 / 109619), and governments in several countries took some sites offline.

What actually went wrong? In 9 slides, from zero: what a server worker is, why one crash can leave data behind, and why that can hand an attacker control of a server.

Swipe through, then watch the leak happen live on Wednesday.

Running PHP? Update to 8.2.35, 8.3.36, 8.4.27 or 8.5.12 and restart your workers.

Where in your own project could a crashed request leave data behind? Tell me below.

Sources: PHP security release via BleepingComputer and Help Net Security; Decrypt; Al Jazeera; W3Techs (22 Oct 2026). Demo code: GitHub → JACOBIAN01/decoded.

#Cybersecurity #WebDevelopment #AI

## First comment (NOT posted: needs a paid Buffer plan; sources/repo are in the caption instead)
Sources: PHP security release (via BleepingComputer, Help Net Security), Decrypt, Al Jazeera, W3Techs. Full list + demo code: github.com/JACOBIAN01/decoded

## Checklist (post-selection-rules §7)
- [x] Story 5 / Trend 5
- [x] Best of 5 hooks
- [x] Slide 2 personal stake
- [x] Scary claims sourced (research.md)
- [x] No exploit detail; Indian outage link NOT claimed; CERT-In NOT claimed
