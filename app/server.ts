 "uses strict"

import * as express from 'express';
import * as appConfig from "./config";
import * as appRoute from "./route";
import * as socketIO from 'socket.io';
import * as socketHandler from './socketHandle';

const app = express();
const port = process.env.port || 3000;

// Initialize a new socket.io object. It is bound to 
// the express app, which allows them to coexist.
var io = socketIO.listen(app.listen(port, () => {console.log(`Server listening at ${port}`);}));

// Require the configuration and the routes files, and pass
// the app and io as arguments to the returned functions.
appConfig.config(app, io);
appRoute.route(app, io);
socketHandler.socketHandle(app, io);













































// var http = require('http');

// var fs = require('fs');
// import * as express from 'express';
// import * as bodyParser from 'body-parser';

// import { DataAccess } from './repositories/dal';
// import { StudentController } from './controllers/studentController';

// const app = express();
// var server = http.Server(app);
// var io = require('socket.io')(server);
// var port = process.env.port || 3000;

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// // Serve the application at the given port
// app.listen(port, () => {
//     // Success callback
//     console.log(`Listening at http://localhost:${port}/`);
// });

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// // Create Student controller
// var dataAccess = new DataAccess()
// var studentController = new StudentController(app, dataAccess);

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     dataAccess.openDbConnection();

//     socket.on('disconnect', function () {
//         dataAccess.closeDbConnection();
//         console.log('user disconnected');
//     });
// });

// server.listen(port, _ => {
//     console.log('listening on *: ' + port);
// });

// // process.on('uncaughtException', function () {
// //     a.kill();
// //     b.kill();
// // });