//Ex 1 -----------------------------------

const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array

/*
['apple', 'pear', 'plum', 'blueberry', 'strawberry'];
 */

//Ex 2 --------------------------------------

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

/*
['onion', 'parsley', 'carrot', 'beetroot'];
*/

//Ex 3 --------------------------------------

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//Ex 4 ----------------------------------------

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};

car1.speed = 201;

console.log(car1.speed, car2.speed);


//The output is 201, 200.

//Ex 5 ---------------------------------------

const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);

// ['apples'] 'not' ['apples','pears'];