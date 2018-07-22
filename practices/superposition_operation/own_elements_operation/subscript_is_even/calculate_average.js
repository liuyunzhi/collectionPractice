'use strict';
var calculate_average = function(collection){
    return collection.reduce((total, value, index) => {
        if (index % 2 === 1){
            return total += value;
        }
        return total;
    }, 0) / (collection.length / 2);
};
module.exports = calculate_average;
