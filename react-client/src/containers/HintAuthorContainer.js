import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchUser, fetchUserImage } from './../actions/users';

import { connect } from 'react-redux';
import HintAuthorMin from '../components/HintAuthorMin/HintAuthorMin';
import HintAuthorMax from '../components/HintAuthorMax/HintAuthorMax';

class HintAuthorContainer extends Component {
    static propTypes = {
        userId: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['min', 'max']).isRequired
    };

    componentDidMount() {
        const { userId } = this.props;

        if (userId) {
            this.props.fetchUserImage(userId);
            this.props.fetchUser(userId);
        }
    }

    render() {
        const { type, users } = this.props;
        return type === 'min' ? (
            <HintAuthorMin
                animClasses="animated fadeIn"
                user={users.user}
                imageUrl={users.imageUrl}
            />
        ) : (
            <HintAuthorMax user={users.user} imageUrl={users.imageUrl} />
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUser: userId => {
            dispatch(fetchUser(userId));
        },
        fetchUserImage: userId => {
            dispatch(fetchUserImage(userId));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HintAuthorContainer);
