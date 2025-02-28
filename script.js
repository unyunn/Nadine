// Halaman Awal: Pindah ke Halaman Utama
function nextPage() {
    window.location.href = "birthday_message.html"; // Ganti dengan halaman utama yang benar
}

// Efek Ketikan
const textElement = document.querySelector(".typing-text");
const text = "Happy Birthday Nadine";

let i = 0;
function typeEffect() {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

// Efek Confetti
const confettiCanvas = document.getElementById("confetti");
const confettiCtx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confetti = [];

for (let i = 0; i < 100; i++) {
    confetti.push({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 10 + 5,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        tilt: Math.random() * 10 - 5
    });
}

function drawConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confetti.forEach(c => {
        confettiCtx.beginPath();
        confettiCtx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
        confettiCtx.fillStyle = c.color;
        confettiCtx.fill();
    });
    updateConfetti();
}

function updateConfetti() {
    confetti.forEach(c => {
        c.y += c.d * 0.3;
        if (c.y > confettiCanvas.height) c.y = 0;
    });
}

function animateConfetti() {
    drawConfetti();
    requestAnimationFrame(animateConfetti);
}

animateConfetti();

// Menampilkan Pesan Tersembunyi
function revealMessage() {
    const message = document.getElementById("hiddenMessage");
    message.style.display = "block";
    message.classList.add("fade-in-text");
}

// Efek Bintang di Latar Belakang
const starsCanvas = document.createElement("canvas");
document.body.appendChild(starsCanvas);

const starsCtx = starsCanvas.getContext("2d");
starsCanvas.width = window.innerWidth;
starsCanvas.height = window.innerHeight;
starsCanvas.style.position = "fixed";
starsCanvas.style.top = "0";
starsCanvas.style.left = "0";
starsCanvas.style.pointerEvents = "none";

let stars = [];
const numStars = 100;

// Membuat Bintang
for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * starsCanvas.width,
        y: Math.random() * starsCanvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2
    });
}

function drawStars() {
    starsCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
    starsCtx.fillStyle = "white";
    stars.forEach(star => {
        starsCtx.beginPath();
        starsCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        starsCtx.fill();
    });
}

function updateStars() {
    stars.forEach(star => {
        star.y += star.speed;
        if (star.y > starsCanvas.height) star.y = 0;
    });
}

function animateStars() {
    drawStars();
    updateStars();
    requestAnimationFrame(animateStars);
}

animateStars();


document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");
    const musicBtn = document.getElementById("music-btn");
    const musicIcon = document.getElementById("music-icon");

    let isPlaying = false; // Status musik

    function toggleMusic() {
        if (isPlaying) {
            music.pause();
            musicIcon.src = "play.png"; // Kembali ke ikon play
        } else {
            music.play().catch(error => console.log("Autoplay tidak diizinkan:", error));
            musicIcon.src = "mute.png"; // Ganti ke ikon mute
        }
        isPlaying = !isPlaying;
    }

    musicBtn.addEventListener("click", toggleMusic);
});
