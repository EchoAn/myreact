import {
	ISFETCHING,
	ISFETCHED,
	ISFETCHFAIL,
} from '../actions/actionTypes';

const initialState = {
	isFetching: false,
	reponseErrMsg: '',
}

export default function login(state = initialState, action = {}){
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
		case ISFETCHFAIL:
			return {
				...state,
				isFetching: false,
				reponseErrMsg: action.msg,
			}
		default:
			return state
	}
}