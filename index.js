// PUSH
// let arr1 = [1, 2, 3];
// let push= arr1.push(4);
// console.log(push,arr1); 

// POP
// let arr1 = [1, 2, 3];
// let pop= arr1.pop();
// console.log(pop,arr1); 

// MAP
// let arr1 = [1, 2, 3, 4, 5];
// let doubled = arr1.map(num => num * 2);
// console.log(doubled); 
// console.log(arr1); 

// FIND
// let arr1 = [1, 2, 3, 4, 5];
// let found = arr1.find(num => num < 4);
// console.log(found);

// FILTER
// let arr1 = [1, 2, 3, 4, 5];
// let filtered = arr1.filter(num => num < 5);
// console.log(filtered); 

// SPLICE
// let arr1 = [1, 2, 3, 4, 5];
// let removed = arr1.splice(2, 2, 10, 11); 
// console.log(arr1); 
// console.log(removed); 

// SLICE
// let arr1 = [1, 2, 3, 4, 5];
// let sliced = arr1.slice(1, 4); 
// console.log(sliced); 
// console.log(arr1);

// Concate
// let arr2 = [4, 5, 6];
// let concatenated = arr1.concat(arr2);
// console.log(concatenated); 


// INCLUDES
// let fruits = ["apple", "banana", "mango"];
// console.log(fruits.includes("banana")); 
// console.log(fruits.includes("grape")); 

// FOREACH
let fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => {
    console.log(fruit);
});


let numbers = [1, 2, 3, 4];
numbers.forEach((num, index, arr) => {
    arr[index] = num * 2;
});
console.log(numbers); 

// foreach and map

// Using forEach
let doubled = [];
numbers.forEach(num => {
    doubled.push(num * 2);
});
console.log(doubled); 

// Using map
let doubledMap = numbers.map(num => num * 2);
console.log(doubledMap); 


// JOIN

let fruits1 = ["apple", "banana", "mango"];
let result = fruits1.join(" - ");
console.log(result); 


// SORT
let fruits2 = ["banana", "apple", "mango", "cherry"];
fruits2.sort();
console.log(fruits2); 

// SORTING ASCENDING
let numbers1 = [40, 100, 1, 5, 25, 10];
numbers1.sort((a, b) => a - b);
console.log(numbers1); 

// SORTING Descending
numbers1.sort((a, b) => b - a);
console.log(numbers1); 