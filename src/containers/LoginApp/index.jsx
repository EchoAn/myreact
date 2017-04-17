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

import * as loginActions from '../../actions/loginActions';

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
            loginFlag: PropTypes.bool,
            loginMsg: PropTypes.string,
            isFetching: PropTypes.bool,
            reponseErrMsg: PropTypes.string,
        }),
        actions: PropTypes.shape({
            loginSucess: PropTypes.func,
            loginFailure: PropTypes.func,
            userLogin: PropTypes.func,
        }),
    }

    static defaultProps = {
        state: {
            loginFlag: '',
            loginMsg: '',
            isFetching: false,
            reponseErrMsg: '',
        },
        actions: PropTypes.shape({
            loginSucess: () => {},
            loginFailure: () => {},
            userLogin: () => {},
        }),
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
            </div>
        );
    }
}
