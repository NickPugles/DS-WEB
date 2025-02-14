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
var m = document.getElementById('texto');

m.addEventListener('keypress', tecla);
m.addEventListener('input', campo);
m.addEventListener('input', function() {
  var texto = textarea.value;
  var comprimentoAtual = texto.length;
  contador.innerHTML = comprimentoAtual + " / 100";
});







/*var m = window.document.getElementById('texto');
m.addEventListener('keypress', tecla);
m.addEventListener('input', campo);
function tecla(){

    m.innerText='texto'
}
function campo(){
    m.innerText='texto'
}*/

//atividade 3
var b = window.document.getElementById('botao');
b.addEventListener('click', vezes);
function vezes(){
   b.Node.textContent
}

//atividade 4