// Searchinput

document.getElementById('search-icon').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input');
    searchInput.style.display = (searchInput.style.display === 'none' || searchInput.style.display === '') ? 'block' : 'none';
  });
  
  document.getElementById('search-IMG').addEventListener('click', function() {
    var searchInput = document.getElementById('SEARCH-input');
    searchInput.style.display = (searchInput.style.display === 'none' || searchInput.style.display === '') ? 'block' : 'none';
  });
  
  //login-user
  document.getElementById('login-icon').addEventListener('click', function() {
    var loginFields = document.getElementById('login-fields');
    loginFields.style.display = (loginFields.style.display === 'none' || loginFields.style.display === '') ? 'flex' : 'none';
  });
  
  // ......SIDEBAR.......
  
  const albums = [
        {name :'BTS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix6.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'01',
        i: 'bi bi-play-circle-fill',
        url:'./assets/1.MP3',
          },
        {name :'BTS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix7.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'02',
        i: 'bi bi-play-circle-fill',
        url:"./assets/2.mp3"
        },
        {name :'ARR',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix8.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'03',
        i: 'bi bi-play-circle-fill',
        url:"./assets/3.mp3"
        },
        {name :'BTS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix6.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'04',
        i: 'bi bi-play-circle-fill',
        url:"./assets/4.mp3"
        },
        {name :'BTS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix7.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'05',
        i: 'bi bi-play-circle-fill',
        url:"./assets/5.mp3"
        },
        {name :'ARR',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix8.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'06',
        i: 'bi bi-play-circle-fill',
        url:"./assets/6.mp3"
  
        },
        {name :'ARR-HITS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix9.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'07',
        i: 'bi bi-play-circle-fill',
        url:"./assets/7.mp3"
        },
        {name :'ARR-INTERDULE',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix10.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'08',
        i: 'bi bi-play-circle-fill',
        url:"./assets/8.mp3"
        },
        {name :'HARRIS HITS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix11.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'09',
        i: 'bi bi-play-circle-fill',
        url:"./assets/9.mp3"
        },
        {name :'HARRIS BGM',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix12.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'10',
        i: 'bi bi-play-circle-fill',
        url:"./assets/10.mp3"
        },
        {name :'KATHIK HITS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix13.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'11',
        i: 'bi bi-play-circle-fill',
        url:"./assets/1.mp3"
        },
        {name :'OLIYILE',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix14.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'12',
        i: 'bi bi-play-circle-fill',
        url:"./assets/2.mp3"
        },
        {name :'MUN ANDHI',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix15.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'13',
        i: 'bi bi-play-circle-fill',
        url:"./assets/3.mp3"
        },
        {name :'KARTHIK HITS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix16.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'14',
        i: 'bi bi-play-circle-fill',
        url:"./assets/4.mp3"
        },
        {name :'SPB HITS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix17.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'15',
        i: 'bi bi-play-circle-fill',
        url:"./assets/5.mp3"
        },
        {name :'SPB 80S HITS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix18.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'16',
        i: 'bi bi-play-circle-fill',
        url:"./assets/6.mp3"
        },
        {name :'SPB 90S HITS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix19.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'17',
        i: 'bi bi-play-circle-fill',  
        url:"./assets/7.mp3"
        },
        {name :'SPB LOVE SONGS',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix20.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'18',
        i: 'bi bi-play-circle-fill',
        url:"./assets/8.mp3"
        },
        ]
  document.addEventListener('DOMContentLoaded', function () {
    var albumsContainer = document.getElementById('albums-container');
    var audioElement = document.getElementById('audio-player');
    var volumeSlider = document.querySelector('.volume-slider');
    var timelineSlider = document.querySelector('.timeline-slider');
    var currentTime = document.querySelector('.current-time');
    var totalTime = document.querySelector('.total-time');
  
    // Loop through the albums array and create HTML content
    for (var i = 0; i < albums.length; i++) {
      var album = albums[i];
  
      // Create ....album container
      var albumDiv = document.createElement('div');
      albumDiv.className = 'link-flex album-flex';
  
      // Create ....image element
      var img = document.createElement('img');
      img.src = album.image;
      img.className = 'album-cover';
  
      // Create ....column container
      var colFlexDiv = document.createElement('div');
      colFlexDiv.className = 'col-flex';
  
      // Create..... paragraph for album name
      var pName = document.createElement('p');
      pName.className = 'album-name';
      pName.textContent = album.name;
  
      // Create.... paragraph for playlist information
      var pPlaylist = document.createElement('p');
      pPlaylist.innerHTML = album.p;
  
      // Create.... play/pause button
      var playPauseButton = document.createElement('i');
      playPauseButton.className = album.i + ' play-pause-button';
      playPauseButton.id = album.id;
  
      playPauseButton.addEventListener('click', function (event) {
        var clickedButton = event.target;
        var clickedId = clickedButton.id;
  
        if (audioElement.paused) {
          playAudio(albums[clickedId - 1].url);
          clickedButton.className = 'bi bi-pause-circle-fill play-pause-button';
        } else {
          pauseAudio();
          clickedButton.className = 'bi bi-play-circle-fill play-pause-button';
        }
      });
  
      colFlexDiv.appendChild(pName);
      colFlexDiv.appendChild(pPlaylist);
      colFlexDiv.appendChild(playPauseButton);
  
      albumDiv.appendChild(img);
      albumDiv.appendChild(colFlexDiv);
  
      albumsContainer.appendChild(albumDiv);
    }
  
    function formatTime(time) {
      var minutes = Math.floor(time / 60);
      var seconds = Math.floor(time % 60);
      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
  
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
  });
  
 