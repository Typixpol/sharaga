function Make(){
    let target = document.getElementById("div1")
    let type = document.getElementById("type")
    let el = get(type.value)
    el.id = `new_element` 
    el.innerHTML = `Default text <br>`
    el.style.backgroundColor=`brown`
    el.style.color= `white`
    el.style.padding= `0.5em 1em`
    el.style.borderRadius = `10px`
    el.style.borderColor = `blue`
    el.style.margin = `1em`
    target.append(el)
    
}
function get(type){
    let element = document.createElement(type)
    if(type==  `a`){
        element.href=`#`
    }
    return element
}