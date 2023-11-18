// recommended 
  
document.addEventListener('DOMContentLoaded', function () {
    var recommendedContainer = document.getElementById('recommendedContainer');
    var audioElement = document.getElementById('audio-player');
    var volumeSlider = document.querySelector('.volume-slider');
    var timelineSlider = document.querySelector('.timeline-slider');
    var currentTime = document.querySelector('.current-time');
    var totalTime = document.querySelector('.total-time');
    const showMoreButton = document.getElementById('showMoreButtonRecommended');

  
    const recommended = [
        {
            name: 'MUN ANDHI',
            description: 'Pop hits to keep you fresh!',
            image: './assets/mix15.jpg',
            p: `Playlist &#x2022; Spotify`,
            id: '01',
            i: 'bi bi-play-circle-fill',
            url: "./assets/3.mp3"
        },
        {
            name: 'KARTHIK HITS',
            description: 'Pop hits to keep you fresh!',
            image: './assets/mix16.jpg',
            p: `Playlist &#x2022; Spotify`,
            id: '02',
            i: 'bi bi-play-circle-fill',
            url: "./assets/4.mp3"
        },
        {
            name: 'SPB HITS',
            description: 'Pop hits to keep you fresh!',
            image: './assets/mix17.jpg',
            p: `Playlist &#x2022; Spotify`,
            id: '03',
            i: 'bi bi-play-circle-fill',
            url: "./assets/5.mp3"
        },
        {
            name: 'SPB 80S HITS',
            description: 'Pop hits to keep you fresh!',
            image: './assets/mix18.jpg',
            p: `Playlist &#x2022; Spotify`,
            id: '04',
            i: 'bi bi-play-circle-fill',
            url: "./assets/6.mp3"
        },
         {name :'ARR-INTERDULE',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix10.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'05',
        i: 'bi bi-play-circle-fill',
        url:"./assets/8.mp3"
        },
        {name :'HARRIS HITS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix11.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'06',
        i: 'bi bi-play-circle-fill',
        url:"./assets/9.mp3"
        },
      
    ];
  
    let initialrecommended = [...recommended];
    let currentIndex = recommended.length;

    function createCard(recommendedItem, container) {
        var cardDiv = document.createElement('div');
        cardDiv.className = 'link-flex-rec-flex rec-card';
  
        var img = document.createElement('img');
        img.src = recommendedItem.image;
        img.className = 'rec-cover';
  
        var colFlexDiv = document.createElement('div');
        colFlexDiv.className = 'rec col-flex';
  
        var pName = document.createElement('p');
        pName.className = 'recommended-name';
        pName.textContent = recommendedItem.name;
  
        var pDescription = document.createElement('p');
        pDescription.className = 'recommended-description';
        pDescription.textContent = recommendedItem.description;
  
        var pPlaylist = document.createElement('p');
        pPlaylist.className = 'recommended-playlist';
        pPlaylist.innerHTML = recommendedItem.p;
  
        var playIcon = document.createElement('i');
        playIcon.className = recommendedItem.i;
        playIcon.id = recommendedItem.id;
  
        playIcon.addEventListener('click', function (event) {
            var clickedButton = event.target;
  
            if (audioElement.paused) {
                playAudio(recommendedItem.url);
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
    ///
    function loadMoreData() {
        const itemsToAdd = 3;

        for (let i = 0; i < itemsToAdd; i++) {
            const indexToAdd = i % initialrecommended.length;
            const itemToAdd = initialrecommended[indexToAdd];
            recommended.push(itemToAdd);
            createCard(itemToAdd,recommendedContainer);
        }

        currentIndex = recommended.length;
    }

    showMoreButton.addEventListener('click', function () {
        loadMoreData();
    });

    recommended.forEach(function (item) {
        createCard(item, recommendedContainer);
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
  
