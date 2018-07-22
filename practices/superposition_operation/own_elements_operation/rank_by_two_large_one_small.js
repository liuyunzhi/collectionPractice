'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let sort = collection.sort((a,b) => (a - b));
  for (let index = 0; index < sort.length; index += 3) {
    let temp = sort[index];
    if (sort.length - index >= 3) {
      for (let i = index; i < index + 2; i++) {
        sort[i] = sort[i + 1];
      }
      sort[index + 2] = temp;
    }
  }
  return sort;
}
module.exports = rank_by_two_large_one_small;
