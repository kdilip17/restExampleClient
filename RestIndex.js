/**
 * Created by dilip on 17/2/17.
 */
"use strict";

var routes = require('./lib/routes');
const appConfig = require('./lib/config/app');



const Hapi = require('hapi');


// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: 4038
});

// Add the route
server.route(routes);

server.start((err) => {

    if (err) {
        console.log(err)
    }
    console.log('Server running at:', server.info.uri);
});
