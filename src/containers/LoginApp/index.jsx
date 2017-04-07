import React, {
    Component,
} from 'react';

import {
    bindActionCreators,
} from 'redux';

import {
    connect,
} from 'react-redux';


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
    render() {
        const {
            state,
            actions,
            history,
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
