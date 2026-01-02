var bird = {
    haswings: true,
    canfly: true,
    hasfeathers: true
}

var eagle1 = Object.create(bird);
    console.log("eagle1:" , eagle1);

    console.log("eagle1 has wings:" , eagle1.haswings);
    console.log("eagle1 has feathers:" , eagle1.hasfeathers);
    console.log("eagle1 can fly:" , eagle1.canfly);


var eagle2 = Object.create(bird);
    console.log("eagle2 has feathers:" , eagle2.hasfeathers);


    
var penguin1 = Object.create(bird);
    penguin1.canfly = false;
    console.log("penguin1 can fly:",penguin1.canfly)