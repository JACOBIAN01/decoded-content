// Decoded #11: the vendor problem (Optimizely, Nov 2026; Uber/Fireworks as second case). Rendered by tools/render.js.
// Colour rule: blue = normal/trusted, orange = the weak spot, red = the failure, green = your checks.
module.exports = {
  "decoded-11": {
    num: "11",
    slides: [
      { type: "hook", pill: "Report URI, 16 Nov",
        title: "Researchers found malicious code on 178 organisations' websites. It came through one vendor's tool.",
        sub: "How does a vendor's slip become your risk?" },
      { type: "big", label: "Why you should care",
        big: "Your apps run on other companies' tools.",
        body: "Uber also told US regulators, reports say, that an AI vendor's breach exposed nearly 150,000 drivers' details.",
        chips: [["Shop checkout", "blue"], ["Analytics", "blue"], ["Chat widget", "blue"], ["AI tools", "blue"]] },
      { type: "timeline", label: "What happened (Optimizely)", items: [
        ["16 Nov", "Malicious code shows up in a vendor's scripts.", "red"],
        ["16 Nov", "Report URI counts 178 organisations affected.", "orange"],
        ["17 Nov", "Optimizely says it fixed the flaw and removed the code.", "green"]],
        badge: "Documented", src: "Dark Reading, Sonatype, SecureWorld (Report URI's count)" },
      { type: "analogy", label: "The idea", big: "A canteen that buys from one supplier.", rows: [
        ["Students trust the canteen", "blue"],
        ["The canteen trusts its supplier", "orange"],
        ["One bad batch reaches everyone", "red"]],
        map: ["Canteen = a website", "Supplier = vendor tool", "Bad batch = bad script"] },
      { type: "flow", label: "How it works · the path in",
        steps: [["Code added", "in the vendor's customer settings", "orange"], ["Served to visitors", "from the vendor's own servers", "orange"], ["Runs in the browser", "on each customer's site", "red"]],
        note: "How the attacker got access is not public.", badge: "Documented", src: "Sonatype, Dark Reading" },
      { type: "paths", label: "How it works · why it spreads",
        source: ["One vendor slip", "access to customer settings", "red"], arrow: "Then it fans out",
        center: ["Shared tool", "many sites load it", "orange"],
        branches: [
          ["Site A", "visitors get the code", "red"],
          ["Site B", "visitors get the code", "red"],
          ["Site C", "visitors get the code", "red"]],
        note: "Report URI: 188 scripts, 178 organisations.", badge: "Documented", src: "Report URI, via Dark Reading" },
      { type: "split", label: "Worked example (illustration)",
        cols: [
          { day: "Open setup", head: "12 vendor scripts", color: "red", bcolor: "red", bubbles: ["12 scripts", "1 bad"], lines: [["Bad script runs on checkout", "bd"], ["Payment page at risk", "bd"]] },
          { day: "Limited setup", head: "3 vendor scripts", color: "green", bcolor: "green", bubbles: ["3 scripts", "0 on checkout"], lines: [["Scripts kept off checkout", "gd"], ["Bad script never arrives", "gd"]] }],
        note: "Invented numbers: one script turns bad.", badge: "Our build", src: "Illustration, not a real company" },
      { type: "list", label: "What you can do today", items: [
        "Check a crypto wallet address twice before you confirm.",
        "Update your phone and browser.",
        "Use a card with a spending limit online.",
        "Building a site? Keep vendor scripts off checkout and login." ] },
      { type: "card", big: "One vendor slips. Many sites inherit the risk.",
        chain: [["Trusted tool", "blue"], ["One slip", "orange"], ["Many sites", "red"]],
        question: "Which will you do first? A) Recheck wallet addresses  B) Set a card spending limit. One line why.",
        next: "Next · A new story, decoded" },
    ],
  },
};
