import {
	LOGINSUCESS,
	LOGINFAILURE,
} from '../actions/actionTypes.js'

const initialState = {
	loginFlag: false,
	loginMsg: '',
}

export default function login(state = initialState, action = {}){
	switch (action.type) {
		case LOGINSUCESS:
			return {
				...state,
				loginFlag: true,
			};
		case LOGINFAILURE:
			return {
				...state,
				loginFlag: false,
				loginMsg: action.msg,
			}
		default:
			return state
	}
}