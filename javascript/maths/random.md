# math.random()

generate a decimal number between 0 and 0.99
### math.random();

save it to a variable:
### var decimal = Math.random();

log the value of decimal to the console:
### console.log(decimal);

log the value of dicimal multiplied by 10
### console.log(decimal * 10);

## ceil method
a part of the math object that ruound a decimal up to the nearest integer.

## var rounded = Math.ceil(0.5)
output:- 1

## var rounded = Math.ceil(0.0001)
output:- 1

## var rounded = Math.ceil(0.9)
output:- 1

## var rounded = Math.ceil(1.2)
output:- 2

## var rounded = Math.ceil(2.99)
output:- 3


## ex:1

### var decimal = Math.random() * 10;

### var rounded = Math.ceil(decimal);

### console.log (rounded);
