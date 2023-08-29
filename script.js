const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep')
const resultadoCep = document.querySelector('.resultadoCep')


btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep)
    console.log(event)
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.text())
    .then(body => {
        const jsonFinal = JSON.parse(body)
        resultadoCep.innerText = jsonFinal.logradouro + ". Bairro: " + jsonFinal.bairro;
        console.log(jsonFinal)
    })
}

// bitcoin

const btcValue = document.querySelector('.btc')

function precoBitCoin() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        btcValue.innerText = ('R$ ' + btcJson.BRL.buy).replace('.',',');
    })
}

setInterval(precoBitCoin, 1000 * 30)

precoBitCoin()

// piada

const proxima = document.querySelector('.proxima');
const piada = document.querySelector('.piada');

function piadaRandom() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(piadaJson => {
        piada.innerText = piadaJson.value;
    })
}
proxima.addEventListener('click', piadaRandom)
piadaRandom();

