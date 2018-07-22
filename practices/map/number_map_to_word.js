'use strict';
var number_map_to_word = function(collection){
  const letter = 'abcdefghijklmnopqrstuvwxyz';
  return collection.map(element => letter[element % 26 - 1 ]);
};

module.exports = number_map_to_word;
