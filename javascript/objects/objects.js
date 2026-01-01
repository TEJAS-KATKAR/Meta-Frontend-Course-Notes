//ex.1
//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

console.log(assistantManager);//display the object in the developer console


//ex.2
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(table);//display the object in the developer console

//ex.3
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}

house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}


//ex.4
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 4}

//ex.5
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}