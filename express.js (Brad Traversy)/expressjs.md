* What is Express?
 - Express is a fast, unopinionated & minimalist web framework for Node.js
 - Express is a "server-side" or "back-end" framework. It is not comparable to client-side frameworks like React, Angular, & Vue. It can be used in combination with those frameworks to build full stack applications
 

* Why use Express?
- Makes building web applications with Node.js MUCH easier
- Used for both server rendered apps as well as API/microservices
- Extremely light, fast, and free
- Full control of request and response
- By far the most popular Node framework
- Great to use with client side frameworks as it's all JavaScript

* Basic Server Syntax

const express = require ('express');

note: //init express
const app = express();

note: //create your endpoints/route handlers
app.get('/', functio(req, res){
    res.send('Hello World!');
});

note: // listen on a port
app.listen(5000);

* Basic route handling
- Handling requests/routes is simple
- app.get(), app.post(), app.put(), app.delete(), etc
- Access to params, query strings, url parts, etc.
- Express has a router so we can store routes in seperate files and export
- We can parse incoming data with the body parser

* Express Middleware
- Middleware functions are functions that have access to the request and response object. Express has built in middleware but middleware also comes from 3rd party packages as well as custom middleware
    - Execute any code
    - Make changes to the request/response objects
    - End response cycle
    - Call next middleware in the stack