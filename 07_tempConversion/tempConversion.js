const ftoc = function(temp) {
   let convertedTemp;
   convertedTemp=5*(temp-32)/9;
   if(5*(temp-32)%9===0)
    return convertedTemp;
   else
    return Number(convertedTemp.toFixed(1)); 
};

const ctof = function(temp) {
   let convertedTemp;
   convertedTemp= temp*9/5+32;
   if(temp*9%5===0)
    return convertedTemp;
   else
     return Number(convertedTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
