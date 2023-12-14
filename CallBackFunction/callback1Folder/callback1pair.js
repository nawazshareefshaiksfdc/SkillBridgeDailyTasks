let newArray = [];
const pair = (testObject) => {
  let index = 0;
  for (let key in testObject) {
    let value = testObject[key];
    newArray[index++] = ["["+key+":"+value+"]"];
  }
  console.log("["+newArray+"]");
}

module.exports = pair;
