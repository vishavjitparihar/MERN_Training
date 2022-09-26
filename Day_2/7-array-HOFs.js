//HOF - Higher Order Function

//Callback Function
//A function passed to as an argument to another function to be called at a later time


/**
 * Array HOFs:
 * 
 * forEach: performs a callback function on each element in the array
 * Map: same as forEach, but what is returend gets added to a new array. That array is returned by map
 * filter: perform some logic on each element. If the value returned is true, it is added to the new array.
 * reduce
 * 
 */

//Functional Programming
//FUnctional Programming believes all functions should be pure (means no side effect or mutation)

const planets =['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune' ];

//Functional Programming - it will not mutate the array
//forEach in arrays
planets.forEach(function(planet){
    console.log(planet);
});

planets.forEach(function(planet, index){
    console.log(`Planet at index ${index+1} is: ${planet}`);
});

planets.forEach(function(planet, index, array){
    console.log(array);
    console.log(`Planet at index ${index+1} is: ${planet}`);
});
//----------------------------------------------------------------------------------------------------------------------------




//Map functions the same as forEach, but it returns a new array

const upperCasePlanets = planets.map(function(planet){
    return planet.toUpperCase();
});

console.log(upperCasePlanets);
console.log(planets);
//----------------------------------------------------------------------------------------------------------------------------



//Filter filters out elements from an array
//It does this by returning a new array missing the filtered out elements. The original array is untouched

//filter out the plantes that dont start with letter M

const planetBeginsWithM = planets.filter(function(planet){
    //anytime true is returned the value is kept
    //false values are filtered out
    return planet.startsWith('M');
});

console.log(planetBeginsWithM);
//----------------------------------------------------------------------------------------------------------------------------



//reduce will take a callback and wrap up or 'accumulate' all of the values into one singular value

const nums = [5, 2, 90, 3, 12];


//?????????????????????????????????????????????????????????????????????????????????????????????????
//how are we updating currSum
//i cant wrap my head around
//is the reduce function iterating through num (not nums)
//can you use paint to explain this?? like how reduce works physically

const sum = nums.reduce(function(currSum, num){
    return currSum+num;
});
//----------------------------------------------------------------------------------------------------------------------------





//chaining these together
//You cannot usually chain off of reduce (doesnt return an array) or forEach (returns undefined)


/**
 * Example
 * -filter out any elements > 10
 * -times all remaining elements by 2
 * -sum uo what's left
 */


const example = nums.filter(function(a){ return a <= 10})
                    .map(function(a){ return a*2})
                    .reduce(function(sum, a){ return sum+a });


console.log(example);





const some = () => 1;

console.log(typeof some);