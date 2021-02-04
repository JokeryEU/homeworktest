/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

/* WRITE YOUR CODE HERE */

let numbers = [0, 1, 2, 3, 4];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */

// let person1 = {
//     name: "Mihai",
//     surname: "Ivanov",
//     emailAddress: "email@yahoo.com",
//     age: 32
// };

// /* EXERCISE 3
// Add to the previously created object a boolean value to represent wheter you have or not a driving license.
// */

// /* WRITE YOUR CODE HERE */

// person1.drivingLicense = true;
// console.log(person1);

// /* EXERCISE 4
// Remove from the previously created object the age property.
// */

// /* WRITE YOUR CODE HERE */

// delete person1.age
// console.log(person1);

// /* EXERCISE 5
// Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
// */

// /* WRITE YOUR CODE HERE */

// let person2 = {
//     name: "Soare",
//     surname: "Viorel",
//     emailAddress: "SoareV@yahoo.com"
// };
// if (person2.emailAddress !== person1.emailAddress) {
//     console.log("Emails are different");
// } else console.log("Emails are the same");


/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */

let totalShoppingCart = 30;
if (totalShoppingCart > 50) {
    console.log("Free shipping");
    console.log("Total:", totalShoppingCart);
} else { console.log("Shipping cost: " + "+" + 10);
totalShoppingCart = totalShoppingCart + 10;
console.log("Total:", totalShoppingCart);
};
console.log(totalShoppingCart);

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */

// let totalShoppingCart = 20;
// let discount = 20 / 100;
// totalShoppingCart = totalShoppingCart - (totalShoppingCart * discount);
// if (totalShoppingCart > 50) {
//     console.log("Free shipping");
// } else { console.log("Shipping cost: " + "+" + 10);
// totalShoppingCart = totalShoppingCart + 10;
// console.log("Total:", totalShoppingCart);
// };
// console.log(totalShoppingCart);

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR CODE HERE */

let car = {
    brand: "Opel",
    model: "Crossland X",
    licensePlate: "AB-22-MIK"
};

let car1 = Object.assign({}, car);
let car2 = Object.assign({}, car);
let car3 = Object.assign({}, car);
let car4 = Object.assign({}, car);
let car5 = Object.assign({}, car);
car1.licensePlate = "BA-11-IKM";
car2.licensePlate = "NM-12-LKJ";
car3.licensePlate = "OP-89-YOU";
car4.licensePlate = "UI-77-NOW";
car5.licensePlate = "PO-20-JOK";

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */

let carsForRent = [car, car1, car2, car3, car4, car5];

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */

carsForRent.shift();
carsForRent.pop();

/* EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/

/* WRITE YOUR CODE HERE */

console.log(typeof car, typeof car.licensePlate, typeof car.brand);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */

let carsForSale = [];
carsForSale.push(car1, car2, car3);
let totalCars = carsForRent.length + carsForSale.length;
console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */

console.log(carsForSale);

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/
