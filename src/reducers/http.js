import {
    ISFETCHING,
    ISFETCHED,
} from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    reponseErrMsg: '',
};

export default function http(state = initialState, action = {}) {
    switch (action.type) {
        case ISFETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case ISFETCHED:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
}
