import {
    CHANGECHATMSG,
} from './actionTypes';

function changeChartMsg(msg) {
    return {
        type: CHANGECHATMSG,
        msg,
    };
}

export default {
    changeChartMsg,
};
