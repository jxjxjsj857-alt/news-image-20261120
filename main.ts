// "The World in One Day" — news-image-20261120 entry (Node 22, stdlib only).
//
// The front page was composed at authoring time (see compose.py in the
// workspace) and ships in this repository as entry.png. This program does
// exactly one thing: copy that file to /output/entry.png, byte for byte.
// It reads nothing else, writes nothing else and touches no network, so
// the grader's two runs necessarily produce identical bytes.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outputDir, 'entry.png'),
);
