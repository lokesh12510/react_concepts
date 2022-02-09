function uniqueListFunc(id) {
  const uniqueList = [];
  const repeatList = {};
  const list = Array.from(id.toString());

  // Object for each item count
  list.forEach((i) => {
    repeatList[i] = (repeatList[i] || 0) + 1;
  });

  // List of items, which value is more that 1
  for (const [key, value] of Object.entries(repeatList)) {
    if (value > 1) {
      uniqueList.push(key);
    }
  }

  return uniqueList.length;
}

console.log(uniqueListFunc(123421123));
