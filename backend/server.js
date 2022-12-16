const express = require('express');
const app = express();


// redirecting to different pages
app.get('/', (req, res) => {
    res.send('welcome to home');
});

app.get('/about', (req, res) => {
    res.send('welcome to about');
});


// starting the server on port 8000 
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});