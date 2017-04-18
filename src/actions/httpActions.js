import {
    ISFETCHING,
    ISFETCHED,
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

export {
    isFetching,
    isFetched,
};
