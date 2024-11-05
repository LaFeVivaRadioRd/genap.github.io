// lunaradio-animado.js

// Inicializar la radio
const radio = $("#player").lunaradio({
    userinterface: "big",
    backgroundcolor: "rgba(9,15,25,0.8)",
    fontcolor: "#ffffff",
    hightlightcolor: "#000000",
    fontname: "Saira Condensed",
    googlefont: "Saira+Condensed:wght@100",
    fontratio: "0.4",
    radioname: "Live Music",
    scroll: "false",
    coverimage: "https://i.ibb.co/T414C4v/Logo-Gen-Ap.png",
    onlycoverimage: "false",
    coverstyle: "animated",
    usevisualizer: "real",
    visualizertype: "2",
    streamurl: "https://stream.zeno.fm/ajnldia1z5utv",
    streamtype: "zeno",
    metadatainterval: "26000",
    volume: "100",
    autoplay: "true",
    displayliveicon: "true",
    visualizeropacity: "1.0",
    multicolorvisualizer: "true",
    color1: "#00FF00",
    color2: "#ffff00",
    color3: "#FF1F6F",
    color4: "#FF1F6F",
});

// Mantener la radio reproduciendo en segundo plano
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        radio.lunaradio('play');
    } else {
        radio.lunaradio('play');
    }
});

// Evitar que la radio se detenga en segundo plano (reintentar cada 5 segundos)
setInterval(() => {
    if (document.hidden) {
        radio.lunaradio('play');
    }
}, 5000);

// Función para mostrar la hora
function reloj() {
    let elementoID = document.getElementById('relogio');
    let horalocal = new Date().toLocaleTimeString('es');
    elementoID.innerHTML = horalocal;
}
setInterval(reloj, 1000);

// Toggle del menú de navegación móvil
$(".mobile-nav-toggle").click(function() {
    $("body").toggleClass("mobile-nav-active");
    $(".mobile-nav-toggle i").toggleClass("fa-bars fa-times");
});
