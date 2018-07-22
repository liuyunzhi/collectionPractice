'use strict';
var is_exist_element = function (collection, element) {
    if (collection.find((value, index) => {
        if (index % 2 === 0 && value === element) {
            return true;
        }
    })) {
        return true;
    } else {
        return false;
    }
};
module.exports = is_exist_element;
