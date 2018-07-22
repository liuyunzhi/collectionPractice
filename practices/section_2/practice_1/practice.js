function count_same_elements(collection) {
  //在这里写入代码
  var sort = [];
  collection.forEach(element => {
    if (!sort.includes(element)) {
      sort.push(element);
    }
  });
  let result = [];
  sort.forEach(element => {
    let obj = {};
    obj['key'] = element;
    obj['count'] = 0;
    result.push(obj);
  });
  result.forEach(element => {
    collection.forEach(ele => {
      if (element['key'] === ele) {
        element['count']++;
      }
    });
  });
  return result;
}

module.exports = count_same_elements;
