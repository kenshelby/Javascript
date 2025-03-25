
let array = [2,3,4,5];
// forEach does not return a new array, it just performs some operation.
array.forEach((element, index, array) => {
    console.log("element is "+ element + " index is "+ index)
    console.log("array is " + array)
});

array.forEach((element) => {
    console.log("element is "+ element)
});// index and array are not mandatory, same we can use with the map method.


// map method reeturns a new array.
let out = array.map((element, index, array) => {
    console.log("element is "+ element + " index is "+ index)
    return element + 1;
});

//array Filter method

let arr = [2,4,6,7,9,11];

let arr2 = arr.filter((element) =>{
    return element > 5
})
console.log(arr2)

//The reduce() method is used to iterate over an array and reduce it to a single value (e.g., sum, product, object, etc.).
/*

this is the basic syntax
array.reduce((accumulator, currentValue, index, array) => {
    // Operation
}, initialValue);


accumulator → Stores the result of previous iterations.
currentValue → The current element in the iteration.
index (optional) → The index of currentValue.
array (optional) → The original array.
initialValue (optional but recommended) → The starting value of accumulator. 
*/

let acc_arr = arr.reduce((accumulator, currentval) => {
     return accumulator + currentval;
}, 0)

console.log(acc_arr)

//the output will be the elements added 
// one more way we can achieve this is : 

const reduce_func = (acc, currentval) => {
    return acc + currentval;
}

let out_arr = arr.reduce(reduce_func)


