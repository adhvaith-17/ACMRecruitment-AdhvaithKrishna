# Zigzag Conversion (LeetCode 6)

## Problem Statement
The string `s` is written in a zigzag pattern on a given number of rows `numRows` like this: (you may want to display this pattern in a fixed font for better legibility) and then read line by line.

## Solution Approach
This problem is solved by **simulating the row-by-row bouncing movement**:

1. **Edge Case Handling:**
   * If `numRows == 1` or `numRows >= len(s)`, the zigzag pattern does not change the order of characters. Return `s` immediately.
2. **Row-by-Row Simulation:**
   * Maintain a list of strings `rows` of size `numRows` to store characters belonging to each row.
   * Track the current row pointer `idx` (starts at `0`) and the direction `step` (starts at `1` for moving downwards).
   * Iterate through each character in `s`, appending the character to `rows[idx]`.
   * When `idx == 0`, set `step = 1` (bounce downwards).
   * When `idx == numRows - 1`, set `step = -1` (bounce upwards).
   * Update the row index: `idx += step`.
3. **Result Construction:**
   * Concatenate all row strings using `''.join(rows)`.

## Python Solution
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or numRows >= len(s):
            return s
        
        rows = [''] * numRows
        idx, step = 0, 1
        
        for char in s:
            rows[idx] += char
            if idx == 0:
                step = 1
            elif idx == numRows - 1:
                step = -1
            idx += step
            
        return ''.join(rows)