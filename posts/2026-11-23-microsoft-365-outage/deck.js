// Decoded #10: Microsoft 365 outage, 12-13 Nov 2026. Rendered by tools/render.js.
// Colour rule: blue = normal/trusted, orange = the weak spot, red = the failure, green = your checks.
module.exports = {
  "decoded-10": {
    num: "10",
    slides: [
      { type: "hook", pill: "Microsoft report, 15 Nov",
        title: "Microsoft says a bug sat quiet for 3 months. Then 80% of one gateway's servers stopped answering.",
        sub: "How does one small fault go global?" },
      { type: "big", label: "Why you should care",
        big: "Your college or job inbox may sit behind one gateway.",
        body: "Microsoft says the outage hit Outlook mail, Teams, Copilot and more for about 24 hours.",
        chips: [["Outlook", "blue"], ["Teams", "blue"], ["Copilot", "blue"], ["SharePoint", "blue"]] },
      { type: "timeline", label: "What Microsoft says happened", items: [
        ["July", "A fix goes live. Months pass with no problem.", "blue"],
        ["Before 12 Nov", "Nearly 14% of gateway servers are out of service.", "orange"],
        ["12 Nov, 9:50 pm IST", "A surge hits. Servers stop answering.", "red"]],
        badge: "Documented", src: "Microsoft preliminary report, 15 Nov 2026" },
      { type: "analogy", label: "The idea", big: "One front door for many offices.", rows: [
        ["Many services share one door", "blue"],
        ["A few doors are already shut", "orange"],
        ["A rush arrives and the rest jam", "red"]],
        map: ["Door = gateway", "Shut doors = 14% out", "Rush = traffic surge"] },
      { type: "flow", label: "How it works · three at once",
        steps: [["A hidden defect", "dormant since July, Microsoft says", "blue"], ["Less spare capacity", "nearly 14% of servers out", "orange"], ["A traffic surge", "load jumped at the gateway", "red"]],
        note: "Microsoft says all three together caused it.", badge: "Documented", src: "Microsoft preliminary report, 15 Nov 2026" },
      { type: "paths", label: "How it works · the spread",
        source: ["Servers stop answering", "over 80% at the lowest", "red"], arrow: "Then recovery stalls",
        center: ["Overload loop", "restarted servers get swamped", "red"],
        branches: [
          ["Walls failed", "bulkheads did not stop the spread", "red"],
          ["Slow rollback", "normal tools could not revert fast", "orange"],
          ["Exchange stuck", "could not fail out of the gateway", "orange"]],
        note: "Bulkheads: limits that keep one failure from spreading.", badge: "Documented", src: "Microsoft preliminary report, 15 Nov 2026" },
      { type: "split", label: "Worked example (illustration)",
        cols: [
          { day: "Thin margin", head: "Surge: 850 to 920", color: "red", bcolor: "red", bubbles: ["100 servers", "14 out"], lines: [["Capacity 860 < 920", "bd"], ["Queue grows, servers choke", "bd"]] },
          { day: "Spare room", head: "Surge: 850 to 920", color: "green", bcolor: "green", bubbles: ["120 servers", "17 out"], lines: [["Capacity 1,030 > 920", "gd"], ["Load handled, no queue", "gd"]] }],
        note: "Invented numbers: each server handles 10 requests.", badge: "Our build", src: "Illustration, not Microsoft's system" },
      { type: "list", label: "What you can do today", items: [
        "Outlook or Teams down? Check the status page before resetting passwords.",
        "Keep a second way to reach your team: phone or SMS.",
        "Keep key files saved offline before deadlines.",
        "Building something? Leave spare capacity and roll out in stages." ] },
      { type: "card", big: "Old bug. Missing servers. A surge. One gateway.",
        chain: [["Bug", "blue"], ["Less room", "orange"], ["Surge", "red"]],
        question: "When Outlook or Teams stops, what do you check first? A) Status page  B) Reset password. One line why.",
        next: "Next · A new story, decoded" },
    ],
  },
};
