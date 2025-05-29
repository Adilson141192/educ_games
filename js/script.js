// Pode ser usado para funcionalidades futuras
document.addEventListener('DOMContentLoaded', function() {
    console.log('Plataforma de Jogos Educacionais carregada!');
    
    // Adicionando animação aos cards
    const cards = document.querySelectorAll('.discipline-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Pode ser usado para funcionalidades futuras
document.addEventListener('DOMContentLoaded', function() {
    console.log('Plataforma de Jogos Educacionais carregada!');
    
    // Adicionando animação aos cards
    const cards = document.querySelectorAll('.discipline-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});