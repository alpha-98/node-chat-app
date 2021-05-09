const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const { log } = require('console');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname+ '/../public'); 
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server); //  we get back is our WebSockets server

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('New User Connected');
    //console.log(socket.id);
    
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
    // socket.emit from Admin text Welcome to the chat app
    socket.emit('newMessage',generateMessage('Admin', 'Welcome to the Chat app'));
    // socket.broadcast.emit from Admin text New user joined
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined'));
    socket.on('createMessage',(message)=>{
        console.log('message : ' , message);
        io.emit('newMessage',generateMessage(message.from, message.text));
        // socket.broadcast.emit('newMessage', {
        //     from : message.from,
        //     text : message.text,
        //     createdAt : new Date().getTime()
        // });
    });
});




// app.listen(PORT, ()=>{
//     console.log(`server started at port ${PORT}`)
// });

server.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
});

