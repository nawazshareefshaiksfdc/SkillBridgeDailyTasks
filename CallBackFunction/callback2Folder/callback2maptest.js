const {items} = require('./callback2dataitems');
const map = require('./callback2map');

map(items,(solution)=>{
    console.log(solution);
})