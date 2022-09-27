# REST
REpresentational State Transfer

REST is a paradign for making APIs

## 6 Architectural Constraints of REST
1. Uniform Interface
    - Each resource should only have one logical URI/URL
2. Client-Server
    - The client and server should be seprate
    - Decoupled architecture in that the client only knows the server through the API endpoints it exposes
    - Allows the client and server to evolve independent of one another
3. Stateless 
    - Stateless means no data is  stored in memory. Server does not remember client or keep some internal variable count
    - All client-server interaction should be stateless
    - The server should treat all request as brand new requests
4. Cacheable
    - Request should be able to be cacahed in order to speed up lookup time
    - A resource should be chached if its indicated in the HTTP headers
    - Expires or Cache-Control
5. Layered System
    - Gateways
    - The client talks to the gateway/load balancer and it will direct traffic to the actual servers
    - Client does not know about the server (there could be 1 server or 10,000. It does not matter)
6. Code on Demand
    - Have the ability to return executable code



# URL Naming
When building APIs, it is very important that you name your URLs to be logical

## Let the http method carry the meaning (just use nouns, no verb)

## Filtering Results
Make use of query parameters to pass in additional constrains

find 5 movies
- Bad: GET https://www.mysite.com/findFiveMovies
- Good: GET https://www.mysite.com/movies?limit=5

## Versioning

Versioning URLs is very important so that the API can be updated/upgraded in the future
Allows us to use mostly the same URL name, but version a specific section of it

Instead of just outright removing old API, we introduce one and notify people to switch over to it.


BAD:
Old: https://www.mysite.com/movies/1 -> "star wars"
New: https://www.mysite.com/movies/1 -> {title: "star wars", director: "George Lucas"}

GOOD:
Old: https://www.mysite.com/v1/movies/1 -> "star wars"
New: https://www.mysite.com/v2/movies/1 -> {title: "star wars", director: "George Lucas"}

