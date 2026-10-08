let  money =0
let moneyOnClick = 1
let passiveInCome = 0   
let klik =0
let obmon = 0
let bust = 0 
let bust_bonus =1


let upd_1_num = 0 
let upd_1_income = 1 
let upd_1_cost = 5
let upd_1_cost_inc = 1.2  
let upd_1_mnc = 1

let upd_2_num = 0 
let upd_2_income = 5
let upd_2_cost = 50
let upd_2_cost_inc = 1.1  
let upd_2_mnc = 5

let upd_3_num = 0 
let upd_3_income = 20
let upd_3_cost = 200
let upd_3_cost_inc = 1.01  
let upd_3_mnc = 10

let supd_1_num = 0 
let supd_1_income = 50
let supd_1_cost = 1000
let supd_1_cost_inc = 1.2  
let supd_1_mnc = 100

let supd_2_num = 0 
let supd_2_income = 100
let supd_2_cost = 5000
let supd_2_cost_inc = 1.1  
let supd_2_mnc = 500

let supd_3_num = 0 
let supd_3_income =500
let supd_3_cost = 10000
let supd_3_cost_inc = 1.01  
let supd_3_mnc = 1000



 update()
 

function update(){
    let mon = document.getElementById("info")
let upd_1 = document.getElementById("upd1")
let upd_2 = document.getElementById("upd2")
let upd_3 = document.getElementById("upd3")
let advent_1 = document.getElementById("adven1")
let advent_2 = document.getElementById("adven2")
let advent_3 = document.getElementById("adven3")
 let buster = document.getElementById("bust")

upd_1.innerHTML = `Улучшение 1. Стоимость - ${upd_1_cost}$`
upd_2.innerHTML = `Улучшение 2. Стоимость - ${upd_2_cost}$`
upd_3.innerHTML = `Улучшение 3. Стоимость - ${upd_3_cost}$`

advent_1.innerHTML = `СУПЕР Улучшение 1. <br> 
Условие: Улучшений < 15 1LVL <br> Всего заработаных $ < 10000$ <br> Стоимость - ${supd_1_cost}$`
advent_2.innerHTML = `СУПЕР Улучшение 2. <br> 
Условие: Улучшений < 25 2LVL <br> Всего заработаных $ < 50000$ <br> Стоимость - ${supd_2_cost}$`
advent_3.innerHTML = `СУПЕР Улучшение 3. <br> 
Условие: Улучшений < 30 3LVL <br> Всего заработаных $ < 100000$ <br> Стоимость - ${supd_3_cost}$`
res.innerHTML = `СБРОС <br>ВСЕГО <br>ПРОГРЕССА <br> С НЕБОЛЬШИМ <br>БУСТОМ `
info.innerHTML = `
Кол-во: ${money}$<br>
Денег в сек: ${passiveInCome}$<br>
$ за клик: ${moneyOnClick}$<br>
кликов: ${klik}<br>
Всего заработано:${obmon}$<br>
Шкала БУСТА:${bust}/1000<br>
Кол-во: Улучшение.1 LVL:${upd_1_num}<br>
Кол-во: Улучшение.2 LVL:${upd_2_num}<br>
Кол-во: Улучшение.3 LVL:${upd_3_num}<br>

Кол-во: Улучшение.1 LVL:${supd_1_num}<br>
Кол-во: Улучшение.2 LVL:${supd_2_num}<br>
Кол-во: Улучшение.3 LVL:${supd_3_num}<br>
 
<br><br>
`
}
function tap(){
money =  money + moneyOnClick
obmon = obmon + moneyOnClick
klik++

update()
zklik()

}
function upd11 (){
    if(money<upd_1_cost){
        alert(`недостаточно средств`)
    }else{
    money = money - upd_1_cost
     moneyOnClick =  moneyOnClick + upd_1_mnc 
    upd_1_num++
    upd_1_cost = Math.floor(upd_1_cost * upd_1_cost_inc)   
    update()
    update2()
}
}
function upd22 (){
    if(money<upd_2_cost){ 
        alert(`недостаточно средств`)
            }else{
    money = money - upd_2_cost
    moneyOnClick =  moneyOnClick + upd_2_mnc 
    upd_2_num++
    upd_2_cost = Math.floor(upd_2_cost * upd_2_cost_inc)
    update()
    update2()
    }
}
function upd33 (){
    if(money<upd_3_cost){
        alert(`недостаточно средств`)
    }else{
    money = money - upd_3_cost
     moneyOnClick =  moneyOnClick + upd_3_mnc  
    upd_3_num++
    upd_3_cost = Math.floor(upd_3_cost * upd_3_cost_inc)
    update()
    update2()
    }
}

function update2(){
    passiveInCome = (upd_1_num*upd_1_income) + (upd_2_num*upd_2_income) + (upd_3_num*upd_3_income)+(supd_1_num*supd_1_income)+(supd_2_num*supd_2_income)+(supd_3_num*supd_3_income)   
 }
 setInterval (()=>{
        money = money + passiveInCome
        obmon = obmon + passiveInCome
        if(bust < 1000){
            bust += bust_bonus * 10
        }else{
            bust = 1000
        }
    update()
 },1000)


function zklik(){
if(klik % 100==0){
moneyOnClick = moneyOnClick * 2
}
}

function adven11(){
    if(money>=supd_1_cost){
         if(upd_1_num >= 15){
            if(obmon>10000){        
    money = money - supd_1_cost
     moneyOnClick =  moneyOnClick + supd_1_mnc 
    supd_1_num++
    supd_1_cost = Math.floor(supd_1_cost * supd_1_cost_inc)
    update()
    update2()
}else{
     alert(`всего заработано < 10000`)
}
         }else{
            alert(`мало улучшений`)
    }
}else{
       alert(`недостаточно средств`)
}
}
function adven22(){
    if(money>=supd_2_cost){
         if(upd_2_num >= 25){
            if(obmon>50000){        
    money = money - supd_2_cost
     moneyOnClick =  moneyOnClick + supd_2_mnc 
    supd_2_num++
    supd_2_cost = Math.floor(supd_2_cost * supd_2_cost_inc)
    update()
    update2()
}else{
     alert(`всего заработано < 50000`)
}
         }else{
            alert(`мало улучшений`)
    }
}else{
       alert(`недостаточно средств`)
}
}

function adven33(){
    if(money>=supd_3_cost){
         if(upd_3_num >= 30){
            if(obmon>100000){        
    money = money - supd_3_cost
     moneyOnClick =  moneyOnClick + supd_3_mnc 
    supd_3_num++
    supd_3_cost = Math.floor(supd_3_cost * supd_3_cost_inc)
    update()
    update2()
}else{
     alert(`всего заработано < 100000`)
}
         }else{
            alert(`мало улучшений`)
    }
}else{
       alert(`недостаточно средств`)
}
}

function reset(){
    if(money >= 1000000){
 money = 0 
moneyOnClick = 10
passiveInCome = 0   
klik = 0
obmon = 0
bust = 0 
bust_bonus = 0

upd_1_num = 0 
upd_1_income = 10 
upd_1_cost = 50
upd_1_cost_inc = 1.3  
upd_1_mnc = 3

upd_2_num = 0 
upd_2_income = 50
upd_2_cost = 500
upd_2_cost_inc = 1.2  
upd_2_mnc = 10

upd_3_num = 0 
upd_3_income = 200
upd_3_cost = 2000
upd_3_cost_inc = 1.1  
upd_3_mnc = 25

supd_1_num = 0 
supd_1_income = 500
supd_1_cost = 10000
supd_1_cost_inc = 1.3  
supd_1_mnc = 1000

supd_2_num = 0 
supd_2_income = 1000
supd_2_cost = 50000
supd_2_cost_inc = 1.1  
supd_2_mnc = 2500

supd_3_num = 0 
supd_3_income =5000
supd_3_cost = 100000
supd_3_cost_inc = 1.01  
supd_3_mnc = 5000

}else{
  alert(`денег не хватает`)  
} 
}



function bust1(){
    if(bust==1000){
money += 100000 
bust = 0
    }
}