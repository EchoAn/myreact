import fetch from 'isomorphic-fetch';
import config from '../common/Config';
import {
    stringify,
} from './get';

class API {
    constructor(options = {}) {
        this.options = options; // api通用设置
        this.baseUri = options.baseUri || config.apiHost; // 服务器地址
        this.urls = {}; // 保存所有注册url
    }

    regist(name, url, options = {}) {
        if (name in this) {
            console.error(`api名称${name}已存在!`);
            return false;
        }
        if (url in this.urls) {
            console.error(`该接口地址${url}已添加!`);
            return false;
        }
        this.urls[url] = name;

        const fetchUrl = url.indexOf('//') >= 0 ? url : (this.baseUri + url);

        const responseHandler = (response, resolve, reject) => {
            if (response.ok) {
                resolve(response.json());
            } else {
                reject(response);
            }
        };

        const getMethod = (runTimeOptions = {}) => {
            const promise = new Promise((resolve, reject) => {
                const fetchOption = Object.assign({}, options, runTimeOptions, {
                    method: 'GET',
                });
                fetch(fetchUrl, fetchOption)
                    .then((response) => {
                        responseHandler(response, resolve, reject);
                    });
            });
            return promise;
        };

        const postMethod = (parmas = {}, runTimeOptions = {}) => {
            const paramStr = stringify(parmas);
            const promise = new Promise((resolve, reject) => {
                const fetchOption = Object.assign({}, options, runTimeOptions, {
                    method: 'POST',
                    body: paramStr,
                });
                fetch(fetchUrl, fetchOption)
                    .then((response) => {
                        responseHandler(response, resolve, reject);
                    });
            });
            return promise;
        };

        this[name] = getMethod;
        this[name].get = getMethod;

        // server-json 处理post有问题，走mock时将post方法改为get
        const isMock = process && process.env && process.env.SERVER_ENV === 'mock';
        if (isMock) {
            this[name].post = getMethod;
        } else {
            this[name].post = postMethod;
        }
        return true;
    }
}

export default API;
