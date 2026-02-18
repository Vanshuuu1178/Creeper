const msg = "I know I messed up, and honestly, the last few days were pretty empty without our chats. I'm really glad we're sorted now. I promise to be a better friend moving forward. Peace? 🏳️";
let i = 0;

function typeWriter() {
    if (i < msg.length) {
        document.getElementById("typewriter").innerHTML += msg.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

function revealMemory(el, text) {
    el.innerHTML = text;
    el.style.background = "#bb86fc";
    el.style.color = "#000";
}

function acceptPeace() {
    document.getElementById('overlay').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('stamp-id').style.opacity = '1';
    }, 500);
    for (let j = 0; j < 25; j++) { createHeart(); }
}

function closeCert() {
    document.getElementById('overlay').style.display = 'none';
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}

window.onload = typeWriter;