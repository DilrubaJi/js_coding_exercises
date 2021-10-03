function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let arrRes = [];
  for (let i = 0; i < nums.length; i++){
    if(nums[i] < 1){
      arrRes.push(nums[i]);
    }
  }
  return arrRes;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let arrRes = [];
  for (let i = 0; i < names.length; i++){
    if(names[i].substring(0,1) === char){
      arrRes.push(names[i]);
    }
  }
  return arrRes;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let arrRes = [];
  for (let i = 0; i < words.length; i++){
    if(words[i].substring(0,3) === 'to '){
      arrRes.push(words[i]);
    }
  }
  return arrRes;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let arrRes = [];
  for (let i = 0; i < nums.length; i++){
    if(Number.isInteger(nums[i])){
      arrRes.push(nums[i]);
    }
  }
  return arrRes;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let arrRes = [];
  for (let i = 0; i < users.length; i++){
    arrRes.push(users[i].data.city.displayName);
  }
  return arrRes;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let arrRes = [];
  for (let i = 0; i < nums.length; i++){
    arrRes.push(+Math.sqrt(nums[i]).toFixed(2));
  }
  return arrRes;
  
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let arrRes = [];
  for (let i = 0; i < sentences.length; i++){
    if(sentences[i].toLowerCase().includes(str)){
      arrRes.push(sentences[i]);
    }
  }
  return arrRes;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let arrRes = [];
  for (let i = 0; i < triangles.length; i++){
    arrRes.push(Math.max(...triangles[i]));
  }
  return arrRes;
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
