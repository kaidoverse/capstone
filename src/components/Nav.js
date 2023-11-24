import React, { useState } from 'react';
import Logo from '../images/Logo.svg';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    // eslint-disable-next-line
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }


    return (
        // eslint-disable-next-line
        <nav className={'navbar ${menuOpen ? "open" : ""}'}>
            <a href='/' className='logo'>
                <img src={Logo} alt='logo' />
            </a>

            <div className="menu-icon">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>


            <ul className={'nav-links'}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/reservations">Reservations</a>
                </li>
                <li>
                    <a href="/order onine">Order Onine</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
