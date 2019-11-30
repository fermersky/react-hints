import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Logo.css';

const Logo = ({ text }) => {
    return (
        <Link style={{ textDecoration: 'none' }} to="/">
            <h1>{text}</h1>
        </Link>
    );
};

Logo.propTypes = {
    text: PropTypes.string.isRequired
};

export default Logo;
