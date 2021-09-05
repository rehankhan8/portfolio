import React, { useState } from 'react'
import './nav.css'


function Nav() {
    const [nav , setNav ] = useState(false)

    return (
        <div className='navbar'>
            <div className="max-width">
                <div className="logo">
                    <h2>Portfolio</h2>
                </div>
                <div className="bar"><i className="fas fa-bars" onClick={() => setNav(!nav)}></i></div>
                <div className="navbar-links" id={nav ? 'hidden' : ''}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="/">Project</a></li>
                        <li><a href="/">Skills</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </div>                
        </div>

    )
}

export default Nav
