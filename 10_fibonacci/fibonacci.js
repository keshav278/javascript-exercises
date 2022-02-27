const fibonacci = function(num) {
     let numm=Number(num);
     if(numm===1)
      return 1;
     else if(numm===2)
      return 1;
     else if(numm<=0)
      return "OOPS";  
     else
      return fibonacci(numm-1)+fibonacci(numm-2); 

};

// Do not edit below this line
module.exports = fibonacci;
