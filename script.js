function verificarCodigo() {
    const codigo = document.getElementById('codigo').value;
    const feedback = document.getElementById('feedback');
    const video = document.getElementById('videoFondo');
    
    if (codigo === 'i09') {  // Cambié 'i09' a '109' como en tu ejemplo inicial
        // Ocultar el popup
        document.getElementById('popup').style.display = 'none';
        
        // Mostrar el video y reproducirlo con sonido
        video.style.display = 'block';
        video.muted = false; // Asegúrate de que el sonido no esté silenciado
        video.play().catch((error) => {
            console.error("Error al reproducir el video:", error);
        });
    } else {
        feedback.textContent = 'Código incorrecto. Intenta de nuevo.';
    }
}

// Redirigir después de que el video termine
function redirigirDespuesDelVideo() {
    // Cambia "https://www.ejemplo.com" por la URL a la que deseas redirigir
    window.location.href = "https://edulcanos.itch.io/disea-tu-childroid";
}

// Selecciona el elemento del video
const video = document.getElementById('videoFondo');

// Agrega el evento 'ended' para redirigir cuando el video termine
video.addEventListener('ended', redirigirDespuesDelVideo);
