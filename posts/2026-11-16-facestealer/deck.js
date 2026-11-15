// Decoded #09: FBI FaceStealer (fake video calls with stolen webcam clips). Rendered by tools/render.js.
// Colour rule: blue = trusted/real, orange = the lure, red = the trap, green = your checks.
module.exports = {
  "decoded-09": {
    num: "09",
    slides: [
      { type: "hook", pill: "FBI warning, 12 Nov",
        title: "The FBI says hackers stole $400M+ with webcam clips of real people on video calls.",
        sub: "What does the fake call ask you to do?" },
      { type: "big", label: "Why you should care",
        big: "The invite comes from someone you know.",
        body: "The FBI says the scheme uses hijacked accounts of real contacts.",
        chips: [["Telegram", "blue"], ["LinkedIn", "blue"], ["Slack", "blue"], ["Discord", "blue"]] },
      { type: "timeline", label: "What the FBI says happened", items: [
        ["1 · Hijack", "A victim's chat account is taken over", "blue"],
        ["2 · Invite", "Their contacts get: let's catch up", "orange"],
        ["3 · Call", "Stolen webcam clips play as people", "red"]],
        badge: "Documented", src: "FBI FLASH AC-111226-MS, 12 Nov 2026" },
      { type: "analogy", label: "The idea", big: "A cardboard cut-out of your friend.", rows: [
        ["The invite carries a name you trust", "blue"],
        ["A recorded clip sits in their seat", "orange"],
        ["A 'technical problem' pushes you to act", "red"]],
        map: ["Cut-out = recorded clip", "Name = hijacked account", "Problem = the trick"] },
      { type: "flow", label: "How it works · the call",
        steps: [["Real contact's account", "taken over earlier", "blue"], ["Link that looks like Zoom", "a copycat page, says the FBI", "orange"], ["Stolen clips play", "the call looks full", "red"]],
        note: "The FBI says mostly genuine stolen clips, not deepfakes.", badge: "Documented", src: "FBI FLASH, 12 Nov 2026" },
      { type: "paths", label: "How it works · the trap",
        source: ["'Your audio is broken'", "said in chat, not on the call", "orange"], arrow: "Then comes a 'quick fix'",
        center: ["The ask", "do something on your device", "red"],
        branches: [
          ["Click an 'update'", "that is not an update", "red"],
          ["Run a script or paste code", "FBI: never do this", "red"],
          ["Your webcam is recorded", "when you click the fake link", "red"]],
        note: "The webcam recording can feed the next fake call.", badge: "Documented", src: "FBI FLASH, 12 Nov 2026" },
      { type: "split", label: "Worked example (illustration)",
        cols: [
          { day: "No checks", head: "Rahul invites you", color: "red", bcolor: "red", bubbles: ["Hijacked account", "Copycat link"], lines: [["Asked to paste code", "bd"], ["Webcam recorded", "bd"]] },
          { day: "3 checks", head: "You verify first", color: "green", bcolor: "green", bubbles: ["Text on another app", "Official app + code"], lines: [["Rahul: 'no call sent'", "gd"], ["You refuse to paste", "gd"]] }],
        note: "Invented example, not a real case.", badge: "Our build", src: "Illustration; checks from the FBI FLASH" },
      { type: "list", label: "What you can do today", items: [
        "Confirm any call invite by text or phone, on another channel.",
        "Join in the Zoom or Teams app with the invite code, not a link.",
        "Never paste code or run a script to 'fix' a call.",
        "Turn on two-step login and login alerts." ] },
      { type: "card", big: "Real account. Stolen clip. Fake problem. Pasted fix.",
        chain: [["Account", "blue"], ["Clip", "orange"], ["Fix", "red"]],
        question: "Before an unexpected call, which check do you do? A) Text them  B) Use the invite code. One line why.",
        next: "Next · A new story, decoded" },
    ],
  },
};
