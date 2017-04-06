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

function userLogin() {
    return (dispatch) => {
        dispatch(isFetching());
        return fetch('/login')
            .then(response => response.json())
            .then(() => {
                dispatch(isFetched());
                dispatch(loginSucess());
                alert('登录成功');
            })
            .catch(() => {
                dispatch(isFetched());
                dispatch(loginFailure());
                window.location.href = '/chart';
            });
    };
}

export {
    loginSucess,
    loginFailure,
    userLogin,
};
