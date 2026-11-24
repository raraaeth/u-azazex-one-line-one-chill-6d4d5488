import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "One Line, One Chill" — a single sentence of horror, under 200 characters.
const LINE =
  "She smiled at her reflection, and it smiled back a second too late, wearing teeth she did not have.";

// Write the line, plus a trailing newline, to entry.txt in the output dir.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const entryPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, `${LINE}\n`, "utf8");
