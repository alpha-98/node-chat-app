const socket = io();

socket.on('connect', ()=>{
    console.log('Connectd to server');
    

    // socket.emit('createMessage', {
    //     from : "Alex",
    //     text : 'hi this side user',
    //     createdAt : 124
    // });
});//It's not on('connection'), but on('connect')

socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });

socket.on('newMessage', function (message) {
    console.log('New message : ',message);
  });
