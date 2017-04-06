import * as types from '../actions/actionTypes';

const initialState = {
    chartMsg: '',
};

export default function chart(state = initialState, action = {}) {
    switch (action.type) {
        case types.CHANGECHATMSG:
            return {
                ...state,
                chartMsg: action.msg || '',
            };
        default:
            return state;
    }
}
