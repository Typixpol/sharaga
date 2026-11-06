let text="gjgjgjgjgjgjgj"
let find="g"
let znakNum= text.length
let answer = 0
for(let i=0;i<znakNum;i++){    
  let znak = text[i] 
   if(znak==find){
answer++
 }
}
console.log (" из " + znakNum + " символов " + answer + " символов "+ find )