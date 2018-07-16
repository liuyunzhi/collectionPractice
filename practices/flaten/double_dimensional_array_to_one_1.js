'use strict';

function double_to_one(collection) {
  //在这里写入代码
  return flatten(collection);
}

function flatten(array){
  var result = [];
  for (var index = 0, length = array.length; index < length; index++) {
    if (Array.isArray(array[index])) {
      result = result.concat(flatten(array[index]));
    } else {
      result.push(array[index]);
    }
  }
  return result;
}

module.exports = double_to_one;
