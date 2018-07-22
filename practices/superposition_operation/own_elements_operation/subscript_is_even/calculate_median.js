'use strict';
var calculate_median = function(collection){
    let result = [];
    for (let index = 1; index < collection.length; index+=2) {
        result.push(collection[index]);        
    }
    let length = result.length;
    if (length % 2 === 0) {
        return (result[length / 2 - 1] + result[length / 2]) / 2;
      }
      return result[parseInt(length / 2)];
};
module.exports = calculate_median;
