const music = document.querySelector("audio");
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const songs = [
    {
        name: 'bensound-anewbeginning',
        title: 'Saphire',
        artist: 'Ashab',
    
    },
    {
    name: 'bensound-energy',
    title: 'Hollow',
    artist: 'Wazowski',

},
{
    name: 'bensound-tenderness',
    title: 'Sleepy Night',
    artist: 'Ashab',

},



]



let isPlaying = false;

// For Play Functionality

const playMusic =  () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play' , 'fa-pause');
    img.classList.add("anime");
};

// For Play Functionality

const pauseMusic =  ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause' , 'fa-play');
    img.classList.remove("anime");
};

play.addEventListener('click' , () =>{
   
isPlaying? pauseMusic() : playMusic();

});

// Changing the music 
const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "media/"+songs.name+".mp3";
    img.src = "media/"+songs.name+".jpg";

};

songIndex = 0;

// loadSong(songs[0]);

const nextSong = ()=>{
 songIndex = (songIndex + 1) % songs.length;
loadSong(songs[songIndex]);
playMusic();
};

const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
   };
   


next.addEventListener('click' , nextSong);
prev.addEventListener('click' , prevSong );