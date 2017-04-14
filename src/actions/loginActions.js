import http from '../utils/Http';

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
        // const params = {
        //     username,
        //     password,
        // };
        return http.login.post()
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
