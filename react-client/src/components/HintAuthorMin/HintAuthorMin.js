import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './HintAuthorMin.css';

const HintAuthorMin = ({ user, imageUrl, animClasses }) => {
    return (
        user && (
            <div className={'am-container col-md-12 ' + animClasses}>
                <div
                    className="am-image"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <Link className="am-name" to={'/' + user.name}>
                    {user.name}
                </Link>
            </div>
        )
    );
};

HintAuthorMin.propTypes = {
    user: PropTypes.object.isRequired,
    imageUrl: PropTypes.string.isRequired,
    animClasses: PropTypes.string
};

export default HintAuthorMin;
