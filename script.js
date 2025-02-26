// Generar corazones flotantes
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);

    let xPos = Math.random() * window.innerWidth;
    let size = Math.random() * 20 + 10; 

    heart.style.left = `${xPos}px`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Evento del botón "Ver Regalo"
document.getElementById("verRegalo").addEventListener("click", function() {
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
    }, 50);
});
