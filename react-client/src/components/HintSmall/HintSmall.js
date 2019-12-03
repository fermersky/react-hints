import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './HintSmall.css';
import TagsList from '../TagsList/TagsList';
import HintAuthorContainer from '../../containers/HintAuthorContainer';

const HintsList = ({ hint }) => {
    return (
        <div className="hint-sm-container animated fadeInUp">
            <h3>
                <HintAuthorContainer type="min" userId={hint.user_id} />
            </h3>

            <Link className="hint-link" to={'/hint/' + hint.slug}>
                <h2 className="hint-link--content">
                    {hint.title}
                    <div className="hint-link--bg"></div>
                </h2>
            </Link>

            <div className="tags">
                <TagsList tags={hint.tags} />
            </div>
        </div>
    );
};

HintsList.propTypes = {
    hint: PropTypes.object.isRequired
};

export default HintsList;
