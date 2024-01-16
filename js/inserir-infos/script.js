function recuperaValoresDosInputs(){
    let times = document.getElementById('qtd-times').value;
    let nomes = document.getElementById('nome-dos-jogadores').value;
    let max = document.getElementById('qtd-max').value;

    return {
        times: times,
        nomes: nomes,
        max: max
      };

}

function confereSeHaCamposVaziosOuNulos(){
    let valores = recuperaValoresDosInputs();
    

    if(valores.nomes == ''){
        // alert("Preencha os nomes dos jogadores!")
        // return null
        alert("Preencha os nomes dos jogadores!")
        throw 'erro - nomes não preenchidos'
    }

    if(valores.times == ''){
        alert("Preencha a quantidade de times!")
        throw 'erro - quantidade de times não preenchidas'
    }

    if (valores.times == 0){
        alert("A quantidade de times não pode ser 0!")
        throw 'erro'
    }

    if(valores.max == '' || valores.max == 0){
        alert("A quantidade máxima de jogadores é inválida")
        throw 'erro'
    }

}

function confereSeOsNomesBatemComAQuantidadeMaximaDeJogadores(){
    
    let nomes = confereSeAQuantidadeDeJogadoresEOsNomesCoincidem()
    
    let valores = recuperaValoresDosInputs();
    let tamanhoNomes = nomes.length

    if (tamanhoNomes <= valores.max){
        alert("Não há jogadores suficientes para distribuir entre os times. Adicione mais nomes")
        throw 'erro'
    } 
}



function confereSeHaCamposNegativos(){
    let valores = recuperaValoresDosInputs()

    if(valores.quantidade < 0){
        alert("A quantidade de participantes deve ser positiva!");
        return null
    
    }else if(valores.times < 0){
        alert("A quantidade de times deve ser positiva!");
        return null
    }

    
}

function confereSeAQuantidadeDeJogadoresEOsNomesCoincidem(){
    let inputNomes = document.getElementById('nome-dos-jogadores');
    let nomes = inputNomes.value.split(',');

    nomes = nomes.map(function(nome) {
        return nome.trim();
    });

    nomes = nomes.filter(function(nome) {
        return nome !== '';
    });

    let quantidadeNomes = nomes.length;

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
    let validacao = confereSeHaCamposVaziosOuNulos();
    let nomes = confereSeAQuantidadeDeJogadoresEOsNomesCoincidem();
    let recuperaValor = recuperaValoresDosInputs();
    let valoresBatem = confereSeOsNomesBatemComAQuantidadeMaximaDeJogadores();
    let divisao = verificaSeEhPossivelDividirOsTimes();
    let qtdTimes = recuperaValor.times
    let quantidadeMaximaJogadores  = recuperaValor.max
    
   


    
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


