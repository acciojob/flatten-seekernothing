function flatten(value, result = {}) {
  // base case: not object or array
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  // ARRAY CASE
  if (Array.isArray(value)) {
    let arr = [];
    for (let i = 0; i < value.length; i++) {
      const flat = flatten(value[i]);
      if (Array.isArray(flat)) arr.push(...flat);
      else arr.push(flat);
    }
    return arr;
  }

  // OBJECT CASE
  for (let key in value) {
    const val = value[key];
    if (typeof val === 'object' && val !== null) {
      flatten(val, result);
    } else {
      result[key] = val;
    }
  }

  return result;
}

module.exports = flatten;
