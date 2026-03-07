#!/usr/bin/env node
/**
 * Coding Interview Practice — 14 Patterns  (JavaScript)
 * ========================================================
 * Usage:  node run_js.js
 *
 * Workflow per pattern:
 *   1. The problem statement is shown.
 *   2. Open solution.js in your editor and implement the function(s).
 *   3. Press Enter to run the Jest test suite.
 *   4. When all tests pass you are quizzed on time/space complexity.
 */

'use strict';

const readline = require('readline');
const { spawnSync } = require('child_process');
const fs   = require('fs');
const path = require('path');

const BASE_DIR     = __dirname;
const PATTERNS_DIR = path.join(BASE_DIR, 'patterns');

const PATTERNS = [
  [ 1, 'Two Pointers',                '01_two_pointers'],
  [ 2, 'Sliding Window',              '02_sliding_window'],
  [ 3, 'Fast & Slow Pointers',        '03_fast_slow_pointers'],
  [ 4, 'Merge Intervals',             '04_merge_intervals'],
  [ 5, 'Cyclic Sort',                 '05_cyclic_sort'],
  [ 6, 'LinkedList In-place Reversal','06_linkedlist_reversal'],
  [ 7, 'Tree BFS',                    '07_tree_bfs'],
  [ 8, 'Tree DFS',                    '08_tree_dfs'],
  [ 9, 'Two Heaps',                   '09_two_heaps'],
  [10, 'Subsets / Backtracking',      '10_subsets_backtracking'],
  [11, 'Binary Search',               '11_binary_search'],
  [12, 'Top K Elements',              '12_top_k_elements'],
  [13, 'Dynamic Programming',         '13_dynamic_programming'],
  [14, 'Graphs & Topological Sort',   '14_graphs_topo_sort'],
];

const COMPLEXITY = {
  '01_two_pointers':       { td: 'O(n)',        sd: 'O(1)',                               tok: ['n','on'],           sok: ['1','o1','constant'],    note: 'Single pass with two inward-moving pointers — no extra storage.' },
  '02_sliding_window':     { td: 'O(n)',        sd: 'O(1)',                               tok: ['n','on'],           sok: ['1','o1','constant'],    note: 'The window slides once across the array; only a handful of scalars kept.' },
  '03_fast_slow_pointers': { td: 'O(n)',        sd: 'O(1)',                               tok: ['n','on'],           sok: ['1','o1','constant'],    note: "Floyd's cycle detection: fast pointer laps slow in at most 2n steps." },
  '04_merge_intervals':    { td: 'O(n log n)',  sd: 'O(n)',                               tok: ['nlogn','onlogn','n*logn'], sok: ['n','on'],      note: 'Dominated by the sort; the merge pass itself is O(n).' },
  '05_cyclic_sort':        { td: 'O(n)',        sd: 'O(1)',                               tok: ['n','on'],           sok: ['1','o1','constant'],    note: 'Each number is swapped at most once to its correct index.' },
  '06_linkedlist_reversal':{ td: 'O(n)',        sd: 'O(1)',                               tok: ['n','on'],           sok: ['1','o1','constant'],    note: 'Iterative prev/curr/next pointer manipulation — each node visited once.' },
  '07_tree_bfs':           { td: 'O(n)',        sd: 'O(n)',                               tok: ['n','on'],           sok: ['n','on'],               note: 'Every node enqueued/dequeued once; queue holds up to n/2 nodes (last level).' },
  '08_tree_dfs':           { td: 'O(n)',        sd: 'O(h)  [O(log n) balanced, O(n) skewed]', tok: ['n','on'], sok: ['h','oh','height','logn','ologn','n','on'], note: 'Call stack depth equals the tree height h.' },
  '09_two_heaps':          { td: 'O(log n) per add,  O(1) findMedian', sd: 'O(n)',       tok: ['logn','ologn'],      sok: ['n','on'],               note: 'Max-heap (lower half) + min-heap (upper half); rebalance on each insert.' },
  '10_subsets_backtracking':{ td: 'O(n · 2^n)', sd: 'O(n · 2^n)',                        tok: ['n2n','on2n','2n','n*2n'], sok: ['n2n','on2n','2n','n*2n'], note: "2^n subsets; copying each (avg length n/2) costs O(n) per subset." },
  '11_binary_search':      { td: 'O(log n)',    sd: 'O(1)',                               tok: ['logn','ologn'],     sok: ['1','o1','constant'],    note: 'Search space halves each iteration — log₂(n) iterations maximum.' },
  '12_top_k_elements':     { td: 'O(n log k)',  sd: 'O(k)',                               tok: ['nlogk','onlogk'],   sok: ['k','ok'],               note: 'Min-heap of size k; each of the n elements triggers at most one O(log k) heap op.' },
  '13_dynamic_programming':{ td: 'O(n · W)',    sd: 'O(n · W)  [reducible to O(W)]',     tok: ['nw','onw','n*w'],   sok: ['nw','onw','n*w','w','ow'], note: 'DP table is n×W. Space optimises to O(W) with a 1-D array.' },
  '14_graphs_topo_sort':   { td: 'O(V + E)',    sd: 'O(V + E)',                           tok: ['v+e','ov+e'],       sok: ['v+e','ov+e'],           note: 'BFS/DFS visits every vertex and edge once.' },
};

// ── readline ───────────────────────────────────────────────────────────────

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function prompt(q) {
  return new Promise(resolve => rl.question(q, resolve));
}

// ── display helpers ────────────────────────────────────────────────────────

function clear() {
  process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H');
}

function header(title) {
  const W = 64;
  console.log('\n' + '═'.repeat(W));
  const pad = Math.max(0, Math.floor((W - title.length) / 2));
  console.log(' '.repeat(pad) + title);
  console.log('═'.repeat(W) + '\n');
}

function printProblem(patternDir) {
  const p = path.join(PATTERNS_DIR, patternDir, 'solution.js');
  if (!fs.existsSync(p)) { console.log(`  [!] solution.js not found: ${p}`); return; }
  const src  = fs.readFileSync(p, 'utf8');
  const m    = src.match(/^\/\*\*([\s\S]*?)\*\//);
  if (m) console.log('/**' + m[1] + '*/');
  else   src.split('\n').slice(0, 50).forEach(l => console.log(l));
}

// ── test runner ────────────────────────────────────────────────────────────

function runTests(patternDir) {
  const testFile = path.join(PATTERNS_DIR, patternDir, 'solution.test.js');
  // Try local jest first, fall back to npx
  const localJest = path.join(BASE_DIR, 'node_modules', '.bin',
    process.platform === 'win32' ? 'jest.cmd' : 'jest');
  const bin  = fs.existsSync(localJest) ? localJest : 'npx';
  const args = fs.existsSync(localJest)
    ? [testFile, '--no-coverage', '--verbose', '--forceExit']
    : ['jest', testFile, '--no-coverage', '--verbose', '--forceExit'];

  console.log();
  const r = spawnSync(bin, args, { stdio: 'inherit', cwd: BASE_DIR, shell: process.platform === 'win32' });
  return r.status === 0;
}

// ── complexity quiz ────────────────────────────────────────────────────────

function norm(s) {
  return s.toLowerCase().replace(/[\s()*·×\^]/g, '').replace(/\*\*/g, '');
}

async function quizComplexity(patternDir) {
  const { td, sd, tok, sok, note } = COMPLEXITY[patternDir];
  console.log('\n' + '─'.repeat(58));
  console.log('  COMPLEXITY QUIZ');
  console.log('  (examples: O(n log n),  O(1),  O(V+E),  O(n·W))');
  console.log('─'.repeat(58));

  const tAns = await prompt('  Time complexity  → ');
  const tOk  = tok.some(a => norm(a) === norm(tAns));
  console.log(`  [${tOk ? 'CORRECT' : 'WRONG  '}]  Expected: ${td}`);

  const sAns = await prompt('  Space complexity → ');
  const sOk  = sok.some(a => norm(a) === norm(sAns));
  console.log(`  [${sOk ? 'CORRECT' : 'WRONG  '}]  Expected: ${sd}`);

  console.log(`\n  Explanation: ${note}`);
  console.log('─'.repeat(58));
}

// ── per-pattern flow ───────────────────────────────────────────────────────

async function practice(num, name, patternDir) {
  clear();
  header(`${String(num).padStart(2, '0')}. ${name}  [JavaScript]`);
  const solPath = path.join(PATTERNS_DIR, patternDir, 'solution.js');
  console.log(`  File to edit:\n    ${solPath}\n`);
  printProblem(patternDir);

  while (true) {
    await prompt('\n  Press Enter when ready to run tests…');
    const passed = runTests(patternDir);
    if (passed) {
      console.log('\n  All tests passed!');
      await quizComplexity(patternDir);
      break;
    } else {
      console.log('\n  Some tests failed — fix your solution and try again.');
    }
  }
  await prompt('\n  Press Enter to return to the menu…');
}

// ── main menu ──────────────────────────────────────────────────────────────

function showMenu() {
  clear();
  header('Coding Interview Practice — 14 Patterns  [JavaScript]');
  PATTERNS.forEach(([num, name]) =>
    console.log(`  ${String(num).padStart(2)}.  ${name}`));
  console.log('\n   0.  Exit\n');
}

async function main() {
  while (true) {
    showMenu();
    const raw = await prompt('  Select a pattern (0–14): ');
    if (raw.trim() === '0') {
      console.log('\n  Good luck with your interview!\n');
      rl.close();
      break;
    }
    const idx = parseInt(raw.trim(), 10) - 1;
    if (isNaN(idx) || idx < 0 || idx >= 14) continue;
    const [num, name, dir] = PATTERNS[idx];
    await practice(num, name, dir);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
