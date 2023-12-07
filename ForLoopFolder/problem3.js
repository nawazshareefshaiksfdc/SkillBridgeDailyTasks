const inventory = require('./inventory');


function sortInventory() {
    const sortData = [];
    for (let i = 0; i < inventory.length; i++) {
      sortData.push(inventory[i].car_model);
    }
    console.log(sortData.sort());
    return sortData.sort();
  }
  
module.exports = sortInventory; 




