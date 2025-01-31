//1-)Escreva em JavaScript um programa que mostre na tela a mensagem “Bom dia, Mundo!!!”.
    document.write("Bom dia, Mundo"); // document.write: serve para escrever na tela/documento

//2-)Escreve em JavaScript um programa que receba nome e sobrenome de uma pessoa separadamente e depois mostre eles juntos.
    var nome =prompt("Digite seu nome: ");
    var sobrenome =prompt("Digite sobrenome: ");
    //Verificando o tipo de variavel
    console.log(typeof(nome));
    alert(nome + sobrenome);

//3-)Escreva em JavaScript um programa que efetue as 4 operações aritméticas em sequência: Adição, Subtração, Multiplicação e Divisão (fazer variáveis diferentes para todas as operações).
    //Adição:
    var n1 = Number.parseInt(prompt("Digite o seu primeiro número para a adição: "));
    var n2 = Number.parseInt(prompt("Digite o seu segundo número para a adição: "));
    console.log(typeof(n1));
    alert(n1 + n2);

    //Subtração:
    var n1 = Number.parseInt(prompt("Digite o seu primeiro número para a subtração: "));
    var n2 = Number.parseInt(prompt("Digite o seu segundo número para a subtração: "));
    //Verificando o tipo de variavel
    console.log(typeof(n1));
    alert(n1 - n2);

    //Multiplicação:
    var n1 = Number.parseInt(prompt("Digite o seu primeiro número para a multiplicação: "));
    var n2 = Number.parseInt(prompt("Digite o seu segundo número para a multiplicação: "));
    console.log(typeof(n1));
    alert(n1 * n2);

    //Divisão:
    var n1 = Number.parseInt(prompt("Digite o seu primeiro número para a divisão: "));
    var n2 = Number.parseInt(prompt("Digite o seu segundo número para a divisão: "));
    console.log(typeof(n1));
    alert(n1 / n2);

//4-)Escreva em JavaScript um programa que retorne o cubo de um número fornecido pelo usuário.
    var n = Number.parseInt(prompt("Digite um número para poder ser retornado seu cubo: "));
    console.log(typeof(n));
    alert(n * n * n);

//5-)Escreva em JavaScript um programa que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C). 
//Dica: para converter uma temperatura em F para C, subtraia 32 da temperatura e multiplique o resultado por 0,5556 (ou 5/9).//
    var t = Number.parseInt(prompt("Digite uma temperatura em Fahrenheit (F): "));
    console.log(typeof(t));
    alert((t - 32)*(5/9));

//6-)Escreva em JavaScript um programa que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário.
    var c = Number.parseInt(prompt("Informe o valor do Capital inicial: "));
    var t = Number.parseInt(prompt("Informe o Tempo do seu investimento em meses: "));
    var i = Number.parseInt(prompt("Informe a taxa de juros mensais : "));
    console.log(typeof(c));
    alert(((1+i)**t)*c); 
