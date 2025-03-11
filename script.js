document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const menuButton = document.getElementById('menu-btn');
    const socialMenu = document.getElementById('social-menu');
    const closeSocialButton = document.getElementById('close-social');
    const logo = document.getElementById('logo'); // Referencia al logo
    
    let isPlaying = false;
    const audio = new Audio('https://stream.zeno.fm/ajnldia1z5utv'); // Cambia la URL con tu stream

    // Función de reproducción/pausa
    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.classList.remove('stop');
            playButton.classList.add('play');
            logo.classList.remove('logo-moving'); // Detener la animación
        } else {
            audio.play();
            playButton.classList.remove('play');
            playButton.classList.add('stop');
            logo.classList.add('logo-moving'); // Iniciar la animación
        }
        isPlaying = !isPlaying;
    });

    // Control de volumen
    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value;  // Ajusta el volumen según el slider
    });

    // Abrir menú de redes sociales
    menuButton.addEventListener('click', () => {
        socialMenu.classList.add('social-visible');
        socialMenu.style.visibility = 'visible'; // Asegura que sea visible
        socialMenu.style.opacity = '1'; // Cambia la opacidad a 1 para mostrar el menú
    });

    // Cerrar menú de redes sociales
    closeSocialButton.addEventListener('click', () => {
        socialMenu.classList.remove('social-visible');
        socialMenu.style.visibility = 'hidden'; // Oculta el menú
        socialMenu.style.opacity = '0'; // Cambia la opacidad a 0 para ocultarlo
    });
});
