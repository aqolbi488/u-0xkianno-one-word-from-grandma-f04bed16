// One Word From Grandma — the single word Grandma would text about AI.
//
// Grandma cannot remember what the thing is called, so she calls it what
// she calls every gadget she cannot name: a doohickey. Warm, baffled,
// and funny in exactly one word.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "doohickey";

// The gate wants exactly one word: 1-30 UTF-8 characters, not only
// whitespace, and no sentence hiding inside it.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error("entry must be a single word of 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
