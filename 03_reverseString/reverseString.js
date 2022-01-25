const reverseString = function(str) {
   let arr=Array.from(str);
   arr.reverse();
   let reversedText=arr.join('');
   return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
