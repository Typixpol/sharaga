let mass = new Array()
for(let i =0 ;i<4;i++){
mass[i]-[]
for (let q=0;q<4;q++){
mass[i][q]=(Math.floor(Math.random()*100))

}
}
let mass1=mass.length
let mass2= mass[0].length
let mass3 = 0
for(let i =0 ;i<mass1;i++){
            for(let q =0 ;q<mass2;q++){
mass3 = mass3+mass[i][q]
            }
}
console.table(mass3)