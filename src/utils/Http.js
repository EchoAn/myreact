import {
    IS_MOCK,
    HOST,
} from '../common/Config';

import {
    NetInfo
} from 'react-native';

import Alert, {
    Confirm
} from '../components/Alert';

import mock from '../mock/'

const resMock = function(url, body) {
    let content = mock(url, body);
    if (content) {
        return new Promise((resolve, reject) => {
            resolve(content);
        });
    }
    return false;
}

let isConnected;

NetInfo.fetch().done((reach) => {
    isConnected = reach;
});
NetInfo.addEventListener(
    'change',
    (reach) => {
        isConnected = reach;
    }
);

export default class Http {
    static get(url, body = {}, host) {
        if (IS_MOCK) {
            return resMock(url);
        }
        return this.request(url, 'get', null, host)
    }

    static post(url, body = {}, host) {
        if (IS_MOCK) {
            return resMock(url, body);
        }
        return this.request(url, 'post', body, host)
    }

    static send(url, method, body, host, resolve, reject, headers) {

        host = host || HOST;

        // 判断网络
        if (isConnected !== 'wifi' && isConnected !== 'cell') {
            Alert('网络错误，请稍后重试');
            reject('网络错误，请稍后重试');
            return;
        }

        let sendData = {
            method,
            headers: {
                "Content-Type": "application/json",
            }
        }
        if (body) {
            sendData.body = JSON.stringify(body);
        }

        let timeoutTimer;

        fetch(host + url, sendData)
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                resolve(responseData);
            })
            .catch((error) => {
                resolve({
                    code: 444,
                    msg: '请求失败'
                });
            });
    }

    static request(url, method, body, host, headers) {
        return new Promise((resolve, reject) => {
            this.send(url, method, body, host, resolve, reject, headers)
        });
    }
}