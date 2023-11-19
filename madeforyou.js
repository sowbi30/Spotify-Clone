// playlist 
  
document.addEventListener('DOMContentLoaded', function () {
    var madeForYouContainer = document.getElementById('madeForYouContainer');
    var audioElement = document.getElementById('audio-player');
    var volumeSlider = document.querySelector('.volume-slider');
    var timelineSlider = document.querySelector('.timeline-slider');
    var currentTime = document.querySelector('.current-time');
    var totalTime = document.querySelector('.total-time');
    const showMoreButton = document.getElementById('showMoreButtonMadeForYou');
    const favoritePlaylistsContainer = document.getElementById('favoritePlaylists-container'); 
    const recPlayContainer = document.getElementById('recPlayContainer');

    
    const madeForYou = [
      
        {name :'BTS',
      description :'Pop hits to keep you fresh!',
      image: './assets/mix6.jpg',
      p : `Playlist &#x2022; Spotify`,
      id :'01',
      i: 'bi bi-play-circle-fill',
      url:'./assets/1.MP3',
        },
     
      {name :'HARRIS HITS',
      description :'Pop hits to keep you fresh!',
      image: './assets/mix11.jpg',
      p : `Playlist &#x2022; Spotify`,
      id :'09',
      i: 'bi bi-play-circle-fill',
      url:"./assets/9.mp3"
      },
      {name :'ARR-INTERDULE',
      description :'Pop hits to keep you fresh!',
      image: './assets/mix10.jpg',
      p : `Playlist &#x2022; Spotify`,
      id :'05',
      i: 'bi bi-play-circle-fill',
      url:"./assets/8.mp3"
      },
      {name :'HARRIS BGM',
      description :'Pop hits to keep you fresh!',
      image: './assets/mix12.jpg',
      p : `Playlist &#x2022; Spotify`,
      id :'10',
      i: 'bi bi-play-circle-fill',
      url:"./assets/10.mp3"
      },
     
           
      {name :'ARR-HITS',
      description :'Pop hits to keep you fresh!',
      image: './assets/mix9.jpg',
      p : `Playlist &#x2022; Spotify`,
      id :'07',
      i: 'bi bi-play-circle-fill',
      url:"./assets/7.mp3"
      },
    
       {name :'KARTHIK HITS',
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
      
      {name :'SPB LOVE SONGS',
      description :'Pop hits to keep you fresh!',
      image: './assets/mix20.jpg',
      p : `Playlist &#x2022; Spotify`,
      id :'18',
      i: 'bi bi-play-circle-fill',
      url:"./assets/8.mp3"
      },
  
    ];

     const favoritePlaylists = [];
    const recplay = [];
    const searchInput = document.getElementById('search-input');
    let searchSuggestions = null;
    let initialmadeForYou = [...madeForYou];
    let currentIndex = madeForYou.length;
    
   

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

        
        // Add a favorite (fav) icon
        var favIcon = document.createElement('i');
        favIcon.className = 'bi bi-suit-heart-fill ';
        favIcon.title = 'Add to favorites';

        // Add hover effect to the card
        cardDiv.addEventListener('mouseenter', function () {
            favIcon.style.display = 'inline-block';
        });
       const sidebarFavoriteContainer = document.getElementById('madeForYouContainer');
        cardDiv.addEventListener('mouseleave', function () {
            favIcon.style.display = 'none';
        });

        // Event listener for the favorite icon
        favIcon.addEventListener('click', function (event) {
            if (!favoritePlaylists.some(item => item.id === madeForYou.id)) {
                favoritePlaylists.push(madeForYou);
                console.log('Added to favorites:', madeForYou.name);
                // Append the card to the favoritePlaylists container
                createFavoriteCard(madeForYou, favoritePlaylistsContainer);
            }
            event.stopPropagation();
        });



  
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

        favIcon.addEventListener('click', function (event) {
           
            event.stopPropagation();
        });
        
  
        colFlexDiv.appendChild(img);
        colFlexDiv.appendChild(pName);
        colFlexDiv.appendChild(pDescription);
        colFlexDiv.appendChild(pPlaylist);
        colFlexDiv.appendChild(playIcon);
        colFlexDiv.appendChild(favIcon);
        cardDiv.appendChild(colFlexDiv);
        container.appendChild(cardDiv);
    }
   
//CREATE FAV CONTAINER...
function createFavoriteCard(madeForYou, container) {
    var favoriteCardDiv = document.createElement('div');
    favoriteCardDiv.className = 'link-flex-favorite favorite-card';

    var favImg = document.createElement('img');
    favImg.src = madeForYou.image;
    favImg.className = 'favorite-cover';

    var colFlexDiv = document.createElement('div');
    colFlexDiv.className = 'favorite col-flex';

    var pName = document.createElement('p');
    pName.className = 'favorite-name';
    pName.textContent = madeForYou.name;

    var pDescription = document.createElement('p');
    pDescription.className = 'favorite-description';
    pDescription.textContent = madeForYou.description;

    var pPlaylist = document.createElement('p');
    pPlaylist.className = 'favorite-playlist';
    pPlaylist.innerHTML = madeForYou.p;

    // Create play/pause button
    var playPauseButton = document.createElement('i');
    playPauseButton.className = madeForYou.i + ' play-pause-button';
    playPauseButton.id = madeForYou.id;

    playPauseButton.addEventListener('click', function (event) {
        var clickedButton = event.target;

        if (audioElement.paused) {
            playAudio(madeForYou.url);
            clickedButton.className = 'bi bi-pause-circle-fill play-pause-button';
        } else {
            pauseAudio();
            clickedButton.className = 'bi bi-play-circle-fill play-pause-button';
        }
        event.stopPropagation();
    });

    // Add hover effect to the card
    favoriteCardDiv.addEventListener('mouseenter', function () {
        playPauseButton.style.display = 'inline-block';
    });

    favoriteCardDiv.addEventListener('mouseleave', function () {
        playPauseButton.style.display = 'none';
    });

    // Add a delete (remove) icon
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'bi bi-x-circle-fill delete-icon';
    deleteIcon.title = 'Remove from favorites';

    // Event listener for the delete icon
    deleteIcon.addEventListener('click', function (event) {
        // Remove the playlist from favorites
        const indexToRemove = favoritePlaylists.findIndex(item => item.id === madeForYou.id);
        if (indexToRemove !== -1) {
            favoritePlaylists.splice(indexToRemove, 1);
            // Remove the corresponding favorite card from the container
            container.removeChild(favoriteCardDiv);
        }
        event.stopPropagation();
    });

    colFlexDiv.appendChild(pName);
    colFlexDiv.appendChild(pDescription);
    colFlexDiv.appendChild(pPlaylist);
    colFlexDiv.appendChild(playPauseButton);
    colFlexDiv.appendChild(deleteIcon);

    favoriteCardDiv.appendChild(favImg);
    favoriteCardDiv.appendChild(colFlexDiv);
    container.appendChild(favoriteCardDiv);
}


    //search 
   

    //show more
    function loadMoreData() {
        const itemsToAdd = 3;

        for (let i = 0; i < itemsToAdd; i++) {
            const indexToAdd = i % initialmadeForYou.length;
            const itemToAdd = initialmadeForYou[indexToAdd];
            madeForYou.push(itemToAdd);
            createCard(itemToAdd, madeForYouContainer);
        }

        currentIndex = madeForYou.length;
    }

    showMoreButton.addEventListener('click', function () {
        loadMoreData();
    });

    madeForYou.forEach(function (item) {
        createCard(item, madeForYouContainer);
    });


//audio

function playAudio(url, name) {
    audioElement.src = url;

    // Use the canplay event to check when the audio is ready to be played
    audioElement.addEventListener('canplay', function () {
        audioElement.play().catch(error => console.error(error));
        updateSongTitle(name);
       
        triggerHeartAnimation();
    }, { once: true });
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

    function updateSongTitle(title) {
        var songTitleElement = document.getElementById('song-title');
        songTitleElement.textContent = title;
        console.log('Updated song title to:', title);
    }
          // Function to trigger the heart icon animation
          function triggerHeartAnimation() {
            var heartIcon = document.getElementById('heart-icon');
            
            // Add the class for the heart icon animation
            heartIcon.classList.add('jump');
            
            // Remove the class after a short delay (adjust as needed)
            setTimeout(function () {
                heartIcon.classList.remove('jump');
            }, 1000); // 1000 milliseconds = 1 second, adjust as needed
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
///recplay

madeForYouContainer.addEventListener('click', function (event) {
    var clickedElement = event.target;

    
    if (clickedElement.classList.contains('play-pause-button')) {
        
        const clickedId = clickedElement.id;
        const clickedItem = madeForYou.find(item => item.id === clickedId);

        
        if (clickedElement.classList.contains('bi-play-circle-fill')) {
           
            if (clickedItem) {
                recplay.push(clickedItem);
                createRecPlayCard(clickedItem, recPlayContainer);
            }
        }

        // Prevent the default behavior and stop event propagation
        event.preventDefault();
        event.stopPropagation();
    }
});

// Function to create a card and add it to recPlayContainer
function createRecPlayCard(madeForYou, container) {
    var recPlayCardDiv = document.createElement('div');
    recPlayCardDiv.className = 'link-flex-recplay recplay-card';

    // Add a delete (remove) icon
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'bi bi-x-circle-fill delete-icon';
    deleteIcon.title = 'Remove from recplay';

    // Event listener for the delete icon
    deleteIcon.addEventListener('click', function (event) {
        // Remove the playlist from recplay
        const indexToRemove = recplay.findIndex(item => item.id === madeForYou.id);
        if (indexToRemove !== -1) {
            recplay.splice(indexToRemove, 1);
            // Remove the corresponding recPlay card from the container
            container.removeChild(recPlayCardDiv);
        }
        event.stopPropagation();
    });

    var colFlexDiv = document.createElement('div');
    colFlexDiv.className = 'recplay col-flex';

    var recImg = document.createElement('img');
    recImg.src = madeForYou.image;
    recImg.className = 'recplay-cover';

    var pName = document.createElement('p');
    pName.className = 'recplay-name';
    pName.textContent = madeForYou.name;

    var pDescription = document.createElement('p');
    pDescription.className = 'recplay-description';
    pDescription.textContent = madeForYou.description;

    var pPlaylist = document.createElement('p');
    pPlaylist.className = 'recplay-playlist';
    pPlaylist.innerHTML = madeForYou.p;

    var playIcon = document.createElement('i');
    playIcon.className = madeForYou.i;
    playIcon.id = madeForYou.id;

    // Create play/pause button
    var playPauseButton = document.createElement('i');
    playPauseButton.className = 'bi bi-play-circle-fill play-pause-button';
    playPauseButton.id = madeForYou.id;

    playPauseButton.addEventListener('click', function (event) {
        var clickedButton = event.target;

        if (audioElement.paused) {
            playAudio(madeForYou.url);
            clickedButton.className = 'bi bi-pause-circle-fill play-pause-button';
        } else {
            pauseAudio();
            clickedButton.className = 'bi bi-play-circle-fill play-pause-button';
        }
        event.stopPropagation();
    });

    // Add hover effect to the card
    recPlayCardDiv.addEventListener('mouseenter', function () {
        playPauseButton.style.display = 'inline-block';
    });

    recPlayCardDiv.addEventListener('mouseleave', function () {
        playPauseButton.style.display = 'none';
    });

    colFlexDiv.appendChild(pName);
    colFlexDiv.appendChild(pDescription);
    colFlexDiv.appendChild(pPlaylist);
    colFlexDiv.appendChild(playPauseButton);
    colFlexDiv.appendChild(deleteIcon);
    recPlayCardDiv.appendChild(recImg);
    recPlayCardDiv.appendChild(colFlexDiv);
    container.appendChild(recPlayCardDiv);
}
});
