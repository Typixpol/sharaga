let H = (Math.floor(Math.random()* 10))
let W = (Math.floor(Math.random() * 10))
let S = (H * W)
let P = (H*2)+(W*2)
console.log(S)
console.log(P)

if(W==H){
    console.log("квадрат")
    console.log("плошадь квадрата " + S)
console.log("переметр квадрата " + P)
}else{
    console.log("прямоугольник")
    console.log("плошадь прямоугольника " + S)
console.log("переметр прямоугольника " + P)
}




