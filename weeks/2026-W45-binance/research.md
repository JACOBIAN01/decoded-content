# Week 2 research: the Binance theft (29 Oct 2026)

Re-checked Sun 1 Nov 2026, 23:30 IST (CoinDesk 1 Nov 17:21 UTC update; CBS News/AFP 1 Nov). Builds on the trend-log WEEKLY PICK (week of 2 Nov) and the 31 Oct Elliptic read. Every claim on a slide must appear here with its tag.

## Documented (safe to state, with the attribution shown)

| Claim | Source(s) |
|---|---|
| On 29 Oct 2026, about **$6.3 billion** in crypto was taken from Binance's **hot wallets** | Binance estimate, via CoinDesk (1 Nov), ABC News |
| Other estimates: Chainalysis ~$5.91B, Elliptic ~$6.43B; previous record Bybit (Feb 2025) ~$1.5B | The Hacker News citing Chainalysis and Elliptic; CBS News |
| Binance: **"no evidence of a wallet private key leak"** | Binance via The Block / THN (30 Oct) |
| Binance: may involve a compromised DevOps engineer's laptop; attacker reached a service container used to submit withdrawals; "additional points of breach" | Binance via BleepingComputer, THN (30 Oct) → say "Binance says it **may** have started with…" |
| Teng: "not a single 'one-click' action" | Binance co-CEO via THN |
| **No root cause / post-mortem published yet** (as of 1 Nov) | CoinDesk 1 Nov (none described); trend log |
| FBI (31 Oct): North Korea's **TraderTraitor** was responsible for the theft "of more than $6 billion USD in virtual assets"; actors converting assets into Ethereum; urged blocking their addresses | FBI statement via CBS News/AFP (1 Nov), ABC News |
| Binance began restoring withdrawals **in phases on Sun 1 Nov** (phase one window 06:00–09:00 UTC; BTC, ETH, USDT, USDC, BNB, XRP first; others after security checks) | Binance via CoinDesk (1 Nov), CBS News |
| Binance says it has **replaced about 95%** of affected assets (up from 90%); rest are less liquid tokens; "Binance will bear the financial impact of the stolen funds" | Binance via CoinDesk (1 Nov), Crypto Times |
| About **$2.84 billion** verified frozen, mostly USDT/USDC; about **$3.33 billion** held in assets that can't be frozen | Elliptic (primary investigator, read 31 Oct) |
| "About $3 billion" immobilised, mostly stablecoins their issuers can block; BTC and ETH can't be frozen the same way | CoinDesk (1 Nov) |
| Tether froze ~1.567 billion USDT; Circle ~$800M USDC | THN citing Tether, Circle |
| Stablecoins (USDT, USDC) are issued by companies whose token contracts include a blacklist/freeze function; Bitcoin and Ether have no issuer | General, well documented (issuer terms; THN/CoinDesk explainers) |
| A blockchain transaction is valid if it carries a valid signature from the address's private key | General (how blockchains work) |
| "Confused deputy" = term from Norm Hardy's 1988 paper | Hardy, "The Confused Deputy" (1988) |

## Our build (label "Our build" or "Simplified")

- The till / night-safe analogy (hot wallet / cold wallet / signing service).
- The "confused deputy" diagram as **the class of failure that fits the facts released so far**, not a reconstruction. Elliptic's framing: the attackers got Binance's own systems to sign. We never claim the exact path.
- The withdrawal desk demo (`JACOBIAN01/decoded/02-withdrawal-desk`): $100M hot wallet, $900M cold vault, $1M cap needing a second human, $5M/hour per machine. Real output: no rules → $100M stolen, customer blocked; fixed → $5M stolen, customer paid. Numbers are invented.
- The 6-line stablecoin `transfer()` with a blacklist check (simplified, not Tether's contract).

## Do NOT claim

- Any root cause or the exact attack path (no post-mortem). Never "one laptop did it": Binance says "may involve" and reports extra breach points.
- That customers lost money (Binance says it bears the loss), that Indian users were affected, or that the gap is fully closed (95%, Binance's figure).
- "In about 30 minutes" on a cover (Elliptic: first drain then 10 more chains within ~30 min, but a second wave after 23:00 UTC). Leave it out this week.
- "Largest theft of any kind" (only "largest crypto theft on record").
- "Inside job" or any speculation about who at Binance.
- Proof-of-reserves results (Binance says BTC, ETH, USDT, BNB, SOL, USDC, XRP and others are "fully backed 100%" on its PoR site, but the promised full report isn't out). Skip it.
- Prices, BNB moves, outflow figures, investment advice.
- **Never describe** the delegation/authorization method, pre-signed transactions, laundering paths, mixers or bridges.

## Wording rules

- Attribute every number: "about $6.3 billion (Binance)", "about $2.8 billion frozen (Elliptic)", "about 95% replaced (Binance)", "the FBI says North Korea…".
- Date it "On 29 October", never "this week".
- "No secret key leaked" = Binance's "no evidence of a wallet private key leak": write "Binance says no secret key leaked".

## Sources

- CoinDesk, "Binance opens crypto withdrawals in phases…" (1 Nov 2026): https://www.coindesk.com/markets/2026/11/01/binance-opens-crypto-withdrawals-in-phases-starting-with-bitcoin-following-usd6-3-billion-hack
- CBS News / AFP, "Binance resumes withdrawals for some major cryptocurrencies after $6 billion heist" (1 Nov 2026): https://www.cbsnews.com/news/binance-crypto-heist-withdrawals/
- Elliptic, Binance analysis (primary investigator): https://www.elliptic.co/insights/binance-largest-hack-in-history/
- ABC News (FBI attribution): https://www.abc.net.au/news/2026-11-01/fbi-blames-north-korea-binance-cryptocurrency-exchange-hack/107333446
- The Hacker News (figures, freezes): https://thehackernews.com/2026/10/binance-suffers-security-breach.html
- BleepingComputer (DevOps laptop): https://www.bleepingcomputer.com/news/security/binance-links-63-billion-crypto-theft-to-compromised-devops-laptop/
- Crypto Times (95%): https://www.cryptotimes.io/2026/11/01/binance-resumes-withdrawals-after-6-3b-hack-says-95-of-stolen-assets-now-covered/
