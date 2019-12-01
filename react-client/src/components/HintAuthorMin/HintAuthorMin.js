import React from 'react';
import PropTypes from 'prop-types';

import './HintAuthorMin.css';

const HintAuthorMin = ({ user, imageUrl }) => {
    return (
        <div className="am-container">
            <div
                className="am-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
        </div>
    );
};

HintAuthorMin.propTypes = {
    user: PropTypes.object.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default HintAuthorMin;
