const testObject = require('./callback1datatestObject');
const defaults = require('./callback1defaults')

defaults(testObject, "name", "Bruce Wayne", "flavour", "chocolate", (name, value, newKey, newValue) => {
    console.log("Callback invoked with:", name, value, newKey, newValue);
    console.log(testObject);
  });