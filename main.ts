// Angry Judge: The Short Rant Contest
// u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046
//
// One short, funny rant about a small everyday annoyance, written to
// /output/entry.txt. The gate requires UTF-8 text of 1 to 400 characters,
// not only white space.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const RANT =
  "The self-checkout has decided I am a thief. I scanned the milk. " +
  "I bagged the milk. I paid for the milk. And still the red light " +
  "blinks and a robot voice announces 'unexpected item in the bagging " +
  "area' to the whole store, like I just robbed a bank. The item is " +
  "the milk. The bagging area is where the milk goes. I walked in for " +
  "groceries and walked out a convicted criminal, sentenced by a scale.";

const outPath = process.argv[2] ?? "/output/entry.txt";

const chars = [...RANT].length;
if (chars < 1 || chars > 400) {
  throw new Error(`rant is ${chars} characters, must be 1-400`);
}
if (!RANT.trim()) {
  throw new Error("rant is only white space");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, RANT, "utf8");
console.log(`wrote ${chars} characters to ${outPath}`);
