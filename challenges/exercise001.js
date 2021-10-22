function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return `${firstName.substring(0, 1)}.${lastName.substring(0, 1)}`;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return +(originalPrice / 100 * vatRate + originalPrice).toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return +(originalPrice - (originalPrice / 100 * reduction)).toFixed(2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return str.length % 2 === 1 ?
    str.substring(str.length / 2 - 0.5, str.length / 2 + 0.5) :
    str.substring(str.length / 2 - 1, str.length / 2 + 1);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse("").join("");
}
//do we want to preserve the orignal array? Or is the function supposed to alter the array like below?
function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  words.forEach((value, index) => words.splice(index, 1, reverseWord(value)));
  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter(obj => obj.type === "Linux").length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return +(scores.reduce((total, current) => total + current) / scores.length).toFixed(2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  switch (true) {
    case (n % 5 === 0 && n % 3 === 0):
        return "fizzbuzz";
        break;
    case n % 3 === 0:
        return "fizz";
        break;
    case n % 5 === 0:
        return "buzz";
        break;
    default:
        return n;
        break;
        };
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
