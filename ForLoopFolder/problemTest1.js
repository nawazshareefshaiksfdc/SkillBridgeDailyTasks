const inventory = require('./inventory');
const CarDetailsById = require('./problem1');
let ID = 41;
let dataById = CarDetailsById(inventory, ID);
console.log(`Car ${ID} is a ${dataById.car_year} ${dataById.car_make} ${dataById.car_model}`);
