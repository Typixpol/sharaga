let ctx = document.getElementById("canvas").getContext(`2d`)

let gameFlag = true
let isFalling = false
let isMoving = true
let isFirst = true

let can_w = 600
let can_h = 800

let blocks = new Array()

let x = 0
let y = 10

let scale = 100

let speedX = 1
let speedX_cont = speedX
let speedY = 5
let bottomLine = can_h - scale

let r,g,b
getRandomColors()


function getRandomColors(){
    r =Math.floor(Math.random()*255)
    g =Math.floor(Math.random()*255)
    b =Math.floor(Math.random()*255)
}
function drawBG() {
    ctx.beginPath()
    ctx.fillStyle =`rgb(86, 216, 255)`
    ctx.rect(0, 0, can_w, can_h)
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle =`rgb(12, 204, 60)` 
    ctx.rect(0,625,600,200)
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle = `rgb(236, 223, 37)`
    ctx.arc(555 , 45 , 75 ,0, 2 * Math.PI)
    ctx.fill()
    
    ctx.beginPath()
    ctx.strokeStyle = `black`
    ctx.rect(0, 0, can_w, can_h)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = `black`
    ctx.arc(555 , 45 , 75 ,0, 2 * Math.PI)
    ctx.stroke()
}

function drawCube() {
    ctx.beginPath()
    ctx.fillStyle =`rgb(${r},${g},${b})`
    ctx.rect(x, y, scale, scale)
    ctx.fill()
    ctx.rect(x, y, scale, scale)
    ctx.stroke()

}

function follow(){
    if(gameFlag){
        drawBG()
    drawCube()
    drawOldBlocks()
    if(isMoving){
        x+=speedX
        if(x> can_w - scale){
            speedX *= -1
        }
        if(x<0){
            speedX *= -1
        }
    }
    
    if(isFalling){
        speedX_cont = speedX
        isMoving = false
        fall()
    }
    }
    
    requestAnimationFrame(follow)
}

follow()


function fall(){
    if(y < bottomLine){
        y += speedY
    }
    if(y >= bottomLine){
        isFalling = false
        bottomLine -= scale
        if(isFirst === false){
            check(x)
        }
        blocks.push([x,y,r,g,b])
        getRandomColors()
        
        isMoving = true
        x = 0
        y = 10
        isFirst = false
        
    }
}

function drawOldBlocks(){
    if(blocks.length > 0){
        for (let i = 0; i < blocks.length; i++) {
            let blockData = blocks[i]
            ctx.beginPath()
            ctx.fillStyle =`rgb(${blockData[2]},${blockData[3]},${blockData[4]})`
            ctx.rect(blockData[0], blockData[1], scale, scale)
            ctx.fill()
            ctx.rect(blockData[0], blockData[1], scale, scale)
            ctx.stroke()
        }
    }
}

window.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        if(!isFalling){
            isFalling = true
        }
    }
})

function check(blockX){
    let oldX_start = blocks[blocks.length - 1][0]
    let old_center = oldX_start + (scale/2)

    let oldX_end = oldX_start + scale
    console.log(blockX < oldX_start)
    console.log(blockX,oldX_start)

    if(blockX < oldX_start && blockX > oldX_end){
        if(blockX > old_center){
            console.log(1)
            gameFlag = false
        }
    }
    if(blockX + scale < oldX_start && blockX > oldX_end){
        if(blockX + scale > old_center){
            console.log(2)
            gameFlag = false
        }
    }



}