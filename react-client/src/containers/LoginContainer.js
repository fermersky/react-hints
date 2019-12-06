import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestLogin, userLogout } from '../actions/auth';
import Login from '../components/Login/Login';

class LoginContainer extends Component {
    componentDidMount() {
        this.props.dispatch(userLogout());
    }

    onFormSubmit = async ({ email, password }) => {
        await this.props.dispatch(requestLogin(email, password));

        if (this.props.auth.userInfo.token) {
            this.props.history.push('/');
        }

        console.log(this.props.auth.userInfo);
    };

    render() {
        const { error } = this.props.auth;
        return (
            <div className="container">
                <Login onFormSubmit={this.onFormSubmit} />
                {error && (
                    <div class="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
            </div>
        );
    }
}

export default connect(state => ({ auth: state.auth }))(LoginContainer);
