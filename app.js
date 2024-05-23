const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers

const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;


const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

console.log(isValid);

const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  // Check if all numbers are divisible by 5

const result1 = n1/ 5;

console.log(result1);

const result2 = n2/ 5;

console.log(result2);

const result3 = n3/ 5;

console.log(result3);

const result4 = n4/ 5;

console.log(result4);


// Check if the first number is larger than the last. Cache the result in a variable.

const firstNumVSLastNum =  n1 > n4;

const arithmeticChain = (n2 -n1) * n3 / n4;


const isOver25Revised = n1 <  25 || n2 < 25 || n3 < 25 || n4 < 25;

// Part2

// How many gallons of fuel will you need for the entire trip?

const fuelNeedFor55miles = (1500 /30)
const fuelNeedFor60miles = (1500 /28) 
const fuelNeedFor75miles = (1500 /23) 
const costOfFuel = 3;
 

console.log(`The amount of gallons needed for trip at 55 miles is ${fuelNeedFor55miles}`)
console.log(`The amount of gallons needed for trip at 60 miles is ${fuelNeedFor60miles}`)
console.log(`The amount of gallons needed for trip at 75 miles is ${fuelNeedFor75miles}`)


// Will your budget be enough to cover the fuel expense?

const isEnoughFor55miles = fuelNeedFor55miles * costOfFuel < 175;
const isEnoughFor60miles = fuelNeedFor60miles * costOfFuel < 175;
const isEnoughFor75miles = fuelNeedFor75miles  * costOfFuel < 175;

console.log(`With 55 miles the budget is enough ${isEnoughFor55miles}`)
console.log(`With 60 miles the budget is enough ${isEnoughFor60miles}`)
console.log(`With 75 miles the budget is enough ${isEnoughFor75miles}`)

// How long will the trip take, in hours?
const amountOfHours55Miles = 1500 / 55
const amountOfHours60Miles = 1500 / 60;
const amountOfHours75Miles = 1500 / 75;


console.log(`The trip will take ${amountOfHours55Miles} hours`)
console.log(`The trip will take ${amountOfHours60Miles} hours`)
console.log(`The trip will take ${amountOfHours75Miles} hours`)