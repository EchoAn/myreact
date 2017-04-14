/**
 * url 参数处理类
 */

/**
 * &a=1&b=2 转为 {a:1, b:2}
 */
const parse = (str) => {
    if (!str) {
        return '';
    }
    const data = {};
    str.split('&').forEach((item) => {
        let arr;
        if (item) {
            arr = item.split('=');
        }
        if (arr && arr.length > 1) {
            data[arr[0]] = arr[1];
        }
    });
    return data;
};

/**
 * {a:1, b:2} 转为 &a=1&b=2
 */
const stringify = (dataObj) => {
    const arr = [];
    const keys = Object.keys(dataObj);

    keys.forEach((key) => {
        arr.push(`${key}=${dataObj[key]}`);
    });
    return arr.join('&');
};

/**
 * [链接后加参数]
 */
const add = (href = '', data = '') => {
    let strdata = data;
    let retHref = href;

    if (typeof strdata !== 'string') {
        strdata = stringify(strdata);
    }
    retHref = retHref.trim();
    strdata = strdata.trim();
    if (retHref.indexOf('?') > -1) {
        if (retHref.match(/&$/)) {
            return retHref + strdata;
        }
        return `${retHref}&${strdata}`;
    }
    return `${retHref}?${strdata}`;
};

const paramsStrArr = location.search.split('?');
let paramsStr = '';
if (paramsStrArr.length >= 2) {
    paramsStr = paramsStrArr[1];
}

// parse('from=aaa&id=111');   ==>最后data = {from:aaa,id:111}
const data = parse(paramsStr);

export {
    data,
    parse,
    stringify,
    add,
};
