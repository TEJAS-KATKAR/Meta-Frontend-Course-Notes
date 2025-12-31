/* Array

    values in an array are all part of a group
    values are set in a specific sequence
    valuse can be accessed with their index numbers
    array starts from 0 .
*/

var train1 = ["wheat", "barley" , "potato" , "salt" , "rocks"];
console.log(train1[0]);

/*In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.
One of the most commonly used built-in methods on arrays are the push() and the pop() methods.
 */

//To add new items to an array, I can use the push() method:
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']


//To remove the last item from an array, I can use the pop() method:  
fruits.pop();
console.log(fruits); // ['apple']


//ex .1 

var veggies = ['onion', 'parsley' , 'carrot'];

console.log(veggies.length);
console.log(veggies[1]);
console.log(veggies[2]);

for (var i = 0; i < veggies.length; i++){
    console.log(veggies[i]);
}