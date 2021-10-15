function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let arrResult = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      arrResult.push(nums[i]);
    }
  }
  return arrResult;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let arrResult = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].substring(0, 1) === char) {
      arrResult.push(names[i]);
    }
  }
  return arrResult;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let arrResult = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, 3) === 'to ') {
      arrResult.push(words[i]);
    }
  }
  return arrResult;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let arrResult = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      arrResult.push(nums[i]);
    }
  }
  return arrResult;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let arrResult = [];
  for (let i = 0; i < users.length; i++) {
    arrResult.push(users[i].data.city.displayName);
  }
  return arrResult;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let arrResult = [];
  for (let i = 0; i < nums.length; i++) {
    arrResult.push(+Math.sqrt(nums[i]).toFixed(2));
  }
  return arrResult;

}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let arrResult = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str)) {
      arrResult.push(sentences[i]);
    }
  }
  return arrResult;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let arrResult = [];
  for (let i = 0; i < triangles.length; i++) {
    arrResult.push(Math.max(...triangles[i]));
  }
  return arrResult;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
