let x = []
 for (let i = 0;i<5;i++){
    let z = []
 for (let i = 0;i<4;i++){
    z[i]= Math.floor(Math.random()*10)+1

  x.push(z)
 }
 } 

 console.table(x)