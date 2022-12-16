const express = require('express');
const mongoose = require('mongoose');
const { readdirSync } = require('fs'); // readdirSync is a function that reads the files in a directory
const cors = require('cors');
const dotenv = require('dotenv');
const { connect } = require('http2');
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

// routes
// map is a function that loops through the array and executes a function on each element of the array
readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)));


// database connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
}).then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('database connection error', err));



// starting the server on port 8000 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Server is running on port 8000');
});