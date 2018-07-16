'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(element => {
    let mark = false;
    collection_b.forEach(ele => {
      if (element % ele === 0) {
        mark = true;
      }
    });
    return mark;
  });
}

module.exports = choose_divisible_integer;
