'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(element => {
    return collection_b.includes(element);
  });
}

module.exports = choose_common_elements;
