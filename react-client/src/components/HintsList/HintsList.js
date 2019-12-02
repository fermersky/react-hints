import React from 'react';
import HintSmall from './../HintSmall/HintSmall';

const HintsList = ({ hints }) => {
    function mapHintsToList() {
        return hints.map((hint, index) => {
            return (
                <li key={index}>
                    <HintSmall hint={hint} />
                </li>
            );
        });
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <ul>{mapHintsToList()}</ul>
        </div>
    );
};

// class HintsList

export default HintsList;
