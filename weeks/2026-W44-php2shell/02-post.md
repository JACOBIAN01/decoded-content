# Decoded #02 · Wed 28 Oct 2026, 10:00 IST · Video (decoded-02.mp4, 28 s)

## Hooks (5; ★ = used)
1. ★ I built a tiny server that leaks one visitor's password to the next. Here's the bug behind PHP2Shell, live.
2. Ravi just saw Asha's one-time password. The server didn't get hacked. It just forgot to clean up.
3. 28 seconds. One crash. One leaked secret. One-line fix.
4. Yesterday I explained PHP2Shell. Today, watch the bug happen.
5. The most dangerous line of code is the clean-up you skipped.

## Caption
I built a tiny server that leaks one visitor's password to the next.
Here's the idea behind PHP2Shell, happening live.

What you're watching (real output, no edits):
→ Asha saves a private note, but her request crashes halfway
→ The crash skips the clean-up step
→ Ravi visits next, and the server shows him Asha's note

The fix is one idea: start every request from a clean slate, no matter what happened before.

This is a simplified JavaScript demo of the bug class, not PHP and not the real exploit. The real flaw lived deep inside PHP's memory handling for about 14 years, according to OpenAI.

Run it yourself in 30 seconds: npm start, then npm run fixed. Code is in the first comment.

Have you ever had a bug where data from one user showed up for another?

Decoded #02 · Tomorrow: how AI hunts for bugs, and why attackers can do it too.

#JavaScript #Cybersecurity #Programming

## First comment (NOT posted: needs a paid Buffer plan; sources/repo are in the caption instead)
Code (MIT, no installs): github.com/JACOBIAN01/decoded/tree/main/01-leftover-data
