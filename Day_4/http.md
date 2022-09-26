# HTTP
Hyper Text Transfer Protocol
- This is the language of the web
- It it the primary way of sending and receiving data through the internet


## HTTP Request
- I send of http request to a particular domain asking for or to do something
- The intent of an HTTP request is indicated by it's 'request method'

### HTTP Methods
HTTP method imply intent

- GET (Retriving/Reading a resouce)
- HEAD (Same as GET, but the response body is ignored)
- POST (Creating a resource)
- DELETE (Deleteing a resource)
- PUT (Replacing a resource, it takes out and put in the new resources)
- PATCH (Similar to PUT, but it updates what's already there)
- OPTIONS (A request to see what server allows. This is automatically sent during pre-flight)


## HTTP Response
- What is returned by the web server after the http request
- The outcome of a given gttp response is indicated based on it's 'status code'

## HTTP status codes
Status code is merely indicates intent. It is a common set of standards that we should abide by

### 1xx (Informational)
- 100 - Continue 
- 103 - Early Hints (blury picture when loading for the actual picture)

### 2xx (Success)
- 200 - OK
- 201 - Created (when creating an account)
- 204 - No Content (no match)

### 3xx (Redirection)
- 307 - Temporary Redirection
- 308 - Permanent Redirection

### 4xx (Client Error) (You messed up)
- 400 - Bad Request
- 401 - Unauthorized (Unauthenticated) (not logged in and cannot access the site)
- 403 - Forbidden (you are logged in, but not allowed to look up at a certain page)
- 404 - Not found (can be used to hide 403)
- 405 - Method not allowed
- 418 - I'm a Teapot

### 5xx (Server Error) (They messed up)
- 500 - Internal Server Error
- 501 - Not Implemented 
- 502 - Bad Gateway
- 504 - Gateway Timeout


## Idempotency vs Safety
Idempotency is the ability to perform the same action repeatedly with same effect occuring each time

Idempotent Methods: `Only POST and PATCH are not Idempotent`
- GET - Idempotent
- POST - Not Idempotent 
- PUT - Idempotent
- PATCH - Not Idempotent
- DELETE - Idempotent


Safety does not involve changing data

Safety Method: `Only GET and HEAD are only Safe`
- GET - Safe
- HEAD - Safe
- everything else is not safe