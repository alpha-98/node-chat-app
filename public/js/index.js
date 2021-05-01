const socket = io();

socket.on('connect', ()=>{
    console.log('Connectd to server');
});//It's not on('connection'), but on('connect')

socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });