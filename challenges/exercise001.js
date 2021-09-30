function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0, 1) + '.' + lastName.substring(0, 1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  var rAns = originalPrice / 100 * vatRate + originalPrice;
  return +rAns.toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  var rAns = originalPrice - (originalPrice / 100 * reduction);
  return +rAns.toFixed(2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length%2 === 1){
    return str.substring(str.length/2-0.5, str.length/2+0.5); 
  } 
  else return str.substring(str.length/2-1, str.length/2+1);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var r = "";
  for (var i = word.length; i >= 0; i = i - 1) {
    r = r + word.charAt(i);
}
return r;   
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  for (var i = 0; i < words.length; i = i + 1){
  words[i] = reverseWord(words[i]) 
}  
  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var type = 'Linux';
  var count = users.filter((obj) => obj.type === type).length;
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
