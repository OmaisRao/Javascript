//Q1
var round_input = document.getElementById('round_input')
var round_result = document.getElementById('round_result')
var random_result = document.getElementById('random_result')

function round() {
    var roundResult = Math.round(round_input.value);
    round_result.innerText = roundResult
}
//
//Q2 Create a function called generateRandomInRange(min, max) that generates a random integer between min and max (inclusive) in JavaScript.
function randomnuM(min,max) {
    return Math.floor(Math.random()*(max - min) + 1)
}

document.write ("Q2 Random Number ==> " +randomnuM (0,1))
//


//Q3Coding Question 3: Write a JavaScript function called convertToNumber(str) that takes a string as input and converts it into a number. Ensure the function returns NaN if the string cannot be converted into a valid number.
console.log("Q3")
var number = prompt("Enter String and i can convert it to number")

console.log(+number)

// Number
console.log(Number(number))

//parseint
console.log(parseInt(number))

//parse float
console.log(parseFloat(number))
     
    alert(number)
//

//Q4Coding Question 4: Implement a JavaScript function called truncateDecimal(num, decimals) that truncates a number num to a specified number of decimals.
//
console.log("Q4")
var truncatE=prompt("Enter a number having 2-4 numbers after a point and i will Implement a JavaScript function called truncateDecimal")
truncatE= truncatE.toFixed(1)
 
console.log(truncatE)
 //