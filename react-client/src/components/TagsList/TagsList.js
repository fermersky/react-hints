import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';

import './TagList.css';

const TagsList = props => {
    return (
        <ul className="hint-tags">
            {props.tags.map((tag, index) => (
                <li key={index}>
                    <Tag {...props} tag={tag} />
                </li>
            ))}
        </ul>
    );
};

TagsList.propTypes = {
    tags: PropTypes.arrayOf(Object).isRequired
};

export default TagsList;
