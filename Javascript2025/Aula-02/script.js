//Exibi URL
//window.document.write(window.document.URL); //vai escrever um documento. primeiro indice q o js é capaz de injetar html dentro 

//Marca (TagNmae)
var p1 = document.getElementsByTagName('p')[2];

document.getElementById("quarto-paragrafo").innerHTML = p1.innerText; //pegou o texto do quarto parágrafo e colocou no p1 criado acima

//ID
document.getElementById("teste").innerHTML = "Hello Word";

//Classe (ClassName)
var classes = document.getElementsByClassName("exemplo");
classes[0].innerHTML = "Hello Word!";

//Quarto passo
document.querySelector("p#paragrafo").style.backgroundColor = "blue";

var paragrafo = document.querySelector("p").style;
paragrafo.backgroundColor = "red"
paragrafo.color ="white";


function alertaDeClique(){
    alert("Você clicou no botão")
}

function calcular(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    //Convertendo números
    console.log(typeof numero1);
    var numero1 = Number.parseInt(numero1);
    var numero2 = Number.parseInt(numero2);

    var resultado = numero1 + numero2;

    document.getElementById("resultado").innerHTML = "Resultado: " +resultado;

}
    