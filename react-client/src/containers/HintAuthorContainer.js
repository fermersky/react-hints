import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchUser, fetchUserImage } from './../actions/users';

import { connect } from 'react-redux';
import HintAuthorMin from '../components/HintAuthorMin/HintAuthorMin';

class HintAuthorContainer extends Component {
    static propTypes = {
        userId: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['min', 'max']).isRequired
    };

    componentDidMount() {
        const { userId } = this.props;

        this.props.fetchUserImage(userId);
        this.props.fetchUser(userId);
    }

    render() {
        const { type, users } = this.props;
        return type === 'min' ? (
            <HintAuthorMin user={users.user} imageUrl={users.imageUrl} />
        ) : (
            <p>sd</p>
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
