let clickCount = 0;

const counterButton = document.getElementById("counter-button");
const counterDescription = document.getElementById("counter-description");
const counterUnit = document.getElementById("counter-unit");

const audios = [
    "kururu.mp3",
    "kururu1.mp3",
    "kuruto.mp3"
];

const audio = document.getElementById("audio");

let currentAudioIndex = 0;

counterButton.addEventListener("click", () => {
    clickCount++;
    counterDescription.textContent = `O kuru~ já foi clicado ${clickCount} vezes`;

    if (currentAudioIndex < audios.length) {
        audio.src = audios[currentAudioIndex];
        audio.play();
        currentAudioIndex++;
    } else {
        currentAudioIndex = 0;
        audio.src = audios[currentAudioIndex];
        audio.play();
    }
});
