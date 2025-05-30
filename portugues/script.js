/**
 * Configuração principal otimizada para PWA mobile
 * Foco em performance, acessibilidade e experiência do usuário
 */

// Configuração de carregamento otimizada
document.addEventListener('DOMContentLoaded', function() {
    // Verifica dispositivo touch
    const isTouchDevice = 'ontouchstart' in window || 
                         navigator.maxTouchPoints > 0 || 
                         navigator.msMaxTouchPoints > 0;
    
    // Adiciona classe ao body para estilos específicos
    document.body.classList.add(isTouchDevice ? 'touch-device' : 'no-touch-device');
    
    // Atualiza o ano no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Configurações iniciais
    setupTouchFeedback();
    setupViewport();
    setupServiceWorker();
    setupInstallPrompt();
    setupNetworkStatus();
    setupAnimations();
    setupAccessibility();
    
    // Foco no conteúdo principal para acessibilidade
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus();
    }
});

// Configura feedback tátil para interações
function setupTouchFeedback() {
    const interactiveElements = document.querySelectorAll('button, a[href], .game-card, [role="button"]');
    
    interactiveElements.forEach(el => {
        // Adiciona área de toque mínima se necessário
        if (el.clientHeight < 44 || el.clientWidth < 44) {
            const paddingY = Math.max(0, (44 - el.clientHeight) / 2);
            const paddingX = Math.max(0, (44 - el.clientWidth) / 2);
            el.style.padding = `${paddingY}px ${paddingX}px`;
        }
        
        // Feedback visual para toque
        el.addEventListener('touchstart', function() {
            this.classList.add('active');
        }, { passive: true });
        
        el.addEventListener('touchend', function() {
            this.classList.remove('active');
        }, { passive: true });
        
        // Previne o comportamento padrão de toque em elementos interativos
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
        if (!viewport) return;
        
        // Ajusta viewport para landscape
        const isLandscape = window.matchMedia('(orientation: landscape)').matches;
        const content = isLandscape ? 
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' :
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
        
        viewport.setAttribute('content', content);
    };
    
    // Verifica mudanças de orientação
    window.addEventListener('orientationchange', setViewport, false);
    window.addEventListener('resize', setViewport, false);
    setViewport();
}

// Registra Service Worker para PWA
function setupServiceWorker() {
    if ('serviceWorker' in navigator) {
        // Registra após o carregamento da página para não bloquear recursos críticos
        window.addEventListener('load', () => {
            const swUrl = 'sw.js';
            
            navigator.serviceWorker.register(swUrl)
                .then(registration => {
                    console.log('ServiceWorker registrado com sucesso:', registration.scope);
                    
                    // Verifica atualizações periodicamente (a cada 12 horas)
                    setInterval(() => {
                        registration.update().catch(err => {
                            console.log('Erro ao verificar atualizações:', err);
                        });
                    }, 12 * 60 * 60 * 1000);
                    
                    // Verifica se há uma nova versão disponível
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                console.log('Nova versão disponível!');
                                // Aqui você pode mostrar um aviso para o usuário atualizar
                            }
                        });
                    });
                })
                .catch(err => {
                    console.error('Falha no registro do ServiceWorker:', err);
                });
        });
    }
    
    // Verifica modo standalone PWA
    const checkDisplayMode = () => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            document.body.classList.add('standalone-mode');
        } else {
            document.body.classList.remove('standalone-mode');
        }
    };
    
    window.matchMedia('(display-mode: standalone)').addEventListener('change', checkDisplayMode);
    checkDisplayMode();
}

// Configura prompt de instalação PWA
function setupInstallPrompt() {
    let deferredPrompt;
    let installButton = null;
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        console.log('Evento beforeinstallprompt disparado');
        
        // Mostra botão de instalação se não estiver em modo standalone
        if (!window.matchMedia('(display-mode: standalone)').matches) {
            installButton = document.createElement('button');
            installButton.className = 'install-button';
            installButton.textContent = 'Instalar App';
            installButton.style.cssText = `
                position: fixed;
                bottom: 1rem;
                right: 1rem;
                padding: 0.5rem 1rem;
                background: var(--primary-color);
                color: white;
                border: none;
                border-radius: 20px;
                font-weight: bold;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                z-index: 1000;
                cursor: pointer;
            `;
            
            installButton.addEventListener('click', () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('Usuário aceitou a instalação');
                            if (installButton) installButton.remove();
                        }
                        deferredPrompt = null;
                    });
                }
            });
            
            document.body.appendChild(installButton);
        }
    });
    
    // Monitora se o app foi instalado
    window.addEventListener('appinstalled', () => {
        console.log('Aplicativo instalado com sucesso');
        if (installButton) installButton.remove();
        deferredPrompt = null;
    });
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
        }
    };
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
}

// Otimiza animações para performance
function setupAnimations() {
    // Verifica se o usuário prefere reduzir movimento
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.querySelectorAll('.game-card').forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'none';
        });
        return;
    }
    
    // Usa IntersectionObserver apenas se suportado e se não for reduzir movimento
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.05,
            rootMargin: '0px 0px 20px 0px'
        });
        
        document.querySelectorAll('.game-card').forEach(card => {
            observer.observe(card);
        });
    } else {
        // Fallback para navegadores sem suporte
        document.querySelectorAll('.game-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
}

// Melhorias de acessibilidade
function setupAccessibility() {
    // Adiciona rótulos ARIA dinâmicos
    document.querySelectorAll('.game-card').forEach(card => {
        const title = card.querySelector('h2')?.textContent || '';
        const desc = card.querySelector('p')?.textContent || '';
        if (title && desc) {
            card.setAttribute('aria-label', `${title} - ${desc}`);
        }
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
    
    // Melhora foco para elementos interativos
    document.querySelectorAll('a, button, input, [tabindex]').forEach(el => {
        el.addEventListener('focus', function() {
            this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });
}

// Configura o botão de voltar
document.querySelector('.back-button')?.addEventListener('click', function(e) {
    e.preventDefault();
    // Adiciona transição visual antes de navegar
    this.classList.add('clicked');
    setTimeout(() => {
        window.location.href = this.getAttribute('href');
    }, 150);
});

// Verifica armazenamento disponível
if ('storage' in navigator && 'estimate' in navigator.storage) {
    navigator.storage.estimate().then(estimate => {
        console.log(`Armazenamento usado: ${(estimate.usage / (1024 * 1024)).toFixed(2)} MB`);
        console.log(`Cota disponível: ${(estimate.quota / (1024 * 1024)).toFixed(2)} MB`);
    }).catch(err => {
        console.error('Erro ao estimar armazenamento:', err);
    });
}

// Verifica recursos da API de Badging para PWA
if ('setAppBadge' in navigator) {
    // Pode ser usado para notificar sobre novas atividades
    // navigator.setAppBadge(1).catch(err => console.error('Erro ao definir badge:', err));
}

// Monitora eventos de performance
window.addEventListener('load', () => {
    if ('performance' in window) {
        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        console.log(`Tempo de carregamento da página: ${loadTime}ms`);
    }
    
    // Pré-carrega recursos para páginas internas quando ocioso
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
            const urlsToPrefetch = [
                'ortografico/index.html',
                'interpretacao/index.html',
                'gramatica/index.html',
                'saeb/index.html'
            ];
            
            urlsToPrefetch.forEach(url => {
                fetch(url, { mode: 'no-cors', credentials: 'include' })
                    .catch(() => {});
            });
        });
    }
});
