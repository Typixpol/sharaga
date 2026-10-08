let z = "казак"
let x = z.length
let flag = true
for(let i = 0;i<Math.floor(x/2);i++){
if(z[i]!==z[x-1-i]){
flag = false
break
}  
}
if(flag){
console.log( z + " является палиндромом")
}else{
console.log(z + " не является палиндромом")
}
