//1. create an array of numbers and take input from user to add into the array.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question("Enter number: ", (num) => {
//     let element = Number.parseInt(num);
//     let arr = [2,3]

//     function addElement(arr, element){
//         arr.push(element)
//         return arr
//     }

//     console.log(addElement(arr, element))
//     rl.close();
// })


//2. create an array of numbers and take input from user to add into the array until 0 is added.

let element;
do{
    rl.question("Enter number: ", (num) => {
        element = Number.parseInt(num);
        let arr = [2,3]
    
        function addElement(arr, element){
            arr.push(element)
            return arr
        }
    
        console.log(addElement(arr, element))
        rl.close();
    })
}while(element != 0)