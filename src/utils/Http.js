import API from './Api';

const options = {
    dataType: 'json',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};

const api = new API(options);

api.regist('login', '/gf/api/login');

export default api;
