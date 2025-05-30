// Configuração do jogo otimizada para mobile
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se é um dispositivo touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    
    // Adiciona classe ao body para estilos específicos
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
    } else {
        document.body.classList.add('no-touch-device');
    }
    
    // Previne o comportamento padrão de toque
    document.addEventListener('touchstart', function(e) {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Adiciona feedback tátil para botões
    const buttons = document.querySelectorAll('button, a[href]');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.classList.add('active');
        }, { passive: true });
        
        button.addEventListener('touchend', function() {
            this.classList.remove('active');
        }, { passive: true });
    });
    
    // Carrega os recursos após o DOM estar pronto
    loadResources();
});

function loadResources() {
    // Verifica se a API de armazenamento está disponível
    if ('storage' in navigator && 'estimate' in navigator.storage) {
        navigator.storage.estimate().then(estimate => {
            console.log(`Espaço usado: ${estimate.usage}`);
            console.log(`Espaço disponível: ${estimate.quota}`);
        });
    }
    
    // Verifica se o service worker é suportado
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').then(registration => {
                console.log('ServiceWorker registrado com sucesso: ', registration.scope);
            }).catch(err => {
                console.log('Falha no registro do ServiceWorker: ', err);
            });
        });
    }
    
    // Verifica se está em modo standalone (PWA)
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('Executando como PWA');
    }
    
    // Configura o viewport para dispositivos móveis
    const setViewport = () => {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (window.orientation === 90 || window.orientation === -90) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
        } else {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
        }
    };
    
    window.addEventListener('orientationchange', setViewport, false);
    setViewport();
    
    // Adiciona listener para o evento beforeinstallprompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        console.log('Evento beforeinstallprompt disparado');
    });
    
    // Verifica a conexão
    const updateOnlineStatus = () => {
        if (navigator.onLine) {
            console.log('Online');
        } else {
            console.log('Offline');
        }
    };
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
    
    // Otimiza animações para mobile
    const optimizeAnimations = () => {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.game-card').forEach(card => {
                observer.observe(card);
            });
        }
    };
    
    optimizeAnimations();
    
    // Adiciona feedback visual para toques
    document.addEventListener('touchstart', function() {}, { passive: true });
    
    // Previne o double tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });
    
    // Melhora o desempenho de rolagem
    if ('scrollBehavior' in document.documentElement.style) {
        console.log('Scroll behavior suportado');
    } else {
        // Polyfill para smooth scroll se necessário
    }
}

document.querySelector('.back-button').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = this.getAttribute('href');
});
