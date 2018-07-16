'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(element => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
}

module.exports = choose_no_repeat_number;
