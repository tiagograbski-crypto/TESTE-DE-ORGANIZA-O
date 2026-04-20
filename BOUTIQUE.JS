// Inicializar Ícones
lucide.createIcons();

// Sistema de Sacola Simples (CartSystem)
const CartSystem = {
    add: function(name, price, image, button) {
        console.log(`Adicionado: ${name} - R$ ${price}`);
        alert(`${name} foi adicionado à sua sacola!`);
        // Aqui depois conectamos com o seu checkout/WhatsApp
    },
    activateCoupon: function(button) {
        button.innerHTML = "CUPOM ATIVADO!";
        button.classList.add('bg-green-600');
        alert("Cupom BOUTIQUE30 aplicado com sucesso!");
    }
};

// Lógica de Troca Foto/Vídeo que tem no seu HTML
document.querySelectorAll('.toggle-media-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const container = this.closest('.group\\/media');
        const type = this.dataset.type;
        const photo = container.querySelector('.media-photo');
        const video = container.querySelector('.media-video');

        if (type === 'video') {
            photo.classList.add('opacity-0');
            video.classList.remove('opacity-0');
            video.play();
        } else {
            video.classList.add('opacity-0');
            photo.classList.remove('opacity-0');
            video.pause();
        }
    });
});
