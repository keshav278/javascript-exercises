const removeFromArray = function(array,...toDelete) {
   for(let element of toDelete){
       let index=array.indexOf(element);
       if(index===-1)
        continue;
       else
        {
            array.splice(index,1);
        }

   }
   return array;
};

// Do not edit below this line
module.exports = removeFromArray;
