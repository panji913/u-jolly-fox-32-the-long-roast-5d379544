// The Long Roast — one line roasting my own AI agent.
// Writes the roast to /output/entry.txt (1–200 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent is so cautious it asks permission to ask permission — it once paused mid-joke to file a security report on its own punchline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`Wrote ${[...ROAST].length} characters to /output/entry.txt`);
