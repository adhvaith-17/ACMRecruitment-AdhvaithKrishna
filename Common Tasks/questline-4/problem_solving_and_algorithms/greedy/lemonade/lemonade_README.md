# Lemonade Change (LeetCode 860)

## Problem Statement
Each lemonade costs $5. Customers pay with a $5, $10, or $20 bill. We must return the correct change to every customer starting with zero initial balance.

## Solution Approach
A **greedy approach** works because we always prioritize preserving smaller denominations ($5 bills), which are more versatile:

* **Customer gives $5:** Collect the bill by incrementing `five++`.
* **Customer gives $10:** Return one $5 bill. If `five > 0`, decrement `five--` and increment `ten++`. Otherwise, return `false`.
* **Customer gives $20:** Return $15 in change. Greedily prioritize giving one $10 bill and one $5 bill (`ten > 0 && five > 0`) over giving three $5 bills (`five >= 3`). If neither combination is available, return `false`.

## C++ Code
```cpp
class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int five = 0, ten = 0;
        for (int order : bills) {
            if (order == 5) {
                five++;
            }
            else if (order == 10) {
                if (five > 0) {
                    five--;
                    ten++;
                }
                else
                    return false;
            } else {
                if (order == 20) {
                    if (five > 0 && ten > 0) {
                        five--;
                        ten--;
                    }
                    else {
                        if (five >= 3) {
                            five -= 3;
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }
};