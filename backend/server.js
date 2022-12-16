const express = require('express');
const app = express();
// readdirSync is a function that reads the files in a directory
const {readdirSync} = require('fs');
const cors = require('cors');
app.use(cors());

// map is a function that loops through the array and executes a function on each element of the array
readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)));


// starting the server on port 8000 
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});