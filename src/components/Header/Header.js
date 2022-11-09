import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/country">Country</a>
                <a href="/about">about</a>
            </nav>
        </div>
    );
};

export default Header;