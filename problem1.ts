//Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

//rap
// const numbersArray : number[] = [1, 2, 3, 4, 5];
// const sumArray: number = numbersArray.reduce((acc, curr) => acc + curr, 0)

// console.log(sumArray)



function sumArray(numbers: number[]): number{
    return numbers.reduce((acc, curr) => acc + curr, 0)
}
console.log(sumArray([1, 2, 3, 4, 5]))