// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.


function removeDuplicates(numbers : number[]) : number[]{
    return numbers.filter((item, index) => numbers.indexOf(item) === index)
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
// console.log(removeDuplicates([5, 5, 8, 8, 9, 0, 9]))