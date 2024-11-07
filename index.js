// Permitir desmarcar botões de rádio
const radios = document.querySelectorAll('input[type="radio"]');
let lastChecked = null;

radios.forEach(radio => {
    radio.addEventListener('click', function () {
        if (lastChecked === this) {
            this.checked = false;  // Desmarcar se já estiver marcado
            lastChecked = null;    // Reseta o último marcado
        } else {
            lastChecked = this;    // Armazena o novo marcado
        }
    });

});
