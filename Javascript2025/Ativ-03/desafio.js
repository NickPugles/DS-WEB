document.getElementById("geradorCartao").addEventListener('submit', function(event) { //permite que você crie respostas para os eventos
    event.preventDefault(); 

    const nome = document.getElementById('cartaoInput').value;
    const descricao = document.getElementById('descricaoInput').value;

    //Verificar se foram preenchidos
    if (nome === '' || descricao === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    //Criar a div do cartão
    const cartao = document.createElement('div');
    cartao.setAttribute('class', 'cartao');

    //Texto do cartão
    const cartaoNome = document.createElement('h3');
    cartaoNome.textContent = nome;

    const cartaoDescricao = document.createElement('p');
    cartaoDescricao.textContent = descricao;

    //Botão de excluir
    const excluirBotao = document.createElement('button');
    excluirBotao.textContent = 'Excluir';
    excluirBotao.setAttribute('class', 'excluir');

    // Adicionando evento de exclusão
    excluirBotao.addEventListener('click', function() {
        cartao.remove(); // Remove o cartão do DOM
    });

    cartao.appendChild(cartaoNome);
    cartao.appendChild(cartaoDescricao);
    cartao.appendChild(excluirBotao);

    document.getElementById('cartoesLista').appendChild(cartao);

    // Limpando
    document.getElementById('cartaoInput').value = '';
    document.getElementById('descricaoInput').value = '';
});