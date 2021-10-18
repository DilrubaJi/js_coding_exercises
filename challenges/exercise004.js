function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const arrResult = [];
  nums.forEach(index => index < 1 ? arrResult.push(index) : false);
  return arrResult;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const arrResult = [];
  names.forEach(i => i.substring(0, 1) === char ? arrResult.push(i) : false)
  return arrResult;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let arrResult = [];
  words.forEach(i => i.substring(0, 3) === "to " ? arrResult.push(i) : false);
  return arrResult;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let arrResult = [];
  nums.forEach(i => Number.isInteger(i) ? arrResult.push(i) : false);
  return arrResult;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let arrResult = [];
  users.forEach(i => arrResult.push(i.data.city.displayName));
  return arrResult;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let arrResult = [];
  nums.forEach(i => arrResult.push(+Math.sqrt(i).toFixed(2)));
  return arrResult;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let arrResult = [];
  sentences.forEach(i => i.toLowerCase().includes(str) ? arrResult.push(i) : false);
  return arrResult;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let arrResult = [];
  triangles.forEach(i => arrResult.push(Math.max(...i)));
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
