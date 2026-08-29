# Data Explorer: Students Performance Dataset

## 1. Dataset Overview & Dimensions
* **Shape:** The dataset consists of **1,000 rows** and **8 columns**[cite: 1].
* **Feature Breakdown:**
  * **Categorical Features (5):** `gender`, `race/ethnicity`, `parental level of education`, `lunch`, `test preparation course` (all loaded as `object` data types)[cite: 1].
  * **Numerical Features (3):** `math score`, `reading score`, `writing score` (all loaded as `int64` data types)[cite: 1].

---

## 2. Data Quality & Missing Values
* **Completeness:** There are **0 missing or null values** across all 8 columns[cite: 1].
* **Cleanliness:** The dataset is structured cleanly and requires no immediate data imputation or row dropping[cite: 1].

---

## 3. Key Observations & Summary Statistics

| Metric | Math Score | Reading Score | Writing Score |
| :--- | :--- | :--- | :--- |
| **count**| 1000.00000	 | 1000.000000 | 1000.000000 |
| **Mean** | 66.09 | 69.17 | 68.05 |
| **Std Dev** | 15.16 | 14.60 | 15.20 |
| **Min** | 0.00 | 17.00 | 10.00 |
| **25%** | 57.00 | 59.00 | 57.75 |
| **Median (50%)** | 66.00 | 70.00 | 69.00 |
| **75%** | 77.00 | 79.00 | 79.00 |
| **Max** | 100.00 | 100.00 | 100.00 |

* **Overall Performance:** Students achieved the highest average performance in **reading** (mean: ~69.17), followed closely by **writing** (mean: ~68.05), with **math** showing the lowest relative average (mean: ~66.09)[cite: 1].
* **Spread & Outliers:** All three score categories have a maximum possible score of 100[cite: 1]. However, the lower bound exhibits significant variance—math has a minimum score of 0, whereas reading and writing have minimums of 17 and 10, respectively[cite: 1].