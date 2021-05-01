const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname+ '/../public'); 
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server); //  we get back is our WebSockets server

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('New User Connected');
    
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
    socket.emit('newMessage',{
            from : 'harsh',
            text : 'kya kar rha hai',
            createdAt : 123
        });
    socket.on('createMessage',(message)=>{
        console.log('message : ' , message);
    })
});




// app.listen(PORT, ()=>{
//     console.log(`server started at port ${PORT}`)
// });

server.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
});

