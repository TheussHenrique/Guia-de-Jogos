function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
  
    let campoPesquisa = document.getElementById('campo-pesquisa').value;
    
    if (!campoPesquisa) {
      section.innerHTML = '<p> Nada foi encontrado. Você precisa digitar algo </p>'
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = '';
    let nome = '';
    let descricao = '';
    let tags = '';
  
    // Intera sobre cada dado da pesquisa
    for(let dado of dados){
      nome = dado.nome.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      lancamento = dado.anoLancamento
      tags = dado.tags.toLowerCase()

      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || lancamento.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        //crie um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2> 
            <a href="${dado.loja}" target="_blank" >${dado.nome}</a> 
          </h2>
          <p class="descricao-meta">Lançado em ${dado.anoLancamento}. ${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
      }

      // Cria o HTML para cada resultado
      
    }

    if (!resultados) {
      resultados = '<p> Nada foi encontrado no banco de dados </p>'
    }
  
    // Insere os resultados na seção HTML
    section.innerHTML = resultados;
  }