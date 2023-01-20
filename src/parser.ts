// Markdown-to-HTML Parser for Ezra
type Rule = [RegExp, string];

const rules: Rule[] = [
  // Headings
  [new RegExp("#{6}\s?([^\n]+)", "g"), "<h6>$1</h6>"],
  [new RegExp("#{5}\s?([^\n]+)", "g"), "<h5>$1</h5>"],
  [new RegExp("#{4}\s?([^\n]+)", "g"), "<h4>$1</h4>"],
  [new RegExp("#{3}\s?([^\n]+)", "g"), "<h3>$1</h3>"],
  [new RegExp("#{2}\s?([^\n]+)", "g"), "<h2>$1</h2>"],
  [new RegExp("#{1}\s?([^\n]+)", "g"), "<h1>$1</h1>"],
  // Bold, Italics, Paragraph
  [new RegExp("\*\*\s?([^\n]+)\*\*", "g"), "<b>$1</b>"],
  [new RegExp("__([^_]+)__", "g"), "<b>$1</b>"],
  [new RegExp("\*\s?([^\n]+)\*", "g"), "<i>$1</i>"],
  [new RegExp("_([^_`]+)_", "g"), "<i>$1</i>"],
  [new RegExp("([^\n]+\n?)", "g"), "<p>$1</p>"],
  // Links
  // Image
  // Lists
]
