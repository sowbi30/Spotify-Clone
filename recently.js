 
  //rec
  
  document.addEventListener('DOMContentLoaded', function () {
    var recentlyPlayedContainer = document.getElementById('recentlyPlayedContainer');
    var audioElement = document.getElementById('audio-player');
    var volumeSlider = document.querySelector('.volume-slider');
    var timelineSlider = document.querySelector('.timeline-slider');
    var currentTime = document.querySelector('.current-time');
    var totalTime = document.querySelector('.total-time');
  
    const recentlyPlayed = [
        { name: 'ARR', 
        description: 'Pop hits to keep you fresh!', 
        image: './assets/mix8.jpg', p: `Playlist &#x2022; Spotify`, 
        id: 'rp01', i: 'bi bi-play-circle-fill', 
        url: "./assets/3.mp3" },
        { name: 'BTS',
         description: 'Pop hits to keep you fresh!', 
         image: './assets/mix6.jpg',
          p: `Playlist &#x2022; Spotify`,
           id: 'rp02', i: 'bi bi-play-circle-fill',
            url: "./assets/4.mp3" },
        { name: 'ARR-HITS',
         description: 'Pop hits to keep you fresh!',
          image: './assets/mix9.jpg', 
          p: `Playlist &#x2022; Spotify`, id: 'rp03',
           i: 'bi bi-play-circle-fill', 
           url: "./assets/7.mp3" },
        { name: 'ARR-INTERDULE', 
        description: 'Pop hits to keep you fresh!',
         image: './assets/mix10.jpg', 
         p: `Playlist &#x2022; Spotify`,
          id: 'rp04', i: 'bi bi-play-circle-fill', 
          url: "./assets/8.mp3" },
          {name :'SPB HITS',
            description :'Pop hits to keep you fresh!',
            image: './assets/mix17.jpg',
            p : `Playlist &#x2022; Spotify`,
            id :'rp05',
            i: 'bi bi-play-circle-fill',
            url:"./assets/5.mp3"
            },
            {name :'SPB 80S HITS',
            description :'Pop hits to keep you fresh!',
            image: './assets/mix18.jpg',
            p : `Playlist &#x2022; Spotify`,
            id :'rp06',
            i: 'bi bi-play-circle-fill',
            url:"./assets/6.mp3"
            },
            {name :'SPB 90S HITS',
            description :'Pop hits to keep you fresh!',
            image: './assets/mix19.jpg',
            p : `Playlist &#x2022; Spotify`,
            id :'rp07',
            i: 'bi bi-play-circle-fill',  
            url:"./assets/7.mp3"
            },];
    
    function createCard(recentlyPlayed, container, initiallyVisible) {
        var cardDiv = document.createElement('div');
        cardDiv.className = initiallyVisible ? 'link-flex-recent-flex recent-card' : 'link-flex-recent-flex recent-card hidden'; 
  
        var img = document.createElement('img');
        img.src = recentlyPlayed.image;
        img.className = 'recent-cover';
  
        var colFlexDiv = document.createElement('div');
        colFlexDiv.className = 'recent col-flex';
  
        var pName = document.createElement('p');
        pName.className = 'recentlyPlayed-name';
        pName.textContent = recentlyPlayed.name;
  
        var pDescription = document.createElement('p');
        pDescription.className = 'recentlyPlayed-description';
        pDescription.textContent = recentlyPlayed.description;
  
        var pPlaylist = document.createElement('p');
        pPlaylist.className = 'recentlyPlayed-playlist';
        pPlaylist.innerHTML = recentlyPlayed.p;
  
        var playIcon = document.createElement('i');
        playIcon.className = recentlyPlayed.i;
        playIcon.id = recentlyPlayed.id;
  
        playIcon.addEventListener('click', function (event) {
            var clickedButton = event.target;
  
            if (audioElement.paused) {
                playAudio(recentlyPlayed.url);
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
  
        // Apply styles
        cardDiv.style.maxWidth = '170px';
        cardDiv.style.maxHeight = '220px';
        cardDiv.style.border = '1px solid white'; // Add a border
        cardDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Add a box shadow
  
        if (!initiallyVisible) {
            cardDiv.classList.add('hidden');
        }
    }
  
    function playAudio(url) {
        audioElement.src = url;
        audioElement.play().catch(error => console.error(error));
    }
  
    function pauseAudio() {
        audioElement.pause();
    }
  
    // Display all cards initially
    recentlyPlayed.forEach(function (recentlyPlayed) {
        createCard(recentlyPlayed, recentlyPlayedContainer, true);
    });
  
    // Function to toggle visibility of hidden cards
    function showMore() {
        var hiddenCards = document.querySelectorAll('.recent-card.hidden');
        hiddenCards.forEach(function (card) {
            card.classList.remove('hidden');
        });
  
        // Hide the "Show More" button after showing all cards
        showMoreButton.style.display = 'none';
    }
  
    // Add an event listener to the "Show More" button
    var showMoreButton = document.getElementById('showMoreButton');
    showMoreButton.addEventListener('click', showMore);
    });
    