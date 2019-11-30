import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './Tag.css';

const Tag = props => {
    return (
        <span
            className={
                'btn btn-raised btn-primary hint-tag ' + props.animationClasses
            }
        >
            <Link
                to={{
                    pathname: '/tag/' + props.tag.slug
                }}
                className="tag-link"
            >
                {props.tag.title}
            </Link>
        </span>
    );
};

Tag.propTypes = {
    tag: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
    }).isRequired
};

export default Tag;
