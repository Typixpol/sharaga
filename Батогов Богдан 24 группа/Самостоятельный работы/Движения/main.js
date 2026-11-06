let ctx = document.getElementById("canvas").getContext(`2d`)
drawBG()
let poinstNum = 1000
let can_w = 500
let can_h = 500
let points = new Array()
drawPointsArray()

setInterval(() => {
    drawBG()
    drawAllpoints()
    moveY()
    moveX()
}, 10)

function moveY() {
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        point[1] += point[2] * 1.5;
        if (point[1] > can_h + 10) {
            point[1] = -10;
            point[0] = Math.floor(Math.random() * can_w)
        }
    }
}

function moveX() {
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const speed = point[2];
        point[0] += speed * 0.4; 

        if (point[0] > can_w + 10) {
            point[0] = -10;
        } else if (point[0] < -10) {
            point[0] = can_w + 10;
        }
    }
}


function drawPointsArray() {
    for (let i = 0; i < poinstNum; i++) {
        let pointData = new Array()
        let randomX = Math.floor(Math.random() * can_w)
        let randomY = Math.floor(Math.random() * can_h)
        let randomS = Math.random()
        let randomR = Math.floor(Math.random() * 4) + 2 
        if (randomS < 0.1) {
            randomS = 0.2
        }
        pointData[0] = randomX
        pointData[1] = randomY * -1
        pointData[2] = randomS
        pointData[3] = randomR
        points.push(pointData)
    }
}

function drawAllpoints() {
    for (let i = 0; i < points.length; i++) { 
        const pointX = points[i][0];
        const pointY = points[i][1];
        const speed = points[i][2];
        const razmer = points[i][3]
        drawPoint(pointX, pointY, speed, razmer)
    }
}

function drawBG() {
    ctx.beginPath()
    ctx.fillStyle = `darkblue`
    ctx.rect(0, 0, 500, 500)
    ctx.fill()
}

// Новая функция отрисовки снежинки
function drawPoint(x, y, s, r) {
    ctx.beginPath();
    
    // Задаем цвет в зависимости от скорости (глубины)
    if (s > 0.5) {
        ctx.strokeStyle = `white`;
    } else if (s <= 0.5 && s > 0.3) {
        ctx.strokeStyle = `rgb(180,180,180)`;
    } else {
        ctx.strokeStyle = `rgb(120,120,120)`;
    }
    
    ctx.lineWidth = 1; // Толщина лучей снежинки

    // Рисуем 4 пересекающиеся линии (8-конечная снежинка)
    for (let d = 0; d < 4; d++) {
        let angle = (d * Math.PI) / 4;
        let cos = Math.cos(angle) * r;
        let sin = Math.sin(angle) * r;
        
        ctx.moveTo(x - cos, y - sin);
        ctx.lineTo(x + cos, y + sin);
    }
    
    ctx.stroke();
}
