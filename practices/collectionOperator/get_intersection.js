'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return collection_b.filter(element => {
    return collection_a.includes(element);
  });  
}

module.exports = get_intersection;
