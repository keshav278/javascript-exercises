const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let sum=0;
  arr.forEach((item)=>{sum+=item;});
  return sum;
};

const multiply = function(arr) {
    let prod=1;
    arr.forEach((item)=>{prod*=item;});
    return prod;
};

const power = function(a,b) {
	 let pow=1;
   while(b!=0){
     pow*=a;
     --b;
   }
   return pow;
};

const factorial = function(a) {
	if(a==0)
    return 1;
  else
    return a*factorial(a-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
