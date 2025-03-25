let randomNum = Math.floor(Math.random() * 100); // Generates a number between 0 and 99
console.log(randomNum);

let guess = prompt("Enter number");
guess = parseInt(guess);
let score = 100;
while (guess != randomNum){
    alert("try again!")
    score--;
    if (guess> randomNum){
        alert("the guessed no was greater than the actual number")
    }else{
        alert("the guessed no was less than the actual no")
    }
    guess = prompt("Enter number");
    guess = parseInt(guess);
}
console.log("you guessed it correctly!!")
console.log("your score is " + score)   