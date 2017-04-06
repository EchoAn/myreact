import {
    ISFETCHING,
    ISFETCHED,
    ISFETCHFAIL,
} from './actionTypes';

function isFetching() {
    return {
        type: ISFETCHING,
    };
}

function isFetched() {
    return {
        type: ISFETCHED,
    };
}

function isFetchFail(msg) {
    return {
        type: ISFETCHFAIL,
        num: msg,
    };
}

export {
    isFetching,
    isFetched,
    isFetchFail,
};
