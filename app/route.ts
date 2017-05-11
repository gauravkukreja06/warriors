// This file defines the default URL
// It is required by app.js

export function route(app, io): void{    
	app.get('/', (req, res) => {
        res.send("<HTML><Body><h1>Welcome to Warriors</h1></body></HTML>");
    });

    io.sockets.on('connection', function (socket) {
        socket.emit('message', { message: 'welcome to the chat' });
        socket.on('send', function (data) {
            io.sockets.emit('message', data);
        });
    });
};