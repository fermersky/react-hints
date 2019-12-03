import React from 'react';

import './HintAuthorMax.css';

const HintAuthorMax = ({ user, imageUrl }) => {
    return (
        <div className="ax-container animated fadeIn">
            <div
                className="ax-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <h2 className="ax-name">{user.name}</h2>
        </div>
    );
};

export default HintAuthorMax;
