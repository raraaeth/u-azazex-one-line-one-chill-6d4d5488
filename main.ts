import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "One Line, One Chill" — a single sentence of horror, under 200 characters.
const LINE =
  "She smiled at her reflection, and it smiled back a second too late, wearing teeth she did not have.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
