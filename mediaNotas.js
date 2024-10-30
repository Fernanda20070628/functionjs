function media3Valores(v1, v2, v3){
    let media = (v1 + v2 + v3)/3
    return media
}

function leValor(){
    let valor = parseFloat(prompt("Digite numero: "))
    return valor
}

let a = leValor()
let b = leValor()
let c = leValor()

let resultadoMedia = media3Valores(a,b,c)
console.log("Media é: " + resultadoMedia)
