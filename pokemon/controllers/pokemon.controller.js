// Make all queries in this file
const { populate } = require('../models/Pokemon.model.js');
const Pokemon = require('../models/Pokemon.model.js'); //Import the pokemon model that we created


//Find all pokemon
const findAllPokemon = async () => await Pokemon.find(); // This returns all Pokemon

//finding function by id
const findPokemonByID = async (id) => {
    try {
        // You might think that not finding it returns a rejected promise
        const pokemon = await Pokemon.findById(id);
        // but you are wrong
        // If it doesnt find anything, it will return null

        if (pokemon == null) {
            throw {status: 204, msg: `No Pokemon with the ID of ${id} was found` };
        }
        return pokemon; //this returns pokemon if we found it

    } catch (err) {
        //Pokemon was not found
        throw err; //rethrow to rejected promise
    }
}
 
module.exports = { findAllPokemon, findPokemonByID };