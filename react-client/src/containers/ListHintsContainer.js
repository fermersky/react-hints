import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHint } from '../actions/hints';

class ListHintsContainer extends Component {
    componentDidMount() {
        const filter = this.props.match.params.filter;
        const value = this.props.match.params.value;
        this.props.fetchHint(filter, value);
    }

    render() {
        return <p>{JSON.stringify(this.props.hints.hints)}</p>;
    }
}

function mapStateToProps({ hints }) {
    return {
        hints
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHint: (filter, value) => {
            dispatch(fetchHint(filter, value));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListHintsContainer);
