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
  let leastTemp = Infinity;
  let mostTemp = 0;
  let most = "";
  let least = "";
  let comp1 = "";
  let comp2 = "";

  for (let i=0; i<array.length-1; i++) {
    //select string to be compared to all strings in array
    comp1 = array[i];
    //reset frequency counter for each iteration 
    mostFreq = 0;

    for (let j=0; j<array.length; j++) {
      //select second string to be compared to comp1
      comp2 = array[j];
      //find identical strings, increment counter if true
      if (comp1 == comp2) {
        mostFreq++;
      } 
    }
    //keep track of highest frequency by updating mostTemp
    if (mostFreq > mostTemp) {
      mostTemp = mostFreq;
      most = comp1;

    }
    //keep track of lowest frequency by updating leastTemp
    if (mostFreq < leastTemp) {
      leastTemp = mostFreq;
      least = comp1;
    }
  }
  return {most: most, least: least};
};

//array = ['a', 'banana', 'a', 'd', 'd', 'd', 'd', 'b', 'b', 'c', 'c'];
//result = findFrequency(array);
//console.log(result);

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
  //edge case - odd number of characters
  //for (let i=0; i<Math.floor(str.length/2); i++) {
    //if (str[i] != str[(str.length-1)-i]) {
      //return false;
    //}
  //}

  start = 0;
  end = str.length-1;
  while(start != end){
    if (str[start] != str[end]) {
      return false;
    }
    start++;
    end--;
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
    if (['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'].includes(str[i])){
      score += 1;
    }
    if (['d', 'g'].includes(str[i])){
      score += 2;
    }
    if (['b', 'c', 'm', 'p'].includes(str[i])){
      score += 3;
    }
    if (['f', 'h', 'v', 'w', 'y'].includes(str[i])){
      score += 4;
    }
    if (['k'].includes(str[i])){
      score += 5;
    }
    if (['j', 'x'].includes(str[i])){
      score += 8;
    }
    if (['q', 'z'].includes(str[i])){
      score += 10;
    }
  }
  
return score;
};

//str = 'caziques';
//result = scoreScrabble(str);
//console.log(result);
