const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const employeeRoutes = require('./routes/employees');

dotenv.config({path : './config.env'});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(employeeRoutes);

console.log(process.env.DATABASE_LOCAL);

//this connects the file to mongodb database
mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,  
    useUnifiedTopology: true,
    createIndex: true
});


const port = process.env.port.PORT;
app.listen(port, () => {
    console.log("Server Started")
});