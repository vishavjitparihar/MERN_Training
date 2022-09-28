// Make all queries in this file
const Pokemon = require('../models/pokemon.model.js'); //Import the Pokemon model that we created

// find all pokemon
const findAllPokemon = async () => {
    const pokemon = await Pokemon.find(); //this returns all pokemon
    return pokemon;
}

const findPokemonById = async id => {
    try {
        //you might think not finding it returns a rejected promise
        const pokemon = await Pokemon.findById(id);
        //if it does not find anything, it will return null

        if(pokemon == null){
            throw{status: 204, msg: `No Pokemon with the id ${id} was found.` }
        }
        return pokemon; //this return the pokemon if we found it
        
    } catch (err) {
        //pokemon was not found
        throw eww; //rethrow to have a rejected promise
    }

}


//exporting the function
module.exports = { findAllPokemon, findPokemonById };