function recuperaValoresDosInputs(){
    var quantidade = document.getElementById('qtd-participantes').value;
    var times = document.getElementById('jogadores-por-time').value;
    var nomes = document.getElementById('nome-dos-jogadores').value;

    return {
        quantidade: quantidade,
        times: times,
        nomes: nomes
      };

}

function confereSeHaCamposVazios(){
    var valores = recuperaValoresDosInputs();
    
    if(valores.quantidade == ''){
        alert("Preencha a quantidade de jogadores!")
        return
    }
    if (valores.quantidade == 0){
        alert("O valor nao pode ser 0 ")
        return
    }

    if(valores.times == ''){
        alert("Preencha a quantidade de times!")
        return
    }
    if (valores.times == 0){
        alert("O quantidade de times não pode ser 0!")
        return
    }

    if(valores.nomes == ''){
        alert("Preencha os nomes dos jogadores!")
        return
    }  
    
    var coincidenciaDeValores = confereSeAQuantidadeDeJogadoresEOsNomesCoincidem()

}

function confereSeAQuantidadeDeJogadoresEOsNomesCoincidem(){
    var quantidade = document.getElementById('qtd-participantes').value;
    var inputNomes = document.getElementById('nome-dos-jogadores');
    var nomes = inputNomes.value.split(',');

    nomes = nomes.map(function(nome) {
        return nome.trim();
    });

    nomes = nomes.filter(function(nome) {
        return nome !== '';
    });

    var quantidadeNomes = nomes.length;

    if (quantidade != quantidadeNomes){
        alert("A quantidade de jogadores e a quantidade de nomes não são iguais!")
    }else{

        alert("Tudo certo!");
    }    


}

