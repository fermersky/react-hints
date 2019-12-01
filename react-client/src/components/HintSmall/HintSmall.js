import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HintsList = ({ hint }) => {
    return (
        <div>
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
