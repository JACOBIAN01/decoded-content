// Decoded #07: Discord public servers and web search. Rendered by tools/render.js.
module.exports = {
  "decoded-07": {
    num: "07",
    slides: [
      { type: "hook", pill: "27 Oct 2026",
        title: "Discord says messages in big public servers can appear on Google from mid-December.",
        sub: "How does search find a chat message?" },
      { type: "big", label: "Why you should care",
        big: "A public server can feel like a private room.",
        body: "Study groups, college servers, gaming chats. Your words could become a search result." },
      { type: "timeline", label: "What happened", items: [
        ["27 Oct", "Discord announces the change on its blog"],
        ["16 Nov", "Web pages go live for Discoverable Servers"],
        ["Mid-Dec", "Channel messages can start appearing, gradually"]],
        badge: "Documented", src: "Discord blog, 27 Oct 2026; TechCrunch" },
      { type: "analogy", label: "The idea", big: "A notice board gets a window.", rows: [
        ["Today: only people inside can read it", "blue"],
        ["A search robot is a visitor who copies it", "purple"],
        ["Search later finds your note by its words", "red"]],
        map: ["Board = public channel", "Visitor = crawler", "Catalogue = search index"] },
      { type: "flow", label: "How it works · 1", steps: [
        ["Server becomes a web page", "readable without logging in", "blue"],
        ["A crawler visits the page", "it follows links, like a visitor", "purple"],
        ["It copies the words into an index", "a giant catalogue", "purple"],
        ["You search; matching words appear", "", "green"]],
        note: "Search doesn't read your mind. It matches words that were copied.", badge: "Our build" },
      { type: "flow", label: "How it works · 2", steps: [
        ["Admin leaves web presence on", "Server Settings > Web Presence", "blue"],
        ["Your member switch allows it", "User Settings > Data and Privacy", "blue"],
        ["Message is in a public channel", "not a DM or private server", "purple"],
        ["It can be eligible for search", "from mid-December", "red"]],
        note: "All three checks must pass. Discord says teens, DMs and private servers are excluded.", badge: "Documented", src: "Discord blog, 27 Oct 2026" },
      { type: "list", label: "Worked example: 3 messages", items: [
        "Aarav posts in a public channel, switch on: can be eligible.",
        "Meera posts there, switch off: stays out.",
        "Rohan sends a DM: never included, Discord says." ],
        },
      { type: "list", label: "What it means for you", items: [
        "Open User Settings > Data and Privacy and look for the search switch.",
        "Defaults differ: off in the EU, UK, Canada, Brazil, Australia, South Korea. Elsewhere on, says Discord.",
        "Before posting in a public channel, ask: would I say this on a notice board?" ] },
      { type: "card", big: "Public channel + switch on + admin on = searchable words.",
        chain: [["Public", "blue"], ["Crawled", "purple"], ["Indexed", "purple"], ["Googled", "red"]],
        question: "Have you checked your Discord switch? A) Already off  B) Leaving it on. One line why.",
        next: "Next · A new story, decoded" },
    ],
  },
};
