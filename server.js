const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const router = require('./routes/userRoutes')

const app =express();
const port = process.env.PORT || 5200;

app.use(cors());
app.use(bodyParser.json())


app.use('/users', router);

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})