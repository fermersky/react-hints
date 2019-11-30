import React, { Component } from 'react';
import Typed from 'typed.js';
import PropTypes from 'prop-types';
import './Hint.css';
import Tag from '../Tag/Tag';
import HintAuthorContainer from '../../containers/HintAuthorContainer';

class Hint extends Component {
    state = {
        typedComplete: false,
        hint: {}
    };

    static propTypes = {
        hint: PropTypes.shape({
            title: PropTypes.string,
            tags: PropTypes.array
        }).isRequired
    };

    static getDerivedStateFromProps(props, state) {
        if (props.hint !== state.hint) {
            return {
                hint: props.hint
            };
        }

        return null;
    }

    componentDidUpdate() {
        // initialize typedjs script
        if (this.props.hint.title) {
            const options = {
                strings: [this.props.hint.title],
                typeSpeed: 40,
                backSpeed: 50,
                onComplete: this.onTypedComplete
            };
            this.typed = new Typed(this.el, options);
        }
    }

    onTypedComplete = () => {
        this.setState({ typedComplete: true });
        this.typed.stop();

        // hide solid cursor
        document.querySelector('.typed-cursor').style.visibility = 'hidden';
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

    render() {
        const { hint } = this.props;

        return (
            <div className="container">
                <div className="row hint-body">
                    <h2 className="col-md-12">
                        <span
                            className="hint-title"
                            style={{ whiteSpace: 'pre-wrap' }}
                            ref={el => {
                                this.el = el;
                            }}
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
                        <HintAuthorContainer type="min" userId={hint.user_id} />
                    </div>
                )}
            </div>
        );
    }
}

export default Hint;
