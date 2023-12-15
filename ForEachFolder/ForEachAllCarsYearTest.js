const inventory = require('./ForEachData')
const AllCarYears = require('./ForEachAllCarsYears');
const cars = AllCarYears(inventory);

console.log(cars);