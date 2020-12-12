
const express = require('express');
const bodyParse = require('body-parser');
const cors = require ('cors');
const api = require('./controllers/api');
const {mongoose } = require('./db.js');


var app = express();
app.use(bodyParse.json());

app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000, () => console.log('server started at prot : 3000'));


app.use('/api', api);