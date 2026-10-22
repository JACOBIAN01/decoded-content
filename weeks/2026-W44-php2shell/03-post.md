# Decoded #03 · Thu 29 Oct 2026, 10:00 IST · Carousel (decoded-03.pdf)

## Hooks (5; ★ = used)
1. ★ AI spotted a bug humans missed for 14 years. Attackers have the same AI.
2. A honeypot caught someone trying the PHP2Shell attack 4 days before it was public.
3. The PHP team said it plainly: tools now find bugs faster, for defenders and attackers alike.
4. Bug hunting used to take experts months. AI just compressed it.
5. Calif, Wiz and OpenAI all found the same bug. Here's how AI reads code for flaws.

## Caption
AI spotted a bug humans missed for 14 years.
Attackers have the same AI. So how does the hunt actually work?

The PHP2Shell timeline:
→ Aug: Calif finds a version of the bug using GPT-5.6 Sol
→ Sept: OpenAI finds the full bug; Wiz finds it independently
→ 17 Oct: a honeypot logs an attack attempt, before the bug was public
→ 21 Oct: the patch ships a day early after details leak

How AI hunts for bugs, simplified:
1. Read the code at a scale no human can
2. Flag risky spots
3. Throw weird inputs at them (this is called fuzzing)
4. Watch for crashes, then humans confirm and report privately

Wiz said frontier AI "substantially reduced" the barrier to exploiting this bug. The PHP team's take: tools now find bugs faster than ever, for defenders and attackers alike.

The lesson for every student and developer: the winners are the ones who patch first.
→ Update dependencies weekly (npm audit, Dependabot)
→ Learn testing and fuzzing. It's a job skill now.

Should AI labs hunt for bugs in everyone's open-source code? I'd love to hear both sides.

Decoded #03 · Follow for next week's story, decoded from zero.

#AI #Cybersecurity #OpenSource

## First comment
Sources: Decrypt, Help Net Security, BleepingComputer, Al Jazeera. Demo code from this week: github.com/JACOBIAN01/decoded
