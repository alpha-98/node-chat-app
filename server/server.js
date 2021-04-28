const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname+ '/../public'); 

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
});
console.log(publicPath);