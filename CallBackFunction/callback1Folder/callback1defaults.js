const testObject = require('./callback1datatestObject');

const defaults = (testObject, keyToCheck, valueToCheck, newKey, newValue, cb) => {
    for (let key in testObject) {
      if (key === keyToCheck && testObject[key] === valueToCheck) {
        testObject[newKey] = newValue;
        if (cb) {
          cb(keyToCheck, valueToCheck, newKey, newValue);
        }
        return testObject;
      }
    }
  
    console.log(false);
  };
module.exports = defaults;