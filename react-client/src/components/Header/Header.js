import React, { Component } from 'react';
import Logo from './../Logo/Logo';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    state = {
        userName: null
    };

    componentDidMount() {
        const userName = sessionStorage.getItem('user_name');
        console.log(userName);
        if (userName) {
            this.setState({
                userName
            });
        }
    }

    render() {
        const { userName } = this.state;
        return (
            <header>
                <Logo text="I wanna hint!!!" />
                {userName ? (
                    <span>Hello, {userName}</span>
                ) : (
                    <span>
                        <Link className="login-link" to="/login">
                            Login
                        </Link>
                        <Link className="login-link" to="/register">
                            Register
                        </Link>
                    </span>
                )}
            </header>
        );
    }
}

export default Header;
