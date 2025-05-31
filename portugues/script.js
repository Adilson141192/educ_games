document.addEventListener('DOMContentLoaded', () => {
    // Botão voltar
    document.querySelector('.back-button')?.addEventListener('click', (e) => {
        e.preventDefault();
        setTimeout(() => {
            window.location.href = e.currentTarget.getAttribute('href');
        }, 150);
    });

    // Atualiza ano no footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
