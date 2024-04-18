//Q
///Q1. Write a program that takes two user inputs for first andlast name using prompt and merge them in a new variabletitled fullName. Greet the user using his full name.
var firSTName=prompt("Enter Your First Name")
var laSTName=prompt("Enter Your Last Name")
alert("Welcome to the Page "+   firSTName + laSTName)
///

//Q
///Q2. Write a program to take a user input about his favoritemobile phone model. Find and display the length of userinput in your browser
var FavourITEMobile=prompt("Name of Your favourite Mobile is")
var aLT=alert("Your Favorite Mobile Name is " + FavourITEMobile)
///

///Q
///Q3. Write a program to find the index of letter “n” in the word“Pakistani” and display the result in your browser .
console.log("Q3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .")
var str="Pakistan"
console.log(str)
console.log(str.indexOf('n'))
//

//Q
///Q4. Write a program to find the last index of letter “l” in theword “Hello World” and display the result in your browser.
console.log("Q4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.")
var str2="hello world"
console.log(str2)
console.log(str2.lastIndexOf('l'))

///Q
///Q5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
console.log("Q5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.")
console.log(str)
console.log("in word Pakistan I is At  " + str.indexOf('i') + " index")
///

///Q
///Q7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
console.log("Q7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.")
var ciTY="hyderabad"
console.log(ciTY)
ciTY= ciTY.replace('hyder','islam')
console.log(ciTY)
///

///Q
///Q8. Write a program to replace all occurrences of “and” in thestring with “&” and display the result in your browser.
console.log("8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.")
var pArA="var message = “Ali and Sami are best friends. They play cricket and football together.”;"
console.log(pArA)
pArA=pArA.replaceAll('and','&')
console.log(pArA)
///

///Q
///Q9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
console.log("Q9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.")
var str3="472"
console.log(str3)
console.log("Type : String")
str3=str3.replace('472',472)
console.log(str3)
console.log("Type : Number")
///

///
///Q10. Write a program that takes user input. Convert andshow the input in capital letters.
console.log("Q10. Write a program that takes user input. Convert and show the input in capital letters.")
var userINfo=prompt("Write Any word and in can convert its letters capital in console panel")
console.log(userINfo.toUpperCase())
///

///Q
///Q11. Write a program that takes user input. Convert and show the input in title case.
console.log("Q11. Write a program that takes user input. Convert andshow the input in title case.")
var userIfo=prompt("Write Any word and in can convert its letters Title in console panel")
console.log(userIfo)

///Q
///Q12. Write a program that converts the variable num to string.
console.log("12. Write a program that converts the variable num to string.")
var num=7.26
console.log(num + "Type Number")
num=num.replace('7.26','726')
console.log(num)
///

///Q
///Q13. Write a program to take user input and store usernamein a variable. If the username contains any special symbolamong [@ . , !], prompt the user to enter a valid username.For character codes of [@ .console.log("Q")
var nAe=prompt('Enter Your Name')

if (nAe == "@!#$%^&*()_+") {
    alert=prompt("ERROR! \n Enter a Valid Name Without Special Characters")
}

else{
    alert("thank you!")
}
    

///