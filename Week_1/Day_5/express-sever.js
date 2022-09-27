/**
 * Express is "fast, unopinionated, and minimalist"
 * 
 * Unopinionated - Express has no opinions on folder structure or general structure.
 *                  You build apps the way you want
 * 
 * Minimalist - compared to Node's http module, Express provides a very simplistic way of interacting with it
 */

// it finds express by looking in node_modules
const express = require('express');


// We can use it to create our application object
// The application object is what we will build our application on
const app = express();


//Express uses middleware heavily
//Middleware is essentially code that will run during our code's life cycle both before and after 

// custom middleware
// next is a function that invoke the next middleware inline
// if next is not called, then the chain breaks, and no further middleware will be called
const logger = (req, res, next) => {
    console.log(`Request received from ${req.originalUrl}!`);
    next(); //this willinvoke the next middleware inline
}

//if i want to use logger everywhere in my code
//app.use will tells it to use a particular middleware and apply it to the app
app.use(logger);

// This middleware is used on basically any REST server you will write
// Request coming in with a request body and a content-type of application/json will automatically be parsed into a JS object
// Any response sent using a JS object will be converted into JSON and the content type header set to application/json
app.use(express.json());



// Import my routes
const condimentRouter = require('./routes/condiment.route.js'); // Import the condiment Router object
app.use('/condiment', condimentRouter); // Anything beginning with /condiments will get forwarded to the router



// GET requests to '/' should give the homepage content
// if i want to use logger, then i can do this
// but if i comment out all traffic url request - then i will notice something
// once i comment it out, and try to access my server's homepage
// it will not work - because logger is breaking the chain.
// we need to fix that issue
// we added next() to the logger function - that fixed everything
// by using logger in this end point - we can only use logger for this end point.
// if i want to use logger everywhere else then - i will remove logger from my end point
app.get('/', /*logger,*/ (req, res) => {
    res.send('Welcome to Vishu\'s page');
});

// Any PUT request with cat in the URL will be triggered here
app.put(/cat/, (req, res) => {
    res.send('Enjoy this cat picture');
});

app.post('/condiment', (req, res) => {
    console.log(req.body);
    //res.send(`The name of condiment you chose is: ${req.body.name}`);

    //res.json(req.body); //sends it as JSON

    // right now i am getting 200 OK status code, but I want to change it to 201
    // we will use .status method
    res.status(201).json(req.body);
    
});

//This method intercept ALL traffic from any HTTP method from ALL URLS
app.all('*', (request, response) => {
    response.status(404).send('I could not find that'); // send is essentially write and end wrapped into one
});

//I need to mount app and have it listen to a give port
app.listen(8080);