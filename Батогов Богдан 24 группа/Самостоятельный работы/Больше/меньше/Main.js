let rand_num = Math.floor(Math.random()*10)
let answer = 5
function butt(){
     let pop_1 = document.getElementById("pop")
let random = document.getElementById("rand") 
let num_1 = document.getElementById("num")
let otwet = document.getElementById("otw")
let numval = num_1.value

random.innerHTML = rand_num
if (numval==rand_num){
    otwet.innerHTML="YES" 

 }else{
if (numval>rand_num){
otwet.innerHTML ="меньше"
}else{
    otwet.innerHTML ="больше"
}
}
pop_1.innerHTML = "кол-во"+answer
answer--
if (answer<0){
    pop_1.innerHTML ="ВЫ ПРОИГРАЛИ" 
    
} 
if (numval==rand_num){
    pop_1.innerHTML=""
}
}