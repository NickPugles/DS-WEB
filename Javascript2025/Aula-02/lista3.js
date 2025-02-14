//Exercício 1
function boasVindas() {
    const nome = document.getElementById('nome').value;
    const mensagem = `Bem-vindo, ${nome}!`;
    document.getElementById('mensagem').innerText = mensagem;
}

//Exercício 2
function verificaParImpar() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = (numero % 2 === 0) ? 'O número é par.' : 'O número é ímpar.';
    document.getElementById('resultadoParImpar').innerText = resultado;
}

//Exercício 3
function convertendoTexto() {
    var texto = document.getElementById("texto").value;
    var textoMaiusculo = texto.toUpperCase();
    document.getElementById("resul").innerText = "Resultado: " + textoMaiusculo;
}

//Exercício 4
function aumentoPercentual() {
    const valor = parseFloat(document.getElementById('valor').value);
    const percentual = parseFloat(document.getElementById('percentagem').value);
    const aumento = valor + (valor * (percentual / 100));
    document.getElementById('resultadoPercentual').innerText = `Valor após o aumento: ${aumento}`;
}

//Exercício 5
function alterarCor() {
    var divCor = document.getElementById('divCor');
    divCor = divCor.style.backgroundColor="grey"
    
}

document.getElementById('MudarCor').addEventListener('click', alterarCor);
