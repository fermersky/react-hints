import React, { Component } from 'react';
import Typed from 'react-typed';
import PropTypes from 'prop-types';
import './Hint.css';
import Tag from '../Tag/Tag';
import HintAuthorContainer from '../../containers/HintAuthorContainer';

class Hint extends Component {
    state = {
        typedComplete: false,
        hint: {},
        isMounted: false
    };

    constructor() {
        super();
        this.typed = React.createRef();
    }

    static propTypes = {
        hint: PropTypes.shape({
            title: PropTypes.string,
            tags: PropTypes.array
        }).isRequired
    };

    onTypedComplete = () => {
        this.state.isMounted && this.setState({ typedComplete: true });
    };

    mapTagsToList = tags => {
        // when title typing is complete
        if (tags && this.state.typedComplete) {
            return tags.map((tag, index) => (
                <li key={index}>
                    <Tag animationClasses="animated flipInX" tag={tag} />
                </li>
            ));
        }
    };

    componentDidMount() {
        this.setState({ isMounted: true });
    }

    componentWillUnmount() {
        this.setState({ isMounted: false });
    }

    render() {
        const { hint } = this.props;

        return (
            Object.keys(hint).length > 0 && (
                <div className="container">
                    <div className="row hint-body">
                        <h2 className="col-md-12">
                            <Typed
                                ref={this.typed}
                                className="hint-title"
                                strings={[hint.title]}
                                typeSpeed={40}
                                backSpeed={50}
                                onComplete={this.onTypedComplete}
                            />
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="hint-tags">
                                {this.mapTagsToList(hint.tags)}
                            </ul>
                        </div>
                    </div>
                    {this.state.typedComplete && (
                        <div className="row">
                            <HintAuthorContainer
                                type="min"
                                userId={hint.user_id}
                            />
                        </div>
                    )}
                </div>
            )
        );
    }
}

export default Hint;
