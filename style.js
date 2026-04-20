/**
 * ESTILIZAÇÃO PREMIUM - ESSÊNCIA DE ROMÃ HAIR
 * Conceito: Minimalismo Luxo, Black Piano & Platinum Fusion
 */

/* 1. CONFIGURAÇÕES GERAIS E RESET */
:root {
    --transition-smooth: all 0.6s cubic-bezier(0.5, 0, 0, 1);
}

* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    scroll-behavior: smooth;
    overflow-x: hidden;
}

/* Scrollbar Personalizada (Padrão Luxury) */
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
    background: #0B0908;
}
::-webkit-scrollbar-thumb {
    background: #261F1C;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
    background: #BA826A;
}

/* 2. ANIMAÇÕES DE ENTRADA (REVEAL) */
.fade-in {
    animation: fadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    opacity: 0;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: var(--transition-smooth);
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* 3. EFEITOS DE TEXTO PREMIUM */
.text-gradient-premium {
    background: linear-gradient(135deg, #1C120F 0%, #BA826A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.dark .text-gradient-premium {
    background: linear-gradient(135deg, #EAE5DF 0%, #DABBAE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Platinum Fusion (Efeito de Brilho em Movimento) */
.platinum-fusion-text {
    background: linear-gradient(
        to right, 
        #8C8C8C 0%, 
        #FFFFFF 20%, 
        #8C8C8C 40%, 
        #52525B 50%, 
        #8C8C8C 60%, 
        #FFFFFF 80%, 
        #8C8C8C 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 5s linear infinite;
}

@keyframes shine {
    to { background-position: 200% center; }
}

/* 4. TEXTURAS E VIDRO (GLASSMORPHISM) */
.noise-overlay {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.02;
    pointer-events: none;
    mix-blend-mode: overlay;
    z-index: 1;
}

.glass-glacial {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(24px) saturate(200%);
    -webkit-backdrop-filter: blur(24px) saturate(200%);
    border-top: 1px solid rgba(227, 168, 87, 0.15);
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    border-right: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05);
}

/* 5. UI COMPONENTS ESPECÍFICOS */
.smart-video {
    will-change: transform, opacity;
    object-fit: cover;
}

/* Slider de Antes e Depois (Thumb Personalizado) */
input[type=range]::-webkit-slider-thumb {
    pointer-events: all;
    width: 40px;
    height: 40px;
    -webkit-appearance: none;
    cursor: ew-resize;
    background: transparent;
}

/* Estilo do Banner de Cookies (Ajuste Final) */
#cookie-banner {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

.btn-primary-luxury {
    background: linear-gradient(135deg, #BA826A 0%, #875340 100%);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-primary-luxury:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(135, 83, 64, 0.3);
}
