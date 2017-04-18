import React, {
    Component,
} from 'react';

import {
    isNum,
} from '../../utils/tools';

export default class Rodal extends Component {
    render() {
        const { props } = this;
        const className = `rodal-dialog rodal-${props.animation}-${props.animationType}`;
        const CloseButton = props.showCloseButton ?
            <span // eslint-disable-line
                className="rodal-close"
                onClick={props.onClose}
            />
        : null;

        const { duration, customStyles } = props;

        let { width, height } = props;

        if (isNum(width)) {
            width += 'px';
        }

        if (isNum(height)) {
            height += 'px';
        }

        const style = {
            width,
            height,
            animationDuration: `${duration}ms`,
            WebkitAnimationDuration: `${duration}ms`,
        };

        const mergedStyles = Object.assign(style, customStyles);

        return (
            <div style={mergedStyles} className={className}>
                {CloseButton}
                {props.children}
            </div>
        );
    }
}
