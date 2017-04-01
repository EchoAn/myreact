'use strict';

import './loginApp.scss';
import React, {
	Component
} from 'react';

import {
	bindActionCreators,
} from 'redux';

import Login from '../../components/Login';

import * as loginActions from '../../actions/loginActions';
import {
	connect
} from 'react-redux';

class LoginApp extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {
			state,
			actions,
		} = this.props;

		return (
      <div className="login">
        <header className="login-title"><i className="login-share"></i>登录<i className="login-icon"></i></header>
  			<Login
  				loginFlag = {state.loginFlag}
  				loginMsg = {state.loginMsg}
  				isFetching = {state.isFetching}
  				{...actions}
  			/>
      </div>
		)
	}
}

export default connect(state => ({
		state: {...state.login, ...state.http}
	}),
	(dispatch) => ({
		actions: bindActionCreators(loginActions, dispatch)
	})
)(LoginApp);