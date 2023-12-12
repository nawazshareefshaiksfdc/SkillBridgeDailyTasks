function mapObject(testObject, cb) {
    if (typeof (testObject) === "object") {
        for (let x in testObject) {
            let newValue = cb(testObject[x], x, testObject);
            testObject[x] = newValue;
        }
        console.log(testObject);
    }
    else {
        console.log(`please provide ${testObject} as Object type`);
    }
}

module.exports = mapObject;