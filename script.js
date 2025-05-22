let numeroSecreto;
let tentativas;

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    document.getElementById('message').textContent='';
    document.getElementById('attemps').textContent = 'Tentativas: 0';
    document.getElementById('guessInput').value ='';
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessButton').disabled = false;
}

document.getElementById('guessButton').addEventListener('click', () => {
    const palpite = parseInt(document.getElementById('guessInput').value);

    if(isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById('message').textContent = 'Digite um número entre 1 e 100';
        return;
    }

    tentativas++;
    document.getElementById('attempts').textContent = `Tentativas: ${tentativas}`;

    if (palpite === numeroSecreto) {
            document.getElementById('message').textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`;
            document.getElementById('guessInput').disabled = true;
            document.getElementById('guessButton').disabled = true;
    } else if (palpite < numeroSecreto) {
            document.getElementById('message').textContent = '🔺 Muito baixo! Tente um número maior.';
    } else {
            document.getElementById('message').textContent = '🔻 Muito alto! Tente um número menor.';

    }
});

document.getElementById('restartButton').addEventListener('click', iniciarJogo);
iniciarJogo();