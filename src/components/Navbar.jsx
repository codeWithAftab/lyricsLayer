import React from 'react'
import Logo from '../assets/logo'

function Navbar() {
  return (
            <nav
                className="navbar custom-navbar navbar-expand-md navbar-light fixed-top"
                data-spy="affix"
                data-offset-top={10}
            >
            <div className="container">
                <a className="navbar-brand" href="#">
                        <img src="../imgs/logo3-sec.png" alt="logo" />
                </a>
                <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="#songs">
                        Song Collections
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#blog">
                        News &amp; Blogs
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#service">
                        Our Service
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about">
                        About Us
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contact">
                        Contact
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
  )
}

export default Navbar