const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };



// mapObject(testObject,(value,key,object)=>{
//     return object[key] +5;

// });








// function mapObject(testObject, cb){
//     if(typeof(testObject) === "object"){
//         for(let x in testObject){
//            let newValue = cb(testObject[x],x,testObject);
//             testObject[x] =newValue;
//         }
//         console.log(testObject);
//     }
//     else{
//         console.log(`please provide ${testObject} as Object type`);
//     }

// }

module.exports = testObject ;