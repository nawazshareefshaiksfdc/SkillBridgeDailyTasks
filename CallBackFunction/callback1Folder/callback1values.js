function values(testObject, cb) {
    for (let keys in testObject) {
        let values = testObject[keys];
        cb(values, keys, testObject);
    }
    return values;
}

module.exports = values;
// const valuesArray = Object.ValuesO(testObject);
// console.log(valuesArray);