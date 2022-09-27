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
const { findAllPokemon, findPokemonByID, createPokemon } = require('../controllers/pokemon.controller.js');




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
// POST 
router.post( '/', async (req, res) => {
    try {
        //for post request we send the data through the body section of postmate
        const pokemon = await createPokemon(req.body);
        res.status(201).json(pokemon);
    } catch (err) {
        res.status(err?. starus ?? 500).json(err);
    }
})


//UPDATE A POKEMON


//DELETE A POKEMON


module.exports = router