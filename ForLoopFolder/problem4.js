const inventory = require('./inventory');


function getCarYears() {
    const years = [];
    for (let i = 0; i < inventory.length; i++) {
      years.push(inventory[i].car_year);
    }
        console.log(years)
    return years;
  }
  
  module.exports = getCarYears; 
  