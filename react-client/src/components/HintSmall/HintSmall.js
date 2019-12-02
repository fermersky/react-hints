import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './HintSmall.css';

const HintsList = ({ hint }) => {
    return (
        <div className="hint-sm-container">
            <Link to={'/hint/' + hint.slug}>
                <h2>{hint.title}</h2>
            </Link>
        </div>
    );
};

HintsList.propTypes = {
    hint: PropTypes.object.isRequired
};

export default HintsList;
