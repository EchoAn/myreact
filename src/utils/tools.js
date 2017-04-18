const isNum = (value) => {
    if (!value) {
        return false;
    }

    const numReg = /^\d+$/;

    if (numReg.test(value) === true) {
        return true;
    }

    return false;
};

export {
    isNum,
};

export default isNum;
