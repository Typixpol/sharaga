let canvas_1 = document.getElementById("canvas")
let ctx = canvas_1.getContext("2d")

let can_w = 600
let can_h = 600

let scale = 200

let stolb = can_w/scale
let stok = can_h/scale
let hod = true



for(let i= 0 ; i<=stolb;i++){
let x = i*scale
let start = 0 
let finish = 600
    ctx.beginPath()
    ctx.strokeStyle = 'red'
ctx.moveTo(x, start)
ctx.lineTo(x, finish)
ctx.stroke()

}

for(let i= 0 ; i<=stolb;i++){
let x = i*scale
let start = 0 
let finish = 600
    ctx.beginPath()
    ctx.strokeStyle = 'black'
ctx.moveTo(start, x)
ctx.lineTo(finish, x)
ctx.stroke()

}


function X(x,y){
xCube = x * scale 
yCube = y * scale 
    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.moveTo(xCube, yCube)
    ctx.lineTo(xCube+scale, yCube+scale)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.moveTo(xCube+ scale, yCube)
    ctx.lineTo(xCube, yCube+scale)
    ctx.stroke()

}


function o(x,y){
xArk = x*scale+(scale/2)
yArk = y*scale+(scale/2)
    ctx.beginPath()
    ctx.strokeStyle = 'blue'
    ctx.arc(xArk, yArk, scale/2, 0, Math.PI * 2); 
    ctx.stroke()
  
}
canvas_1.addEventListener('click', (e)=>{
console.log(e.x,e.y) 
let xClick = e.x
let yClick = e.y

let xCell= Math.floor(xClick/scale)
let yCell= Math.floor(yClick/scale)
if(hod){
X(xCell,yCell)
hod= false
}else{
    o(xCell,yCell)
    hod = true
}
}
)