import React, { useState, useEffect } from 'react'
import './Nav.css'
import classnames from 'classnames'

const Nav = () => {

    const [show, handleShow] = useState(false)


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            }
            else {
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    },[])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
                src="netflix-logo.png"
                alt="Netflix Logo" />
            <img className="smiley_logo"
                src="smiley_logo.jpg"
                alt="Netflix Logo" />
        </div>
    )
}

export default Nav
