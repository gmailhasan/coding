#!/usr/bin/env python3
"""
Coding Interview Practice — 14 Patterns
========================================
Usage:
    python run.py

Workflow per pattern:
  1. The problem statement is shown.
  2. Open solution.py in your editor and implement the function(s).
  3. Press Enter to run the test suite (pytest).
  4. When all tests pass you are quizzed on time/space complexity.
"""

import re
import os
import sys
import subprocess

BASE_DIR     = os.path.dirname(os.path.abspath(__file__))
PATTERNS_DIR = os.path.join(BASE_DIR, "patterns")

PATTERNS = [
    ( 1, "Two Pointers",               "01_two_pointers"),
    ( 2, "Sliding Window",             "02_sliding_window"),
    ( 3, "Fast & Slow Pointers",       "03_fast_slow_pointers"),
    ( 4, "Merge Intervals",            "04_merge_intervals"),
    ( 5, "Cyclic Sort",                "05_cyclic_sort"),
    ( 6, "LinkedList In-place Reversal","06_linkedlist_reversal"),
    ( 7, "Tree BFS",                   "07_tree_bfs"),
    ( 8, "Tree DFS",                   "08_tree_dfs"),
    ( 9, "Two Heaps",                  "09_two_heaps"),
    (10, "Subsets / Backtracking",     "10_subsets_backtracking"),
    (11, "Binary Search",              "11_binary_search"),
    (12, "Top K Elements",             "12_top_k_elements"),
    (13, "Dynamic Programming",        "13_dynamic_programming"),
    (14, "Graphs & Topological Sort",  "14_graphs_topo_sort"),
]

# ---------------------------------------------------------------------------
# Complexity reference answers (display + accepted normalisations)
# ---------------------------------------------------------------------------
COMPLEXITY = {
    "01_two_pointers": {
        "time_display":  "O(n)",
        "space_display": "O(1)",
        "time_ok":  ["n", "on"],
        "space_ok": ["1", "o1", "constant"],
        "note": "Single pass with two inward-moving pointers — no extra storage needed.",
    },
    "02_sliding_window": {
        "time_display":  "O(n)",
        "space_display": "O(1)",
        "time_ok":  ["n", "on"],
        "space_ok": ["1", "o1", "constant"],
        "note": "The window slides once across the array; only a handful of scalars are kept.",
    },
    "03_fast_slow_pointers": {
        "time_display":  "O(n)",
        "space_display": "O(1)",
        "time_ok":  ["n", "on"],
        "space_ok": ["1", "o1", "constant"],
        "note": "Floyd's cycle detection: fast pointer laps slow in at most 2n steps.",
    },
    "04_merge_intervals": {
        "time_display":  "O(n log n)",
        "space_display": "O(n)",
        "time_ok":  ["nlogn", "onlogn", "n*logn", "nlgn"],
        "space_ok": ["n", "on"],
        "note": "Dominated by the sort; the merge pass itself is O(n).",
    },
    "05_cyclic_sort": {
        "time_display":  "O(n)",
        "space_display": "O(1)",
        "time_ok":  ["n", "on"],
        "space_ok": ["1", "o1", "constant"],
        "note": "Each number is swapped at most once to its correct index.",
    },
    "06_linkedlist_reversal": {
        "time_display":  "O(n)",
        "space_display": "O(1)",
        "time_ok":  ["n", "on"],
        "space_ok": ["1", "o1", "constant"],
        "note": "Iterative prev/curr/next pointer manipulation — each node visited once.",
    },
    "07_tree_bfs": {
        "time_display":  "O(n)",
        "space_display": "O(n)",
        "time_ok":  ["n", "on"],
        "space_ok": ["n", "on"],
        "note": "Every node enqueued/dequeued once; queue holds up to n/2 nodes (last level).",
    },
    "08_tree_dfs": {
        "time_display":  "O(n)",
        "space_display": "O(h)  [h = tree height; O(log n) balanced, O(n) skewed]",
        "time_ok":  ["n", "on"],
        "space_ok": ["h", "oh", "height", "logn", "ologn", "n", "on"],
        "note": "Every node visited once; recursion stack depth equals the tree height h.",
    },
    "09_two_heaps": {
        "time_display":  "O(log n) per add_num,  O(1) for find_median",
        "space_display": "O(n)",
        "time_ok":  ["logn", "ologn", "log n"],
        "space_ok": ["n", "on"],
        "note": "Max-heap (lower half) + min-heap (upper half); rebalance on each insert.",
    },
    "10_subsets_backtracking": {
        "time_display":  "O(n · 2^n)",
        "space_display": "O(n · 2^n)",
        "time_ok":  ["n2n", "on2n", "2n", "o2n", "n*2n", "n2^n"],
        "space_ok": ["n2n", "on2n", "2n", "o2n", "n*2n", "n2^n"],
        "note": "There are 2^n subsets; copying each (average length n/2) costs O(n) per subset.",
    },
    "11_binary_search": {
        "time_display":  "O(log n)",
        "space_display": "O(1)",
        "time_ok":  ["logn", "ologn", "log n"],
        "space_ok": ["1", "o1", "constant"],
        "note": "Search space halves each iteration — log₂(n) iterations maximum.",
    },
    "12_top_k_elements": {
        "time_display":  "O(n log k)",
        "space_display": "O(k)",
        "time_ok":  ["nlogk", "onlogk", "n log k"],
        "space_ok": ["k", "ok"],
        "note": "Min-heap of size k; each of the n elements triggers at most one O(log k) heap op.",
    },
    "13_dynamic_programming": {
        "time_display":  "O(n · W)",
        "space_display": "O(n · W)  [reducible to O(W) with a 1-D DP array]",
        "time_ok":  ["nw", "onw", "n*w", "n w"],
        "space_ok": ["nw", "onw", "n*w", "w", "ow"],
        "note": "DP table is n×W. Space optimises to O(W) by iterating items with a single row.",
    },
    "14_graphs_topo_sort": {
        "time_display":  "O(V + E)",
        "space_display": "O(V + E)",
        "time_ok":  ["v+e", "ov+e", "v+e", "verticesedges"],
        "space_ok": ["v+e", "ov+e", "v+e"],
        "note": "BFS/DFS visits every vertex and edge once; adjacency list uses O(V+E) space.",
    },
}

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _norm(s: str) -> str:
    """Normalise a complexity string for lenient comparison."""
    s = s.lower().strip()
    s = re.sub(r"[\s()*·×\^]", "", s)
    s = s.replace("**", "")
    return s


def _header(title: str) -> None:
    w = 62
    print("\n" + "═" * w)
    print(f"  {title}".center(w))
    print("═" * w + "\n")


def _print_problem(pattern_dir: str) -> None:
    path = os.path.join(PATTERNS_DIR, pattern_dir, "solution.py")
    if not os.path.exists(path):
        print(f"  [!] solution.py not found: {path}")
        return
    with open(path, encoding="utf-8") as fh:
        src = fh.read()
    # Extract and print the module-level docstring
    m = re.search(r'^"""(.*?)"""', src, re.DOTALL)
    if m:
        print('"""' + m.group(1) + '"""')
    else:
        for line in src.splitlines()[:50]:
            print(line)


def _run_tests(pattern_dir: str) -> bool:
    cwd = os.path.join(PATTERNS_DIR, pattern_dir)
    print()
    result = subprocess.run(
        [sys.executable, "-m", "pytest", "test_solution.py",
         "-v", "--tb=short", "--no-header"],
        cwd=cwd,
    )
    return result.returncode == 0


def _quiz(pattern_dir: str) -> None:
    info = COMPLEXITY[pattern_dir]
    print("\n" + "─" * 58)
    print("  COMPLEXITY QUIZ")
    print("  (examples: O(n log n), O(1), O(V+E), O(n·W))")
    print("─" * 58)

    t_ans = input("  Time complexity  → ").strip()
    t_ok  = any(_norm(a) == _norm(t_ans) for a in info["time_ok"])
    mark  = "CORRECT" if t_ok else "WRONG  "
    print(f"  [{mark}]  Expected: {info['time_display']}")

    s_ans = input("  Space complexity → ").strip()
    s_ok  = any(_norm(a) == _norm(s_ans) for a in info["space_ok"])
    mark  = "CORRECT" if s_ok else "WRONG  "
    print(f"  [{mark}]  Expected: {info['space_display']}")

    print(f"\n  Explanation: {info['note']}")
    print("─" * 58)


def _practice(num: int, name: str, pattern_dir: str) -> None:
    os.system("cls" if sys.platform == "win32" else "clear")
    _header(f"{num:02d}. {name}")
    sol_path = os.path.join(PATTERNS_DIR, pattern_dir, "solution.py")
    print(f"  File to edit:\n    {sol_path}\n")
    _print_problem(pattern_dir)

    while True:
        input("\n  Press Enter when ready to run tests…")
        passed = _run_tests(pattern_dir)
        if passed:
            print("\n  All tests passed!")
            _quiz(pattern_dir)
            break
        else:
            print("\n  Some tests failed — fix your solution and try again.")

    input("\n  Press Enter to return to the menu…")


def _show_menu() -> None:
    os.system("cls" if sys.platform == "win32" else "clear")
    _header("Coding Interview Practice — 14 Patterns")
    for num, name, _ in PATTERNS:
        print(f"  {num:>2}.  {name}")
    print("\n   0.  Exit\n")


def main() -> None:
    while True:
        _show_menu()
        raw = input("  Select a pattern (0–14): ").strip()
        if raw == "0":
            print("\n  Good luck with your interview!\n")
            sys.exit(0)
        if not raw.isdigit() or not (1 <= int(raw) <= 14):
            continue
        idx = int(raw) - 1
        num, name, pattern_dir = PATTERNS[idx]
        _practice(num, name, pattern_dir)


if __name__ == "__main__":
    main()
