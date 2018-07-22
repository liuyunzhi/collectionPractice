function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let value = object_b.value;
  return collection_a.map(element => {
    if (value.find(ele => element.key === ele)) {
      element.count -= parseInt(element.count / 3);
    }
    return element;
  });
}

module.exports = create_updated_collection;
