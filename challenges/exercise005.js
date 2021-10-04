const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let nxNum = null;
  let iNum = nums.findIndex(x => x === n)+1
  if (iNum > 0 && iNum < nums.length){
    nxNum = nums[iNum];
  }
  return nxNum
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let zeros = (str.match(/0/g) || []).length
  let ones = (str.match(/1/g) || []).length
  let arrReturn = {0:zeros, 1:ones};

  return arrReturn;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let reversedNum = (n.toString().split('').reverse().join('')) * Math.sign(n);
  return reversedNum;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sumNestedArray = arrs.flat(Infinity).reduce((a,b)=> a+b, 0);
  return sumNestedArray;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let result = []; 
  if(arr.length === 0){
   result = [];
  }
  else {
  arr2 = arr; 
  const first = arr[arr.length-1];
  const last = arr[0];
  arr2[arr2.length-1] = last;
  arr2[0] = first;
  result = arr2;
  }
  return result;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  let result = false;
  let value = [];
  for (let ele in haystack){
  if(typeof haystack[ele] === 'string'){
  value.push(haystack[ele]);
  }
  }
  for (let i = 0; i < value.length; i++){
  if(value[i].toLowerCase().includes(searchTerm.toLowerCase())){
  result = true;
  }
  }
  return result;

};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
