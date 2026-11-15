// Love letter
const loveLetter = `Dear mary jane
❤️,

You are a special person, and you deserve happiness every day.

May your life always be filled with joy, beautiful memories and endless smiles.

Never forget how amazing and valuable you are.

Sending you lots of love and warm wishes.

Forever special! ❤️💕`;


let typingTimer;


// Show love message
function showLove() {

    document.getElementById("question").style.display = "none";

    document.getElementById("love").style.display = "block";

    typeMessage();

}


// Typing animation
function typeMessage() {

    clearInterval(typingTimer);

    const message = document.getElementById("typedMessage");

    message.textContent = "";

    let index = 0;

    typingTimer = setInterval(() => {

        message.textContent += loveLetter[index];

        index++;

        if (index >= loveLetter.length) {
            clearInterval(typingTimer);
        }

    }, 55);

}


// Falling hearts
function createHeart() {

    const heart = document.createElement("span");

    heart.className = "falling-heart";

    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 7000);

}

setInterval(createHeart, 300);


// Moving NO button
const noButton = document.getElementById("noBtn");

noButton.addEventListener("mouseenter", () => {

    noButton.style.position = "relative";

    noButton.style.left =
        (Math.random() * 80 - 40) + "px";

});


// Background music
function toggleMusic() {

    const music = document.getElementById("backgroundMusic");

    const button = document.getElementById("musicBtn");

    if (music.paused) {

        music.play().then(() => {
            button.textContent = "⏸ Pause Music 🎵";
        }).catch(() => {
            button.textContent = "Add music.mp3 first";
        });

    } else {

        music.pause();

        button.textContent = "▶ Play Music 🎵";

    }

}


// Restart webpage
function restartPage() {

    clearInterval(typingTimer);

    document.getElementById("backgroundMusic").pause();

    document.getElementById("musicBtn").textContent =
        "▶ Play Music 🎵";

    document.getElementById("love").style.display = "none";

    document.getElementById("question").style.display = "block";

    noButton.style.position = "static";

    noButton.style.left = "0px";

    document.getElementById("typedMessage").textContent = "";

}