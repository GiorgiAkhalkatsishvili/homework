

let testArray = [423, 'teest1', 3345, 'tefasfst2', 2342, true, 3423, 'tejssfst3', false, 'testtestetstdj'];

let numbersArray = [];

testArray.forEach((element) => {
  if (typeof element === "number") { //-აქ სამი ტოლობა რატომ სჭირდება?
    numbersArray.push(element);
  }
})

console.log(numbersArray)

// boolean ↓

let booleanArray = [];

testArray.forEach((i) => {
  if (typeof i === 'boolean') {
    booleanArray.push(i)
  }
})

console.log(booleanArray)

// strings ↓

let arrayStrings = [];

testArray.forEach((item) => {
  if (typeof item === "string") {
    arrayStrings.push(item);
  }
})

console.log(arrayStrings);

// strings which include more than 6 words ↓

let filteredArray = testArray.filter(string => string.length > '6');

console.log(filteredArray);

// if array includes 2342 ↓

let arrayIncludes = testArray.includes(2342);

console.log(arrayIncludes);
