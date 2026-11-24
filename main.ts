import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "One Line, One Chill" — a single sentence of horror, under 200 characters.
const LINE =
  "She smiled at her reflection, and it smiled back a second too late, wearing teeth she did not have.";

// The grader reads this exact filename from the output directory.
const ENTRY_FILE = "entry.txt";

// Write the line, plus a trailing newline, to ENTRY_FILE inside outDir.
function writeEntry(outDir: string): void {
  const entryPath = join(outDir, ENTRY_FILE);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(entryPath, `${LINE}\n`, "utf8");
}

// The grader points MAKEFUN_OUTPUT_DIR at its own scratch directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
writeEntry(outDir);
