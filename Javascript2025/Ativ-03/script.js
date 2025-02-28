
// Função que será executada ao enviar o formulário
document.getElementById('formCartao').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Pegando os valores dos inputs
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;

    // Verificando se ambos os campos foram preenchidos
    if (nome === '' || descricao === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Criando a div do cartão
    const cartao = document.createElement('div');
    cartao.setAttribute('class', 'cartao');

    // Criando o conteúdo do cartão
    const cartaoNome = document.createElement('h3');
    cartaoNome.textContent = nome;

    const cartaoDescricao = document.createElement('p');
    cartaoDescricao.textContent = descricao;

    // Criando o botão de excluir
    const excluirBotao = document.createElement('button');
    excluirBotao.textContent = 'Excluir';
    excluirBotao.setAttribute('class', 'excluir');

    // Adicionando evento de exclusão
    excluirBotao.addEventListener('click', function() {
        cartao.remove(); // Remove o cartão do DOM
    });

    // Adicionando os elementos dentro do cartão
    cartao.appendChild(cartaoNome);
    cartao.appendChild(cartaoDescricao);
    cartao.appendChild(excluirBotao);

    // Adicionando o cartão no container de cartões
    document.getElementById('cartoesContainer').appendChild(cartao);

    // Limpar os campos após criação do cartão
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
});
