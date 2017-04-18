import React, {
    Component,
} from 'react';

import {
    bindActionCreators,
} from 'redux';

import {
    connect,
} from 'react-redux';

import PropTypes from 'prop-types';

import './index.scss';
import Login from '../../components/Login';
import Model from '../../components/Model';

import loginActions from '../../actions/loginActions';

@connect(
    state => ({
        state: { ...state.login, ...state.http },
    }),
    dispatch => ({
        actions: bindActionCreators(loginActions, dispatch),
    }),
)
export default class LoginApp extends Component {

    static propTypes = {
        state: PropTypes.shape({
            loginErr: PropTypes.bool,
            errorMsg: PropTypes.string,
            isFetching: PropTypes.bool,
        }),
        actions: PropTypes.shape({
            userLogin: PropTypes.func,
        }),
    }

    static defaultProps = {
        state: {
            loginErr: false,
            errorMsg: '',
            isFetching: false,
        },
        actions: PropTypes.shape({
            userLogin: () => {},
        }),
    }

    constructor(props) {
        super(props);
        this.state = {
            loginErrModelShow: false,
        };
        console.log(props.state);
        this.loginErrOnclose = this.loginErrOnclose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.state.loginErr === true) {
            this.setState({
                loginErrModelShow: true,
            });
        }
    }

    loginErrOnclose() {
        this.setState({
            loginErrModelShow: false,
        });
    }

    render() {
        const {
            state,
            actions,
            history, // eslint-disable-line
        } = this.props;

        return (
            <div className="login">
                <header className="login-title">
                    <i className="login-share" />
                    登录
                    <i className="login-icon" />
                </header>
                <Login
                    loginFlag={state.loginFlag}
                    loginMsg={state.loginMsg}
                    isFetching={state.isFetching}
                    history={history}
                    {...actions}
                />
                <Model onClose={this.loginErrOnclose} visible={this.state.loginErrModelShow}>
                    {state.errorMsg}
                </Model>
            </div>
        );
    }
}
