let Num1 = 100
let Num2 = 200
let znak = "/"
function aaa (z,x,c) { 
    switch(c){
        case "+":
            return z+x
        break;
        
        case "-":
            return z-x
        break;
        
        case "*":
            return z*x
        break;

        case "/":
            return z/x
        break;
        
    }


    return
}
console.log(aaa(Num1,Num2,znak))
