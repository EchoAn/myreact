import fetch from 'isomorphic-fetch';

import {
    LOGINSUCESS,
    LOGINFAILURE,
} from './actionTypes';

import {
    isFetching,
    isFetched,
} from './httpActions';

function loginSucess() {
    return {
        type: LOGINSUCESS,
    };
}

function loginFailure(msg) {
    return {
        type: LOGINFAILURE,
        msg,
    };
}

function userLogin(username, password, history) {
    return (dispatch) => {
        dispatch(isFetching());
        return fetch('/gf/api/login')
            .then(response => response.json())
            .then((response) => {
                dispatch(isFetched());
                if (response.username === username && response.password === password) {
                    dispatch(loginSucess());
                    console.log('登录成功');

                    // react-router 跳转会监听history变化
                    history.push('/chart');
                } else {
                    alert('用户名或密码错误');
                }
            });
    };
}

export {
    loginSucess,
    loginFailure,
    userLogin,
};
