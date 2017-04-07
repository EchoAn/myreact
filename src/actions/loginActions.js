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
        return fetch('/gf/api/login')
            .then(response => response.json())
            .then((response) => {
                dispatch(isFetched());
                dispatch(loginSucess());
                console.log(response);
                alert(`登录成功:${response.success}`);
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
