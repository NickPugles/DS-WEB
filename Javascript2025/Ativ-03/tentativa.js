       //CARTÕES
       document.getElementById("geradorCartao");
          //var cartaoInput = document.getElementById("descricaoInput");
          var cartao = cartaoInput.value.trim();
          
          if (cartao !== ""){
           cartoes.push(cartao);
           cartaoInput.value = ""; // Limpa a caixa de texto

           // Atualiza a lista de cartoes na página
           atualizarListaDeCartoes();
          }
       

           //DESCRIÇÃO
       var descricoes = []; //
       function adicionarDescricao(){
            var descricaoInput = document.getElementById("descricaoInput");
            var descricao = descricaoInput.value.trim();
                if (descricao !== ""){
                descricao.push(descricao);//descricoes
                descricaoInput.value = ""; // Limpa a caixa de texto

           // Atualiza a lista de cartoes na página
                atualizarListaDeDescricoes();
                }

       }


       //CARTÕES
       function atualizarListaDeCartoes() {

           var cartoesLista = document.getElementById("cartoesLista");

           cartoesLista.innerHTML = ""; // Limpa a lista antes de atualizar

           // Itera sobre o vetor de frutas e cria elementos de lista para cada uma

           for (var i = 0; i < cartoes.length; i++) {
               var li = document.createElement("li");

               li.textContent = cartoes[i];
               cartoesLista.appendChild(li);
           }
       }