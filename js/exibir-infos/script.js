
// Recupere os times e jogadores que ficarão de próximo do localStorage
var timesSorteados = JSON.parse(localStorage.getItem('timesSorteados')) || [];
var proximosJogadores = JSON.parse(localStorage.getItem('proximosJogadores')) || [];


console.log("proximos: "+proximosJogadores)
// Função para criar os cards
function criarCards() {
    var container = document.body; // Pode ajustar para o elemento desejado

    // Crie cards para os times
    timesSorteados.forEach(function (time, index) {
        var cardDeTimes = criarCard('Time ' + (index + 1), time);
        container.appendChild(cardDeTimes);
    });

    // Crie um card para os jogadores que ficarão de próximo
    proximosJogadores.forEach(function (time, index) {
        var cardDeProximos = criarCard('Próximos Jogadores: ', time);
        container.appendChild(cardDeProximos);
    });
    
}

// Função para criar um card
function criarCard(titulo, conteudo) {
    var card = document.createElement('div');
    card.className = 'card';

    // Adicione o título do card
    var tituloElement = document.createElement('h2');
    tituloElement.textContent = titulo;
    tituloElement.className = 'titulo'
    card.appendChild(tituloElement);

    // Adicione o conteúdo do card
    var conteudoElement = document.createElement('h4');
    conteudoElement.textContent = Array.isArray(conteudo) ? conteudo.join(', ') : conteudo;
    conteudoElement.className = 'conteudo'
    card.appendChild(conteudoElement);

    return card;
}

// Chame a função para criar os cards quando a página carregar
window.onload = criarCards;