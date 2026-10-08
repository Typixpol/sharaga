let input = document.getElementById("char")

let pop = document.getElementById("pop")

let word = "вода"
let pops = 10
let isGame = true
pop.innerHTML=`кол-во попыток ${pops}`

function butt(){
if(isGame){
    let inputval = input.value
    if(inputval!=""){
        let text_lenght = inputval.length 
        if (text_lenght == 1){
            let found = false
            for(let i = 0;i<4;i++){
               let symbol = word[i]
               if(symbol == inputval){
                document.getElementById(`bk${ i + 1 }`).innerHTML= inputval
               found= true
            }
            }
            if(found==false){
                pops--
                pop.innerHTML=`кол-во попыток ${pops}`
            }
            if(pops==0){
                isGame = false
            }
        }else{
            alert(`только 1 символ`)
        }
    }else{
        alert(`поле пустое `)
}
}else{
    alert(`игра окончена`)
}
}
