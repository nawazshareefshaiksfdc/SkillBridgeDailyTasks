


function CarDetailsById(inventory,ID){
    let CarsById = [];
    for(i = 0;i <inventory.length;i++){
        if(inventory[i].id ===ID){
            CarsById.push(inventory[i]);
        }
    }
    return CarsById;
}


module.exports = CarDetailsById;

