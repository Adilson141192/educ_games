document.addEventListener('DOMContentLoaded', function() {
    console.log('Plataforma de Jogos Educacionais carregada!');
    
    // Animação e interação com os cards
    const cards = document.querySelectorAll('.discipline-card, .game-card');
    
    cards.forEach(card => {
        // Efeito hover
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Efeito de clique
        card.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        // Acessibilidade - teclado
        card.addEventListener('focus', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
    
    // Desativar interação em cards "em breve"
    const comingSoonCards = document.querySelectorAll('.coming-soon');
    comingSoonCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Este jogo estará disponível em breve!');
        });
    });
});