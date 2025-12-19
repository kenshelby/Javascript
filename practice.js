//Write a function sumEvenNumbers(arr) that takes an array of numbers and returns the sum of all even
//sumEvenNumbers([1, 2, 3, 4, 5, 6]);  
// Output: 12  → (2 + 4 + 6)

function sumEvenNumbers(arr){
    let isEven = 0;
    for(let i = 0; i<arr.length; i++){
          if (arr[i]%2 == 0){
            isEven += i;
          }
    }
    return isEven;
}

// always use the initial value, by default its the first element of the array
function sumEvenNumbers(arr){
       
    arr.reduce((acc, element) => {
        if (element%2 == 0){
            acc += element
        }
    }, 0);
}

//Write a function reverseArray(arr) that takes an array and returns a new array with the elements in reverse order, 
// without using the built-in .reverse() method.


const reverseArray = (arr) => {
    let result = [];
    for(let i = arr.length-1; i <= 0; i--){
        result.push(arr[i]);
    }
    return result;
}

//Write a function findMax(arr) that returns the largest number in the given array.

function findMax(arr){
    let max = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}
// if arr has -ve numbers only max = 0 will be incorrect, initialize with the first element of the array and iterate from index = 1
if (arr.length === 0) return undefined; // optional edge case handling
let max = arr[0];
let i = 1;

//Write a function findMinMax(arr) that returns an array with two elements:

function findMinMax(arr){
    if (arr.length === 0) return undefined;
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i< arr.length; i++){
        if(arr[i]>max){max = arr[i];}
        if(arr[i]<min){min = arr[i];}
    }
    return {min, max};
}

// Question 3:
// Write a function called fetchUserData() that returns a Promise which:

// Resolves after 1 second with { id: 1, name: "Alice" }.

// Then chain the following actions using Promises:

// Log the user name.

// Return another Promise that resolves after 1 second with that user’s “posts” → e.g.

// ["post1", "post2", "post3"]


// Log the posts.

// Intentionally throw an error (throw new Error("Something went wrong")).

// Catch the error and log "Error caught: Something went wrong".

// Use .finally() to log "Operation complete" no matter what.


function fetchUserData(){

    return new Promise((resolve, reject) => {
        setTimeout(
            ()=>{
               const obj = { id: 1, name: "Alice" };
               resolve(obj)}, 1000)
            });
}
    fetchUserData().then(output => {
        console.log(output.name);
        return new Promise((resolve, reject) => {setTimeout(()=>{resolve(["post1", "post2", "post3"])}, 1000)});
        }).then(arr => console.log(arr[0], arr[1], arr[2])).catch(error => console.log("Error caught:",error)).finally(() => console.log("Operation complete"))
