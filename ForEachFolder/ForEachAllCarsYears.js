const AllCarYears = (inventory) => {
    let allYears = [];
    function customPush(array, element) {
        array[array.length] = element;
        return array.length;
      }
    for (let index = 0; index < inventory.length; index++) {
        let somedata = inventory[index].car_year;
        customPush(allYears,somedata);
    }
    return allYears;
};

module.exports = AllCarYears;