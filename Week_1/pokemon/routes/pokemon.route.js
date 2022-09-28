// '/pokemon' URL will be accessed using routes

/**
 * CRUD
 * 
 * Create - POST
 * Read - GET
 * Update - PUT/PATCH
 * Delete - DELETE
 */

//Imported Router from Express
const router = require('express').Router();

const { default: mongoose } = require('mongoose');
//Importing functions from controller
const { findAllPokemon, findPokemonById } = require('../controllers/pokemon.controller.js');


// GET ALL POKEMON
router.get('/', async (req, res) => {
    const pokemon = await findAllPokemon();
    res.json(pokemon);
});

//GET POKEMON ID
router.get('/:id', async (req, res) => {
    // req.params.id extracts the id number from the URL
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)){
            throw {status: 204, msg: 'No Pokemon found'}
        }
        const pokemon = await findPokemonById(req.params.id);
        res.json(pokemon);

    } catch (err) {
        //rejected promise aka no pokemon found
        res.status(err?.status).json(err);
    }
})

//CREATE A POKEMON


//UPDATE A POKEMON


//DELETE A POKEMON


//Exporting router so it can be used 
module.exports = router;