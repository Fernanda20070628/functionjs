let computador = {
    modelo: "",
    processador: "", 
    ram: "",
    hd: ""
};
function preencheDados() {
    computador.modelo = prompt('Digite o modelo do computador:')
    computador.processador = prompt('Digite o processador:')
    computador.ram = prompt('Digite a memória RAM:');
    computador.hd = prompt('Digite a memória secundária:')
}
function imprimeDados() {
    console.log("Modelo:", computador.modelo)
    console.log("Processador:", computador.processador)
    console.log("RAM:", computador.ram)
    console.log("HD:", computador.hd)
}
preencheDados();
imprimeDados();
function atualizaPC() {
    let atualizar = prompt("Deseja atualizar os dados? (sim/não)");
    if (atualizar === "sim") {
        let op = prompt("Qual peça será atualizada? (modelo, processador, ram, hd)");
        if (op === "modelo") {
            computador.modelo = prompt("Digite o novo modelo:");
        } else if (op === "processador") {
            computador.processador = prompt("Digite o novo processador:");
        } else if (op === "ram") {
            computador.ram = prompt("Digite a nova memória RAM:");
        } else if (op === "hd") {
            computador.hd = prompt("Digite a nova memória secundária:");
        } else {
            console.log("Peça inválida.");
        }
    }
}
atualizaPC();
imprimeDados();
