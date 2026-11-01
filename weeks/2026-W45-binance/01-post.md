# Decoded #04 · Mon 2 Nov 2026, 10:00 IST (moved from Tue for freshness) · Carousel (decoded-04.pdf)

## Hooks (5; ★ = used)
1. ★ About $6.3 billion left Binance on 29 October. Binance says no secret key leaked. So who signed the withdrawals?
2. On 29 October, about $6.3 billion left Binance. Nobody cracked a password. The exchange's own systems signed it, says Elliptic.
3. The FBI says North Korea took about $6.3 billion from Binance. Here's how an exchange decides to send money.
4. An exchange keeps your crypto in a till and a night safe. On 29 October, attackers emptied the till.
5. Binance says it has replaced about 95% of a $6.3 billion theft. What actually broke?
(★ kept: strongest open question. "No secret key leaked" = Binance's "no evidence of a wallet private key leak". "30 minutes" dropped: see research.md.)

## Caption
On 29 October, about $6.3 billion in crypto left Binance, the world's biggest exchange. Binance says no secret key leaked.

So who signed the withdrawals?

In 9 slides, from zero: why an exchange keeps your coins in a "till" and a "night safe", why a withdrawal is just a signed message, and how a system can be tricked into signing for someone else. Security people call it a confused deputy.

Where things stand: the FBI says North Korea's TraderTraitor unit did it. Binance began restoring withdrawals in phases on 1 November and says it has replaced about 95% of the stolen assets. It hasn't published a root cause yet, so slides 5 and 6 explain the class of failure, not the exact attack.

Should one "trusted" machine ever be able to move money on its own? Tell me below.

Full deep dive, with a demo you can try: link in the comments.

Sources: Binance via CoinDesk and CBS News; FBI via CBS News/AFP; Elliptic. Demo code: GitHub → JACOBIAN01/decoded.

Decoded #04 · Wednesday: watch two simple rules stop the drain.

#Cybersecurity #SystemDesign #Crypto

## Comment (Subhadeep posts this)
Full explainer, with diagrams and a withdrawal desk you can switch rules on and off in: https://www.subhadeepghorai.in/blog/binance-6-3-billion

## Checklist (post-selection-rules §7)
- [x] Story 5 / Trend 5 (24/26, re-checked 1 Nov)
- [x] Best of 5 hooks; line 1 a fact, line 2 the question
- [x] Slide 2 personal stake (your coins live with the exchange)
- [x] Every number attributed (research.md); dated "29 October", never "this week"
- [x] No root cause claimed; slide 6 labelled Our build; no attack method
- [x] Cover: top 200 px empty, text ≥ 38 px; document title ≤ 20 chars: "Who signed $6.3B?" (17)
- [x] Blog link not in caption
