let sorteioJaExecutado = false; // variável global para controlar

function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let resultado = document.getElementById("resultado");
    let sorteados = [];
    let numero;
    
    if (quantidadeDeNumeros>=1 && de>=1 && ate>=1) {
        for(let i = 0; i < quantidadeDeNumeros; i++){
        numero = numeroAleatorio(de,ate);

        while (sorteados.includes(numero)){
            numero = numeroAleatorio(de,ate);
        }

        sorteados.push(numero);
        }

        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
        alterarCorDoBotap();
        if (!sorteioJaExecutado) {
            alterarCorDoBotap();         // só chama na primeira vez
            sorteioJaExecutado = true;  // marca como já executado
        }
       
    } else {
    alert('preencha os campos corretamente');
    }
}
function numeroAleatorio (min,max){
    return Math.floor (Math.random() * (max-min+1)) + min;
    }

function alterarCorDoBotap() {
    let botao = document.getElementById("btn-reiniciar");
if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
    
} else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
}
}

function reiniciar() {
    document.getElementById("quantidade").value ="";
    document.getElementById("de").value ="";
    document.getElementById("ate").value ="";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarCorDoBotap();
    sorteioJaExecutado = false; // reseta a flag
}