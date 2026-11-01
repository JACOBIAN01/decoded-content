// Slide content for Week 2 (Binance, 29 Oct 2026). Rendered by tools/render.js.
module.exports = {
  "decoded-04": {
    num: "04",
    slides: [
      { type: "hook", pill: "29 Oct 2026",
        title: "About $6.3 billion left Binance. It says no secret key leaked.",
        sub: "So who signed the withdrawals?" },
      { type: "big", label: "Why you should care", big: "On an exchange, your coins aren't in your pocket.",
        body: "The app holds them and owes you a balance, like a bank passbook. Its safety is your safety." },
      { type: "timeline", label: "What happened", items: [
        ["29 Oct", "About $6.3B drained from Binance's hot wallets"],
        ["30 Oct", "Binance: no evidence a private key leaked"],
        ["31 Oct", "FBI: North Korea's TraderTraitor did it"],
        ["1 Nov", "Withdrawals restart; Binance says 95% replaced"]],
        badge: "Documented", src: "Binance via CoinDesk; FBI via CBS News/AFP" },
      { type: "analogy", label: "The idea", big: "A shop's till and its night safe.", rows: [
        ["Till: cash for today's customers", "blue"],
        ["Night safe: most of the money, offline", "purple"],
        ["Cashier: pays anyone with a signed slip", "red"]],
        map: ["Till = hot wallet", "Safe = cold wallet", "Cashier = signing service"] },
      { type: "flow", label: "How it works · 1", steps: [
        ["You tap Withdraw", "", "blue"], ["Exchange checks the request", "", "blue"],
        ["Signing service signs it", "the key never leaves", "purple"], ["Blockchain checks the signature", "not the reason", "green"]],
        note: "The network only asks “is it signed?”, never “should this happen?”", badge: "Our build" },
      { type: "flow", label: "How it works · 2", steps: [
        ["Attacker takes over a trusted machine", "", "red"], ["It sends withdrawal requests", "", "red"],
        ["Signer sees a trusted sender", "", "purple"], ["Signs. Money moves.", "", "red"]],
        note: "No key stolen. The signer was tricked into using it: a “confused deputy”. Binance hasn't published its root cause.",
        badge: "Our build", src: "Simplified bug class, not the exact attack" },
      { type: "code", label: "The fix, in code",
        code: `// BUG: obey any trusted machine\nif (req.from.trusted) sign(req);\n\n// FIX: one hacked box isn't enough\nif (req.amount > CAP && req.ok < 2)\n  wait();   // needs a 2nd human\nelse if (hourly(req.from) > LIMIT)\n  block();  // speed limit\nelse sign(req);`,
        body: "Our demo: no rules, $100M stolen. Two rules, $5M. Watch it Wednesday.", badge: "Our build" },
      { type: "list", label: "What it means for you", items: [
        "On an exchange, the exchange holds the keys. Know that.",
        "Turn on 2FA and a withdrawal address allow‑list.",
        "Building an app? Check every request, even “internal” ones." ] },
      { type: "card", big: "The key stayed safe. The thing allowed to use it didn't.",
        chain: [["Hacked", "red"], ["Trusted", "purple"], ["Signed", "blue"], ["Gone", "red"]],
        question: "Should one “trusted” machine ever be able to move money alone?",
        next: "Wed · Watch two rules stop the drain" },
    ],
  },
  "decoded-06": {
    num: "06",
    slides: [
      { type: "hook", pill: "One layer deeper",
        title: "About $2.8 billion of the stolen crypto froze. The Bitcoin didn't.",
        sub: "Elliptic's count. Why does some money have an off switch?" },
      { type: "big", label: "Why you should care", big: "“Decentralised” doesn't mean nobody's in charge.",
        body: "Some coins are a company's ledger. Knowing which tells you who can freeze your money." },
      { type: "timeline", label: "What happened", items: [
        ["29 Oct", "About $6.3B taken from Binance (Binance)"],
        ["Hours later", "Tether and Circle freeze stolen stablecoins"],
        ["30 Oct", "About $2.8B frozen; $3.3B can't be (Elliptic)"],
        ["31 Oct", "FBI: thieves converting coins into Ether"]],
        badge: "Documented", src: "Elliptic; THN; FBI via CBS News/AFP" },
      { type: "analogy", label: "The idea", big: "A gift card vs cash.", rows: [
        ["Gift card: the shop can cancel it", "blue"],
        ["Cash: nobody can cancel a note in your hand", "purple"],
        ["Stolen? Only one can be stopped", "red"]],
        map: ["Gift card = USDT, USDC", "Cash = Bitcoin, Ether"] },
      { type: "flow", label: "How it works · 1", steps: [
        ["A company issues the coin", "Tether (USDT), Circle (USDC)", "blue"], ["Its contract keeps a blocklist", "", "blue"],
        ["Thief's address added", "", "purple"], ["Coins can't move", "", "green"]],
        note: "Tether froze about 1.57 billion USDT; Circle about $800M USDC.",
        badge: "Documented", src: "The Hacker News, citing Tether and Circle" },
      { type: "flow", label: "How it works · 2", steps: [
        ["Bitcoin and Ether have no issuer", "", "blue"], ["Nodes check only the signature", "", "blue"],
        ["Nobody can blocklist", "", "red"], ["Investigators trace and warn", "", "purple"]],
        note: "The FBI asked companies to block addresses the thieves use.",
        badge: "Documented", src: "FBI via CBS News/AFP" },
      { type: "code", label: "The off switch, in code",
        code: `// A stablecoin transfer, simplified\nfunction transfer(from, to, amount) {\n  if (blocklist.has(from)) throw "frozen";\n  balance[from] -= amount;\n  balance[to] += amount;\n}\n// Bitcoin has no blocklist line.\n// Only: is the signature valid?`,
        body: "One line decides whether stolen money can be stopped.", badge: "Our build" },
      { type: "list", label: "What it means for you", items: [
        "Know who can freeze the coins you hold.",
        "A freeze helps victims. It's also power over your money.",
        "Building payments? Plan your “stop” button before launch." ] },
      { type: "card", big: "Money with an issuer has an off switch. Money without one doesn't.",
        chain: [["Theft", "red"], ["USDT: frozen", "green"], ["Bitcoin: gone", "red"]],
        question: "Should one company be able to freeze anyone's money? Yes or no?",
        next: "Next week · A new story, decoded" },
    ],
  },
};
