import React, {
    Component,
} from 'react';

import PropTypes from 'prop-types';

import Dialog from './Dialog';

import './index.scss';

class Rodal extends Component {

    /* eslint-disable */

    static propTypes = {
        width: PropTypes.oneOfType([ //宽度
            PropTypes.string,
            PropTypes.number,
        ]),
        height: PropTypes.oneOfType([ //高度
            PropTypes.string,
            PropTypes.number,
        ]),
        visible: PropTypes.bool, // 是否显示
        showMask: PropTypes.bool, // 是否显示遮罩
        showCloseButton: PropTypes.bool, // 是否显示关闭按钮
        animation: PropTypes.oneOf(['zoom', 'fade', 'flip', 'door',
            'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight']),  // 动画类型[zoom, fade, flip, door, rotate, slideUp, slideDown, slideLeft, slideRight]
        duration: PropTypes.number, // 动画持续时间
        className: PropTypes.string, // 弹窗class
        customStyles: PropTypes.object, // 弹窗css样式
        customMaskStyles: PropTypes.object, // 弹窗遮罩样式
        onClose: PropTypes.func.isRequired, // 关闭回调，必须
    }


    static defaultProps = {
        width: '300px',
        height: 'auto',
        visible: false,
        showMask: true,
        showCloseButton: true,
        animation: 'door',
        duration: 300,
        className: '',
        customStyles: {},
        customMaskStyles: {},
    }

    /* eslint-enable */

    constructor(props) {
        super(props);

        this.animationEnd = this.animationEnd.bind(this);
        this.state = {
            isShow: false,
            animationType: 'leave',
        };
    }

    componentDidMount() {
        if (this.props.visible) {
            this.enter();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.visible && nextProps.visible) {
            this.enter();
        } else if (this.props.visible && !nextProps.visible) {
            this.leave();
        }
    }

    enter() {
        this.setState({
            isShow: true,
            animationType: 'enter',
        });
    }

    leave() {
        this.setState({
            isShow: false,
            animationType: 'leave',
        });
    }

    animationEnd() {
        if (this.state.animationType === 'leave') {
            this.setState({ isShow: false });
        }
    }

    render() {
        const { props, state } = this;
        const mask = props.showMask ?
            <div // eslint-disable-line
                className="rodal-mask"
                style={props.customMaskStyles}
                onClick={props.onClose}
            />
            : null;
        const style = {
            display: state.isShow ? '' : 'none',
            WebkitAnimationDuration: `${props.duration}ms`,
            animationDuration: `${props.duration}ms`,
        };

        return (
            <div
                style={style}
                className={`rodal rodal-fade-${state.animationType} ${props.className}`}
                onAnimationEnd={this.animationEnd}
            >
                {mask}
                <Dialog {...props} animationType={state.animationType}>
                    {props.children}
                </Dialog>
            </div>
        );
    }
}

export default Rodal;
