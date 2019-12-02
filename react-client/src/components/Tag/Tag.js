import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './Tag.css';

const Tag = props => {
    function getSlugFromTag(tag) {
        return tag.toLowerCase().replace(/\s/g, '-');
    }

    return (
        <span
            className={
                'btn btn-raised btn-primary hint-tag ' + props.animationClasses
            }
        >
            <Link
                to={{
                    pathname: '/hints/tag/' + getSlugFromTag(props.tag)
                }}
                className="tag-link"
            >
                {props.tag}
            </Link>
        </span>
    );
};

Tag.propTypes = {
    tag: PropTypes.string.isRequired
};

export default Tag;
