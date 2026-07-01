const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");
const clickText = document.querySelector(".click-text");
const music = document.getElementById("music");
const mapContainer = document.querySelector('.map-container'); // Находим карту

envelope.addEventListener("click", () => {
    // анимация конверта
    envelope.style.transform = "scale(0)";
    envelope.style.opacity = "0";

    // показать приглашение
    setTimeout(() => {
        envelope.style.display = "none";
        clickText.style.display = "none";
        invitation.classList.remove("hidden");
        mapContainer.classList.remove('hidden');
        invitation.classList.add("show");

        music.play();

        invitation.scrollIntoView({
            behavior: "smooth"
        });
    }, 1000);
});


const weddingDate = new Date("2026-07-09T14:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}, 1000);