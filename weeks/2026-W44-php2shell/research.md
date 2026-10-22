# Week 1 research: PHP2Shell (CVE-2026-109618, CVE-2026-109619)

Verified 22 Oct 2026. Every claim used on a slide must appear here with its tag.

## Documented (safe to state)

| Claim | Source(s) |
|---|---|
| Two flaws, nicknamed PHP2Shell: CVE-2026-109618 and CVE-2026-109619 | BleepingComputer, Help Net Security, watchTowr |
| Both let an attacker run code on a PHP server without logging in (remote code execution) | BleepingComputer, Help Net Security, watchTowr |
| CVSS v4.0 score 9.2 | watchTowr |
| Root cause in plain words: when a request ends abnormally (e.g. runs out of memory), PHP can leave memory in a broken state, and a later request on the same worker can use leftover ("stale") state | Help Net Security, BleepingComputer |
| Affects PHP serving web requests: PHP-FPM, Apache mod_php, php-cgi, FrankenPHP, LiteSpeed | BleepingComputer, Help Net Security |
| Fixed versions: 8.5.12, 8.4.27, 8.3.36, 8.2.35; backports for 7.4/8.0/8.1; 8.1 and older are out of official support | BleepingComputer, Help Net Security |
| Patches released 21 Oct 2026, a day early because details leaked | BleepingComputer, Decrypt |
| Found by researchers at Calif, Wiz and OpenAI; Calif used GPT-5.6 Sol in August, OpenAI found a fuller version in September; Wiz found both independently | Decrypt (citing OpenAI's Greg Brockman), BleepingComputer |
| The bug sat in PHP for about 14 years | Decrypt (OpenAI's statement; not independently verified) → say "according to OpenAI" |
| Wiz: frontier AI models "substantially reduced" the barrier to exploiting it; the chain was "at the edge of what human researchers could practically achieve" | Help Net Security, Al Jazeera |
| PHP Foundation: "Tools now find bugs faster than ever, for defenders and attackers alike." | Al Jazeera |
| Governments took sites offline or warned: Germany, France, Belgium, Netherlands, Finland, Czech Republic took some sites offline; US NSA public warning; UK NCSC said patch or take offline; Japan's PM posted a warning | Al Jazeera, BleepingComputer, Decrypt |
| Early attacks seen: Cloudflare observed attacks before patches; Amazon honeypot saw an attempt on 17 Oct | BleepingComputer, Help Net Security |
| PHP is used by 69.3% of websites whose server-side language is known (22 Oct 2026) | W3Techs |
| ~5.1 million PHP hosts exposed online (VirusTotal estimate) | BleepingComputer |
| Cloudflare deployed free WAF rules; patching is the only permanent fix | BleepingComputer, Help Net Security |

## Wording rules

- Say "about 70% of websites (that use a known server language)", not "70% of the internet".
- Say "the bug sat in PHP for 14 years, according to OpenAI".
- Say "AI helped find it", not "AI found it alone": humans at Calif, Wiz and OpenAI did the work with AI tools.

## Do NOT claim

- That IRCTC, SBI, Jio or any Indian outage was caused by PHP2Shell (unconfirmed).
- A CERT-In advisory (could not verify on 22 Oct; add only if a primary CERT-In page is found).
- That your college/any specific site is vulnerable.
- Any exploit steps, payloads, request shapes, or configuration tricks. Explain the bug class only.

## Our build (label "simplified demo")

The demo shows the *bug class*, "leftover state between requests", with a toy Node server that reuses a shared object across visitors. It is not PHP and not the real exploit.

## Sources
- [BleepingComputer: PHP ships emergency patches for critical PHP2Shell flaws](https://www.bleepingcomputer.com/news/security/php-ships-emergency-patches-for-critical-php2shell-flaws/)
- [Help Net Security: PHP2Shell patched, update now](https://www.helpnetsecurity.com/2026/10/21/php2shell-php-vulnerabilities-patched-cve-2026-109618-cve-2026-109619/)
- [watchTowr: PHP RCE FAQ](https://watchtowr.com/intelligence/php-cve-2026-109618-faq/)
- [Decrypt: Who found the PHP bug?](https://decrypt.co/381567/who-found-php-bug-governments-unplug-websites-chatgpt)
- [Al Jazeera: World leaders warn of PHP flaw](https://www.aljazeera.com/news/2026/10/22/world-leaders-warn-against-security-flaw-found-in-php-computer-programming)
- [W3Techs: PHP usage](https://www.w3techs.com/technologies/details/pl-php)
