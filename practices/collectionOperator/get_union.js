'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result = [];

  collection_a.forEach(element => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });

  collection_b.forEach(element => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });

  return result;
}

module.exports = get_union;

