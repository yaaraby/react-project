import React, {useState} from 'react'

/* const error = document.getElementById('error')
 */

 
const SignIn = () => {
    const [error, setError] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        let userName = e.target.children.userName.value;
        let password = e.target.children.password.value;

        if (userName.length == 0 && password.length == 0) {
            setError('יש להזין שם משתשמש וסיסמה')
        } else if (userName.length == 0) {
            setError('יש להזין שם משתשמש ')
        } else if (password.length == 0) {
            setError('יש להזין סיסמה')
        } else {
            setError('')
            fetch('/SignIn', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName,
                    password
                })
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data) {
                        console.log('ok')
                        window.location.replace('Home.html')
                    } else {
                        setError('שם המשתמש ו/או הסיסמה אינם נכונים, אנא נסה/י שנית');
                    }
                })
        }
    }


        return (
            <div>
                <div className='container'>
                    <div className='mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2'>
               
                <form onSubmit={handleSignIn}>
                <label htmlFor="userName">שם משתמש: </label>
                    <input type="text" name="userName" placeholder="שם משתמש" className='form-control form-group'/>
       
                <label htmlFor="userName">סיסמה: </label>
                        <input type="password" name="password" placeholder="סיסמה" className='form-control form-group' />
                   
                        <div id="error">{error} </div>
                    <input type="submit" value="אישור" className='btn btn-danger'/>
                </form>
                    </div>
                </div>
                </div>
        )
    
    
   
}

 export default SignIn;