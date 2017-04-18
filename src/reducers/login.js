import {
    LOGINSUCESS,
    LOGINFAILURE,
} from '../actions/actionTypes';

const initialState = {
    loginErr: false,
    errorMsg: '',
};

export default function login(state = initialState, action = {}) {
    switch (action.type) {
        case LOGINSUCESS:
            return {
                ...state,
                loginErr: false,
            };
        case LOGINFAILURE:
            return {
                ...state,
                loginErr: true,
                errorMsg: action.msg,
            };
        default:
            return state;
    }
}
