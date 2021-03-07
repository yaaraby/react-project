const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jwt-simple');

app.use(express.static('../client/build'))

/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public')) */
const mongoose = require('mongoose');

const secret = 'gvfdgb%$^$%&3$4054423654073467$6@$&*(@%$^&2310*/-/+'

const url = "mongodb+srv://yaara:987Yaara@cluster0.uya8d.mongodb.net/REACT-PROJECT";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);



const Users = mongoose.model('User', {
    id_user: String,
    name: String,
    email: String,
    password: String,
    phone: String,
    role: String,
    status: String
});

const user = new Users({
    id_user: '123456',
    name: 'YAARA',
    email: 'A4105962@GMAIL.COM',
    password: '2580',
    phone: '054-6080982',
    role: 'admin',
    status: 'active'
});
user.save().then(doc => console.log('doc')).catch(e =>console.log(e));



const port = process.env.PORT || 4000;
app.listen(port, () => console.log('server is up and running - port 4000'))

