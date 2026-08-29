# Data Refinery: Students Performance Dataset

## Objective
The objective of this task is to clean and refine the raw Students Performance dataset by handling potential inconsistencies, verifying data integrity, and exporting a clean dataset ready for downstream analysis.

---

## Cleaning Steps & Methodology

1. **Handling Missing Values:**
   * Audited the dataset for null and empty values across all features.
   * Applied automated null-handling (`df.dropna()`) to safeguard the pipeline against missing records.

2. **Deduplication:**
   * Checked for redundant/identical rows across all columns.
   * Applied `df.drop_duplicates()` to ensure every student record is unique and to prevent skewed statistical distributions.

3. **Integrity Verification:**
   * Confirmed total remaining missing values: `0`
   * Confirmed total duplicate records: `0`
   * Verified that the final dataset retains its complete set of 1,000 observations.

4. **Data Export:**
   * Exported the processed DataFrame to `cleaned_students_performance.csv` with `index=False` to prevent extraneous index columns.