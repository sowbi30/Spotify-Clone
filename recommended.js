// RECOMMENDED
  
document.addEventListener('DOMContentLoaded', function () {
    var recommendedContainer = document.getElementById('recommendedContainer');
    var audioElement = document.getElementById('audio-player');
    var volumeSlider = document.querySelector('.volume-slider');
    var timelineSlider = document.querySelector('.timeline-slider');
    var currentTime = document.querySelector('.current-time');
    var totalTime = document.querySelector('.total-time');
    const showMoreButton = document.getElementById('showMoreButtonRecommended');
    const favoritePlaylistsContainer = document.getElementById('favoritePlaylists-container'); 
    const recPlayContainer = document.getElementById('recPlayContainer');

    
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

     const favoritePlaylists = [];
    const recplay = [];
    const searchInput = document.getElementById('search-input');
    let searchSuggestions = null;
    let initialrecommended = [...recommended];
    let currentIndex = recommended.length;
  
   

    function createCard(recommended, container) {
        var cardDiv = document.createElement('div');
        cardDiv.className = 'link-flex-rec-flex rec-card';
  
        var img = document.createElement('img');
        img.src = recommended.image;
        img.className = 'rec-cover';
  
        var colFlexDiv = document.createElement('div');
        colFlexDiv.className = 'rec col-flex';
  
        var pName = document.createElement('p');
        pName.className = 'recommended-name';
        pName.textContent = recommended.name;
  
        var pDescription = document.createElement('p');
        pDescription.className = 'recommended-description';
        pDescription.textContent = recommended.description;
  
        var pPlaylist = document.createElement('p');
        pPlaylist.className = 'recommended-playlist';
        pPlaylist.innerHTML = recommended.p;
  
        var playIcon = document.createElement('i');
        playIcon.className = recommended.i;
        playIcon.id = recommended.id;

        
        // Add a favorite (fav) icon
        var favIcon = document.createElement('i');
        favIcon.className = 'bi bi-suit-heart-fill ';
        favIcon.title = 'Add to favorites';

        // Add hover effect to the card
        cardDiv.addEventListener('mouseenter', function () {
            favIcon.style.display = 'inline-block';
        });
       const sidebarFavoriteContainer = document.getElementById('recommendedContainer');
        cardDiv.addEventListener('mouseleave', function () {
            favIcon.style.display = 'none';
        });

        // Event listener for the favorite icon
        favIcon.addEventListener('click', function (event) {
            if (!favoritePlaylists.some(item => item.id === recommended.id)) {
                favoritePlaylists.push(recommended);
                console.log('Added to favorites:', recommended.name);
               
                createFavoriteCard(recommended, favoritePlaylistsContainer);
            }
            event.stopPropagation();
        });



  
        playIcon.addEventListener('click', function (event) {
            var clickedButton = event.target;
        
            if (audioElement.paused) {
                playAudio(recommended.url);  // Change 'madeForYou.url' to 'recommended.url'
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
function createFavoriteCard(recommended, container) {
    var favoriteCardDiv = document.createElement('div');
    favoriteCardDiv.className = 'link-flex-favorite favorite-card';

    var favImg = document.createElement('img');
    favImg.src = recommended.image;
    favImg.className = 'favorite-cover';

    var colFlexDiv = document.createElement('div');
    colFlexDiv.className = 'favorite col-flex';

    var pName = document.createElement('p');
    pName.className = 'favorite-name';
    pName.textContent = recommended.name;

    var pDescription = document.createElement('p');
    pDescription.className = 'favorite-description';
    pDescription.textContent = recommended.description;

    var pPlaylist = document.createElement('p');
    pPlaylist.className = 'favorite-playlist';
    pPlaylist.innerHTML = recommended.p;

    // Create play/pause button
    var playPauseButton = document.createElement('i');
    playPauseButton.className = recommended.i + ' play-pause-button';
    playPauseButton.id = recommended.id;

    playPauseButton.addEventListener('click', function (event) {
        var clickedButton = event.target;

        if (audioElement.paused) {
            playAudio(recommended.url);
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
        const indexToRemove = favoritePlaylists.findIndex(item => item.id === recommended.id);
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


   

    //show more
    function loadMoreData() {
        const itemsToAdd = 3;
    
        for (let i = 0; i < itemsToAdd; i++) {
            const indexToAdd = i % recommended.length; 
            const itemToAdd = recommended[indexToAdd];  
            recommended.push(itemToAdd);
            createCard(itemToAdd, recommendedContainer);
        }
    
        currentIndex = recommended.length;
    }

    showMoreButton.addEventListener('click', function () {
        loadMoreData();
    });

    recommended.forEach(function (item) {
        createCard(item, recommendedContainer);
    });


//audio

function playAudio(url, title, imageUrl) {
    audioElement.src = url;

    // Use the canplay event to check when the audio is ready to be played
    audioElement.addEventListener('canplay', function () {
        audioElement.play().catch(error => console.error(error));
        updateSongTitle(title);
    
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
        console.log('Updating song title to:', title);
        var songTitleElement = document.getElementById('song-title');
        songTitleElement.textContent = title;
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

recommendedContainer.addEventListener('click', function (event) {
    var clickedElement = event.target;

    
    if (clickedElement.classList.contains('play-pause-button')) {
        
        const clickedId = clickedElement.id;
        const clickedItem = recommended.find(item => item.id === clickedId);

        
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
function createRecPlayCard(recommended, container) {
    var recPlayCardDiv = document.createElement('div');
    recPlayCardDiv.className = 'link-flex-recplay recplay-card';

    // Add a delete (remove) icon
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'bi bi-x-circle-fill delete-icon';
    deleteIcon.title = 'Remove from recplay';

    
    deleteIcon.addEventListener('click', function (event) {
     
        const indexToRemove = recplay.findIndex(item => item.id === recommended.id);
        if (indexToRemove !== -1) {
            recplay.splice(indexToRemove, 1);
            
            container.removeChild(recPlayCardDiv);
        }
        event.stopPropagation();
    });

    var colFlexDiv = document.createElement('div');
    colFlexDiv.className = 'recplay col-flex';

    var recImg = document.createElement('img');
    recImg.src = recommended.image;
    recImg.className = 'recplay-cover';

    var pName = document.createElement('p');
    pName.className = 'recplay-name';
    pName.textContent = recommended.name;

    var pDescription = document.createElement('p');
    pDescription.className = 'recplay-description';
    pDescription.textContent = recommended.description;

    var pPlaylist = document.createElement('p');
    pPlaylist.className = 'recplay-playlist';
    pPlaylist.innerHTML = recommended.p;

    var playIcon = document.createElement('i');
    playIcon.className = recommended.i;
    playIcon.id = recommended.id;

    // Create play/pause button
    var playPauseButton = document.createElement('i');
    playPauseButton.className = 'bi bi-play-circle-fill play-pause-button';
    playPauseButton.id = recommended.id;

    playPauseButton.addEventListener('click', function (event) {
        var clickedButton = event.target;

        if (audioElement.paused) {
            playAudio(recommended.url);
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
