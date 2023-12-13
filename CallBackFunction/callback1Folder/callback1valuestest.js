const testObject = require('./callback1datatestObject');
const values = require('./callback1values');

values(testObject, (values, keys, object) => {
    console.log(values);
});