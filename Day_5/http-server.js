const http = require('http');

//create our server by passing it a callback
//The callback function handles the HTTP request and HTTP response
const server = http.createServer((request, response) => {

    //homepage is typically '/'
    if(request.url === '/'){
        response.write('Welcome to my Home Page'); //this will write on the homepage
        response.end(); //needs this to make sure that response ends here
    } else if (request.url === '/about'){
        response.writeHead(200);
        response.write('<h2> My name is Vishavjit Parihar </h2>'); //this will write on the about page
        response.end(); //needs this to make sure that response ends here
    } else if (request.url === '/movies'){
        // If it is a GET request, find all movies
        if(request.method === 'GET'){
            response.write('Fidning all movies');
            response.end();
        } else if(request.method === 'POST'){
            response.write('Created a movies');
            response.end();
        }

        // If it is a POST request, create a movie
    }
});

//I need to start my server by having it listen to a port on my machine
// HTTP 80
// DND 54
// HTTPS 443

server.listen(8080);


// to start the server use this comman -- node ./http-server.js
