// Seleciona o interruptor
const toggleSwitch = document.getElementById('toggleSwitch');

// Adiciona um evento ao mudar o estado do interruptor
toggleSwitch.addEventListener('change', function() {
    // Verifica se o interruptor está ligado
    if (this.checked) {
        document.body.style.backgroundColor = 'white'; // Fundo branco
    } else {
        document.body.style.backgroundColor = 'black'; // Fundo escuro
    }
});