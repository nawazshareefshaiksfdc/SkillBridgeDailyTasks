const items = require('./callback2dataitems');
const find = require('./callback2find');

find(items,(element)=>{    
    if(element === 34){
      console.log(element);
    }
  
  });