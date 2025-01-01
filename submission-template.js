const findSum = function(array) {
  // your code here - don't forget to return a number!
  let sum = 0;
  for (let i=0; i<array.length; i++) {
    sum += array[i];
  }
  return sum;
};

//array = [1,2,3];
//result = findSum(array);
//console.log(result);

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  let mostFreq = 0;
  let leastFreq = 9999;
  let mostTemp = 0;
  let most = "";
  let least = "";

  for (let i=0; i<array.length-1; i++) {
    let comp1 = array[i];
    mostFreq = 1;
    //console.log(most);

    for (let j=i+1; j<array.length; j++) {
      let comp2 = array[j];
      if (comp1 == comp2) {
        mostFreq++;
      } 
    }
    if (mostFreq > mostTemp) {
      mostTemp = mostFreq;
      most = comp1;

    }
    if (mostFreq <= leastFreq) {
      leastFreq = mostFreq;
      least = comp1;
      //console.log(least);

    }
  }
  return {most: most, least: least};
};

//array = ['a', 'a', 'b', 'b', 'c', 'd', 'd', 'd'] ;
//result = findFrequency(array);
//console.log(result);

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
  //edge case - odd number of characters
  for (let i=0; i<Math.floor(str.length/2); i++) {
    if (str[i] != str[(str.length-1)-i]) {
      return false;
    }
  }
  return true;
};

//str = "canal";
//result = isPalindrome(str);
//console.log(result);

const largestPair = function(array) {
  // your code here - don't forget to return a number!
  let prod = array[0] * array[1];
  for (let i=0; i<array.length-1; i++) {
    if ((array[i] * array[i+1]) > prod) {
      prod = array[i] * array[i+1];
    }
  }
  return prod;
};

//array = [1,3,5,8];
//result = largestPair(array);
//console.log(result);

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
  let counter = 0;
  let s1 = "";
  let s2 = "";

  for (let i=0; i<str.length; i++) {
    if (str[i] == '(') {
      s1 = str.substring(0,(i));
    }
    for (let j=i; j<i; j++) {
      counter++;
      if (str[j] == (')')) {
        let s2 = str.substring(counter);
        return s1 + s2;
      }
    }
  }
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
  let score = 0;
  for (let i=0; i<str.length; i++) {
    if (str[i] == ('a' || 'e' || 'i' || 'o' || 'u' || 'l' || 'n' || 'r' || 's' || 't')){
      score += 1;
    }
    if (str[i] == ('d' || 'g')){
      score += 2;
    }
    if (str[i] == ('b' || 'c' || 'm' || 'p')){
      score += 3;
    }
    if (str[i] == ('f' || 'h' || 'v' || 'w' || 'y')){
      score += 4;
    }
    if (str[i] == ('k')){
      score += 5;
    }
    if (str[i] == ('j' || 'x')){
      score += 8;
    }
    if (str[i] == ('q' || 'z')){
      score += 10;
    }
  }
  
return score;
};
