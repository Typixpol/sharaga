function butt (){
let name_1 = document.getElementById("name") 
let age_1 = document.getElementById("age")
let pass_1 = document.getElementById("pass")
let rep_1 = document.getElementById("rep")
let otwet = document.getElementById("otw")
let nameval = name_1.value
let ageval = age_1.value
let passval = pass_1.value
let repval = rep_1.value
let answer = 0 

otw.innerHTML =""

if(nameval==0){

    otw.innerHTML ="введите имя"

}else{

    answer++

if(nameval.lenght>5){
console.log(nameval.lenght) 
otw.innerHTML ="слишком короткое имя"

}else{
 
    answer++

}if(ageval<18){

    otw.innerHTML ="нужен возраст больше 18 лет"

}else{
 
    answer++
 
 
if(passval==repval){
    otw.innerHTML ="пароль не совпадает"
    
}else{
    answer++


if(answer==4){
  
    otw.innerHTML ="вы успешно зарегестрированы"

}
}
}
}console.log(answer)
}
