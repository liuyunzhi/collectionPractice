'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  const ASCII_A_CODE = 96;
  let result = [];
  collection.forEach(element => {
    if (element % 2 === 0) {
      result.push(String.fromCharCode(ASCII_A_CODE + element));
    }
  });
  return result;
}

module.exports = even_to_letter;
