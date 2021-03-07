const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '.', 'client', 'build')))
/* const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
const jwt = require('jwt-simple'); 
 


/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public')) */

 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server is up and running - port 3000'))
