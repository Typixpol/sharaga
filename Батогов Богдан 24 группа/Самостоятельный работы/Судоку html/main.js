let canvas_1 = document.getElementById("canvas")
let ctx = canvas_1.getContext("2d")

let can_w = 300
let can_h = 300

let scale = 100

let stolb = can_w/scale
let strok = can_h/scale

let color = 'red'

let  numm = 0 
let  num = 0 

ctx.beginPath()
ctx.strokeStyle = "black"
ctx.strokeRect(0, 0, 300, 300)

for(let i= 1 ; i<stolb;i++){
let x = i*scale
let start = 0 
let finish = 300
    ctx.beginPath()
    ctx.strokeStyle = color
ctx.moveTo(x, start)
ctx.lineTo(x, finish)
ctx.stroke()
}
for(let i= 1 ; i<strok;i++){
let x = i*scale
let start = 0 
let finish = 300
    ctx.beginPath()
    ctx.strokeStyle = color
ctx.moveTo(start, x)
ctx.lineTo(finish, x)
ctx.stroke()
}


function logNum(numm) {
num = numm
    console.log(numm); 
}


function belP(xCell,yCell){
   
 ctx.beginPath()
 ctx.fillStyle = `white`  
ctx.fillRect((xCell*scale)+2, (yCell*scale)+2, scale-3, scale-3)               
ctx.fill()
ctx.closePath()
}
 let mass = [[],[],[]]

canvas_1.addEventListener('click', (e)=>{ 
let xClick = e.x
let yClick = e.y
if(xClick >=0 && xClick<=300){
let xCell= Math.floor(xClick/scale)
let yCell= Math.floor(yClick/scale)
console.log(xCell,yCell)
if(num==0){
alert(`выберете число`)
}else{
belP(xCell,yCell)
ctx.beginPath()
ctx.fillStyle= `black`
    ctx.font = '70px Arial'
    ctx.fillText(num,(xCell*scale)+30,(yCell*scale)+75)
ctx.closePath()
mass[yCell][xCell] = num

prov()
}
}
}
)
function prov(){
    let isMatchFound = false

for(let i  = 0 ; i < mass.length;  i++ ){
        for (let j = 0; j < mass[i].length;j++){
            for(let k = j+1 ;k <mass[i].length; k++ ){
                if(mass[i][j]== mass[i][k && mass[i][j]!=0]){
                    isMatchFound = true 
                    console.log("повторяются")
                    break
                }              
                    }
                }
            }
        }
    




