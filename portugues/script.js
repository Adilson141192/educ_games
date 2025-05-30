document.addEventListener('DOMContentLoaded', function() {
    // Configura o botão de voltar
    document.querySelector('.back-button')?.addEventListener('click', function(e) {
        e.preventDefault();
        // Adiciona transição visual antes de navegar
        this.classList.add('clicked');
        setTimeout(() => {
            window.location.href = this.getAttribute('href');
        }, 150);
    });

    // Atualiza o ano no footer (se houver)
    if (document.getElementById('current-year')) {
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }
});
