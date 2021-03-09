import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

 
const SignUp = () => {
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        
        let fullName = e.target.children.fullName.value;
        let userName = e.target.children.userName.value;
        let password = e.target.children.password.value;
        let email = e.target.children.email.value;

        if (fullName.length < 4) {
            setError('שם מלא לא תקין')
        } else if (userName.length < 3) {
            setError('שם משתמש נדרש להכיל לפחות 3 תווים')
        } else if (password.length < 6) {
            setError('בחר/י סיסמה המכילה 6</br> תווים לפחות')
        } else if (email.length == 0) {
            setError('נדרש להזין כתובת מייל')
        } else {
            setError('')
            fetch('SignUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullName, userName, password, email })
            }).then(res =>
                res.json()
            )
                .then(data => {
                    console.log(data)
                    if (data.message=='true') {
                         window.location.href = 'Home.html'; 
                    } else {

                        setError(data.message);
                    }
                })
        }
    }
    return (
            <div>
            <div className='container'>
                <div className='mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2'>
                <form onSubmit={handleSignUp}>
                <label htmlFor ="fullName" >שם מלא:</label>
                    <input type="text" name="fullName" id="fullName" className='form-control form-group'/>
                    
                <label htmlFor ="userName">שם משתמש:</label>
                    <input type="text" name="username" id="userName" className='form-control form-group'/>
                 
                <label htmlFor ="password">סיסמה:</label>
                    <input type="password" name="password" id="password" className='form-control form-group'/> 
           
                <label htmlFor ="email">אימייל:</label>
                    <input type="email" name="email" id="email" className='form-control form-group'/>
                  
                        <div id="error">{error} </div>
                        <input type="submit" value="אישור" className='btn btn-danger'/>
                    </form>
                    </div>
            </div>
            </div>
        )
    
    
   
}
 

 export default SignUp;