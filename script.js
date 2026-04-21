// 🟢 INÍCIO: script.js - Lógica Principal (Experiência e Neurovendas)
// Regra Nº 1 em vigor: Estrutura base estabelecida. Apenas adições e aprimoramentos a partir daqui.

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Controle do Preloader Sensorial
    // Garante que a marca tenha o tempo de exposição correto antes de revelar o site
    const preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                preloader.style.opacity = "0"; // Inicia o fade out suave
                setTimeout(() => {
                    preloader.style.display = "none"; // Remove o elemento do fluxo da tela
                }, 700); // Sincronizado com a duração da transição no CSS
            }, 1800); // Tempo ideal para fixação visual da logo antes de liberar o conteúdo
        });
    }

    // 2. Efeito Lanterna Dinâmica (Estética Dark Tech)
    // Rastreia sutilmente o movimento do mouse para interagir com fundos de tom obsidiana
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        // Injeta as coordenadas do cursor nas variáveis CSS globais
        document.documentElement.style.setProperty('--cursor-x', `${clientX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3. Estrutura Base para Navegação SPA (Single Page Application)
    // Prepara a rota fluida de alta conversão entre as abas, sem recarregar a página
    const navigateTo = (route) => {
        // Esta função será expandida com o conteúdo HTML de cada página (Lisos, Boutique, etc.)
        console.log(`Navegação ativada para a rota: ${route}`);
        
        // A lógica de injeção de views entrará aqui nas próximas etapas do desenvolvimento
    };

    // Expõe as funções essenciais para uso global na aplicação
    window.appState = {
        navigateTo
    };
    
});
// 🔴 FIM: script.js
