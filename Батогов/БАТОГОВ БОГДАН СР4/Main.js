let z = "богдан"
let x = 5
console.log(" привет меня зовут "+z+" мне " + x + " мне " + x )

let dol = 11
let  rub = 84
 let itog = dol * rub
 console.log(itog)


let H = 13
let W = 25
 let  P = W*2 + H*2 
  console.log(P)

let q = 27
let a = 122
let S = a * q
 console.log(S)


 let e = 100
  let r = 33 
  let d3l = e%r
   console.log(d3l)
    console.log("       след задачи      ")

// part  2
let aa = 10
let ss  = aa % 2
if (ss>0){
     console.log(aa + " нечетное")

}else{
         console.log(aa + " четное")

}

let god = 20

if (god>18){
     console.log("True")

}else{
         console.log( "false ")

}


let pp = 100
let oo  = 110
if (pp>oo){
     console.log(pp +"больше")

}else{
         console.log(oo + "больше")

}


// 9 задине 
let os = 2
if (os==2){
    console.log("неуд")
}
if (os==3){
    console.log("удов")
}
if (os==4){
    console.log("хор")
}
if (os==5){
    console.log("отл")
}



//10
let sss =-7
if (sss==0){
    console.log("ровно нулю")
}
if (sss>0){
    console.log("больше нуля")
}
if (sss<0){
    console.log("меньше нуля")
}
console.log("       след задачи      ")




//11
for(let i = 1 ;i<11;i++){
    console.log(i)
}



//12

console.log("       след задачa      ")
for(let i = 5 ;i>0;i--){
    console.log(i)}



//13
    console.log("       след задачa      ")
let  iiii = 0 
for(let i = 1 ;i<11;i++){
    iiii += i
}
 console.log(iiii)




 //14
    console.log("       след задачa      ")

    for(let i = 1;i<11;i++){
        console.log("5" +"x"+ i +"=" + (5*i)  )
    }




    //15  
 console.log("       след задачa      ")
for(let i = 1 ;i<21;i++){
if(i==2){
    console.log(i)
}if(i==4){
    console.log(i)
}if(i==6){
    console.log(i)
}if(i==8){
    console.log(i)
}if(i==10){
    console.log(i)
}if(i==12){
    console.log(i)
}if(i==14){
    console.log(i)
}if(i==16){
    console.log(i)
}if(i==18){
    console.log(i)
}if(i==20){
    console.log(i)
}
}



//16
   console.log("       след задачa      ")
   let xxxx = [1,2,3,4,5]
console.log(xxxx[0])
console.log(xxxx[4])




//17
let ppp= []
ppp.push("яблоки")
ppp.push("ананас")
ppp.push("дуриан")
console.table(ppp)

//18

//19
let text="ipojlknlnn,iefoieh,JavaScript"
let find="JavaScript"
let znakNum= text.length
let answer = 1
for(let i=0;i<znakNum;i++){    
  let znak = text[i] 
   if(znak==find){
answer++
 }
}
console.log (" из " + znakNum + " символов  " + answer + " слово "+ find )

//20

//21
let ch = "aaaabbbcccceeeeee"
let ch1 =" " 
for (let i = 0;i<ch.length;i++){
    for(let j = 0; j <ch.length ; j++){
 if (i==j){
    if(ch[i]!==ch[i-1]){
        ch1+=ch[i]
    } 
    }
}
}
console.log(ch1)



//22
let dmas = [12,54,23,45,453,35,6,4,344,567,66,33]
let vvv = new Array()
let www = new Array()
for(let i= 0; i < dmas.length;i++){
if(dmas[i]%2==0){
    vvv.push(dmas[i])
}else{
    www.push(dmas[i])
}

}
 console.log("чет " + vvv)
 console.log("не чет " + www)




//23
let opo = []
for(let i = 0;i<100;i++){
    opo.push(Math.floor(Math.random()*100))
}

console.table(opo[24])
console.table(opo[49])
console.table(opo[74])
console.table(opo[99])
