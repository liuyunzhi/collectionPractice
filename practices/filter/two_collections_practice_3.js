'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(element => {
    collection_b.forEach(ele => {
      if (element % ele === 0) {
        return true;
      }
    });
  });
}

module.exports = choose_divisible_integer;
