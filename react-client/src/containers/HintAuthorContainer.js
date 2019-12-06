import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HintAuthorMin from '../components/HintAuthorMin/HintAuthorMin';
import HintAuthorMax from '../components/HintAuthorMax/HintAuthorMax';
import UserFetchProvider from '../modules/UserFetchProvider';

class HintAuthorContainer extends Component {
    state = {
        user: {},
        imageUrl: ''
    };

    static propTypes = {
        userId: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['min', 'max']).isRequired
    };

    componentDidMount() {
        const { userId } = this.props;
        this.fetchUserInfo(userId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.fetchUserInfo(this.props.userId);
        }
    }

    fetchUserInfo = userId => {
        UserFetchProvider.fetchUserById(userId, this.onUserFetched);
        UserFetchProvider.fetchUserImageById(userId, this.onUserImageFetched);
    };

    onUserFetched = user => {
        this.setState({ user });
    };

    onUserImageFetched = url => {
        this.setState({ imageUrl: url });
    };

    render() {
        const { type } = this.props;
        return type === 'min' ? (
            <HintAuthorMin
                animClasses="animated fadeInBig"
                user={this.state.user}
                imageUrl={this.state.imageUrl}
            />
        ) : (
            <HintAuthorMax
                animClasses="animated fadeInBig"
                user={this.state.user}
                imageUrl={this.state.imageUrl}
            />
        );
    }
}

export default HintAuthorContainer;
