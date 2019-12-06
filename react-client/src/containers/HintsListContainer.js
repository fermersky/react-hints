import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHint } from '../actions/hints';
import HintsList from '../components/HintsList/HintsList';
import HintAuthorContainer from './HintAuthorContainer';

class HintsListContainer extends Component {
    componentDidMount() {
        this.fetchHints();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.url !== this.props.match.url) {
            this.fetchHints();
        }
    }

    fetchHints = () => {
        const { filter } = this.props.match.params;
        const { value } = this.props.match.params;
        const { author } = this.props.match.params;

        if (author) {
            this.props.fetchHint('author', author);
        } else {
            this.props.fetchHint(filter, value);
        }
    };

    render() {
        const { hints } = this.props.hints;
        const { author } = this.props.match.params;

        return (
            hints.length > 0 && (
                <div className="container">
                    {author && (
                        <HintAuthorContainer userId={this.userId} type="max" />
                    )}
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
