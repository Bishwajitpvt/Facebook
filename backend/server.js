const express = require('express');
const app = express();

const cors = require('cors');
// cors is used to allow cross origin resource sharing between different domains and ports  (eg. localhost:3000 and localhost:8000)
const option = {
    origin: 'http://localhost:3000',
    useSuccessStatus: 200
}
app.use(cors(option));



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