const capitalize = require("./exercise001");

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const arrResult = [];
  nums.forEach(i => arrResult.push(Math.pow(i, 2)));
  return arrResult;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  const arrReturn = words;
  for (let i = 1; i < words.length; i++) {
    arrReturn[i] = capitalize.capitalize(words[i]);
  }
  return arrReturn.join("")
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let countNum = 0;
  people.forEach(i => countNum += i.subjects.length);
  return countNum;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  const result = menu.filter(o => o.ingredients.includes(ingredient)).length;
  return !!result;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let filtArr = arr1.filter(v => arr2.includes(v));
  return [...new Set(filtArr.sort())];

}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
