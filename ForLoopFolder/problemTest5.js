const inventory = require('./inventory');
const OldCars = require('./problem5'); 

const year = 1997;
const count = OldCars(year, inventory);
console.log(`There are ${count} cars before ${year}`);
