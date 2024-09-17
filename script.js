const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = 'white'; // Fundo branco
    } else {
        document.body.style.backgroundColor = 'black'; // Fundo escuro
    }
});