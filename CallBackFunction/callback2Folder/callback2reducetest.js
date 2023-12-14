const {items} = require('./callback2dataitems');
const reduce = require('./callback2reduce');

reduce(items,"+",(result) => {
    console.log(result);
})

  





























































//  // Example callback functions
//   function add(x, y) {
//     return x + y;
//   }
  
//   function subtract(x, y) {
//     return x - y;
//   }
  
//   function multiply(x, y) {
//     return x * y;
//   }
  
//   function divide(x, y) {
//     if (y !== 0) {
//       return x / y;
//     } else {
//       throw new Error("Division by zero");
//     }
//   }
  
//   // Example usage
//   const numbers = [1, 2, 3, 4, 5];
//   const sumResult = myReduce(add, numbers);
//   const differenceResult = myReduce(subtract, numbers);
//   const productResult = myReduce(multiply, numbers);
//   const quotientResult = myReduce(divide, numbers);
  
//   console.log("Sum:", sumResult);
//   console.log("Difference:", differenceResult);
//   console.log("Product:", productResult);
//   console.log("Quotient:", quotientResult);
  