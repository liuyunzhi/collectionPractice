'use strict';
function one_add_next_multiply_three(collection){
  let result = collection.map((value, index, array) => {
    if(index < array.length - 1){
      return (value + array[index + 1]) * 3;
    }
    return 0;
  });
  result.pop();
  return result;
}
module.exports = one_add_next_multiply_three;
