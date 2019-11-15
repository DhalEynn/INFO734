const express = require('express');
const app = express();

//to access form data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//to access the database stored in MongoDB
const mongoose = require('mongoose');
database = 'mongodb://localhost:27017/DP'; 
mongoose.connect(database,(err) => {
    if(err)
        throw err;
        console.log('Connected to the database');
});

// API CRUD
const APIRoutes = require("./api/routes");
app.use(APIRoutes);

app.listen(3000);
console.log("Waiting on localhost:3000");
