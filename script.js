const form = document.getElementById('form-numeros');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const valorA = Number(document.getElementById('campoA').value);
    const valorB = Number(document.getElementById('campoB').value);

    if (valorB > valorA) {
        mensagem.textContent = '✔ O formulário é válido! B é maior que A.';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = '✘ Formulário inválido! B deve ser maior que A.';
        mensagem.style.color = 'red';
    }
});
