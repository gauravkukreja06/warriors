 "uses strict"

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { UserApi } from './controllers/api/users/userApi';

const app = express();
const port = process.env.port || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});



app.get('/', (req, res) => {
    res.send("<HTML><Body><h1>Welcome to NodeJS</h1></body></HTML>");
});


const userApi = new UserApi();
app.use('/api/user/v1', userApi.router);










































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