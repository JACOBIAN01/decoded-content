# Decoded #11 research: the vendor problem (Optimizely, with Uber/Fireworks as a second case). Built Tue 24 Nov 2026 for Wed 25 Nov

## Documented
Optimizely (read in full by a helper this run: Dark Reading, Sonatype 17 Nov, SecureWorld 19 Nov, Inc42 18 Nov; first report by Report URI / Scott Helme):
- Malicious JavaScript was added to customers' "Project JavaScript" custom-code fields in Optimizely Web Experimentation and run in visitors' browsers on the customers' own sites. Sonatype: "The code was added to project settings and delivered as part of a service those websites relied on."
- Report URI checked 1,611 Optimizely scripts and found malicious code in 188 scripts tied to 178 organisations (Dark Reading, Sonatype, Inc42; SecureWorld says "at least 178"). 178 is Report URI's count.
- First injected payload detected 04:21 UTC on 16 Nov (SecureWorld timeline).
- Helme (Dark Reading): "We don't know how the attacker got write access." Optimizely says a vulnerability; experts say it is unclear whether it was a platform flaw or stolen credentials.
- Optimizely (Dark Reading): "We've fixed the vulnerability and removed the injected code from affected projects." Inc42 quotes Optimizely: identified 16 Nov, blocked the vulnerable path, removed the code, revoked tokens, "fully remediated", investigation continuing. Sonatype/SecureWorld: account-level cleanup finished early 17 Nov. Optimizely's own status page was blocked to our fetcher (permission error), so Optimizely's words are via press.
- Sonatype: the code could swap crypto addresses, capture card details typed into website forms, collect some browser-accessible data and try to deliver iOS exploit chains. Inc42: it could not access card details entered in hosted payment iframes. Confirmed crypto to attacker wallets about $7,040 (Inc42, later revised by Report URI to about $7,151); sources differ slightly. Sonatype: reporting does not establish how many card details were captured.
- Defences named by experts: Content Security Policy, Subresource Integrity (rarely practical for A/B snippets), fewer third-party scripts, keep A/B scripts off checkout, login and account-recovery pages (SecureWorld, Dark Reading). SecureWorld citing Report URI's crawl: 24 of 178 had a strict CSP, 68 none.
Uber / Fireworks (TechCrunch 16 Nov, BleepingComputer 17 Nov, Cybernews, all read by a helper):
- TechCrunch: the provider is Fireworks AI; Uber spokesperson: "one of our third-party vendors, Fireworks.ai, which had access to some Uber data". Names, addresses, dates of birth, driver's licence numbers exposed. 149,346 people total (BleepingComputer cites a Maine AG filing; TechCrunch cites an Oregon AG notice; the sources disagree on which filing). Uber: "we have not identified any misuse"; it severed data connections with the provider. Earlier state notices counted 7,870 licences; the total rose.

## Our build
The canteen analogy (slide 4) and slide 7's two checkout setups (12 scripts vs 3, invented numbers) are ours and labelled "illustration".

## Do NOT claim
That Optimizely itself was "hacked" or how the attacker got in (unknown); that any named website lost customer data (visitors received the code; losses unknown); that Optimizely, Fireworks and any other vendor case share an attacker or cause; any India impact (none found); the Cursor / malicious extension link to Fireworks (the pages read describe no marketplace or credential path); exact card-theft or iPhone-compromise counts; CoinDCX (single secondary, left out). Never describe the injected code, exploit kits or the flaw. Fix dates are Optimizely's account via press.

## Verification gaps
Optimizely's status page and the Maine/Oregon filings were not opened (blocked or not found); everything rests on Dark Reading, Sonatype, SecureWorld, Inc42, TechCrunch and BleepingComputer. Primary-adjacent: Report URI's own post not opened.

## Sources
Dark Reading (Optimizely third-party risk); Sonatype blog (17 Nov 2026); SecureWorld (19 Nov 2026); Inc42 (18 Nov 2026); TechCrunch (16 Nov 2026); BleepingComputer (17 Nov 2026); Cybernews.
