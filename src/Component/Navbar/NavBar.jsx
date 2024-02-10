// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom"

import './NavBar.css'
function NavBar() {
    return (
        <div className='navbar'>
            <div className='logo-container'>
             <Link to={"/"}>  <img
                    className='logo'
                    src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg"
                    alt="logo" /></Link>
            </div>
            <div className='nav-links-container'>
                <ul>
                    <h3>
                        <Link className="link" to={"/contact"}>Contact</Link>
                    </h3>

                </ul>
                <ul>
                    <h3>
                        <Link className="link" to={"/register"}>Register</Link>
                    </h3>

                </ul>
            </div>
        </div>
    )
}

export default NavBar