const inventory = require('./ForEachData')
const LastCar = require('./ForEachLastCar');

const cardata = LastCar(inventory);

const { id, car_make, car_model } = cardata;
console.log('LastCar id is '+id + " Car make is " + car_make + " Car model is " + car_model);