// Question 1 )
//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser.

var a = 10 ;

// I,m using document.write() and console.log() both 

// USING document.write()

document.write("Result <br><br> The value of a is : " , a) ;
document.write(" <br>....................................")


document.write("<br><br>The value of ++a is : " , ++a)
document.write("<br>Now the value of a is : " , a)

document.write("<br><br>The value of a++ is : " , a++)
document.write("<br>Now the value of a is : " , a)

document.write("<br><br>The value of --a is : " , --a)
document.write("<br>Now the value of a is : " , a)

document.write("<br><br>The value of a-- is : " , a--)
document.write("<br>Now the value of a is : " , a)
document.write("<br><br><br>")


// USING console.log()

console.log("Result  The value of a is : " , a) ;
console.log(" .........................")

console.log("")
console.log("The value of ++a is : " , ++a)
console.log("Now the value of a is : " , a)
console.log("")
console.log("The value of a++ is : " , a++)
console.log("Now the value of a is : " , a)
console.log("")
console.log("The value of --a is : " , --a)
console.log("Now the value of a is : " , a)
console.log("")
console.log("The value of a-- is : " , a--)
console.log("Now the value of a is : " , a)
console.log("")







// Question 1 )
// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2 ;
var b = 1 ;

document.write("Question 2 <br>")
document.write("---------------<br><br>")
document.write("value of --a is : ", --a);
document.write("<br><br>")
document.write("value of --a - --b is : " , --a - --b);
document.write("<br><br>")
document.write("value of --a - --b + ++b is : " , --a - --b + ++b);
document.write("<br><br>")
document.write("value of --a - --b + ++b + b-- is : " , --a - --b + ++b + b--);
document.write("<br><br>")

document.write("The Final Value of a is " , a)
document.write("<br><br>")
document.write("The Final Value of b is " , b)
document.write("<br><br>")
document.write("The Result is -1")


// Using console.log()

var a = 2 ;
var b = 1 ;
console.log("")
console.log("Question 2 ")
console.log("")
console.log("value of --a is : ", --a);
console.log("")
console.log("value of --a - --b is : " , --a - --b);
console.log("")
console.log("value of --a - --b + ++b is : " , --a - --b + ++b);
console.log("")
console.log("value of --a - --b + ++b + b-- is : " , --a - --b + ++b + b--);
console.log("")

console.log("The Final Value of a is " , a)
console.log("")
console.log("The Final Value of b is " , b)
console.log("")
console.log("The Result is -1")