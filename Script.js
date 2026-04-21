/**
 * ARQUIVO DE INTELIGÊNCIA E RASTREAMENTO - ESSÊNCIA DE ROMÃ
 * Versão: 2.1 (Blindada + Desbloqueio de Preloader)
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

// 6. LÓGICA DA PÁGINA DE LISOS (FAQ E MODO GAVETA)
function toggleFaq(btn) {
    const item = btn.parentElement;
    const isAtivo = item.classList.contains('ativo');
    
    // Fecha todos os outros antes de abrir o novo (Opcional, para foco total)
    document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('ativo');
    });

    if (!isAtivo) {
        item.classList.add('ativo');
    }
}

function selecionarProtocolo(tipo) {
    // Esconde a seleção inicial (os dois cards lado a lado)
    const containerCards = document.querySelector('.protocolos-cards-container');
    if (containerCards) {
        containerCards.style.display = 'none';
    }
    
    // Altera o título lá em cima para manter a imersão da cliente
    const tituloHero = document.querySelector('.hero-lisos h1');
    const subtituloHero = document.querySelector('.hero-lisos p');
    
    if(tituloHero && subtituloHero) {
        tituloHero.innerText = tipo === 'gloss' ? 'Gloss Premium' : 'Molecular Platinum Fusion';
        subtituloHero.innerText = 'Explore as etapas da sua transformação.';
    }

    // Esconde todas as gavetas por segurança antes de abrir a certa
    document.querySelectorAll('.secao-oculta').forEach(gaveta => {
        gaveta.style.display = 'none';
    });

    // Mostra a gaveta com o conteúdo exclusivo que a cliente escolheu
    if (tipo === 'gloss') {
        const gavetaGloss = document.getElementById('gaveta-gloss');
        if(gavetaGloss) gavetaGloss.style.display = 'block';
    } else if (tipo === 'molecular') {
        const gavetaMolecular = document.getElementById('gaveta-molecular');
        if(gavetaMolecular) gavetaMolecular.style.display = 'block';
    }

    // Faz o scroll suave de volta pro topo da tela
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 7. DESBLOQUEIO DA TELA DE CARREGAMENTO (PRELOADER)
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Adiciona uma transição suave para desaparecer no estilo Dark Tech
        preloader.style.transition = 'opacity 0.5s ease';
        preloader.style.opacity = '0';
        
        // Remove o elemento do caminho após o fade-out
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});
