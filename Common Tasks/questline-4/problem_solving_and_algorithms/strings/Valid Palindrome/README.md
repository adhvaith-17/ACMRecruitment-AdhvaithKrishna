# Valid Palindrome (LeetCode 125)

## Problem Statement
Given a string `s`, return `true` if it is a palindrome, or `false` otherwise. A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

## Solution Approach
This problem is solved using an **in-place Two-Pointer strategy**:

1. **Initialize Two Pointers:**
   * Place left pointer `l` at the beginning of the string (`0`) and right pointer `r` at the end (`len(s) - 1`).
2. **Filter & Compare in a Single Pass:**
   * Advance pointer `l` forward while skipping any non-alphanumeric character using `s[l].isalnum()`.
   * Move pointer `r` backward while skipping any non-alphanumeric character using `s[r].isalnum()`.
   * Compare the valid characters in a case-insensitive manner using `s[l].lower() == s[r].lower()`.
   * If they mismatch, return `False` immediately.
   * If they match, advance both pointers inwards (`l += 1`, `r -= 1`).
3. **Completion:**
   * If pointers cross or meet without a mismatch, return `True`.

## Python Solution
class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1

        while l < r:
            while l < r and not s[l].isalnum():
                l += 1
            while l < r and not s[r].isalnum():
                r -= 1
            
            if s[l].lower() != s[r].lower():
                return False
                
            l += 1
            r -= 1

        return True