function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var sort = [];
  collection_a.forEach(element => {
    if (!sort.includes(element)) {
      sort.push(element);
    }
  });
  let result = [];
  sort.forEach(element => {
    let obj = {};
    if (element.includes('-')) {
      let splitResult = element.split('-');
      obj['key'] = splitResult[0];
      obj['count'] = parseInt(splitResult[1]);
      result.push(obj);
    } else {
      obj['key'] = element;
      obj['count'] = 0;
      result.push(obj);
    }
  });
  result.forEach(element => {
    collection_a.forEach(ele => {
      if (element['key'] === ele) {
        element['count']++;
      }
    });
  });
  let value = object_b.value;
  return result.map(element => {
    if (value.find(ele => element.key === ele)) {
      element.count -= parseInt(element.count / 3);
    }
    return element;
  });
}

module.exports = create_updated_collection;
