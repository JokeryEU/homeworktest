/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain concepts as you are speaking to a 12 years old
*/

/* WRITE YOUR ANSWER HERE */

console.log("Hello Teacher");  // this is a string value
console.log(25); // this is a number value once
console.log(true); // this is a boolean value can be true or false values

/* EXERCISE 2
Describe what is a variable. Try to explain the concept as you are speaking to a 12 years old
*/

/* WRITE YOUR ANSWER HERE */

/* A variable is used to store a value temporary into the computer memory.
 We write the variable like this : let followed by a name ex: let name or let table.
  The name of the variable can't start with a number.
*/

/* EXERCISE 3
Write the code to execute a SUM between the number 12 and 20.
*/

/* WRITE YOUR CODE HERE */

console.log(12 + 20);

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

/* WRITE YOUR CODE HERE */

 // let x = 12;

/* EXERCISE 5
Create a variable named name containing the string John Doe.
*/

/* WRITE YOUR CODE HERE */

let name = "John Doe";

/* EXERCISE 6
Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
*/

/* WRITE YOUR CODE HERE */

// console.log(12 - x);


/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

/* WRITE YOUR CODE HERE */
let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);
let equal = name1 === name2.toLowerCase();
console.log(equal);


/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

/* WRITE YOUR CODE HERE */
let letters = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let x = 0;
if (x < 10) {
       console.log(letters[x]);
} else console.log("The number you choose is higher than 9");



/* EXERCISE 9
[Extra] Insert a value in a variable based on the result of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 17.00 GMT +1. In the next days we'll also learn how to use GIT 
*/
