//mde 4 u
  
document.addEventListener('DOMContentLoaded', function () {
    var madeForYouContainer = document.getElementById('madeForYouContainer');
    var audioElement = document.getElementById('audio-player');
    var volumeSlider = document.querySelector('.volume-slider');
    var timelineSlider = document.querySelector('.timeline-slider');
    var currentTime = document.querySelector('.current-time');
    var totalTime = document.querySelector('.total-time');
  
    const madeForYou = [
        {
            name: 'KATHIK HITS',
            description: 'Pop hits to keep you fresh!',
            image: './assets/mix13.jpg',
            p: `Playlist &#x2022; Spotify`,
            id: '1',
            i: 'bi bi-play-circle-fill',
            url: "./assets/1.mp3"
        },
        {
            name: 'OLIYILE',
            description: 'Pop hits to keep you fresh!',
            image: './assets/mix14.jpg',
            p: `Playlist &#x2022; Spotify`,
            id: '2',
            i: 'bi bi-play-circle-fill',
            url: "./assets/2.mp3"
        },
        {
            name: 'MUN ANDHI',
            description: 'Pop hits to keep you fresh!',
            image: './assets/mix15.jpg',
            p: `Playlist &#x2022; Spotify`,
            id: '3',
            i: 'bi bi-play-circle-fill',
            url: "./assets/3.mp3"
        },
        {
            name: 'KARTHIK HITS',
            description: 'Pop hits to keep you fresh!',
            image: './assets/mix16.jpg',
            p: `Playlist &#x2022; Spotify`,
            id: '4',
            i: 'bi bi-play-circle-fill',
            url: "./assets/4.mp3"
        },
        {name :'SPB 90S HITS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix19.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'05',
        i: 'bi bi-play-circle-fill',  
        url:"./assets/7.mp3"
        },
        {name :'SPB LOVE SONGS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix20.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'06',
        i: 'bi bi-play-circle-fill',
        url:"./assets/8.mp3"
        },
      
    ];
  
    function createCard(madeForYou, container) {
        var cardDiv = document.createElement('div');
        cardDiv.className = 'link-flex-made-flex made-card';
  
        var img = document.createElement('img');
        img.src = madeForYou.image;
        img.className = 'made-cover';
  
        var colFlexDiv = document.createElement('div');
        colFlexDiv.className = 'made col-flex';
  
        var pName = document.createElement('p');
        pName.className = 'madeForYou-name';
        pName.textContent = madeForYou.name;
  
        var pDescription = document.createElement('p');
        pDescription.className = 'madeForYou-description';
        pDescription.textContent = madeForYou.description;
  
        var pPlaylist = document.createElement('p');
        pPlaylist.className = 'madeForYou-playlist';
        pPlaylist.innerHTML = madeForYou.p;
  
        var playIcon = document.createElement('i');
        playIcon.className = madeForYou.i;
        playIcon.id = madeForYou.id;
  
        playIcon.addEventListener('click', function (event) {
            var clickedButton = event.target;
  
            if (audioElement.paused) {
                playAudio(madeForYou.url);
                clickedButton.className = 'bi bi-pause-circle-fill play-pause-button';
            } else {
                pauseAudio();
                clickedButton.className = 'bi bi-play-circle-fill play-pause-button';
            }
        });
  
        colFlexDiv.appendChild(img);
        colFlexDiv.appendChild(pName);
        colFlexDiv.appendChild(pDescription);
        colFlexDiv.appendChild(pPlaylist);
        colFlexDiv.appendChild(playIcon);
  
        cardDiv.appendChild(colFlexDiv);
  
        container.appendChild(cardDiv);
    }
  
  
    madeForYou.forEach(function (madeForYou) {
        createCard(madeForYou, madeForYouContainer);
    });
  
    function playAudio(url) {
        audioElement.src = url;
        audioElement.play().catch(error => console.error(error));
    }
  
    function pauseAudio() {
        audioElement.pause();
    }
  
    function updateTimeline() {
        var currentTimeValue = audioElement.currentTime;
        var totalTimeValue = audioElement.duration;
  
        timelineSlider.value = (currentTimeValue / totalTimeValue) * 100;
        currentTime.textContent = formatTime(currentTimeValue);
        totalTime.textContent = formatTime(totalTimeValue);
    }
  
    function updateVolume() {
        var volumeValue = audioElement.volume * 100;
        volumeSlider.value = volumeValue;
    }
  
    // Event listener for timeline slider
    timelineSlider.addEventListener('input', function () {
        var newPosition = timelineSlider.value / 100;
        audioElement.currentTime = newPosition * audioElement.duration;
        updateTimeline();
    });
  
    // Event listener for volume slider
    volumeSlider.addEventListener('input', function () {
        var newVolume = volumeSlider.value / 100;
        audioElement.volume = newVolume;
        updateVolume();
    });
  
    // Update timeline and volume initially
    audioElement.addEventListener('timeupdate', updateTimeline);
    audioElement.addEventListener('volumechange', updateVolume);
  
    function formatTime(time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
  });
