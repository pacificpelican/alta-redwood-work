const songs = [
    {
        title: "Song 1",
        file: "songs/song1.mp3",
        element: null
    },
    {
        title: "Song 2",
        file: "songs/song2.mp3",
        element: null
    },
    {
        title: "Song 3",
        file: "songs/song3.mp3",
        element: null
    },
    {
        title: "Song 4",
        file: "songs/song4.mp3",
        element: null
    },
    {
        title: "Song 5",
        file: "songs/song5.mp3",
        element: null
    }
];

function setupPlayers() {
    songs.forEach((song, index) => {
        const audio = document.createElement("audio");
        audio.src = song.file;
        audio.id = `audio-${index}`;
        song.element = audio;

        const container = document.createElement("div");
        container.className = "audio-player";

        const title = document.createElement("h3");
        title.innerText = song.title;

        const playButton = document.createElement("button");
        playButton.innerText = "Play";
        playButton.onclick = () => {
            stopAll();
            audio.play();
        };

        const pauseButton = document.createElement("button");
        pauseButton.innerText = "Pause";
        pauseButton.onclick = () => {
            audio.pause();
        };

        const volumeControl = document.createElement("input");
        volumeControl.type = "range";
        volumeControl.min = 0;
        volumeControl.max = 1;
        volumeControl.step = 0.1;
        volumeControl.value = 1;
        volumeControl.oninput = () => {
            audio.volume = volumeControl.value;
        };

        container.appendChild(title);
        container.appendChild(playButton);
        container.appendChild(pauseButton);
        container.appendChild(volumeControl);
        document.body.appendChild(container);
    });
}

function stopAll() {
    songs.forEach(song => {
        if (song.element) {
            song.element.pause();
            song.element.currentTime = 0;
        }
    });
}

document.addEventListener("DOMContentLoaded", setupPlayers);