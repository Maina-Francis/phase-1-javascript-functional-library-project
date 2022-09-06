// myEach function
function myEach(collections, callback) {
  let currentCollection = [...collections];
  if (collections instanceof Array === false) {
    currentCollection = Object.values(collections);
  }
  for (let i = 0; i < currentCollection.length; i++) {
    callback(currentCollection[i]);
  }
  return collections;
}

// myReduce function
function myReduce(collection, callback, acc) {
  let currentCollection = [...collection];
  if (collection instanceof Array === false) {
    currentCollection = Object.values(collection);
  }
  let current = acc;
  if (typeof acc !== "number") {
    current = currentCollection[0];
    for (let i = 1; i < currentCollection.length; i++) {
      current = callback(current, currentCollection[i], currentCollection);
    }
  } else {
    for (let i = 0; i < currentCollection.length; i++) {
      current = callback(current, currentCollection[i], currentCollection);
    }
  }
  return current;
}

// myFind function
function myFind(collection, predicate) {
  let currentCollection = [...collection];
  if (collection instanceof Array === false) {
    currentCollection = Object.values(collection);
  }
  for (let i = 0; i < currentCollection.length; i++) {
    if (predicate(currentCollection[i])) {
      return currentCollection[i];
    }
  }
  return undefined;
}

// myMap function
function myMap(collection, callback) {
  let currentCollection = [...collection];
  if (collection instanceof Array === false) {
    currentCollection = Object.values(collection);
  }
  const newCollection = [];
  for (let i = 0; i < currentCollection.length; i++) {
    const newItem = callback(currentCollection[i]);
    newCollection.push(newItem);
  }
  return newCollection;
}

// mySize function
function mySize(collection) {
  let currentCollection = [...collection];
  if (collection instanceof Array === false) {
    currentCollection = Object.values(collection);
  }
  return currentCollection.length;
}

// myFirst function
function myFirst(arr, n) {
  if (typeof n !== "number") {
    return arr[0];
  } else {
    let newArray = [];
    for (let i = 0; i < n; i++) {
      newArray.push(arr[i]);
    }
    return newArray;
  }
}

// myLast function
function myLast(arr, n) {
  if (typeof n !== "number") {
    return arr[arr.length - 1];
  } else {
    let newArr = [];
    for (let i = 1; i <= n; i++) {
      newArr.unshift(arr[arr.length - i]);
    }
    return newArr;
  }
}

// myKeys function

function myKeys(object) {
  const arrayOfKeys = [];
  for (let key in object) {
    arrayOfKeys.push(key);
  }
  return arrayOfKeys;
}

// myFilter function
function myFilter(collection, predicate) {
  let currentCollection = [...collection];
  if (collection instanceof Array === false) {
    currentCollection = Object.values(collection);
  }

  const newCollection = [];
  for (let i = 0; i < currentCollection.length; i++) {
    if (predicate(currentCollection[i])) {
      newCollection.push(currentCollection[i]);
    }
  }
  return newCollection;
}

//myValues function
function myValues(object) {
  const arrayOfValues = [];

  for (let key in object) {
    arrayOfValues.push(object[key]);
  }
  return arrayOfValues;
}
