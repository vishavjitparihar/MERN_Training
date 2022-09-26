//two types of destructuring 
// 1. Object
// 2. Array


const dog = {
    name: 'Fido',
    age: 47,
    breed: {
        name: 'Rottweiler',
        isPure: true
    },
    weight: 150,
    height: 7,
    color: 'Black',
    legs: 3,
    hasTail: false,
    haqOwner: false
};

console.log(dog.name);
//what if i want specific properties from the object dog
//I just want tio extract certain fields from the object as variable

//this will pull name, breed, and color property from the dog and save them in name, breed, and color variable
const { name, breed:{name: breed, isPure}, color } = dog;
console.log(breed);
console.log(isPure);


//creating a function called getFido using arrow function  
const getFido = () => { return dog };

const{ age, legs: what } = getFido();
console.log(age);
console.log(what);
//----------------------------------------------------------------------------------------------------------------------





// Destructuring from a function's parameter
const recipe = {
    name: 'mac and cheese',
    calories: 800,
    ingridents: ['Noodles', 'Cheese', 'Bacon Bits', 'Bread Crumbs'],
    cookTime: 10
}


const displayInfoDish = (recipe) => {
    console.log(recipe.name);
    console.log(recipe.calories);
    console.log(...recipe.ingridents);
}

displayInfoDish(recipe);






//but there is a better way
//i can also default some variables in this like i did for calories
const displayInfoDishBetterWay = ({name, calories=100, ingridents}) => {
    console.log(name);
    console.log(calories);
    console.log(...ingridents);
}

displayInfoDishBetterWay(recipe);






//this is another way of doing this
//we can also rearrange the order, as it will match the variable names to assign values 
displayInfoDishBetterWay({name: 'PBJ', ingridents: ['bread', 'noodles', 'cheese']});








//by adding ...props will add every other property to this new function
const displayInfoDishWithRest = ({name, calories=100, ingridents, ...props}) => {
    console.log(name);
    console.log(calories);
    console.log(...ingridents);
    console.log(props);
}

displayInfoDishWithRest(recipe);
//----------------------------------------------------------------------------------------------------------------------





//Array Destructuring
const planets =['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune' ];



//this way i can extract planet out of my array of planets
const [planet1, planet2, ...otherPlanet] = planets;

console.log(planet2);
console.log(otherPlanet);




//if i dont want access to Mercury and Venus, but I only want Earth - then i can do this
const[,,planet3] = planets;
console.log(planet3);

