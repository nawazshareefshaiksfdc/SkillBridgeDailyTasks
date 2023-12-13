const testObject = require('./callback1datatestObject');
let newArray = [];

const pair = (testObject) => {
  let index = 0;
  for (let key in testObject) {
    let value = testObject[key];
    newArray[index++] = ["["+key+":"+value+"]"];
  }
  console.log("["+newArray+"]");
}
pair(testObject);
