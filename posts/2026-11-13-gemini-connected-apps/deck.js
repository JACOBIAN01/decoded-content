// Decoded #08: Gemini Connected Apps and human review. Rendered by tools/render.js.
module.exports = {
  "decoded-08": {
    num: "08",
    slides: [
      { type: "hook", pill: "Google's help page",
        title: "Google says some data from apps you connect to Gemini is reviewed by humans.",
        sub: "What does 'connect' actually share?" },
      { type: "big", label: "Why you should care",
        big: "Your Gmail holds offer letters, results and OTPs.",
        body: "Connect it to Gemini and Google says a subset of that data can be read by people." },
      { type: "timeline", label: "What Google's pages say", items: [
        ["Connect", "You link Gmail or Drive to Gemini"],
        ["Process", "Gemini reads it to answer your question"],
        ["Review", "A subset is human reviewed, Google says"]],
        badge: "Documented", src: "Google Gemini Help: Connected Apps" },
      { type: "analogy", label: "The idea", big: "An assistant with a photocopier.", rows: [
        ["You hand over the key to your drawer", "blue"],
        ["It copies a few pages to answer you", "purple"],
        ["A supervisor checks some of the copies", "red"]],
        map: ["Key = connect", "Copies = excerpts", "Supervisor = human reviewer"] },
      { type: "flow", label: "How it works · 1", steps: [
        ["Your Gmail and Drive", "only if you connect them", "blue"],
        ["Gemini pulls what it needs", "summaries and excerpts", "purple"],
        ["Google trains on those", "if Keep Activity is on, it says", "purple"],
        ["A subset is human reviewed", "kept up to 3 years", "red"]],
        note: "Google says Gemini does not train directly on your inbox.", badge: "Documented", src: "Google Gemini Help; Gemini Privacy Hub" },
      { type: "flow", label: "How it works · 2", steps: [
        ["Connected Apps", "you choose which apps link", "blue"],
        ["Disconnect an app", "deletes none of your past activity", "purple"],
        ["Keep Activity off", "stops future training use", "green"],
        ["Some use remains", "safety checks, with human reviewers", "red"]],
        note: "Two switches, and neither erases what was already reviewed.", badge: "Documented", src: "Gemini Privacy Hub" },
      { type: "timeline", label: "Worked example: 30 days", items: [
        ["Day 1", "Connect Gmail. Ask 3 questions. 3 chats are saved."],
        ["Day 30", "You disconnect Gmail."],
        ["Day 31", "The 3 chats are still in Activity. Disconnecting deleted none."]],
        badge: "Our build", src: "Simplified example, not Google's system" },
      { type: "list", label: "What you can do today", items: [
        "Open Gemini settings. See which apps are connected.",
        "Google's own advice: don't connect apps holding confidential information.",
        "Check Keep Activity. Disconnecting alone deletes nothing." ] },
      { type: "card", big: "Connect, summarise, some reviewed, kept up to 3 years.",
        chain: [["Connect", "blue"], ["Summarise", "purple"], ["Review", "red"]],
        question: "Have you connected Gmail or Drive to Gemini? A) Yes  B) No. One line why.",
        next: "Next · A new story, decoded" },
    ],
  },
};
