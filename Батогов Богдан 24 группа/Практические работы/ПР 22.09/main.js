let x = []
let s = 0
for(let i = 1;i<4;i++){

    x[i]=[]
    for(let e = 1;e<4;e++){
        let h = Math.floor(Math.random()*3)+1
             x[i][e] = h
    s =s+h
    
    
    }

}


console.table(x)    