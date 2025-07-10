// popup.js
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.slider .item img').forEach(img => {
        img.addEventListener('click', function(e) {
            // Crea el overlay del popup
            const popup = document.createElement('div');
            popup.className = 'card-popup';

            // Botón cerrar
            const btn = document.createElement('button');
            btn.className = 'close-btn';
            btn.innerHTML = '&times;';
            btn.onclick = () => {
                popup.remove();
                document.body.style.overflow = '';
            };

            // Imagen
            const popupImg = document.createElement('img');
            popupImg.src = img.src;
            popupImg.alt = img.alt || '';

            // Nombre de la carta (opcional)
            const p = document.createElement('p');
            p.textContent = img.alt || '';

            // Agrega todo al popup
            popup.appendChild(btn);
            popup.appendChild(popupImg);
            popup.appendChild(p);

            // Bloquea el scroll de fondo
            document.body.style.overflow = 'hidden';

            // Cierra si haces click fuera de la carta
            popup.addEventListener('click', function(e){
                if(e.target === popup) {
                    document.body.style.overflow = '';
                    popup.remove();
                }
            });

            // Muestra el popup
            document.body.appendChild(popup);
        });
    });
});
