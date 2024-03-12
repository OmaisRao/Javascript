// Question 1 )
// 1. Declare an empty array using JS literal notation to store student names in future.
var studentNames = [] ;


// Question 2 )
// 2. Declare an empty array using JS object notation to store student names in future.


// Question 3 )
// 3. Declare and initialize a strings array.
var stringsArray = ["apple", "banana", "orange"];


// Question 4 )
// 4. Declare and initialize a numbers array.
var numbersArray = [1, 2, 3, 4, 5];


// Question 5 )
// 5. Declare and initialize a boolean array.
var booleanArray = [true, false, true];


// Question 6 )
// 6. Declare and initialize a mixed array.
var mixedArray = ["apple", 2, true, "banana", false];


// Question 7 )
// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BC BS, BCOM, MS, M. Phil., PhD). Show the list qualifications in your browser like:

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Qualifications:</h1>");
document.write("<b><ol>");
document.write(`<li style="font-size:20px">${qualifications[1]}</li>`)
document.write(`<li style="font-size:20px">${qualifications[2]}</li>`)
document.write(`<li style="font-size:20px">${qualifications[3]}</li>`)
document.write(`<li style="font-size:20px">${qualifications[4]}</li>`)
document.write(`<li style="font-size:20px">${qualifications[5]}</li>`)
document.write(`<li style="font-size:20px">${qualifications[6]}</li>`)
document.write(`<li style="font-size:20px">${qualifications[7]}</li>`)
document.write(`<li style="font-size:20px">${qualifications[8]}</li>`)
document.write("</ol></b>");



// Question 8 )
// 8. Write a program to store 3 student names in an array.Take  another array to store score of these three students.  Assume that total marks are 500 for each student, display  the scores & percentages of students like:


var studentNames = [];
studentNames[0] = prompt("Enter name of student 1 :")
studentNames[1] = prompt("Enter name of student 2 :")
studentNames[2] = prompt("Enter name of student 3 :")

var scores = [] ;
scores[0] = prompt("Enter score of student 1 :")
scores[1] = prompt("Enter score of student 2 :")
scores[2] = prompt("Enter score of student 3 :")


var totalMarks = 500;

var percentageStudent1 = (scores[0] / totalMarks) * 100;
var percentageStudent2 = (scores[1] / totalMarks) * 100;
var percentageStudent3 = (scores[2] / totalMarks) * 100;

document.write(`<h3> Score of ${studentNames[0]} is ${scores[0]}. Percentage: ${percentageStudent1}% <br></h3> `)
document.write(`<h3> Score of ${studentNames[1]} is ${scores[1]}. Percentage: ${percentageStudent2}% <br></h3>`)
document.write(`<h3> Score of ${studentNames[2]} is ${scores[2]}. Percentage: ${percentageStudent3}% <br></h3>`)


// Question 9 )
// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-define position/index. . Display the updated array in you browser.

var colors = ["Red", "Green", "Blue"];

// Display the array elements
document.write(`<p style="font-size:25px">Initial Array:</p>`);
document.write(`<h3>${colors}</h3>`);

// a. Add color to the beginning of the array
var newColorBeginning = prompt(`Enter a color to add to the beginning:`);
colors.unshift(newColorBeginning);

// Display the updated array
document.write(`<p style="font-size:25px">Array after adding color to the beginning:</p>`);
document.write(`<h3>${colors}</h3>`);

// b. Add color to the end of the array
var newColorEnd = prompt(`Enter a color to add to the end:`);
colors.push(newColorEnd);

// Display the updated array
document.write(`<p style="font-size:25px">Array after adding color to the end:</p>`);
document.write(`<h3>${colors}</h3>`);

// c. Add two more colors to the beginning of the array
colors.unshift(`Purple`, `Yellow`);

// Display the updated array
document.write(`<p style="font-size:25px">Array after adding two more colors to the beginning:</p>`);
document.write(`<h3>${colors}</h3>`);

// d. Delete the first color in the array
colors.shift();

// Display the updated array
document.write(`<p style="font-size:25px">Array after deleting the first color:</p>`);
document.write(`<h3>${colors}</h3>`);

// e. Delete the last color in the array
colors.pop();

// Display the updated array
document.write(`<p style="font-size:25px">Array after deleting the last color:</p>`);
document.write(`<h3>${colors}</h3>`);

// f. Add a color at a specific index
var indexToAdd = +prompt(`Enter the index to add a color:`);
var colorToAdd = prompt(`Enter the color to add:`);
colors.splice(indexToAdd, 0, colorToAdd);

// Display the updated array
document.write(`<p style="font-size:25px">Array after adding color at a specific index:</p>`);
document.write(`<h3>${colors}</h3>`);

// g. Delete colors at a specific index
var indexToDelete = +prompt(`Enter the index to delete color(s):`);
var deleteCount =  +prompt(`Enter the number of colors to delete:`);
colors.splice(indexToDelete, deleteCount);

// Display the updated array
document.write(`<p style="font-size:25px">Array after deleting color(s) at a specific index:</p>`);
document.write(`<h3>${colors}</h3>`);
