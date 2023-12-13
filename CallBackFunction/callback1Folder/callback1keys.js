const testObject = require('./callback1datatestObject');

function keys(testObject, cb) {
  for (let x in testObject) {
    let keys = x;
    cb(keys);
  }
  return keys;
}

module.exports = keys;

// const keysArray = Object.keys(testObject);
// console.log(keysArray);