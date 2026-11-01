# Decoded #05 · Wed 4 Nov 2026, 10:00 IST · Motion graphic video (decoded-05.mp4, 34 s)

## Hooks (5; ★ = used)
1. ★ $6.3B. No key leaked, says Binance. So who signed it? (frame 0)
2. One compromised machine, and my toy exchange drains its whole hot wallet. Two simple rules stop it. Watch.
3. This is a toy crypto exchange. One of its trusted machines just got hacked. Here's what stops the money walking out.
4. Same attack, two runs: no rules, then two boring rules. $100M out vs $5M.
5. Two-person approval sounds boring. In this demo, it's what saves the real customer's money.

## Storyboard (34 s, muted-first v3)
| Beat | Time | Kinetic caption | What moves | Badge |
|---|---|---|---|---|
| 0 Hook | 0–3 s | "$6.3B / No key leaked. / says Binance" (200 px / 112 px) | number pulses, line shakes from 0.3 s | Documented · Binance statements |
| 1 Open loop | 3–5 s | "So who signed it?" | question rises in | Documented |
| 2 One idea | 5–9 s | "The key never leaves the signer." | signing service + key; app's $0.5M request flies in, SIGNED stamp, coin leaves the hot wallet | Our build |
| | 9–14.4 s | "It signs for trusted machines." → "Hack one. Get signatures." | ops machine turns red (flash, shake), its $4M request is signed. Support: "No key stolen. Security calls this a confused deputy." | Our build |
| 3 Drain | 14.4–22 s | "No rules: $100M gone." → "The real customer? Blocked." | 12 requests stream in, hot wallet counts $100M → $0, bar turns red; customer's $0.5M bounces BLOCKED; cold vault $900M stays | Our build · npm start |
| 4 Fix | 22–31 s | "Add two boring rules." → "Drain stalls at $5M." → "The customer still gets paid." | rules pop into the signer; $4M requests bounce, five $1M pass ($100M → $95M), speed limit bounces the rest, customer signed ($94.5M) | Our build · npm run fixed |
| 5 End + loop | 31–34 s | "One hacked machine shouldn't be enough." + A/B question | options slide in; last 0.4 s cross-fades to frame 0 | — |

Numbers on screen match the demo's real output (`before.txt`, `after.txt` in `decoded/02-withdrawal-desk`): no rules → $100M stolen, customer blocked; rules → $5M stolen, customer paid, $94.5M left.

## Caption
$6.3 billion left Binance on 29 October. Binance says no key leaked.
So who signed it?

Would you wait 1 hour on big withdrawals if it made theft much harder? A) Yes, worth it  B) No, too slow. Tell me below.

In 34 seconds: a toy exchange with a hot wallet, a cold vault and a signing service that never shows its key. One trusted machine gets hacked. With no rules, it drains $100M and the real customer can't withdraw. Add two boring rules (a second human for big withdrawals, and a speed limit per machine) and the drain stalls at $5M.

Watch to the end: the fix is at 0:22.

Our build: a simplified simulation, not Binance's system. Binance hasn't published its root cause.

Full deep dive, with a demo you can try: link in the comments.

Run it yourself: GitHub → JACOBIAN01/decoded (02-withdrawal-desk). Sources: Binance via CoinDesk; FBI via CBS News/AFP.

Decoded #05 · Tomorrow: why $2.8 billion froze and the Bitcoin didn't.

#Cybersecurity #JavaScript #SystemDesign

## Comment (Subhadeep posts this)
Try the withdrawal desk yourself (switch the rules on and off): https://www.subhadeepghorai.in/blog/binance-6-3-billion#try-it-the-withdrawal-desk

## QA checklist (MOTION-GRAPHICS.md §5)
- [x] Muted test: 390 px frames at 0.5 s and 10 s readable
- [x] Hook ≥ 96 px, ≤ 7 words, moving by 0.5 s; thumbnailOffset 500 ms
- [x] Payoff by 12 s (trusted machine hacked → signer signs)
- [x] 34 s; a change every 2–3 s
- [x] Kinetic captions ≤ 6 words, 72 px, beside the action
- [x] Nothing in the bottom 140 px or side 60 px; no overlaps in stills
- [x] Binary end question; last frame matches frame 0
- [x] Every scene badged; Documented claims in research.md
- [x] No attack steps, payloads or request shapes
- [x] On-screen output matches `npm start` / `npm run fixed`
- [x] Caption: line 1 = frame-0 hook; binary question in the first 400 characters; "fix is at 0:22"
- [x] Blog link not in caption
