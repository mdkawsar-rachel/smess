const express = require('express');
const pool = require('./db');

const app = express()
const port = process.env.PORT || 3000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Remove 
//app.use(express.urlencoded({extended: true})); // New
// Parse application/json
// app.use(bodyParser.json()); // Remove
app.use(express.json()); // New

// MySQL Code goes here

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))


// Get all beers
app.get('/api/app',  (req, res) => {
    try{
        console.log("Good to go");
    }
    catch(err){
        console.error(err);
    }
})