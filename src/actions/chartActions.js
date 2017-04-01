import {
	CHANGECHATMSG
} from './actionTypes'

export function changeChartMsg(msg) {
	return {
		type: CHANGECHATMSG,
		msg: msg,
	};
}
