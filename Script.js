/**
 * ARQUIVO DE INTELIGÊNCIA E RASTREAMENTO - ESSÊNCIA DE ROMÃ
 * Versão: 2.0 (Blindada)
 */

// 1. CONFIGURAÇÃO DO TAILWIND (Integrada para processamento via CDN)
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                brand: {
                    50: '#FDF8F5', 100: '#F4EAE6', 200: '#E8D5CD', 300: '#DABBAE', 400: '#CCA08E',
                    500: '#BA826A', 600: '#A36852', 700: '#875340', 800: '#4A362E', 900: '#30221D', 950: '#1C120F',
                },
                luxury: {
                    bg: '#0B0908', card: '#14110F', border: '#261F1C', text: '#EAE5DF', muted: '#A89F9A',
                },
                platinum: { 500: '#8C8C8C', 900: '#080605' }
            },
            animation: { 'spin-slow': 'spin 3s linear infinite' }
        }
    }
};

// 2. GESTÃO DE TEMA (DARK MODE) E PERSISTÊNCIA
const initTheme = () => {
    try {
        const isDark = localStorage.theme === 'dark' || 
                      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        if (isDark) {
            document.documentElement.classList.add('dark');
            document.getElementById('meta-theme-color')?.setAttribute('content', '#0B0908');
        } else {
            document.documentElement.classList.remove('dark');
            document.getElementById('meta-theme-color')?.setAttribute('content', '#FDF8F5');
        }
    } catch (e) {
        console.error("Erro ao inicializar tema:", e);
    }
};

// 3. LOGICA DE CONSENTIMENTO LGPD (A PROVA DE FALHAS)
const initConsentLogic = () => {
    const banner = document.getElementById('cookie-banner');
    const btnAceitar = document.getElementById('btn-aceitar-cookies');
    const btnRecusar = document.getElementById('btn-recusar-cookies');

    if (!btnAceitar || !banner) return;

    // Ação de Aceitar (Força Bruta no Data Layer)
    btnAceitar.addEventListener('click', function(e) {
        e.preventDefault(); // Trava segurança contra refresh
        
        // Injeta dados no GTM instantaneamente
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'acceptCookies',
            'GLPD': 'granted'
        });

        // Atualiza Consentimento Nativo do Google
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted',
                'personalization_storage': 'granted',
                'marketing_storage': 'granted'
            });
        }

        // Fecha visualmente
        banner.style.display = 'none';
        localStorage.setItem('cookie-consent', 'granted');
    });

    // Ação de Recusar
    if (btnRecusar) {
        btnRecusar.addEventListener('click', function() {
            banner.style.display = 'none';
            localStorage.setItem('cookie-consent', 'denied');
        });
    }

    // Verifica se já deu consentimento antes para não exibir o banner à toa
    if (localStorage.getItem('cookie-consent')) {
        banner.style.display = 'none';
    }
};

// 4. INTERAÇÕES DE UI (MODAIS E REVEAL)
window.openLegalModal = function(type) {
    // Lógica para abrir modal de privacidade ou termos
    console.log("Abrindo modal de:", type);
    // Aqui você pode disparar a função do modal que já existe no seu HTML
};

// 5. INICIALIZAÇÃO GERAL
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initConsentLogic();
    
    // Inicializa ícones Lucide (se a biblioteca estiver carregada)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Efeito de Reveal no Scroll (Otimizado)
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
