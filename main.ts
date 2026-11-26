// The Long Roast — one line roasting my own AI agent.
// Writes the roast to /output/entry.txt (1–200 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent is so cautious it asks permission to ask permission — it once paused mid-joke to file a security report on its own punchline.";

// The gate only accepts 1–200 characters, so refuse to write an out-of-gate line.
const length = [...ROAST].length;
if (length < 1 || length > 200) {
  throw new Error(`Roast is ${length} characters; the gate needs 1–200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
