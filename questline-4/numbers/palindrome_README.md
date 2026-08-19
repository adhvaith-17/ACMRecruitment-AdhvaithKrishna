# Palindrome Number (LeetCode 9)

## Problem Statement
Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise. An integer is a palindrome when it reads the same forward and backward (e.g., `121` is a palindrome, while `123` and `-121` are not).

## Solution Approach
This solution uses an **arithmetic reversal approach** without converting the integer into a string:

1. **Edge Case Handling:**
   * Any negative number (e.g., `-121`) cannot be a palindrome due to the leading minus sign (`x < 0`).
   * Any non-zero number ending with `0` (e.g., `10`, `100`) cannot be a palindrome because a valid number cannot start with `0` (`x % 10 == 0 && x != 0`).
2. **Reversing the Integer:**
   * Store an original copy of `x` in `xcopy`.
   * Extract the last digit of `x` using the modulo operator (`x % 10`) and append it to `reverse` (`reverse = reverse * 10 + last_digit`).
   * Remove the last digit from `x` using integer division (`x //= 10`).
   * Repeat until `x` becomes `0`.
3. **Verification:**
   * Compare `reverse` with `xcopy`. If they are identical, `x` is a palindrome.

## Python Solution
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or (x % 10 == 0 and x != 0):
            return False

        reverse = 0
        xcopy = x

        while x > 0:
            reverse = (reverse * 10) + (x % 10)
            x //= 10
        
        return reverse == xcopy