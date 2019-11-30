import React, { Component } from 'react';
import Hint from '../components/Hint/Hint';
import { fetchHint } from './../actions/hints';

import { connect } from 'react-redux';

class HintContainer extends Component {
    state = {
        hint: {}
    };

    componentDidMount() {
        const hintSlug = this.props.match.params.hintSlug;
        this.props.fetchHint(hintSlug);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.hints.currentHint !== state.hint) {
            return {
                hint: props.hints.currentHint
            };
        }

        return null;
    }

    render() {
        return <Hint hint={this.state.hint} />;
    }
}

function mapStateToProps({ hints }) {
    return {
        hints
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHint: hintSlug => {
            dispatch(fetchHint(hintSlug));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HintContainer);
