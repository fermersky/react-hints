import React, { Component } from 'react';
import Typed from 'react-typed';
import PropTypes from 'prop-types';
import './Hint.css';
import Tag from '../Tag/Tag';
import HintAuthorContainer from '../../containers/HintAuthorContainer';
import TagsList from '../TagsList/TagsList';

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

                    {this.state.typedComplete && (
                        <div className="row">
                            <div className="col-md-12">
                                <TagsList
                                    animationClasses="animated flipInX"
                                    tags={hint.tags}
                                />
                            </div>
                            <div className="col-md-12">
                                <HintAuthorContainer
                                    type="min"
                                    userId={hint.user_id}
                                />
                            </div>
                        </div>
                    )}
                </div>
            )
        );
    }
}

export default Hint;
