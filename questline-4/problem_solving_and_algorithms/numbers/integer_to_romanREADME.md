# Integer to Roman (LeetCode 12)

## Problem Statement
Given an integer `num`, convert it to a Roman numeral string. Roman numerals are represented by seven standard symbols (`I`, `V`, `X`, `L`, `C`, `D`, `M`) along with specific subtraction instances (`IV`, `IX`, `XL`, `XC`, `CD`, `CM`).

## Solution Approach
This problem uses a **Greedy matching approach**:

1. **Mapping Values and Symbols:**
   * Create parallel lists for numerical values and their corresponding Roman numeral representations in strictly descending order.
   * Explicitly include the 6 subtractive forms (`900 -> "CM"`, `400 -> "CD"`, `90 -> "XC"`, `40 -> "XL"`, `9 -> "IX"`, `4 -> "IV"`) alongside standard values (`1000`, `500`, `100`, `50`, `10`, `5`, `1`).
2. **Greedy Reduction:**
   * Iterate through the `values` array from largest to smallest.
   * While `num` is greater than or equal to the current value `values[i]`, append the matching symbol `symbols[i]` to our result list and subtract `values[i]` from `num`.
   * Increment index `i` to move to the next smaller value once the current value can no longer be subtracted.
3. **Result Construction:**
   * Join the collected string tokens into a single string using `"".join(res)`.

## Python Solution
class Solution:
    def intToRoman(self, num: int) -> str:
        values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
        symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

        res = []
        i = 0

        while num > 0:
            while num >= values[i]:
                res.append(symbols[i])
                num -= values[i]
            i += 1

        return "".join(res)