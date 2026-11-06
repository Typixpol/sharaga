let canvas_1 = document.getElementById("canvas")
let ctx = canvas_1.getContext("2d")

let can_w = 600
let can_h = 600

let scale = 20
let scaleCol =60

let stolb = can_w/scale
let strok = can_h/scale

let color = 'white'
let color1 = 'light grey'


for(let i= 0 ; i<=stolb;i++){
let x = i*scale
let start = 0 
let finish = 600
    ctx.beginPath()
    ctx.strokeStyle = color1
ctx.moveTo(x, start)
ctx.lineTo(x, finish)
ctx.stroke()
}
for(let i= 0 ; i<=strok;i++){
let x = i*scale
let start = 0 
let finish = 600
    ctx.beginPath()
    ctx.strokeStyle = color1
ctx.moveTo(start, x)
ctx.lineTo(finish, x)
ctx.stroke()
}
for(let i= 0 ; i<strok;i++){
let x = i*scaleCol
let start = 700 
let finish = 900
    ctx.beginPath()
    ctx.strokeStyle = color1
ctx.moveTo(start, x)
ctx.lineTo(finish, x)
ctx.stroke()
}

 ctx.beginPath()
    ctx.strokeStyle = color1
ctx.moveTo(700,0)
ctx.lineTo(700,600)
ctx.stroke()

 ctx.beginPath()
    ctx.strokeStyle = color1
ctx.moveTo(900,0)
ctx.lineTo(900,600)
ctx.stroke()

ctx.beginPath()
    ctx.strokeStyle = color1
ctx.moveTo(800,0)
ctx.lineTo(800,600)
ctx.stroke()

    
    // === СТОЛБЕЦ 1 (X = 701): Тёплые оттенки (Красный -> Розовый -> Оранжевый -> Жёлтый) ===
ctx.fillStyle = "red";
ctx.fillRect(701, 1, 98, 58);

ctx.fillStyle = "Coral";
ctx.fillRect(701, 61, 98, 58);

ctx.fillStyle = "pink";
ctx.fillRect(701, 121, 98, 58);

ctx.fillStyle = "Magenta";
ctx.fillRect(701, 181, 98, 58);

ctx.fillStyle = "orange";
ctx.fillRect(701, 241, 98, 58);

ctx.fillStyle = "Chocolate";
ctx.fillRect(701, 301, 98, 58);

ctx.fillStyle = "brown";
ctx.fillRect(701, 361, 98, 58);

ctx.fillStyle = "yellow";
ctx.fillRect(701, 421, 98, 58);

ctx.fillStyle = "Ivory";
ctx.fillRect(701, 481, 98, 58);

ctx.fillStyle = "Beige";
ctx.fillRect(701, 541, 98, 58);

//2stolb
ctx.fillStyle = "Lime";
ctx.fillRect(801, 1, 98, 58);

ctx.fillStyle = "green";
ctx.fillRect(801, 61, 98, 58);

ctx.fillStyle = "Olive";
ctx.fillRect(801, 121, 98, 58);

ctx.fillStyle = "Turquoise";
ctx.fillRect(801, 181, 98, 58);

ctx.fillStyle = "Cyan";
ctx.fillRect(801, 241, 98, 58);

ctx.fillStyle = "blue";
ctx.fillRect(801, 301, 98, 58);

ctx.fillStyle = "Indigo";
ctx.fillRect(801, 361, 98, 58);

ctx.fillStyle = "purple";
ctx.fillRect(801, 421, 98, 58);

ctx.fillStyle = "white";
ctx.fillRect(801, 481, 98, 58);

ctx.fillStyle = "black";
ctx.fillRect(801, 541, 98, 58);

function RED(){
    ctx.beginPath()
    ctx.fillStyle= "red"
    ctx.fillRect(x, y, w, h)
    
}
canvas_1.addEventListener('click', (e)=>{ 
let xClick = e.x
let yClick = e.y
if(xClick >=0 && xClick<=600){
let xCell= Math.floor(xClick/scale)
let yCell= Math.floor(yClick/scale)
belP(xCell,yCell)
}
if(xClick >=700 && xClick<=900){
    let xCellCol= Math.floor(xClick/scaleCol)
let yCellCol= Math.floor(yClick/scaleCol)
console.log(xCellCol,yCellCol)

if(xClick >=700 && xClick<=800 && yClick>=0 && yClick<=60){
color = `red`
}
if(xClick >=700 && xClick<=800 && yClick>=60 && yClick<=120){
color = `Coral`
}
if(xClick >=700 && xClick<=800 && yClick>=120 && yClick<=180){
color = `pink`
}
if(xClick >=700 && xClick<=800 && yClick>=180 && yClick<=240){
color = `Magenta`
}
if(xClick >=700 && xClick<=800 && yClick>=240 && yClick<=300){
color = `orange`
}
if(xClick >=700 && xClick<=800 && yClick>300  && yClick<=360){
color = `Chocolate`
}
if(xClick >=700 && xClick<=800 && yClick>=360 && yClick<=420){
color = `brown`
}
if(xClick >=700 && xClick<=800 && yClick>=420 && yClick<=480){
color = `yellow`
}
if(xClick >=700 && xClick<=800 && yClick>=480 && yClick<=540){
color = `Ivory`
}
if(xClick >=700 && xClick<=800 && yClick>=540 && yClick<=600){
color = `Beige`
}
//2
if(xClick >=800 && xClick<=900 && yClick>=0 && yClick<=60){
color = `Lime`
}
if(xClick >=800 && xClick<=900 && yClick>=60 && yClick<=120){
color = `green`
}
if(xClick >=800 && xClick<=900 && yClick>=120 && yClick<=180){
color = `Olive`
}
if(xClick >=800 && xClick<=900 && yClick>=180 && yClick<=240){
color = `Turquoise`
}
if(xClick >=800 && xClick<=900 && yClick>=240 && yClick<=300){
color = `Cyan`
}
if(xClick >=800 && xClick<=900 && yClick>300  && yClick<=360){
color = `blue`
}
if(xClick >=800 && xClick<=900 && yClick>=360 && yClick<=420){
color = `Indigo`
}
if(xClick >=800 && xClick<=900 && yClick>=420 && yClick<=480){
color = `purple`
}
if(xClick >=800 && xClick<=900 && yClick>=480 && yClick<=540){
color = `white`
}
if(xClick >=800 && xClick<=900 && yClick>=540 && yClick<=600){
color = `black`
}
}
}
)
function belP(xCell,yCell){
 ctx.fillStyle = color    
 ctx.beginPath()
ctx.fillRect((xCell*scale)+1, (yCell*scale)+1, 18,18)               
ctx.fill()
ctx.closePath()
console.log(1)
}

canvas_1.addEventListener('contextmenu', (e)=>{ 
e.preventDefault()
let xClick = e.x
let yClick = e.y
if(xClick >=0 && xClick<=600){
let xCell= Math.floor(xClick/scale)
let yCell= Math.floor(yClick/scale)
belP(xCell,yCell)

ctx.fillStyle = `white`    
 ctx.beginPath()
ctx.fillRect((xCell*scale)+1, (yCell*scale)+1, 18,18)               
ctx.fill()
ctx.closePath()
}
}
)


