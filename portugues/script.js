/**
 * Configuração principal do aplicativo
 * Otimizado para PWA, performance e acessibilidade
 */

// Configuração de carregamento otimizada
document.addEventListener('DOMContentLoaded', function() {
    // Verifica dispositivo touch
    const isTouchDevice = 'ontouchstart' in window || 
                         navigator.maxTouchPoints > 0 || 
                         navigator.msMaxTouchPoints > 0;
    
    // Adiciona classe ao body para estilos específicos
    document.body.classList.add(isTouchDevice ? 'touch-device' : 'no-touch-device');
    
    // Configurações iniciais
    setupTouchFeedback();
    setupViewport();
    setupServiceWorker();
    setupInstallPrompt();
    setupNetworkStatus();
    setupAnimations();
    setupAccessibility();
    
    // Foco no conteúdo principal para acessibilidade
    document.getElementById('main-content').setAttribute('tabindex', '-1');
    document.getElementById('main-content').focus();
});

// Configura feedback tátil para interações
function setupTouchFeedback() {
    const interactiveElements = document.querySelectorAll('button, a[href], .game-card');
    
    interactiveElements.forEach(el => {
        // Feedback visual para toque
        el.addEventListener('touchstart', function() {
            this.classList.add('active');
        }, { passive: true });
        
        el.addEventListener('touchend', function() {
            this.classList.remove('active');
        }, { passive: true });
        
        // Previne o comportamento padrão de toque
        el.addEventListener('touchstart', function(e) {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                e.preventDefault();
            }
        }, { passive: false });
    });
    
    // Previne double tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });
}

// Configura viewport responsivo
function setupViewport() {
    const setViewport = () => {
        const viewport = document.querySelector('meta[name="viewport"]');
        const content = window.orientation === 90 || window.orientation === -90 ?
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' :
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
        
        viewport.setAttribute('content', content);
    };
    
    window.addEventListener('orientationchange', setViewport, false);
    setViewport();
}

// Registra Service Worker para PWA
function setupServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(registration => {
                    console.log('ServiceWorker registrado com sucesso:', registration.scope);
                    
                    // Verifica atualizações periodicamente
                    setInterval(() => registration.update(), 60 * 60 * 1000);
                })
                .catch(err => {
                    console.error('Falha no registro do ServiceWorker:', err);
                });
        });
    }
    
    // Verifica modo standalone PWA
    if (window.matchMedia('(display-mode: standalone)').matches) {
        document.body.classList.add('standalone-mode');
    }
}

// Configura prompt de instalação PWA
function setupInstallPrompt() {
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        console.log('Evento beforeinstallprompt disparado');
        
        // Pode adicionar um botão de instalação aqui se desejar
    });
    
    // Exemplo de como disparar o prompt de instalação
    window.installPWA = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('Usuário aceitou a instalação');
                }
                deferredPrompt = null;
            });
        }
    };
}

// Monitora status da conexão
function setupNetworkStatus() {
    const updateOnlineStatus = () => {
        if (navigator.onLine) {
            document.body.classList.remove('offline');
            document.body.classList.add('online');
        } else {
            document.body.classList.remove('online');
            document.body.classList.add('offline');
            // Pode adicionar uma notificação de offline aqui
        }
    };
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
}

// Otimiza animações para performance
function setupAnimations() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px 50px 0px'
        });
        
        document.querySelectorAll('.game-card').forEach(card => {
            observer.observe(card);
        });
    }
}

// Melhorias de acessibilidade
function setupAccessibility() {
    // Adiciona rótulos ARIA dinâmicos se necessário
    document.querySelectorAll('.game-card').forEach(card => {
        const title = card.querySelector('h2').textContent;
        const desc = card.querySelector('p').textContent;
        card.setAttribute('aria-label', `${title} - ${desc}`);
    });
    
    // Configura navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Configura o botão de voltar
document.querySelector('.back-button')?.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = this.getAttribute('href');
});

// Verifica armazenamento disponível
if ('storage' in navigator && 'estimate' in navigator.storage) {
    navigator.storage.estimate().then(estimate => {
        console.log(`Uso de armazenamento: ${(estimate.usage / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Cota disponível: ${(estimate.quota / 1024 / 1024).toFixed(2)} MB`);
    });
}
