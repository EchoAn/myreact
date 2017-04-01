import {
	ISFETCHING,
	ISFETCHED,
	ISFETCHFAIL,
} from './actionTypes';
export function isFetching() {
	return {
		type: ISFETCHING
	};
}

export function isFetched() {
	return {
		type: ISFETCHED
	};
}

export function isFetchFail(msg) {
	return {
		type: ISFETCHFAIL,
		num: msg,
	};
}