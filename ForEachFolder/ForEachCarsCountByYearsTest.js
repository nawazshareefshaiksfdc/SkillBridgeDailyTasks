const inventory = require('./ForEachData');
const CarsDataByYears = require('./ForEachCarsCountByYears');
let target_year= 2004;
const result = CarsDataByYears(inventory,target_year);
console.log("There are "+result+" in the year "+target_year);