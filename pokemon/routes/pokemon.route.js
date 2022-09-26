// /pokemon 


/**
 * CRUD
 * 
 * Create - POST
 * Read - GET
 * Update - PUT/PATCH
 * Delete - DELETE
 */

const router = require('express').Router();
const { findAllPokemon, findPokemonByID } = require('../controllers/pokemon.controller.js');




//GET ALL POKEMON
router.get('/', async (req, res) => {
    const pokemon = await findAllPokemon();
    res.json(pokemon);
});

//GET POKEMON BY ID
router.get('/:id', async (req, res) => {
    // req.params.id extarcts the id number from the URL
    try {
        if (!mongoose.Types.ObjectID.isValid(req.params.id)) {
            throw {status: 204, msg: 'No Pokemon found'}
        }
        const pokemon = await findPokemonByID(req.params.id);
        res.json(pokemon);
    } catch (err) {
       //rejected promise aka no pokemon found 
       res.status(err?.status).json(err);
    }
})

//CREATE A POKEMON


//UPDATE A POKEMON


//DELETE A POKEMON


module.exports = router