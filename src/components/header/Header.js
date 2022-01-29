import React from 'react'
import './header.scss'
import Logo from './../../assets/img/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <div className="container-fluid">
                <div className="header-content">
                    <div className="header-content-logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="header-content-menu">
                        <ul className='header-menu'>
                            <li className='header-menu-item'>
                                <a href="/">
                                    Introduction
                                </a>
                            </li>
                            <li className='header-menu-item'>
                                <a href="/">
                                    Solution 
                                </a>
                            </li>
                            <li className='header-menu-item'>
                                <a href="/">
                                    Rate Plan
                                </a>
                            </li>
                        </ul>
                        <div className="header-line"></div>
                        <ul className='header-menu'>
                            <li className='header-menu-item'>
                                <a href="/">
                                    Login
                                </a>
                            </li>
                            <li className='header-menu-item'>
                                <a href="/">
                                    Apply-for-free-use
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
