# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

///\
In the best case, the input data is already sorted. The permutationsort function only needs to check once and directly find the first permutation, which is the sorted permutation. It needs to iterate n times. In this case, the time complexity is O(n)\

In the worst case, for an array of length n, there are n choices for the first element, n-1 choices for the second element, n-2 choices for the third element, and so on, until n-n.\
The sorted permutation is the last one among all permutations, which requires traversing all permutations, and the time complexity is O(n*n!)\

When randomly generating permutations, as the size of the array approaches infinity, the probability of finding the sorted one in n! permutations is 1/n!, the probability of randomly generating a sorted array approaches 0, and the running time approaches infinity.\


###
Sources: Chatgpt provided me with some structure of how to generate all permutations in the generatePermutations function and receive the array and the starting position of the permutation.\

I finished configuring the construction of the three function parts and explained the time complexity of the three cases.\

Plagiarism Statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
