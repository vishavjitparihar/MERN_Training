//This file will be our data model for a pokemon document

/**
 * Mongoose is a wrapper around the native MongoDB driver for Nodejs
 * It abstracts some of the lower level queries and ands some new functionality
 * 
 * Mongoose enforces a schema to MongoDB
 * MongoDB is schemakess, but Mongoose adds a schema to it
 * 
 * The reason we do this is simply to restrict what is allowed to be submitted
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Schema is a class that we can create our DB schemas with

/**
 * What properties do our Pokemon have?
 * 
 * Pokemon Name
 * Pokedex Number
 * Pokedex Entry
 * Types
 * isLegendary
 */


const pokemonSchema = new Schema({
    //Mongoose gives you a _id if you don't specify one
    //BUT you can always define your own if you have something else you'd want to use
    // _id: Number

    // Inside here, I will define my document schema
    name: String, // If I don't open the object syntax, the value is the type
    pokedex: {
        number: {
            type: Number,
            required: false
        },
        description: {
            type: String,
            required: false
    },
    //type indicate the type to store the data as
    types: {
        type: [String],
        min: [1, 'Must submit at least 1 type'],
        max: [2, "Must only have a maximum of 2 types"]
    },
    isLegendary: Boolean,
    imageURL: String
    }
});


//Now take the schema and transform into a model
//                              Name        Schema          What i actually want it called in MongoDB
const Pokemon = mongoose.model('Pokemon', pokemonSchema, 'Pokemon');

//export the module
//this Pokemon model we will use to construct queries for this collection
module.exports = Pokemon;
