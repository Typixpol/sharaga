let ctx = document.getElementById("canvas").getContext(`2d`)

let can_w = 500
let can_h = 500

let DotX = can_w/2
let DotY = can_h/2
let DotX1 = can_w/2
let DotY1 = can_h/2
let radius = 10

let ostX = (Math.random()*-0.2)*10
let ostY = (Math.random()*-0.2)*10

let ostX1 = (Math.random()*0.3)*10
let ostY1 = (Math.random()*0.3)*10

function drawPoint(x,y){
    ctx.beginPath()
    ctx.fillStyle = "yellow"
    ctx.arc(x , y , radius ,0, 2 * Math.PI)
    ctx.fill()
}
function drawPoint1(x,y){
    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.arc(x , y , radius ,0, 2 * Math.PI)
    ctx.fill()
}

function drawBG() {
    ctx.beginPath()
    ctx.fillStyle = `darkblue`
    ctx.rect(0, 0, 500, 500)
    ctx.fill()
}



function follow(){
    drawBG()
  
    DotX += ostX
    DotY += ostY
  if(DotX +radius > can_w){
    ostX = -ostX
    DotX = can_w-radius
  }else if(DotX - radius<0){
    ostX = -ostX
    DotX =radius
  }
    if(DotY + radius > can_h){
    ostY = -ostY
    DotY = can_h-radius
  }else if(DotY - radius<0){
    ostY = -ostY
    DotY =radius
  }

      DotX1 += ostX1
    DotY1 += ostY1
  if(DotX1 +radius > can_w){
    ostX1 = -ostX1
    DotX1 = can_w-radius
  }else if(DotX1 - radius<0){
    ostX1 = -ostX1
    DotX1 =radius
  }
    if(DotY1 + radius > can_h){
    ostY1 = -ostY1
    DotY1 = can_h-radius
  }else if(DotY1 - radius<0){
    ostY1 = -ostY1
    DotY1 =radius
  }

    drawPoint1(DotX1,DotY1)
    drawPoint(DotX,DotY)
  
    requestAnimationFrame(follow)
}

follow()
