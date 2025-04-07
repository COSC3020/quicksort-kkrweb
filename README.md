# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


//


Name: Kane Kriz

Start Date: 18 Feb 2025

Last Edited: 4 April 2025

Feedback Request 1 Date: 4 April 2025


//


Feedback Request 2 Date: 5 April 2025


//

Response: 

The time complexity of my iterative quicksort implementation can be analysed as follows: 
To compute a theta bound for the algorithm's worst case runtime, we must first consider how the functionality of the implementation is accomplished.
The implementation consists of two primary elements, being the primary quicksort(array) function and the helper partitionArr(array, startPos, endPos) function.

The purpose of the quicksort(array) function is to manage the iterative sorting process by keeping track of subarray bounds that need processing, replacing what would normally be handled via a recursive implementation. 

The purpose of the partitionArr(array, startPos, endPos) function is to rearrange elements around the pivot and to return its ending position.
These rearrangements occur such that all elements less than or equal to the pivot are arranged to come before it, and all greater elements come after.
Once this is properly accomplished, the final pivot position is returned. 

First, the partitionArr function demonstrates Θ(n) time complexity for any subarray of size n, as it must examine each element exactly once during the partitioning process. 
This linear time operation forms the fundamental building block of the entire algorithm. 

The quicksort function's complexity depends on how many times and on what size subarrays partitionArr gets called.
In the best case, where the pivot consistently divides arrays into nearly equal halves, the stack maintains a logarithmic depth, leading to the optimal Θ(n * log n) runtime characteristic of efficient sorting algorithms.

The overall worst case aysmptotic theta bound can be calculated through considering the runtimes of the actions of the implementation.
The overall theta bound can be calculated as follows: 

When the input array is already sorted or sorted in reverse, each partition call processes a subarray that's only one element smaller than the previous one.
This then would create the worst case scenario where the stack depth becomes linear rather than logarithmic.

In this situation, partitionArr will be called n times, on subarrays from n to 1 in descending sequential order, with the summation of their work resulting in a total runtime of Θ(n^2). 
This experienced n^2 worst case behavior matches that of the recursive version of quicksort's theoretical bounds when using the same pivot selection strategy.
This is the case as the iterative implementation utilizing a stack performs the same partition operations, just with positional stack management instead of recursive function calls.
The choice to always select the last element as the pivot (line `pivot = array[endPos]` in partitionArr) directly leads to this worst case behavior on sorted inputs.
As could potentially be assumed, this could be changed by instead implementing an alternate pivot selection method.


//


Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations:

Sachin Gurjar. “Implementing Iterative QuickSort in Java with Example.” Sachin Gurjar Blogs, 18 Nov. 2023, blog.sachingurjar.me/implementing-iterative-quicksort-in-java-with-example/. Accessed 4 Apr. 2025.

“Iterative Quick Sort.” GeeksforGeeks, 13 Oct. 2012, www.geeksforgeeks.org/iterative-quick-sort/.
