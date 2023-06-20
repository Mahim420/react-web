import React from 'react';
import images from '../../images/Logo.svg'
import './header.css'

const Header = () => {
    return (
        <nav className='header-nav'>
            <img src={images} alt="" />
            <div >
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/inventory">Manage inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;