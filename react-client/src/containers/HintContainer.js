import React, { Component } from 'react';
import Hint from '../components/Hint/Hint';
import { fetchHint } from './../actions/hints';

import { connect } from 'react-redux';

class HintContainer extends Component {
    componentWillMount() {
        const hintSlug = this.props.match.params.hintSlug;
        this.props.fetchHint(hintSlug);
    }

    render() {
        return <Hint hint={this.props.hints.currentHint} />;
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
