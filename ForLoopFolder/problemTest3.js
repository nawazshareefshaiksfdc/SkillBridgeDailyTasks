const inventory = require('./inventory');
const sortInventory = require('./problem3');

const sortedCarModels = sortInventory(inventory);
console.log(sortedCarModels);
