# Assign Cookies (LeetCode 455)

## Problem Statement
Given arrays `g` (children's greed factors) and `s` (cookie sizes), maximize the number of content children. A child `i` is satisfied if a cookie `j` has size `s[j] >= g[i]`. Each child receives at most one cookie.

## Solution Approach
This problem is solved using a **Greedy + Two-Pointer strategy**:

1. **Sort** both `g` (greed) and `s` (cookie sizes) in ascending order.
2. Initialize pointers `i = 0` (pointing to child) and `j = 0` (pointing to cookie), along with a counter `content = 0`.
3. Traverse through both arrays:
   * If `s[j] >= g[i]`, the current smallest sufficient cookie satisfies the current least-greedy child: increment `i++`, `j++`, and `content++`.
   * If `s[j] < g[i]`, the cookie is too small for child `i` (and any subsequent child): skip the cookie by incrementing `j++`.
4. Return `content`.

## C++ Code
class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        sort(g.begin(), g.end());
        sort(s.begin(), s.end());
        int i=0;
        int j=0;
        int content=0;
        while(i < g.size() && j < s.size()){
                if (s[j]>=g[i]){
                    i++;
                    j++;
                    content++;
                }
                else{
                    j++;
                }
            }    
        return content;
    }
};