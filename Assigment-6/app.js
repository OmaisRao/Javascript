//• Write a loop to print numbers from 1 to 10.
//
console.log("Q1")
for (var i = 1 ;i <=10 ; i++){
      console.log(i)
}

//• Write a loop to print even numbers from 1 to 20.
//
console.log("Q2")
for (var i = 0; i <= 20; i++) {
         if (i % 2 == 0) {
            console.log('Even Number ', i)
         }
        }

//• Write a loop to print odd numbers from 1 to 15
//
console.log("Q3")
for (var i = 0; i <= 15; i++) {
         if (i % 2 !== 0) {
             console.log('Odd Number ', i)
         }
        }

//• Write a loop to calculate and print the factorial of a number (let's say 5).
//
console.log("Q4")
var num = prompt("Enter a number to calculate its factorial: ");
var factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`The factorial of ${num} is: ${factorial}`);


//• Write a loop to print the multiplication table of a number (let's say 7) up to 10.
//
console.log("Q5")

var userInput = prompt("Enter a number to print its multiplication table: ");
for(var i = 1; i <= 10; i++){
    console.log(`${userInput} x ${i} = ${userInput * i}`);}
//• Write a loop to print the Fibonacci series up to the 10th term. (The Fibonacci sequence is a type series where each number is the sum of the two that precede it. It starts from 0 and 1 usually. The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.-10)
//
console.log("Q6")
for (let i = 1; i <= 10; i++) {
    console.log(`${i} squared is: ${i * i}`);
}
//• Write a loop to find and print the sum of digits of a number (let's say 123).
//
console.log("Q7")
var original = "Hello World";
var reversed = original.split('').reverse().join('');
console.log(`${reversed}`);
//Write a loop to print the reverse of a string (let's say "hello").
//
console.log("Q8")
var arr = [3, 7, 2, 9, 5];
var smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log(`The array is: ${arr}`);
console.log(`The smallest number in the array is: ${smallest}`);

//• Write a loop to print the square of numbers from 1 to 10.
//
console.log("Q9")
var arr = [3, 7, 2, 9, 5];
var largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(`The array is: ${arr}`);
console.log(`The largest number in the array is: ${largest}`);
//• Write a loop to find and print the smallest element in an array (let's say [3, 7, 2, 9, 5]).
//
console.log("Q10")
