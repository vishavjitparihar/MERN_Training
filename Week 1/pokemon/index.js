const express = require('express');

const mongoose = require('mongoose'); //we wrote this line so we can connect to our database

require('dotenv').config(); //this enables and loads the .env file contents into the node enviroment

const app = express();
app.use(express.json());


//Routes
const pokemonRouter = require('./routes/pokemon.route.js');
app.use('/pokemon', pokemonRouter);

//we will usse this function to connect to mongodb
//try and catch will be there to make sure that URI is valid
const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to MongoDB');
        
    } catch (err){
        //this runs if it fails to connect to MongoDB
        console.error(err);
        process.exit(1); //immediately kills the server
    }
}

connectToMongo();

app.listen(process.env.PORT || 8080, () => {
    //This callback runs right when the app starts
    console.log(`listening on port ${process.env.PORT || 8080}`);


});