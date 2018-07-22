'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  const ASCII_A_CODE = 96;
  return String.fromCharCode(ASCII_A_CODE + Math.ceil(collection.reduce((mun , element) => mun += element) / collection.length));
}

module.exports = average_to_letter;

