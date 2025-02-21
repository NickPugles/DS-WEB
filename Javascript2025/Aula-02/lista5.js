//atividade 1
var t = window.document.getElementById('tamanhoCor');
t.addEventListener('mouseenter', passar);
t.addEventListener('mouseout', sair);
function passar(){
    t.innerText= 'Entrou!'
    t.style.background='red'
    t.style.height='600px'
    t.style.width='600px'
}
function sair(){
    t.innerText= 'Saiu!'
    t.style.background='blue'
    t.style.height='300px'
    t.style.width='300px'
}

//atividade 2
function captura() {
    document.getElementById("teclas").innerText = document.getElementById("texto").value;
}

//atividade 3
let contador = 0;
function cliques() {

    contador++;
    document.getElementById("contador").innerHTML = contador;
}


//atividade 4
function bv(){
    document.getElementById("texto1").innerHTML = "Seja bem-vindo!";
}
window.onload = function() {
    bv();
}