function getSquares(nums) {
  let arrReturn = [];
  if (nums === undefined) throw new Error("nums is required");
  for (let i = 0; i < nums.length; i++){
    arrReturn[i] = Math.pow(nums[i],2);
    }
  return arrReturn;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
    function capitalize(word) {
      return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
    }
    let arrReturn = words;
    for (let i = 1 ; i < words.length; i++){
      arrReturn[i] = capitalize(words[i]);
    }
    return arrReturn.join("")   
    
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let countNum = 0;
  for (let i = 0; i < people.length; i++){
  countNum = countNum + people[i].subjects.length
  }
  return countNum;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let result = menu.filter(o => o.ingredients.includes(ingredient)).length;
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
