import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHint } from '../actions/hints';
import HintsList from '../components/HintsList/HintsList';

class HintsListContainer extends Component {
    state = {
        hinst: []
    };

    componentDidMount() {
        const filter = this.props.match.params.filter;
        const value = this.props.match.params.value;
        this.props.fetchHint(filter, value);
    }

    render() {
        const { hints } = this.props.hints;
        return (
            hints.length > 0 && (
                <div className="container">
                    <HintsList hints={hints} />
                </div>
            )
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(HintsListContainer);
