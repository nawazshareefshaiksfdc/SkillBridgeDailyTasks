const map = (items, cb) => {
    const resultArray = [];
    for (let i = 0; i < items.length; i++) {
        resultArray[i] = items[i] * 2;
    }
    cb(resultArray);
    return resultArray;
}

module.exports = map;