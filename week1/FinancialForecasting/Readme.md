# Financial Forecasting

## Objective

The objective of this exercise is to develop a financial forecasting tool that predicts future values based on past data using recursion.

## Understanding Recursion

Recursion is a technique in which a method calls itself to solve a problem. Instead of solving the entire problem at once, the problem is broken into smaller subproblems until a base condition is reached.

A recursive solution generally contains:

* A **base case** to stop recursion.
* A **recursive case** where the function calls itself with a smaller input.

Recursion often makes code shorter and easier to understand for problems that have a repetitive structure.

## Recursive Approach for Financial Forecasting

In financial forecasting, future values are calculated by repeatedly applying a growth rate to the current value.

For example:

* Initial value = 10000
* Growth rate = 10%
* Number of years = 3

The forecast is calculated as:

* Year 1 = 10000 × 1.10 = 11000
* Year 2 = 11000 × 1.10 = 12100
* Year 3 = 12100 × 1.10 = 13310

The recursive method performs this calculation by reducing the number of years by one during each recursive call until it reaches zero.

## Time Complexity Analysis

The recursive algorithm makes one recursive call for each year.

Therefore, if the number of years is **n**, the time complexity is:

**O(n)**

This means the execution time increases linearly with the number of years.

## Optimization of Recursive Solution

Although recursion simplifies the implementation, it creates multiple function calls and consumes additional stack memory.

The recursive solution can be optimized by:

1. Using an iterative approach with loops.
2. Using memoization to store previously calculated results and avoid repeated computations.

For larger inputs, an iterative solution is generally more efficient and uses less memory.

## Conclusion

Recursion provides a simple and elegant way to implement financial forecasting by repeatedly applying the growth rate until the desired number of years is reached. However, for very large datasets or long forecasting periods, iterative methods or memoization techniques provide better performance and memory efficiency.
