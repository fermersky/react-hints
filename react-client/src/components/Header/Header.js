import React from 'react';
import Logo from './../Logo/Logo';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = props => {
    return (
        <header>
            <Logo text="I wanna hint!!!" />
            <Link className="login-link" to="/login">
                Login
            </Link>
            <Link className="login-link" to="/register">
                Register
            </Link>
        </header>
    );
};

export default Header;
