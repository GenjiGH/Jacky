// Generar corazones en posiciones aleatorias
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);

    let xPos = Math.random() * window.innerWidth; // Posición en X
    let yPos = Math.random() * window.innerHeight; // Posición en Y
    let size = Math.random() * 20 + 15; // Tamaño aleatorio entre 15px y 35px

    heart.style.left = `${xPos}px`;
    heart.style.top = `${yPos}px`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear corazones constantemente
setInterval(createHeart, 200);

// Evento del botón "Ver Regalo"
document.getElementById("verRegalo").addEventListener("click", function () {
    let count = 0;

    let interval = setInterval(() => {
        createHeart();
        count++;

        if (count >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.body.innerHTML = `<h1 class="sorpresa">🎉 Sorpresa 🎉</h1>`;
            }, 2000);
        }
    }, 30);
});
