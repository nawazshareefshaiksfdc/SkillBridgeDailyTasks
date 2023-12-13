const testObject = require('./callback1datatestObject');
const invert = require('./callback1invert');

invert(testObject, (element) => {
    console.log(element);
});