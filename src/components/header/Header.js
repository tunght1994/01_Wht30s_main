import React, { useRef, useState } from 'react'
import './header.scss'
import { Menu } from '@mui/icons-material'
import Logo from './../../assets/img/logo.png'

const Header = () => {

    const [menu, setMenu] = useState(false)

    return (
        <div className='header'>
            <div className="container-fluid">
                <div className="header-content">
                    <div className="header-content-logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className={`header-content-menu ${menu ? 'header-menu-toggle': ''}`}>
                        <ul className='header-menu header-menu-toggle-item'>
                            <li className='header-menu-item header-menu-toggle-item-link'>
                                <a href="/">
                                    Introduction
                                </a>
                            </li>
                            <li className='header-menu-item header-menu-toggle-item-link'>
                                <a href="/">
                                    Solution
                                </a>
                            </li>
                            <li className='header-menu-item header-menu-toggle-item-link'>
                                <a href="/">
                                    Rate Plan
                                </a>
                            </li>
                        </ul>
                        <div className="header-line"></div>
                        <ul className='header-menu header-menu-toggle-item'>
                            <li className='header-menu-item header-menu-toggle-item-link'>
                                <a href="/">
                                    Login
                                </a>
                            </li>
                            <li className='header-menu-item header-menu-toggle-item-link'>
                                <a href="/">
                                    Apply-for-free-use
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button className='header-menu-icon' onClick={() => setMenu(!menu)}>
                        <Menu />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Header;
