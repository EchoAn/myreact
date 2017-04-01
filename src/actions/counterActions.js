import {
	INCREMENT,
	DECREMENT,
	INCRENUM,
} from './actionTypes';

export function increment() {
	return {
		type: INCREMENT
	};
}

export function decrement() {
	return {
		type: DECREMENT
	};
}

export function increnum(num) {
	return {
		type: INCRENUM,
		num: num,
	};
}