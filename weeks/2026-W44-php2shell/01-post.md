# Decoded #01 · Tue 27 Oct 2026, 10:00 IST · Carousel (decoded-01.pdf)

## Hooks (5; ★ = used)
1. ★ An AI helped find a 14-year-old flaw in the code behind 70% of websites. Governments pulled sites offline.
2. Germany, France and Finland switched off government websites this week. Not because of hackers. Because of a bug AI helped find.
3. The code behind 7 in 10 websites had a hidden flaw for 14 years. In August, AI helped spot it.
4. One crash. One skipped clean-up. One of the worst bugs in PHP's history.
5. A server forgot to tidy up after one visitor. That's how a 14-year-old flaw worked.

## Caption
An AI helped find a 14-year-old flaw in the code behind 70% of websites.
Governments pulled sites offline. So what did it actually find?

This week, PHP shipped an emergency fix for two critical flaws nicknamed PHP2Shell (CVSS 9.2). PHP runs about 7 in 10 websites with a known server language: WordPress blogs, shops, news sites.

The idea behind the bug is surprisingly simple:
→ Servers reuse the same "worker" for visitor after visitor
→ If a request crashes halfway, the clean-up can get skipped
→ Leftover data stays in memory, and the next request walks into it

In PHP's case, that leftover state could let an attacker run their own code on the server. Researchers at Calif, Wiz and OpenAI found it with the help of AI models.

I broke it down from zero in 9 slides. Swipe through.

Run a PHP site? Update to 8.2.35, 8.3.36, 8.4.27 or 8.5.12 today.

AI helped find this bug. Good news or bad news for security? Tell me what you think.

This is Decoded #01: the tech everyone's talking about, explained from zero. Tomorrow I'll show the leak happening live.

#Cybersecurity #WebDevelopment #AI

## First comment (NOT posted: needs a paid Buffer plan; sources/repo are in the caption instead)
Sources: PHP security release (via BleepingComputer, Help Net Security), Decrypt, Al Jazeera, W3Techs. Full list + demo code: github.com/JACOBIAN01/decoded

## Checklist (post-selection-rules §7)
- [x] Story 5 / Trend 5
- [x] Best of 5 hooks
- [x] Slide 2 personal stake
- [x] Scary claims sourced (research.md)
- [x] No exploit detail; Indian outage link NOT claimed; CERT-In NOT claimed
