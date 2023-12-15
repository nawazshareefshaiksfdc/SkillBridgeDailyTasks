function sortInventory(inventory) {
  let isSwapped;
  for (let Pass = 0; Pass < inventory.length - 1; Pass++) {
    isSwapped = false;
    for (let i = 0; i < inventory.length - 1 - Pass; i++) {
      if (inventory[i].car_model > inventory[i + 1].car_model) {
        const temp = inventory[i];
        inventory[i] = inventory[i + 1];
        inventory[i + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  const sortedModels = [];
  for (let i = 0; i < inventory.length; i++) {
    sortedModels[i] = inventory[i].car_model;
  }
  return sortedModels;
}

module.exports = sortInventory;
