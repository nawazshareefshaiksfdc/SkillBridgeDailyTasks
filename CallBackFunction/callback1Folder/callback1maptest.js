const testObject = require ('./callback1data');
const mapObject = require ('./callback1map');

mapObject(testObject,(value, key,obj)=>{
    return value +5;
});


