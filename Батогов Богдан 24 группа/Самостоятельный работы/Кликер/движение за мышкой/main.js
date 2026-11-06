let ctx = document.getElementById("canvas").getContext(`2d`)

let can_w = 500
let can_h = 500

let DotX = can_w/2
let DotY = can_h/2

let mouseX = 0
let mouseY = 0

function drawPoint(x,y){
    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.arc(x , y , 10 ,0, 2 * Math.PI)
    ctx.fill()
}

function drawBG() {
    ctx.beginPath()
    ctx.fillStyle = `darkblue`
    ctx.rect(0, 0, 500, 500)
    ctx.fill()
}

function drawCB(mouseX,mouseY) {
      ctx.beginPath()
    ctx.fillStyle = `white`
    ctx.arc(mouseX, mouseY , 10 ,0, 2 * Math.PI)
    ctx.fill()
}

 window.addEventListener('mousemove', (e)=>{ 
        mouseX = e.clientX
        mouseY = e.clientY
 }
)

function follow(){

    drawBG()
    DotX += (mouseX - DotX) * 0.01
    DotY += (mouseY - DotY) * 0.01

    drawPoint(DotX,DotY)
    drawCB(mouseX,mouseY)
    requestAnimationFrame(follow)
}

follow()

