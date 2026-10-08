let z=[]
let x=[]
let c=[]

for(let i=0;i<3;i++){
    let j = Math.floor(Math.random()*3)+1
if (i==0){
    x[i]=j
}
if (i==1){
    if(j==x[i-1]){
        j++
        if (j==4){j=1}
}
}
}
console.table(x)
