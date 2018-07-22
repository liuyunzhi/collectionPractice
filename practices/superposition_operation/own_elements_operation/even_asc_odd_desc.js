'use strict';
var even_asc_odd_desc = function(collection){
    let even = [];
    let odd = [];
    collection.forEach(element => {
        if (element % 2 === 0) {
            odd.push(element);
        } else {
            even.push(element);
        }
    });
    return odd.sort((a, b) => (a - b)).concat(even.sort((a, b) => (b - a)));
};
module.exports = even_asc_odd_desc;
