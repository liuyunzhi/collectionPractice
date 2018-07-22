'use strict';
var single_element = function(collection){
    let evenArray = [];
    let result = [];
    for (let index = 1; index < collection.length; index+=2) {
        evenArray.push(collection[index]);        
    }
    let cover = [];
    evenArray.forEach(element => {
        if (result.includes(element)) {
            result.pop(element);
            cover.push(element);
        } else {
            if (!cover.includes(element)) {
                result.push(element);
            }
        }
    });
    return result;
};
module.exports = single_element;
