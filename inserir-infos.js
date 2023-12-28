function recuperaValoresDosInputs(){
    // var quantidade = document.getElementById('qtd-participantes').value;
    var times = document.getElementById('qtd-times').value;
    var nomes = document.getElementById('nome-dos-jogadores').value;
    var max = document.getElementById('qtd-max').value;

    return {
        // quantidade: quantidade,
        times: times,
        nomes: nomes,
        max: max
      };

}

function confereSeHaCamposVaziosOuNulos(){
    var valores = recuperaValoresDosInputs();
    

    if(valores.nomes == ''){
        alert("Preencha os nomes dos jogadores!")
        return null
    }

    if(valores.times == ''){
        alert("Preencha a quantidade de times!")
        return null
    }

    if (valores.times == 0){
        alert("O quantidade de times não pode ser 0!")
        return null
    }

    if(valores.max == '' || valores.max == 0){
        alert("A quantidade máxima de jogadores é inválida");
        return null
    }

}

function confereSeOsNomesBatemComAQuantidadeMaximaDeJogadores(){
    var valores = recuperaValoresDosInputs();

    if (valores.nomes.length < valores.max){
        alert("Não há jogadores suficientes para distribuir entre os times. Adicione mais nomes")
        return null
    } 
}

function confereSeHaCamposNegativos(){
    var valores = recuperaValoresDosInputs()

    if(valores.quantidade < 0){
        alert("A quantidade de participantes deve ser positiva!");
        return null
    
    }else if(valores.times < 0){
        alert("A quantidade de times deve ser positiva!");
        return null
    }

    
}

function confereSeAQuantidadeDeJogadoresEOsNomesCoincidem(){
    var inputNomes = document.getElementById('nome-dos-jogadores');
    var nomes = inputNomes.value.split(',');

    nomes = nomes.map(function(nome) {
        return nome.trim();
    });

    nomes = nomes.filter(function(nome) {
        return nome !== '';
    });

    var quantidadeNomes = nomes.length;

    return nomes

}

function verificaSeEhPossivelDividirOsTimes(){
    var valores = recuperaValoresDosInputs()


    if (valores.quantidade < valores.times) {
        alert('Não há jogadores suficientes para distribuir entre os times.');
        return false;
    }
}





function sortearNomes() {
    var validacao = confereSeHaCamposVaziosOuNulos();
    var nomes = confereSeAQuantidadeDeJogadoresEOsNomesCoincidem();
    var recuperaValor = recuperaValoresDosInputs();
    var validacaoNome = confereSeOsNomesBatemComAQuantidadeMaximaDeJogadores();
    var divisao = verificaSeEhPossivelDividirOsTimes();
    var qtdTimes = recuperaValor.times
    var max = recuperaValor.max
    // Verifica se o número de times é válido
    if (qtdTimes <= 0 || qtdTimes > nomes.length) {
      return "Número inválido de times";
    }
  

    

    // Copia a array de nomes para não modificá-la diretamente
    let nomesCopia = [...nomes];
  
    // Cria um array para armazenar os times
    let times = Array.from({ length: qtdTimes }, () => []);
  
    // Loop para distribuir os nomes aleatoriamente entre os times
    while (nomesCopia.length > 0) {
      for (let i = 0; i < qtdTimes && nomesCopia.length > 0; i++) {
        // Remove um nome aleatório da cópia e o adiciona ao time atual
        if (times[i].length < max) {
        
            let nomeAleatorioIndex = Math.floor(Math.random() * nomesCopia.length);
            let nomeAleatorio = nomesCopia.splice(nomeAleatorioIndex, 1)[0];
            times[i].push(nomeAleatorio);
        } else{
            alert(`Próximos ${i + 1}: ${nomesCopia.join(', ')}`);
            nomesCopia = [];
        }
        
      }
    }
  
    times.forEach((time, index) => {
        alert(`Time ${index + 1}: ${time.join(', ')}`);
    });
    return(times);
  }


