# Decoded #02 · Wed 28 Oct 2026, 10:00 IST · Video (decoded-02.mp4, 51.5 s, motion graphic v2)

## Hooks (5; ★ = used)
1. ★ I built a tiny server that leaks one visitor's password to the next. Here's the bug behind PHP2Shell, live.
2. Subhadeep just saw Akshat's one-time password. The server didn't get hacked. It just forgot to clean up.
3. 98 s, motion graphiceconds. One crash. One leaked secret. One-line fix.
4. Yesterday I explained PHP2Shell. Today, watch the bug happen.
5. The most dangerous line of code is the clean-up you skipped.

## Caption (v2, as scheduled in Buffer 23 Oct)
A stranger's password just showed up on my screen. No hacker involved.

It's the same kind of bug behind PHP2Shell, the PHP flaw that made governments pull sites offline.

In 50 seconds: a crash skips one clean-up step, and the next visitor gets the leftovers. Then I zoom into the server's memory to show what really broke, and the one idea that fixes it.

Have you ever seen one user's data show up for another? Tell me below.

Run the demo yourself: GitHub → JACOBIAN01/decoded (folder 01-leftover-data). npm start, then npm run fixed.

Running PHP? Update to 8.5.12, 8.4.27, 8.3.36 or 8.2.35.

Documented: CVE-2026-109618 / 109619, CVSS 9.2 (BleepingComputer, Help Net Security). Our build: a simplified JavaScript demo, not PHP and not an exploit.

Decoded #02 · Tomorrow: how AI hunts for bugs, and why attackers can do it too.

#Cybersecurity #JavaScript #Programming

## First comment (NOT posted: needs a paid Buffer plan; sources/repo are in the caption instead)
Code (MIT, no installs): github.com/JACOBIAN01/decoded/tree/main/01-leftover-data
