function recuperaValoresDosInputs(){
    var times = document.getElementById('qtd-times').value;
    var nomes = document.getElementById('nome-dos-jogadores').value;
    var max = document.getElementById('qtd-max').value;

    return {
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
    
    let nomes = confereSeAQuantidadeDeJogadoresEOsNomesCoincidem()
    
    var valores = recuperaValoresDosInputs();
    let tamanhoNomes = nomes.length

    if (tamanhoNomes <= valores.max){
        alert("Não há jogadores suficientes para distribuir entre os times. Adicione mais nomes")
        throw 'erro'
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
        let nomes = confereSeAQuantidadeDeJogadoresEOsNomesCoincidem()
        let valores = recuperaValoresDosInputs()
    
        quantidadeNomes = nomes.length
        quantidadeTimes  = valores.times

        
        // if(quantidadeTimes / quantidadeNomes  <= 0 || quantidadeTimes / quantidadeNomes < 1){
        //     alert("Não é possível dividir os times igualmente.")
        //     throw 'erro' 
        // }
        if(quantidadeNomes/quantidadeTimes   <= 0){
            alert("Não é possível dividir os times igualmente.")
            throw 'erro' 
        }
}





function sortearNomes() {
    var validacao = confereSeHaCamposVaziosOuNulos();
    var nomes = confereSeAQuantidadeDeJogadoresEOsNomesCoincidem();
    var recuperaValor = recuperaValoresDosInputs();
    var valoresBatem = confereSeOsNomesBatemComAQuantidadeMaximaDeJogadores();
    var divisao = verificaSeEhPossivelDividirOsTimes();
    var qtdTimes = recuperaValor.times
    var quantidadeMaximaJogadores  = recuperaValor.max
    
   


    
    // Copia a array de nomes para não modificá-la diretamente
    let nomesCopia = [...nomes];
    let proximos = []
  
    // Cria um array para armazenar os times
    let times = Array.from({ length: qtdTimes }, () => []);

    console.log("NomesCopia: "+nomesCopia.length)
    

//Loop para distribuir os nomes aleatoriamente entre os times
while (nomesCopia.length > 0) {
      for (let i = 0; i < qtdTimes && nomesCopia.length > 0; i++) {
        // Remove um nome aleatório da cópia e o adiciona ao time atual
        if (times[i].length < quantidadeMaximaJogadores) {
             
            let nomeAleatorioIndex = Math.floor(Math.random() * nomesCopia.length);
            let nomeAleatorio = nomesCopia.splice(nomeAleatorioIndex, 1)[0];
            times[i].push(nomeAleatorio)
        } else{
            nomesCopia.join(', ')
            proximos.push(nomesCopia)
            nomesCopia = []
            
        }
        
    }
}

    times.forEach((time, index) => {
        time.join(', ')
    })


    localStorage.setItem('timesSorteados', JSON.stringify(times));
    localStorage.setItem('proximosJogadores', JSON.stringify(proximos));

    setTimeout(function () {
        window.location.href = '../exibindo-times/index.html';
    }, 1000);


  }


