function butt (){
let znak_1 = document.getElementById("znak") 
let otwet = document.getElementById("otw")
let znakk = znak_1.value
let otwetval = otwet.value
otw.innerHTML =""
for(let i = 1 ;i<11; i++ ){
if(znakk == 0){
       otw.innerHTML ="введите число"   
       break
}else{
   otw.innerHTML += Number(znakk) + `x`+ i+ `=`+ znakk * i + `<br>`
}
}
//  console.log(1)
}
