// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  //   Check if all numbers are divisible by 5. Cache the result in a variable.

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

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const arithmeticChain = (n2 -n1) * n3 / n4;


// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

const isOver25Revised = n1 <  25 || n2 < 25 || n3 < 25 || n4 < 25;



// Part2

//Distance of the trip in total is 1,500

//55 miles an hour, you get  30 miles per gallon

//one gallon = 30 miles

//one hour  == 55 miles 


//60 miles an hour, you get 28 miles per gallon

//75 miles an hour, you get 23 miles per gallon


//fuel budget 175$
//cost of fuel 3 per gallon





// How many gallons of fuel will you need for the entire trip?

const fuelNeedFor55miles = (1500 /30) //150
const fuelNeedFor60miles = (1500 /28) //160
const fuelNeedFor75miles = (1500 /23) //195
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