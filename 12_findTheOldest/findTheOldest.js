const findTheOldest = function(list) {
     list.forEach(function(obj){
         if(!("yearOfDeath" in obj)){
             obj.yearOfDeath= new Date().getFullYear();
         }              
     }
     );
     let maxAge = list.reduce((maxx,obj)=>Math.max(maxx,(obj.yearOfDeath-obj.yearOfBirth)),0);
     let oldGuy = list.find(function(obj){
         let age = obj.yearOfDeath-obj.yearOfBirth;
         return age==maxAge;
     });
     return oldGuy;
     
    }
// Do not edit below this line
module.exports = findTheOldest;
