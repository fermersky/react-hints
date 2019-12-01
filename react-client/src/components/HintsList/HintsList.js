import React from 'react';
import HintSmall from './../HintSmall/HintSmall';

const HintsList = ({ hints }) => {
    return hints.map((hint, index) => {
        return <HintSmall hint={hint} key={index} />;
    });
};

// class HintsList

export default HintsList;
