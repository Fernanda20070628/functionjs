function converteMoeda(valor,cotacao){
    conversao= valor*cotacao
    return conversao
}
    let moeda=prompt("Digite a moeda escolhida:")
    let valor1=parseFloat(prompt("Digite o valor desejado:"))
    let cotacao1=parseFloat(prompt("Digite a cotação da moeda escolhida anteriormente:"))
let dinheiro=converteMoeda(valor1,cotacao1)
console.log(`R$ ${valor1} equivale à $ ${dinheiro} em${moeda}`)
