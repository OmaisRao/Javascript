//Q1. Declare and initialize an empty multidimensional array.(Array of arrays)
console.log("Q1")
///
var emptyArray=[,,,]
//     Question # 2
console.log("Q2")

var matric = [[0,1,2,3],
              [1,0,1,2],
              [2,1,0,1]]

for (var row of matric){
     var rowString= row.join(' ');
     console.log(`${rowString}`)

}



//   Question # 3
console.log("Q3")
 for(var i=1; i<=10; i++ )
 {console.log(`${i}`)}

  // Question # 4
  console.log("Q4")
var num1 = prompt("Enter a number for create a table")
var limit = prompt("Enter lenght multiplication table")
for (var i=1; i<=limit ; i++)
{console.log(`${num1} * ${i} = ${num1*i} `)}


   //Question # 5
   console.log("Q5")

var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']

for (i=0; i < fruits.length; i++)
{
   console.log(`${fruits[i]}`)
  
}
for (i=0; i < fruits.length; i++)
{
   console.log(`Element at index ${i} is ${fruits[i]}`)
}

  // Question # 6(a)
  console.log("Q6")
//(a)  1 to 15

var series  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for (i=0; i<series.length;i++)
{{console.log(`${series[i]}`)}}
console.log(`${series}`)


//(b)  reverse seeries

var series  = [1,2,3,4,5,6,7,8,9,10];
{{console.log(`${series.reverse()}`)}}

//(c)Even seeries

var series  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var even = [];
for(let i = 0; i < series.length; i++) {
       if (series[i] % 2 == 0)
       even.push(series[i]);
}
console.log(`Even numbers Series: ${even}`);

//(d)odd seeries

var series  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var odd = [];
for(let i = 0; i < series.length; i++) {
       if (series[i] % 2 !== 0)
       odd.push(series[i]);       
}
console.log(`Even numbers Series: ${odd}`)

//(e)2K seeries

var series  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var even = [];
for(let i = 0; i < series.length; i++) {
       if (series[i] % 2 == 0)
       even.push(series[i]+"k");
}
console.log(`Even k Series: ${even}`);

//Question # 7
console.log("Q7")
var Bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInput = prompt("Enter city name");
var valueOfA=false;
for (var i = 0; i < Bakery.length; i++) {
    // console.log(cities[i])
    if (userInput === Bakery[i]) {
      console.log(`${userInput} is availble in bakery on index of ${i}`)
        valueOfA = true
        break;
    }
}
if (valueOfA === false) {
   console.log(` ${userInput}is not availble in bakery `)
}

//Question # 8(Find the largest number)

console.log("Q8")
   
var arr = [3, 6, 2, 56, 32, 5, 89, 32,95];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > largest ) {
    largest = arr[i];
  }
}
console.log(`Array Item  ${arr}`);
console.log(` The largest number is  ${largest}`);

//Question # 9(Find the small number)
console.log("Q9")

var arr = [3, 6, 2, 56, 32, 5, 89, 32,95];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] < largest ) {
    largest = arr[i];
  }
}
console.log(`Array Item  ${arr}`);
console.log(` The Small number is  ${largest}`);

//Question # 10
console.log("Q10")
for (var i=1; i<=20; i++){
   console.log(` ${i*5}`);
}