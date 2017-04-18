import React, {
    Component,
} from 'react';

import PropTypes from 'prop-types';
import './index.scss';

export default class Loading extends Component {

    static propTypes = {
        visible: PropTypes.bool,
    }

    static defaultProps = {
        visible: false,
    }

    render() {
        return (
            <div
                className="loader"
                style={{
                    display: this.props.visible ? '' : 'none',
                }}
            >
                <svg className="circular" viewBox="25 25 50 50">
                    <circle
                        className="path"
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                    />
                </svg>
            </div>
        );
    }
}
