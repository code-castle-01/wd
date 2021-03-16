// JavaScript Drum Kit App

{
    function removeTransition(e) {
        if (e.propertyName !== "transform") return;
        e.target.classList.remove("playing");
    }

    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;

        key.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
    }

    const keys = Array.from(document.querySelectorAll(".key"));
    keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
    window.addEventListener("keydown", playSound);
}

const keysData = [
    { dataKey: 65, kbd: "A", value: "clap" },
    { dataKey: 83, kbd: "S", value: "hihat" },
    { dataKey: 68, kbd: "D", value: "kick" },
    { dataKey: 70, kbd: "F", value: "openhat" },
    { dataKey: 71, kbd: "G", value: "boom" },
    { dataKey: 72, kbd: "H", value: "ride" },
    { dataKey: 74, kbd: "J", value: "snare" },
    { dataKey: 75, kbd: "K", value: "tom" },
    { dataKey: 76, kbd: "L", value: "tink" },
];
