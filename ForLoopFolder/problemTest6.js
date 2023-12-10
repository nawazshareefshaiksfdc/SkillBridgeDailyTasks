const inventory = require('./inventory');
const FavCars = require('./problem6');

const filteredCars = FavCars(inventory);
console.log(JSON.stringify(filteredCars));