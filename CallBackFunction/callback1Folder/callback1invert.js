const reversedObject = {};
const invert = (testObject, cb) => {
    for (const key in testObject) {
        const value = testObject[key];
        reversedObject[value] = key;
    }
    cb(reversedObject);
    return reversedObject;
}

module.exports = invert;
