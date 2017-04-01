import {
	LOGINSUCESS,
	LOGINFAILURE,
} from './actionTypes.js';

import fetch from 'isomorphic-fetch';
import {
	isFetching,
	isFetched,
	isFetchFail,
} from './httpActions';

function loginSucess() {
	return {
		type: LOGINSUCESS,
	}
}

function loginFailure(msg) {
	return {
		type: LOGINFAILURE,
		msg: msg,
	}
}

export function userLogin(username, password) {
	return function(dispatch) {
		dispatch(isFetching());
		alert(`${username}|${password}`);
		return fetch('/login')
			.then(response => response.json())
			.then(responseJson => {
				dispatch(isFetched());
				dispatch(loginSucess());
				alert('登录成功');
			})
			.catch(function(error) {
				dispatch(isFetched());
				dispatch(loginFailure());
				window.location.href="http://www.baidu.com";
			});
	}
}