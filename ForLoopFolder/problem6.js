function FavCars(inventory) {
    const filteredCars = [];
    for (let i = 0, j = 0; i < inventory.length; i++) {
        const model = inventory[i].car_make;
        if (model === 'BMW' || model === 'Audi') {
            filteredCars[j] = inventory[i];
            j++;
        }
    }
    return filteredCars;
}
module.exports = FavCars;