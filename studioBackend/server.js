const dotenv = require('dotenv');
const express = require('express');
const app = express();
const DBconnection = require('./config/DB');
const cors = require('cors')

dotenv.config({path:'./config/.env'});
app.use(cors());
const con = DBconnection();

app.listen(process.env.SERVER_PORT || 5000 , console.log("server running on port 5000"));

console.log('running');