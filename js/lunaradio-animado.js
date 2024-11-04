// Crear una clase para manejar la radio
class RadioPlayer {
    constructor(streamUrl) {
        this.audio = new Audio(streamUrl);
        this.audio.loop = true; // Reproducir en bucle
        this.audio.volume = 1.0; // Volumen máximo
        this.isPlaying = false; // Estado de reproducción
    }

    // Método para iniciar la reproducción
    play() {
        if (!this.isPlaying) {
            this.audio.play().then(() => {
                this.isPlaying = true;
                console.log("Reproduciendo en segundo plano.");
            }).catch(error => {
                console.error("Error al intentar reproducir:", error);
            });
        }
    }

    // Método para detener la reproducción
    stop() {
        this.audio.pause();
        this.audio.currentTime = 0; // Reiniciar al principio
        this.isPlaying = false;
    }
}

// Crear una instancia del reproductor de radio con la URL de tu stream
const myRadio = new RadioPlayer("https://stream.zeno.fm/ajnldia1z5utv"); // Reemplaza con la URL de tu stream de radio

// Intentar iniciar la reproducción automáticamente
myRadio.play();

// Mantener la reproducción en segundo plano
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && !myRadio.isPlaying) {
        myRadio.play(); // Reproducir cuando se vuelve visible
    }
});

// Agregar eventos para manejar el audio
window.addEventListener("blur", () => {
    if (myRadio.isPlaying) {
        console.log("La ventana está inactiva. Manteniendo la reproducción.");
    }
});

window.addEventListener("focus", () => {
    if (!myRadio.isPlaying) {
        myRadio.play(); // Reproducir al enfocar la ventana
    }
});
