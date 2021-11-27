const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hi! This is an api!');
});

app.listen(3000);