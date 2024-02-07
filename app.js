let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.22});

}
function mensagemInicial(){
exibirTextoNaTela('h1','Jogo do número Secreto');
exibirTextoNaTela('p', ` Escolha um número entre 1 e ${numeroLimite}`);
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemtentativa = `você descobriu o nùmero secreto com ${tentativas} ${palavraTentativa}`;
    document.getElementById('reiniciar').removeAttribute('disabled');

    if( chute == numeroSecreto){
            exibirTextoNaTela('h1', 'PARABÉNS!!!');
            exibirTextoNaTela('p', mensagemtentativa);
        }else{
            if (chute> numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p','O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
   let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

   if ( quantidadeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){ 
        return gerarNumeroAleatorio();
        // o metodo includes vai verificar se na lista de numeros sorteados tem o  numero que acabou de ser sorteado, se sim , entao ele vai gerar outro numero.

    } else { 
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;

        // caso nao, ele continuara com o numero que foi gerado e adicionar o mesmo na lista para nao ser sorteado novamente
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function novoJogo(){
    numeroSecreto= gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}