// 1 atividade
function verificaIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = (idade >= 18) ? 'Você é maior de idade.' : 'Você é menor de idade.';
    document.getElementById('resultadoIdade').innerText = resultado;
}

//2 atividade
function verificaNumero() {
    const numero = parseFloat(document.getElementById('numero').value);
    let resultado;
    if (numero > 0) {
        resultado = 'O número é positivo.';
    } else if (numero < 0) {
        resultado = 'O número é negativo.';
    } else {
        resultado = 'O número é zero.';
    }
    document.getElementById('resultadoNumero').innerText = resultado;
}

//3 atividade
function verificaLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    let resultado;
    if (usuario === 'admin' && senha === '12345') {
        resultado = 'Bem-vindo!';
    } else {
        resultado = 'Usuário ou senha incorretos.';
    }
    document.getElementById('resultadoLogin').innerText = resultado;
}


//4 atividade
function calcular() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    if (operacao === 'soma') {
        resultado = num1 + num2;
    } else if (operacao === 'subtracao') {
        resultado = num1 - num2;
    } else if (operacao === 'multiplicacao') {
        resultado = num1 * num2;
    } else if (operacao === 'divisao') {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = 'Erro: Divisão por zero!';
        }
    }
    document.getElementById('resultadoCalculo').innerText = `Resultado: ${resultado}`;
}


//5 atividade
function verificaParImpar() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = (numero % 2 === 0) ? 'O número é par.' : 'O número é ímpar.';
    document.getElementById('resultadoParImpar').innerText = resultado;
}

//6 atividade
function encontrarMaior() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const num3 = parseFloat(document.getElementById('numero3').value);
    let maior = num1;

    if (num1 > num2)

    /*if (num2 > maior) {
        maior = num2;
    }
    if (num3 > maior) {
        maior = num3;
    }*/

    document.getElementById('resultadoMaior').innerText = `O maior número é: ${maior}`;
}

//7 atividade
function verificaTriangulo() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);
    let resultado;

    // Verifica se é um triângulo válido
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        // Classifica o triângulo
        if (lado1 === lado2 && lado2 === lado3) {
            resultado = 'O triângulo é equilátero.';
        } if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            resultado = 'O triângulo é isósceles.';
        } else {
            resultado = 'O triângulo é escaleno.';
        }
    } else {
        resultado = 'Os lados informados não formam um triângulo válido.';
    }

    document.getElementById('resultadoTriangulo').innerText = resultado;
}