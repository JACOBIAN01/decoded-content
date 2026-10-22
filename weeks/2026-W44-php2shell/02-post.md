# Decoded #02 · Wed 28 Oct 2026, 10:00 IST · Video (decoded-02.mp4, 98 s, motion graphic)

## Hooks (5; ★ = used)
1. ★ I built a tiny server that leaks one visitor's password to the next. Here's the bug behind PHP2Shell, live.
2. Ravi just saw Asha's one-time password. The server didn't get hacked. It just forgot to clean up.
3. 98 s, motion graphiceconds. One crash. One leaked secret. One-line fix.
4. Yesterday I explained PHP2Shell. Today, watch the bug happen.
5. The most dangerous line of code is the clean-up you skipped.

## Caption (as scheduled in Buffer, updated 23 Oct for the motion-graphic video)
Ravi just saw Asha's one-time password. Nobody hacked anything.
A server forgot to clean up. That same mistake sits behind PHP2Shell.

In 98 seconds, from zero: server and worker, why workers are reused, how a crash skips the clean-up, how leftover data reaches the next visitor, what it looks like in real memory, and the fix.

Documented: PHP2Shell (CVE-2026-109618/109619, CVSS 9.2); fixed in PHP 8.5.12, 8.4.27, 8.3.36, 8.2.35. Sources: BleepingComputer, Help Net Security.
Our build: the animation and Node demo are simplified; not PHP, not the real exploit.

Code: GitHub → JACOBIAN01/decoded (folder 01-leftover-data)
Question: Have you ever seen data from one user show up for another?
Decoded #02 · Tomorrow: how AI hunts for bugs, and why attackers can do it too.
#JavaScript #Cybersecurity #Programming

## First comment (NOT posted: needs a paid Buffer plan; sources/repo are in the caption instead)
Code (MIT, no installs): github.com/JACOBIAN01/decoded/tree/main/01-leftover-data
