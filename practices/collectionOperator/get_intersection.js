'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(element => {
    return collection_b.includes(element);
  });  
}

module.exports = get_intersection;
