const express = require('express');
const app = express();
const cors = require('cors');

const port = 4000;
const bookRoute = require('./route/bookRoute.js');
app.use(cors());
app.use(express.json())
app.use('/api/books',bookRoute);



app.listen(port,() => {
    console.log(`listening at http:localhost:${port}`);  
})