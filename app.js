// To import the express library
const express = require('express');

// To call up the express app to get started 
const app = express();

// To check the server is connected and working
app.listen(3000, () => {
    console.log('Server is working');
});

// GET Request from submit button
app.get('/', (req, res) => {
    res.send(req);
});



