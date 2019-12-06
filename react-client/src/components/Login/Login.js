import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state);
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="login-container">
                    <div className="form-group">
                        <label htmlFor="email" className="bmd-label-floating">
                            Email address
                        </label>
                        <input
                            required
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={this.onChange}
                        />
                        <span className="bmd-help">
                            We'll never share your email with anyone else.
                        </span>
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor="password"
                            className="bmd-label-floating"
                        >
                            Password
                        </label>
                        <input
                            required
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.onChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-raised"
                    >
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default Login;
