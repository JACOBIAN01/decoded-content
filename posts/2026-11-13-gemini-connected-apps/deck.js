// Decoded #08: Gemini Connected Apps and human review. Rendered by tools/render.js.
// Colour rule: blue = your data, orange = Google processing it, red = a human reads it, green = you control it.
module.exports = {
  "decoded-08": {
    num: "08",
    slides: [
      { type: "hook", pill: "Google's help page",
        title: "Google says some data from apps you connect to Gemini is reviewed by humans.",
        sub: "What does 'connect' actually share?" },
      { type: "big", label: "Why you should care",
        big: "Your Gmail holds things you'd never post.",
        body: "Connect it to Gemini and Google says a subset of that data can be read by people.",
        chips: [["Offer letters", "blue"], ["Results", "blue"], ["OTPs", "blue"]] },
      { type: "timeline", label: "What Google's pages say", items: [
        ["1 · Connect", "You link Gmail or Drive to Gemini", "blue"],
        ["2 · Process", "Gemini reads it to answer your question", "orange"],
        ["3 · Review", "A subset is human reviewed, Google says", "red"]],
        badge: "Documented", src: "Google Gemini Help: Connected Apps" },
      { type: "analogy", label: "The idea", big: "An assistant with a photocopier.", rows: [
        ["You hand over the key to your drawer", "blue"],
        ["It copies a few pages to answer you", "orange"],
        ["A supervisor checks some of the copies", "red"]],
        map: ["Key = connect", "Copies = excerpts", "Supervisor = human reviewer"] },
      { type: "paths", label: "How it works · where your data goes",
        source: ["Your Gmail and Drive", "only if you connect them", "blue"], arrow: "Gemini reads what it needs",
        center: ["Gemini", "makes summaries and excerpts", "orange"],
        branches: [
          ["Answers you", "the reason you connected", "green"],
          ["Trains Google's AI", "on summaries, not the inbox itself, it says", "orange"],
          ["Human review", "a subset, kept up to 3 years", "red"]],
        note: "Training applies with Keep Activity on, Google says.", badge: "Documented", src: "Google Gemini Help; Gemini Privacy Hub" },
      { type: "toggles", label: "How it works · your two switches",
        items: [
          ["Keep Activity: off", "green", "Future chats aren't used to improve Google AI.", "Still used for safety checks, with human reviewers."],
          ["Disconnect Gmail", "green", "Gemini can't search it any more.", "Past chats in Activity are not deleted."]],
        note: "Neither switch erases what was already reviewed.", badge: "Documented", src: "Gemini Privacy Hub" },
      { type: "split", label: "Worked example: 30 days",
        cols: [
          { day: "Day 1", head: "Gmail connected", color: "blue", bcolor: "blue", bubbles: ["Chat 1", "Chat 2", "Chat 3"], lines: [["3 chats saved", "gd"]] },
          { day: "Day 31", head: "Gmail disconnected", color: "red", bcolor: "blue", bubbles: ["Chat 1", "Chat 2", "Chat 3"], lines: [["Gemini can't search Gmail", "gd"], ["3 chats still in Activity", "bd"]] }],
        note: "Disconnecting deleted none of them, per Google.", badge: "Our build", src: "Simplified example, not Google's system" },
      { type: "list", label: "What you can do today", items: [
        "Open Gemini settings. See which apps are connected.",
        "Google's own advice: don't connect apps holding confidential information.",
        "Check Keep Activity. Disconnecting alone deletes nothing." ] },
      { type: "card", big: "Connect, summarise, some reviewed, kept up to 3 years.",
        chain: [["Connect", "blue"], ["Summarise", "orange"], ["Review", "red"]],
        question: "Have you connected Gmail or Drive to Gemini? A) Yes  B) No. One line why.",
        next: "Next · A new story, decoded" },
    ],
  },
};
