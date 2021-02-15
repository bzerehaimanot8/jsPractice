// // // TYPE CONVERSION

// let val;

// // Number to string
// val = String(333);
// val = String(4+4);
// val = String(888)
// val = String(5*7)

// //boolean to a string
// val = String(true);
// val = String(false)

// //date to string
// val = String(new Date())

// //array to string
// val = String([1,2,3,4,5])
// val = String([24, 8])
// val = String(['hello', 5])

// //toString()
// val = (5).toString();
// val = ([1,2,3]).toString()
// val = (true).toString()
// val = (false).toString()

// // //string to number

// val = Number('5')
// val = Number(true)
// val = Number(false)
// val = Number(null)
// val = Number('hello') //NAN
// val = Number([1,2,3]) //NAN
// val = Number('100.65')
// val = Number(false)
// val = Number(true)
// val = Number(null)
// val = Number('hi')
// val = Number([4,5])

// val = parseInt('100.90'); // string into Int and keeps the whole # only
// val = parseInt('101.5')
// val = parseInt('102.001')
// val = parseFloat('100.50') // 
// val = parseFloat('102.85')
// val = parseFloat('24 8 23')
// val = parseFloat('5 bitcoin')
// val = parseFloat('40 years old')




//Output
// console.log(val);
// console.log(typeof val);
// val = 'hello'
// console.log(val.length); //only works with strings
// val = 666.666
// console.log(val.toFixed(1)); 
// val = 647.747
// console.log(val.toFixed()); //rounds the number to your decimal place of choice


//only works with numbers

//type coercion

// const val0 = '5';
// const val1 = 6;
// const sum = Number(val0 + val1);
// console.log(sum);
// console.log(typeof sum);

// const num1 = '3'
// const num2 = 7
// const total = num1 + num2
// console.log(total) // the sum will be 37 and be a number
// console.log(typeof total)


// NUMBERS & THE MATH OBJECT

// const num1 = 100
// const num2 = 50


// //simple math with numbers
// val = num1 + num2
// val = num1 * num2
// // val = num1 - num2
// // val = num1 / num2
// // val = num1 % num2

// // math object

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.7) //rounds accordingly
// val = Math.ceil(2.1) //rounding to ceiling
// val = Math.floor(2.9) //rounding to the floor
// val = Math.abs(-5)
// val = Math.pow(3, 2) // takes 3 to the power of 2
// val = Math.min(3, 9, 22, 1, 33, -3)
// val = Math.max(3, 9, 22, 1, 33, -3)
// val = Math.random() //random number from 0-1

// val = Math.floor(Math.random() * 20 + 1)

// val = (Math.min((Math.floor(Math.random() * 20 + 1)), 3, 2, 7, 44, 15, 33, 21))


// console.log(val);

// STRING METHODS & CONCATENATION

// const firstName ='Biz'
// const lastName ='Zere'
// const age = 29
// const str = 'Hello there'
// const tags = 'sports, portraits, fashion, weddings'

// val = firstName + lastName

// //concatenation

// val = firstName + ' ' + lastName

// //append

// val = 'Max '
// val += 'Smith'

// val = 'Hello, my name is ' + firstName + ' and I am ' + age + '.'

// // escaping

// val = 'That's awesome, I can't wait' // what not to do
// val = 'That\'s awesome, I can\'t wait' // how to correct it

// // Length

// val =firstName.length //since this is a property and not a method, parenthesis at the end of length is not necessary

// // concat (method)

// val = firstName.concat(' ', lastName) // method used to concat different parameters

// int = '5'
// val = int.concat('', '5')

// // change case
// val = firstName.toUpperCase()
// val = firstName.toLowerCase()

// val = firstName[0]
// val = firstName[1]
// val = firstName[2]

// // //indexOf()

// val = firstName.indexOf() // default output (with no parameter) will be -1
// val = firstName.indexOf('z')
// val = firstName.lastIndexOf('i')

//charAt()

// val = firstName.charAt('2') //grabs the character at a particular index

// // get last character
// val = firstName.charAt(firstName.length -1) 

// // substring()

// val = firstName.substring(0,1) // grabs the characters starting at the first parameter until the character at one minus the second paramter
// val = firstName.slice(0,3)
// val = firstName.slice() // whatever the parameter value is how many characters that'll be sliced from left to right
// val = firstName.slice(-2) // if negative two, it'll keep the last two characters

// // split
// val = str.split(' ') //splitting at the space of a string
// val = tags.split(',') // splits a string at the commas and converts it to an array

// // replace()
// val = str.replace('Hello', 'Hey') // replaces Hello w/ Hey

// // includes()
// val = str.includes('Hello') // checks if "Hello" is in the variable str


// console.log(val);


///////////////TEMPLATE LITERALS/////////////

///// COME BACK AND REVIEW TEMPLATE LITERALS /////


// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// Without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';



// html = '<ul>' +
//        '<li>Name: ' + name + '</li>' +
//        '<li>Age: ' + age + '</li>' +
//        '<li>Job: ' + job + '</li>' +
//        '<li>City: ' + city + '</li>' +
//        '</ul>';

// function hello(){
//   return 'hello';
// }
// console.log(hello())

// // With template strings (es6)
// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//   </ul>
// `;

// document.body.innerHTML = html;



////////////// ARRAYS & ARRAY METHODS ///////

// Create some arrays
// const numbers = [43, 56, 33, 23, 44, 36, 1, 2, 230];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {
//   a: 1,
//   b: 1
// }, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// val = numbers2.length
// val = fruit.length
// val = mixed.length
// // Check if is array
// val = Array.isArray(numbers);
// val = Array.isArray(numbers2)
// val = Array.isArray(fruit)
// val = Array.isArray(mixed)

// // Get single value
// val = numbers[3];
// // val = numbers[7];
// // Insert into array
// numbers[7] = 1000; // replaces 2 with 1000 and so forth with the remaining examples
// numbers[2] = 200 
// numbers[0] = 300
// numbers[1] = 250
 
// // Find index of value
// val = numbers.indexOf(1000);
// val = numbers.indexOf(300)
// val = numbers.indexOf(250)
// val = numbers.indexOf(44)

// // MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// numbers.push(7)

// // Add on to front
// numbers.unshift(12);
// val = numbers.indexOf(43)
// numbers.unshift(8)
// val = numbers.indexOf(43) //all indexes change once you add in a number to the front


// // Take off from end
// numbers.pop();

// // Take off from front
//   
// val = numbers.indexOf(43)
// numbers.shift()
// val = numbers.indexOf(23)

// // Splice values
// const numbers = [43, 56, 33, 23, 44, 36, 1, 2];
// numbers.splice(2,3); // takes away the next 3 numbers starting from index 2
// numbers.splice(7, 1) // takes away one number which is index 7
// numbers.splice(1) // takes away every number but the first one
// numbers.splice(2) // takes away every number but the first two
// numbers.splice(-3) // takes away the last 3 numbers of an array
// numbers.push(2,3,6,8,33, 100)
// // // Reverse
// numbers.reverse();
// numbers.reverse()

// Concatenate array
// val = numbers.concat(numbers2);
// val = val.concat(fruit)
// val = val.concat(mixed)
// val = val.length

// // Sorting arrays
// val = fruit.sort();
// val = numbers.sort(); //  converts the numbers into strings and sorts them that way, the following example sorts numbers accordingly, but that wont always be the case 
// val = numbers.sort(function(a,b){
//   return a-b
// }) // sorting in ascending order using the compare function to determine which number is larger

// // Reverse Sort
// val = numbers.sort(function(a,b){
//   return b-a
// }) // sorting in descending order using the compare function


// // Find
// function above200(num) {
//   return num > 200
// }

// function under50(num) {
//   return num < 50
// }

// val = numbers.find(under50);
// val = numbers.find(above200)

// console.log(numbers);
// console.log(numbers2)
// console.log(val);
// console.log(typeof val);


////////// IF STATEMENTS & COMPARISON OPERATORS  ///////

// if(true) {
// function sayNo
// } else {
// function sayYes
// }

// const id = 100 // we're assigning id to 100, remember that == is different from =

// // Equal to
// if(id==100){
//   console.log('indeed')
// } else {
//   console.log('nope')
// }

// // Not equal to

// if(id!=101){
//   console.log('indeed')
// } else {
//   console.log('nope')
// }

// //  NOT EQUAL TO VALUE & TYPE
// if(id!==100){
//   console.log('indeed')
// } else {
//   console.log('nope')
// }

// test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`)
// } else {
//   console.log('NO ID') // because ID is actually undefined
// }

// Greater than or less than
// if(id >= 100){
//   console.log('indeed')
// } else {
//   console.log('nope')
// }

// IF ELSE

// const color = 'yellow'

// if(color === 'red'){
//   console.log('Color is red')
// } else if (color === 'blue'){  // just another condition, that is it
//     console.log('Color is blue')
// } else {
//   console.log('color is not red or blue')
// }

// //Logical Operators
// const name = 'Steve'
// const age = 25

// if(age > 0 && age < 12){
//   console.log(`${name} is a child`)
// } else if(age >= 13 && age <= 20){
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// // OR ||
// if(age < 19 || age > 29){
//   console.log(`${name} cannot apply for the scholarship`);
// } else {
//   console.log(`${name} can apply for the scholarship`);
// }

// // TERNARY OPERATOR
// console.log(id === 100 ? 'correct': 'incorect'); //true always comes first
// console.log(id === 500 ? 'true' : 'false');

// // WITHOUT BRACES
// if(id === 100)
// console.log('Correct'); //not suggested
// else
//   console.log('incorect');

//////////////////// SWITCHES //////////////////////////////////

// const color = 'red'// use switches when there are many conditions

// switch(color){
//   case 'grey':{
//   console.log('Color is grey');
//   break
// }
  
//   case 'blue': {
//   console.log('Color is blue');
//   break
// }

//   default: {
//   console.log('Color is not grey or blue');
//   break
// }
// }


// let day;

// switch(new Date().getDay()){

// case 0: 
//   day = 'Sunday'
//   break
// case 1:
//   day = 'Monday'
//   break
// case 2:
//   day = 'Tuesday'
//   break
// case 3:
//   day = 'Wednesday'
//   break
// case 4:
//   day = 'Thursday'
//   break
// case 5:
//   day = 'Friday'
//   break
// case 6:
//   day = 'Saturday'
//   break
// }

// console.log(`Today is ${day}`);


///////////////// FUNCTIONS ////////////////////////

// FUNCTION DECLARATIONS

//this isn't common, mostly for logging, usually we will return something
// function greet(){   
//   console.log('Hey');
// }
// greet()

// returning something
// function greet(height, weight){   
//   return `Im ${height}ft and ${weight}lbs`
// }
// console.log(greet(6, 190)); // 

// if you need a default value for height and weight

// function greet(height = 5, weight = 150){ //default values
//   return `Im ${height}ft and ${weight}lbs`
// }
// console.log(greet(4, 120)); //if parameters plugged in, will override default values

// FUNCTION EXPRESSIONS

// practically setting functions as variable assignments

// const quarterEarnings = function(x = 2000){
//   return x + x/2
// }
// console.log(quarterEarnings());


// Immediately invokeable functions - IIFEs(functions that you declare and run at the same time)

 // they always start with a pair of parenthesis and end w/ one

// (function(){
//   console.log('IFFE ran, bro')
// }())

// this time with a parameter
// (function(name){
//   console.log(`What's up, ${name}`)
// }('Biz!'))

// Property Methods

// when a function is put inside an object, its called a method

// const investing = {
//   moneyBack: function(x,y){
//    return x + (x*y)
// },
//  profits: function(x, y){
//   return x*y
// } 
// }
// investing.summary = function(){
//   console.log('This is a summary');
// }
// console.log(investing.moneyBack(1000, .25));
// console.log(investing.profits(1000, .25));


/////////////////////// General Loops ////////////////////

// FOR LOOP (use for loops when you know how many times it will run)

// for(let x=0; x<= 10; x++){
//   console.log((x*x) + 3);
// }

// for(let x=0; x<= 10; x++){
//   console.log('Number ' + x);
// }

// for(let x=0; x<= 10; x++){
//   if(x === 7){
//     console.log('Number 7 is my favorite number');
//     continue
//  }

//   if(x === 9){
//     console.log('Stop the loop');
//     break
// }

//   console.log(`Number ${x}`);
  
  
// }

//WHILE LOOP (use while loop when you dont know how many times it'll run)

// let x = 0;

// while(x <= 10){
//   console.log(`Number ${x}`);
//   x++;
// }


// DO WHILE ()

// let i = 100;

// do {
//   console.log();
  
// }
