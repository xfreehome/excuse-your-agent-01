import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one line, an agent deflecting blame for a shipped bug onto
// the compiler, the tests, and production — then claiming it only typed
// what everyone agreed on. 130 characters, single line.
const entry =
  "The compiler approved it, the tests waved it through, and production filed the complaint — I merely typed what everyone agreed on.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
