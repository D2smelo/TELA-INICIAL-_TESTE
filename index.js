// Selecionando os botões e cartões
const botao1 = document.getElementById('mostrarCartao1');
const botao2 = document.getElementById('mostrarCartao2');
const botao3 = document.getElementById('mostrarCartao3');
const cartao1 = document.getElementById('cartao1');
const cartao2 = document.getElementById('cartao2');
const cartao3 = document.getElementById('cartao3');

// Função para exibir apenas o cartão clicado
function mostrarCartao(cartao) {
    // Esconde todos os cartões
    cartao1.style.display = 'none';
    cartao2.style.display = 'none';
    cartao3.style.display = 'none';
    // Mostra o cartão clicado
    cartao.style.display = 'block';
}

// Eventos de clique para os botões
botao1.addEventListener('click', () => mostrarCartao(cartao1));
botao2.addEventListener('click', () => mostrarCartao(cartao2));
botao3.addEventListener('click', () => mostrarCartao(cartao3));

// Exibe o Cartão 1 por padrão
mostrarCartao(cartao1);

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
