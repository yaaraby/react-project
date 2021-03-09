const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '.', 'client', 'build')))
 const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
 const jwt = require('jwt-simple'); 
 
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.static('public')) 


const mongoose = require('mongoose');

const secret = 'gvfdgb%$^$%&3$4054423654073467$6@$&*(@%$^&2310*/-/+'

const url = "mongodb+srv://yaara:987Yaara@cluster0.uya8d.mongodb.net/REACT-PROJECT";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


const Users = mongoose.model('User', {
     fullName: String,
     userName: String,
     password: String,
     email: String,

});

/*  const user = new Users({
    fullName: '12654765',
    userName: 'neo',
    password: '123456',
    email: 'A4105962@GMAIL.COM',
 
});
  
 user.save().then(doc => console.log('doc')).catch(e =>console.log(e));
  */
 
app.post('/SignIn', async (req, res) => {
    try {
        const userName = req.body.userName
        const password = req.body.password
        let validate = false
        console.log(userName)
        console.log(password)


        const data = await Users.find({})
        console.log(data)
        for (i = 0; i < data.length; i++) {
            if (userName == data[i].userName && password == data[i].password) {
                validate = true;
            } else {
                console.log(`no match ${data[i].userName}`)
                res.send('false')
            }
        }
        if (validate) {
            res.send('true')}
    }
    catch (e) {
        console.log(e.message)
    }
})
 
app.post('/SignUp', async (req, res) => {

    let message = ''
    const { fullName, userName, password, email } = req.body

    const data = await Users.find({})
    for (i = 0; i < data.length; i++) {
        if (userName == data[i].userName) {
            message = 'שם משתמש כבר קיים'
        } else if (email == data[i].email) {
            message = 'מייל זה כבר קיים במערכת'
        } else {
            message = 'true'
     
        }
    }

    if (message == 'true') {
        const user = new Users({ fullName, userName, password, email});
        await user.save().then(doc => console.log(doc)).catch(e => console.log(e));
    }

     setTimeout(() => { res.send({ message }) }, 1000); 
})




const port = process.env.PORT || 4000;
app.listen(port, () => console.log('server is up and running - port 4000'))
