'use strict';
var even_group_calculate_average = function(collection){
    let result = [];
    let evenArray = [];
    for (let index = 1; index < collection.length; index+=2) {
        if (collection[index] % 2 === 0) {
            evenArray.push(collection[index]);        
        }
    }
    let one = [];
    let two = [];
    let three = [];
    evenArray.forEach(element => {
        switch (element.toString().length) {
            case 1:
                one.push(element);
                break;
            case 2:
                two.push(element);
                break;
            case 3:
                three.push(element);
                break;
        }
    });
    if (one.length !== 0) {
        result.push(one.reduce((total, value) => total += value, 0) / one.length);
    }
    if (two.length !== 0) {
        result.push(two.reduce((total, value) => total += value, 0) / two.length);
    }
    if (three.length !== 0) {
        result.push(three.reduce((total, value) => total += value, 0) / three.length);
    }
    if (result.length === 0) {
        result.push(0);
    }
    return result;
};
module.exports = even_group_calculate_average;
