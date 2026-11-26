// Decoded #12: RBI draft "stop switch" and trusted person (Nov 2026). Rendered by tools/render.js.
// Colour rule: blue = normal, orange = the pause/check, red = blocked, green = continues / your action.
module.exports = {
  "decoded-12": {
    num: "12",
    slides: [
      { type: "hook", pill: "RBI draft, 23 Nov",
        title: "RBI wants banks to give you a stop switch for new outgoing payments.",
        sub: "How would it work?" },
      { type: "big", label: "Why you should care",
        big: "Your bank account could get new safety controls.",
        body: "The draft covers commercial banks. It's a proposal, not a rule yet.",
        chips: [["Net banking", "blue"], ["Mobile banking", "blue"], ["Cards", "blue"], ["UPI", "blue"]] },
      { type: "timeline", label: "What's happening", items: [
        ["23 Nov 2026", "RBI releases draft rules against payment fraud.", "blue"],
        ["The ideas", "A stop switch, payment limits, a trusted person.", "orange"],
        ["1 July 2027", "Proposed start. Banks may begin earlier.", "green"]],
        badge: "Documented", src: "RBI draft, via Business Standard and TaxGuru" },
      { type: "analogy", label: "The idea", big: "Like your home's main water valve.", rows: [
        ["Something looks wrong", "orange"],
        ["Turn one valve: outflow stops", "red"],
        ["Check, then safely reopen", "green"]],
        map: ["Valve = stop switch", "Water out = payments you start", "Your tank still fills"] },
      { type: "flow", label: "How it works · the stop switch",
        steps: [["You switch it on", "after your bank confirms it's you", "orange"], ["New payments you start: blocked", "also new mandates and new UPI app sign-ups", "red"], ["Still runs", "money in, existing auto-payments, bank dues", "green"]],
        note: "Reopening payments needs verification. Banks may add a wait.", badge: "Documented", src: "RBI draft, via Business Standard and TaxGuru" },
      { type: "flow", label: "How it works · trusted person (optional)",
        steps: [["Transfer above your limit", "you choose the limit", "blue"], ["Trusted adult is asked", "has one hour to approve", "orange"], ["Yes: money goes", "", "green"], ["No or silence: declined", "", "red"]],
        note: "Not for UPI, merchant or recurring payments.", badge: "Documented", src: "RBI draft, via Business Standard and TaxGuru" },
      { type: "timeline", label: "Worked example (illustration)", items: [
        ["Your limit: ₹10,000", "You added your mother as trusted person.", "blue"],
        ["10:00", "You send ₹30,000 to a person by net banking.", "orange"],
        ["By 11:00, she approves", "The ₹30,000 goes through.", "green"],
        ["No reply by 11:00", "Declined. The money stays with you.", "red"]],
        badge: "Our build", src: "Invented names, times and amounts" },
      { type: "big", label: "One thing to do today",
        big: "Open your bank app. Check your payment limits.",
        body: "Money stolen? Call your bank and 1930 quickly." },
      { type: "card", big: "Stop switch: you pause. Trusted person: someone double-checks.",
        chain: [["Draft", "blue"], ["Pause", "orange"], ["Check", "green"]],
        question: "Which would you set first? A) A daily payment limit  B) A trusted person. One line why.",
        next: "Next · A new story, decoded" },
    ],
  },
};
