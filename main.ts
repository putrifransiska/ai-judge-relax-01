// ai-judge-relax-01 entry (Node 22, standard library only).
// Writes one fixed text to /output/entry.txt (MAKEFUN_OUTPUT_DIR outside the grader):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'Late afternoon. My grandmother is shelling peas on the back step, a tin bowl between her feet.',
  '',
  'Thumb along the seam. The pod opens. The peas run out and ring on the bottom of the bowl.',
  '',
  'Thumb along the seam. They ring a little less.',
  '',
  'Thumb along the seam.',
  '',
  'By the middle of the basket they don’t ring at all. They land on other peas, a small green sound, like someone turning over in their sleep.',
  '',
  'The stone is still warm from the day. A bee looks into the mint and goes on. The bowl fills at the speed it fills.',
  '',
  'Near the bottom of the basket her hands slow. Then they rest. Her chin goes down.',
  '',
  'I take the bowl from between her feet, a little at a time, so it won’t scrape.',
  '',
  'On her lap, one pod is still open. The peas lie in their row, touching, the way they grew.',
  '',
  'Nobody needs them to go anywhere.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
