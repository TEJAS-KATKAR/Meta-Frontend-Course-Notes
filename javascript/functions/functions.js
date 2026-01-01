//functions without parameters...

function addTwoNums(){

    var a = 10;
    var b = 20;
    var c = a + b;

    console.log(c)
}
addTwoNums();

//function with parameters...

function add(a,b) {
    var c = a + b;
    console.log(c);
}

add(2,3);
add(4,6);

//-------------------------------

function doubleIt(num) {
    return num * 2
}

//-------------------------------

function objectMaker(val) {
    return {
        prop: val
    }
}

//-------------------------------

// Function to double a number
function doubleIt(num) {
    return num * 2;
}

// Function to create an object with a 'prop' key
function objectMaker(val) {
    return { prop: val };
}

// Chaining functions and returning values
let result = objectMaker(doubleIt(5));
console.log(result); // { prop: 10 }

//--------------------------------------

function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);


//----------------------------------------

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!