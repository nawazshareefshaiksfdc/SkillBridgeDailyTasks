const inventory = require('./ForEachData');
const filterCars = require('./ForEachFilterCars');

const filteredCarsList = filterCars(inventory);

console.log(filteredCarsList);