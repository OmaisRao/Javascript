//Q1
///
var cityName = prompt("Enter Name of the City")

if (cityName === "Karachi" || cityName === "karachi" || cityName === "KARACHI") {
    alert("Welcome to THE CITY OF LIGHTS !!")
}else{
 alert("Please enter karachi to display alert message !!")
}
///

//Q2
///
var gender = prompt("Enter Your Gender :")

if (gender === "Male" || gender === "male" || gender === "MALE") {
    alert("Good Morning Sir !! 🌄")
}else if (gender === "Female" || gender === "female" || gender === "FEMALE") {
    alert("Good Morning Ma'am !! 🌄")
}else{
 alert("Invalid Gender")
}
///

//Q3
///

var trafficColor = prompt("Enter the Color of Traffic Signal (RED 🔴) ,(YELLOW 🟡) or (GREEN 🟢)")

if (trafficColor === "Red" || trafficColor === "red" || trafficColor === "RED") {
 alert("Must Stop 🚫")
}else if (trafficColor === "Yellow" || trafficColor === "yellow" || trafficColor === "YELLOW") {
 alert("Ready to move")
}else if (trafficColor === "Green" || trafficColor === "green" || trafficColor === "GREEN") {
 alert("Move Now")
}else{
 alert("Invalid Color")
}


///

//Q4
///
var fuel = +prompt("Enter the remaining fuel in your car")

if (fuel <= 0.25) {
 alert("Please refill the fuel in your car")
}else{
 alert("fuel is good")
}
///

//Q5
///
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true"); // alert will not run because b++ will be equal to 82 
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


if (true){
alert("True");
}
if (false){
alert("False");
}
    
if("car" < "cat"){
alert("car is smaller than cat");
}
///

//Q6
///
var marksSub1 = +prompt("Enter marks of subject 1 :")
var marksSub2 = +prompt("Enter marks of subject 2 :")
var marksSub3 = +prompt("Enter marks of subject 3 :")

var totalMarks = 300 ;

var marksObtained = marksSub1 + marksSub2 + marksSub3

var percentage = (marksObtained/totalMarks) * 100

var Grade;
var Remarks;

if (percentage >= 80) {
    Grade = "A-one"
    Remarks = "Excellent"
}else if (percentage >= 70) {
    Grade = "A"
    Remarks = "Good"
}else if (percentage >= 60) {
    Grade = "B"
    Remarks = "You need to improve"
}else if (percentage <= 60) {
    Grade = "Fail"
    Remarks = "Sorry"
}

document.write(`
<h1>Marksheet</h1>

 <p>Total marks : ${totalMarks}</p>
 <p>Marks obtained : ${marksObtained}</p>
 <p>Percentage : ${percentage} %</p>
 <p>Grade : ${Grade}</p>
 <p>Remarks : ${Remarks}</p>`)
///

//Q7
///
var secretNumber = 7 ;
var guessNumber = +prompt("Guess the secret number from 1 to 10")

if (guessNumber === secretNumber) {
    alert("Bingo! Correct answer");
}else if (guessNumber === secretNumber + 1) {
    alert("Close enough to the correct answer");
}else {
    alert(`Sorry Your Guess Was Incorrect ... The secret number was ${secretNumber}`);
}
///

//Q8
///
var num_d3 = +prompt("Enter a number to check whether it is divisible by 3 or not !!")

if (num_d3 % 3 === 0) {
    alert("The number is divisible by 3")
}else{
    alert("The number is not divisible by 3")
}
///

//Q9
///
var number = +prompt("Enter a number to check whether it is even or odd !!")

if (number % 2 === 0) {
    alert("The number is EVEN !!")
}else{
    alert("The number is ODD !!")
}
///

//Q10
///
var temperature = prompt("Enter the Value of temperature :")

if (temperature > 40) {
    alert("It is too hot outside")
}else if (temperature > 30) {
    alert("The Weather today is Normal.")
}else if (temperature > 20) {
    alert("Today's Weather is cool.")
}else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.")
}
///

//Q11
///
alert("Simple Calculator Using JavaScript")
var num1 = +prompt("Enter First Number:");
var num2 = +prompt("Enter Second Number:");
var operation = prompt("Enter the operation you want to perform + , - , x , / , %")

var answer ;

if (operation === "+") {
    answer = num1 + num2;
}else if (operation === "-") {
    answer = num1 - num2;
}else if (operation === "x") {
    answer = num1 * num2;
}else if (operation === "%") {
    answer = num1 % num2;
}else if (operation === "/" && num2 !==0) {
    answer = num1 / num2;
}else if (operation === "/" && num2 === 0){
    alert("Cannot divide by zero")
}
else {
    alert("Invalid Operation")
}

if(answer !==undefined){
    document.write(`<h1>Simple JavaScript Calculator !!</h1>`)
    document.write(`The answer is : <b>${answer}</b>`)
    alert(`The answer is : ${answer}`)
}
if (answer === undefined){
    document.write(`<h1>Simple JavaScript Calculator !!</h1>`)
    document.write(`The answer is <b>not defined</b>`)
    alert(`The answer is not defined`)
}
///