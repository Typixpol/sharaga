let mas = new Array()

for (let i =0;i<10;i++){
    mas[i]= Math.floor(Math.random()*100)
}

console.log(mas)
 let max =mas [0]
 for (let i =1;i<mas.length;i++){
    if (mas[i]>max){
 max = mas[i] 
    }
} console.log(max)
