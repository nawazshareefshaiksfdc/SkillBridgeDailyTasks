function sortInventory(inventory) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < inventory.length - 1; i++) {
      if (inventory[i].car_model > inventory[i + 1].car_model) {
        const temp = inventory[i];
        inventory[i] = inventory[i + 1];
        inventory[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  const sortedModels = [];
  let index = 0;
  while (index < inventory.length) {
    sortedModels[index] = inventory[index].car_model;
    index++;
  }

  return sortedModels;
}

module.exports = sortInventory;
