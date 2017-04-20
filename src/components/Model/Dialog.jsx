import React from 'react';

import {
    isNum,
} from '../../utils/tools';

/**
 * These components are not only succinct,
 * but may in the future be more performant than components defined in other ways.
 */
const Dialog = (props) => {
    const configs = props;
    const {
        duration,
        customStyles,
        animation,
        animationType,
        showCloseButton,
        onClose,
    } = configs;
    const className = `rodal-dialog rodal-${animation}-${animationType}`;

    const CloseButton = showCloseButton ?
        <span // eslint-disable-line
            className="rodal-close"
            onClick={onClose}
        />
    : null;

    let { width, height } = configs;

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
            {configs.children}
        </div>
    );
};

export default Dialog;
