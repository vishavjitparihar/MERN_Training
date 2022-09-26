//declaring an array
const fruits = ['Apple', 'Mango', 'Peaches', 'Dragonfruit', 'Lychee', 'Pineapple' ];

//looping through an array
for(let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach(function(fruit){
    console.log(fruit);
});



//remove an elemement
const endFruit = fruits.pop(); //remove and return the final elelment of the array

//add an element to the end
fruits.push(endFruit);


//removing to the front of an array and also returns it
const frontFruit = fruits.shift();

//adding an element to the front
fruits.unshift(frontFruit);

//find by index
const index = fruits.indexOf('tomato');

//remove an element
//splice(index to start at, how many spaces to go)
let removeFruit = fruits.splice(index, 1);
 
//copy 
const newFruits = fruits.slice();