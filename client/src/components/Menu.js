import React from 'react'
/* import logo from '../images/logo.png' */
import { Link } from 'react-router-dom'
 /* import menu from './components/menu.css'  */

const Menu = () => {
 
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>Home</h1>{/* <img src={logo} alt="hotel logo" height='50px' width='150px'/> */}
            </Link>
            <Link to="/SignIn">
                <button>Sign-In</button>
            </Link>
            <Link to="/SignUp">
                <button>Sign-Up</button>
            </Link>
            
                
        </nav>
    )
}


export default Menu;