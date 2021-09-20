export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}
  groupByKey(array, key) {
    // TODO: implement logic here
    const results = {};
    // iterate over array and add to results
    array.forEach((obj) => {
      const value = obj[key];
      if (!results[value]) results[value] = 1;
      else results[value]++;
    });
    // calculate percentage
    for (const key in results) {
      results[key] = results[key] / array.length;
    }
    return results;
  },
  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123
  getValueAtPath(obj, path, defaultValue='none') {
    // TODO: implement logic here
    return path.split('.').reduce((a, v) => a[v], obj) || defaultValue;
  },
};
