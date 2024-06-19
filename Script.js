const image = document.getElementById('portada'),
    title = document.getElementById('titulo-musica'),
    artist = document.getElementById('artista-musica'),
    currentTimeEl = document.getElementById('tiempo-actual'),
    durationEl = document.getElementById('duracion'),
    progress = document.getElementById('progreso'),
    playerProgress = document.getElementById('progreso-reproductor'),
    prevBtn = document.getElementById('anterior'),
    nextBtn = document.getElementById('siguiente'),
    playBtn = document.getElementById('reproducir'),
    background = document.getElementById('img-fondo');

const music = new Audio();

const songs = [
    {
        path: 'assets/1.mp3',
        displayName: 'Very, Slowly',
        cover: 'assets/1.jpg',
        artist: 'BIBI',
    },
    {
        path: 'assets/2.mp3',
        displayName: 'Your existence',
        cover: 'assets/2.jpg',
        artist: 'Wonstein',
    },
    {
        path: 'assets/3.mp3',
        displayName: 'Free',
        cover: 'assets/3.jpg',
        artist: 'Xydo',
    },
    {
        path: 'assets/4.mp3',
        displayName: 'Starlight',
        cover: 'assets/4.jpg',
        artist: 'Taeil',
    },
    {
        path: 'assets/5.mp3',
        displayName: 'With',
        cover: 'assets/5.jpg',
        artist: 'Kim Taeri, Nam Joohyuk, Bona...',
    },
    {
        path: 'assets/6.mp3',
        displayName: 'Your World',
        cover: 'assets/6.jpg',
        artist: 'Seol Hoseung (SURL)',
    },
    {
        path: 'assets/7.mp3',
        displayName: 'Go!',
        cover: 'assets/7.jpg',
        artist: 'DK (SEVENTEEN)',
    },
    {
        path: 'assets/8.mp3',
        displayName: 'Stardust Love Song',
        cover: 'assets/8.jpg',
        artist: 'Park Jihyo (TWICE)',
    },
    {
        path: 'assets/9.mp3',
        displayName: 'To My Youth',
        cover: 'assets/9.jpg',
        artist: 'Bolbbalgan4',
    },
    {
        path: 'assets/10.mp3',
        displayName: 'Mean',
        cover: 'assets/10.jpg',
        artist: 'Bolbbalgan4',
    },
    {
        path: 'assets/11.mp3',
        displayName: 'Some',
        cover: 'assets/11.jpg',
        artist: 'Bolbbalgan4',
    },
    {
        path: 'assets/12.mp3',
        displayName: 'Loveable',
        cover: 'assets/12.jpg',
        artist: 'SinB',
    },
    {
        path: 'assets/13.mp3',
        displayName: 'Stay With Me',
        cover: 'assets/13.jpg',
        artist: 'CHANYEOL, Punch',
    },
    {
        path: 'assets/14.mp3',
        displayName: 'I Love You Boy',
        cover: 'assets/14.jpg',
        artist: 'Suzy',
    },
    {
        path: 'assets/15.mp3',
        displayName: 'Dream',
        cover: 'assets/15.jpg',
        artist: 'Kim So Hyun',
    },
    {
        path: 'assets/16.mp3',
        displayName: 'To Be Your Love',
        cover: 'assets/16.jpg',
        artist: 'Guo Junchen',
    },
    {
        path: 'assets/17.mp3',
        displayName: 'Star',
        cover: 'assets/17.jpg',
        artist: 'Guo Junchen',
    },
    {
        path: 'assets/18.mp3',
        displayName: 'Future',
        cover: 'assets/18.jpg',
        artist: 'Red Velvet',
    },
    {
        path: 'assets/19.mp3',
        displayName: 'Running',
        cover: 'assets/19.jpg',
        artist: 'Gaho',
    },
    {
        path: 'assets/20.mp3',
        displayName: 'My Love',
        cover: 'assets/20.jpg',
        artist: 'Davichi',
    },
    {
        path: 'assets/21.mp3',
        displayName: 'Where Is Dream',
        cover: 'assets/21.jpg',
        artist: '10CM',
    },
    {
        path: 'assets/22.mp3',
        displayName: 'Day & Night',
        cover: 'assets/22.jpg',
        artist: 'Jung Seung Hwan',
    },
    {
        path: 'assets/23.mp3',
        displayName: 'Love Letter',
        cover: 'assets/23.jpg',
        artist: 'Bolbbalgan4',
    },
    {
        path: 'assets/24.mp3',
        displayName: 'One Day',
        cover: 'assets/24.jpg',
        artist: 'Kim Feel',
    },
    {
        path: 'assets/25.mp3',
        displayName: 'Romantic Sunday',
        cover: 'assets/25.jpg',
        artist: 'Car, the Garden',
    },
    {
        path: 'assets/39.mp3',
        displayName: 'In Heaven',
        cover: 'assets/39.jpg',
        artist: 'JYJ',
    },
    {
        path: 'assets/40.mp3',
        displayName: 'Because I am Stupid',
        cover: 'assets/40.jpg',
        artist: 'SS501',
    },
    {
        path: 'assets/26.mp3',
        displayName: 'New Jeans',
        cover: 'assets/26.jpg',
        artist: 'NewJeans',
    },
    {
        path: 'assets/27.mp3',
        displayName: 'Super Shy',
        cover: 'assets/27.jpg',
        artist: 'NewJeans',
    },
    {
        path: 'assets/28.mp3',
        displayName: 'Cool With You',
        cover: 'assets/28.jpg',
        artist: 'NewJeans',
    },
    {
        path: 'assets/29.mp3',
        displayName: 'ETA',
        cover: 'assets/29.jpg',
        artist: 'NewJeans',
    },
    {
        path: 'assets/30.mp3',
        displayName: 'Get Up',
        cover: 'assets/30.jpg',
        artist: 'NewJeans',
    },
    {
        path: 'assets/31.mp3',
        displayName: 'Zero',
        cover: 'assets/31.jpg',
        artist: 'NewJeans',
    },
    {
        path: 'assets/32.mp3',
        displayName: 'OMG',
        cover: 'assets/32.jpg',
        artist: 'NewJeans',
    },
    {
        path: 'assets/33.mp3',
        displayName: 'attention',
        cover: 'assets/33.jpg',
        artist: 'NewJeans',
    },
    {
        path: 'assets/34.mp3',
        displayName: 'Hurt',
        cover: 'assets/34.jpg',
        artist: 'NewJeans',
    },
    {
        path: 'assets/35.mp3',
        displayName: 'Cookie',
        cover: 'assets/35.jpg',
        artist: 'NewJeans',
    },
    {
        path: 'assets/36.mp3',
        displayName: 'ASAP',
        cover: 'assets/36.jpg',
        artist: 'NewJeans',
    },
    {
        path: 'assets/37.mp3',
        displayName: 'Hype Boy',
        cover: 'assets/37.jpg',
        artist: 'NewJeans',
    },
    {
        path: 'assets/38.mp3',
        displayName: 'Ditto',
        cover: 'assets/38.jpg',
        artist: 'NewJeans',
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Cambiar el icono del botón de reproducción
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Establecer título de desplazamiento del botón
    playBtn.setAttribute('title', 'Pausar');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Cambiar icono del botón de pausa
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Establecer título de desplazamiento del botón
    playBtn.setAttribute('title', 'Reproducir');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);
