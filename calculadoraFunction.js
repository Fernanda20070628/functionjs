function menu(){
    let opcao= prompt("Escola uma das opções a seguir: Adição, Subtração, Multiplicação ou Divisão")
    return opcao
}
function soma (v1,v2){
    let result=v1+v2
    return result
}
function subtracao (v1,v2){
    let result=v1-v2
    return result
}
function multiplicacao (v1,v2){
    let result=v1*v2
    return result
}
function divisao(v1,v2){
    let result=v1/v2
    return result
}
let a=parseFloat(prompt("Digite o primeiro valor:"))
let conta=menu()
let b=parseFloat(prompt("Digite o segundo valor"))

if(conta=="Adição"){
    let resultado=soma(a,b)
    console.log(`${a} + ${b} = ${resultado}`)
}
else if(conta=="Subtração"){
    let resultado=subtracao(a,b)
    console.log(`${a} - ${b} = ${resultado}`)
}
else if(conta=="Multiplicação"){
    let resultado=multiplicacao(a,b)
    console.log(`${a} * ${b} = ${resultado}`)
}
else if(conta=="Divisão"&&b!=0){
    let resultado=divisao(a,b)
    console.log(`${a} / ${b} = ${resultado}`)
}
else {
    console.log("Essa opção não é disponível, tente novamente")
}

