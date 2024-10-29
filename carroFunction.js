let velocidade = 0;
let funcionando = false;

function menu() {
    let opcao = console.log("Escolha uma das opções a seguir:\n Dar a Partida\n Acelerar\n Diminuir a Velocidade\n Desligar o carro\n Estado Atual do Carro");
    return opcao;
}

function darPartida() {
    if (true=!funcionando) {
        funcionando = true;
        console.log("O carro está ligado.");
    }
}

function acelerar() {
    if (funcionando=true) {
        velocidade += 10;
        console.log(`Velocidade atual: ${velocidade} km/h.`);
    }
}
function diminuirVelocidade() {
    if (funcionando=true) {
        if (velocidade >= 10) {
            velocidade -= 10;
            console.log(`Velocidade atual: ${velocidade} km/h.`);
        } 
    } 
}

function desligarCarro() {
    if (funcionando && velocidade === 0) {
        funcionando = false;
        console.log("Carro desligado.");
    } 
}

function estadoAtual() {
    let marcha;
    if (velocidade >= 10 && velocidade <= 20) {
        marcha = 1;
    } else if (velocidade >= 21 && velocidade <= 30) {
        marcha = 2;
    } else if (velocidade >= 31 && velocidade <= 40) {
        marcha = 3;
    } else if (velocidade >= 41 && velocidade <= 60) {
        marcha = 4;
    } else if (velocidade > 60) {
        marcha = 5;
    } else {
        marcha = 0;
    }
    console.log(`Velocidade atual: ${velocidade} km/h. Marcha: ${marcha}.`);
}

let opcao = menu();
    
    if (opcao=="1") {
        darPartida();
    }       
        else if (opcao=="2") {
            acelerar();
        }    
            else if (opcao=="3") {
                diminuirVelocidade();
            }   
                else if (opcao=="4") {
                    desligarCarro();
                }
                    else if (opcao==5) {
                        estadoAtual();
                    }   

