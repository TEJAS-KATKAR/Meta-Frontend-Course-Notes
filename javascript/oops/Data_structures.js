//Ex 1 -------------------------

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

/*
0. kiwi
1. mango
2. apple
3. pear
 */

//Ex 2 -----------------------------

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
    console.log(result);
})

/*[30,40,50] */

//Ex 3 ----------------------------

[0,10,20,30,40,50].map( function(num) {
    return num / 10
})

/*[0,1,2,3,4,5] */

//Ex 4 -----------------------------

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

/*
['speed',100,'color','yellow']
*/

//Ex 5 ----------------------------

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

/*
{'apple', 'pear', 'plum'}
*/