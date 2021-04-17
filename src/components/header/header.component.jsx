import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg'


const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to="/Shop">
            Shop
            </Link>
            <Link className='option' to="/Shop">
            Contacts
            </Link>
        </div>
    </div>
);

export default Header;