const testObject = require('./callback1datatestObject');
const keys = require('./callback1keys');

keys(testObject, (element) => {
   console.log(element);
});
