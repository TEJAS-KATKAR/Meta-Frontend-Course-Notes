

class Bird {
    useWings() {
        console.log("Flying!");
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings();
        console.log("Barely flapping!");
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"


//---------------------------------------------

class car{
    constructor(id , color, price , speed) {
        this.id = id;
        this.color = color;
        this.price = price;
        this.speed = speed;
    }
}
    myCar1 = new car(1 ,"red" , 150000 , 210);

console.log("speed" , myCar1.speed);