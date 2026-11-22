# Decoded #10 research: Microsoft 365 outage, 12-13 Nov 2026 (built Sun 22 Nov 2026 for Mon 23 Nov)

## Documented
Primary: Microsoft's preliminary Post Incident Report (PDF copy hosted at next.ink, "Report Date: November 15, 2026"), read in full by a helper this run. Incident IDs EX1550543 (Exchange) and MO1550821.
- Start 16:20 UTC Thu 12 Nov (9:50 pm IST); customers no longer in active impact 16:10 UTC Fri 13 Nov. About 24 hours.
- "three main factors that together caused a global outage for the networking gateway": (1) a latent defect that made Windows servers overwhelmed and unresponsive (from a change deployed worldwide from July, "for more than three months", without impact); (2) a surge in load raised the chance of hitting it (Teams traffic had failed over to the gateway at 01:07 UTC on 12 Nov); (3) "nearly 14% of server capacity for the networking gateway was out of service due to an unrelated issue".
- "At its lowest, more than 80% of servers were unresponsive." Restarted servers "were immediately overwhelmed by waiting traffic and became unresponsive again".
- "due to a separate issue, the normal bulkheads between these different partitions did not stop the cascading failure". Rollback, flighting and feature flags "were unable to quickly revert the change". Exchange Online cannot fail out of the gateway "for scale reasons".
- Services listed: Exchange, Copilot, Teams, SharePoint, OneDrive, Defender, Purview, Fabric, Intune, Planner, Power Apps, To Do, Power BI, Universal Print.
- Completed repairs: code path reverted to known good state; email delivery window extended; capacity added; monitoring for traffic-redirection and connection-handling health; guardrails for traffic distribution.
Independent: BleepingComputer (16 Nov, "nearly 24-hour outage", Charles Lamanna's apology) and The Register (16 Nov, same timeline). Neither mentions AI or a cyberattack.

## Our build
Slide 7 is an invented illustration (100 servers x 10 requests, 14 out, load 850 to 920, versus 120 servers, 17 out). Labelled; not Microsoft's system. Slide 4's front-door analogy is ours.

## Do NOT claim
That the other outages that fortnight (FAA, Chase, NSA, Apple) share this cause (companies say separate issues; their causes were not read from primaries); that a rush to patch AI-found bugs caused any outage (an investor's opinion, disputed; Microsoft's report names a July gateway change and does not mention AI); that the defect affects Windows in general; a cyberattack or foreign link; any India impact (none found); "36 hours" (a secondary figure; Microsoft's own window is about 24 h); that services were fully restored by 16:10 UTC without caveat. Never describe how to attack a gateway.

## Verification gaps
Final PIR (due 20 Nov per the preliminary report) not found by two searches and not linked from the BleepingComputer or Register pages; slides rest on the preliminary report. Microsoft's own page was not opened (PDF copy and the two news articles were). The unrelated cause of the 14% capacity loss and the separate bulkhead issue are not named by Microsoft in the text read.

## Sources
Microsoft preliminary post-incident report (15 Nov 2026); BleepingComputer (16 Nov 2026); The Register (16 Nov 2026).
