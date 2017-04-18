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
        return http.login.post()
            .then((response) => {
                dispatch(isFetched());
                if (response.username === username && response.password === password) {
                    dispatch(loginSucess());

                    // react-router 跳转会监听history变化
                    history.push('/chart');
                } else {
                    dispatch(loginFailure('用户名或者密码错误'));
                }
            });
    };
}

export default {
    userLogin,
};
