const palindromes = function (string) {
        string=string.toLowerCase();
        let seq=Array.from(string);
        let s=[];
        seq.forEach((char)=>{
           if(char>='a'&&char<='z'){
               s.push(char);
           }
        });
        let palin=[];
        for(char of s){
            palin.push(char);
        }
        s.reverse();
        for(let i=0;i<s.length;i++){
            if(s[i]!=palin[i])
             return false;
        }
        return true;
    };        

// Do not edit below this line
module.exports = palindromes;
