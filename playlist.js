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
  
// home 

// Event listener for the Home icon
document.getElementById('homeIcon').addEventListener('click', function (event) {
    // Prevent the default behavior of the anchor link
    event.preventDefault();
    
    // Reload the page
    location.reload();
});

// playlist 
  
document.addEventListener('DOMContentLoaded', function () {
    var recentlyPlayedContainer = document.getElementById('recentlyPlayedContainer');
    var audioElement = document.getElementById('audio-player');
    var volumeSlider = document.querySelector('.volume-slider');
    var timelineSlider = document.querySelector('.timeline-slider');
    var currentTime = document.querySelector('.current-time');
    var totalTime = document.querySelector('.total-time');
    const showMoreButton = document.getElementById('showMoreButtonRecent');
    const favoritePlaylistsContainer = document.getElementById('favoritePlaylists-container'); 
    const recPlayContainer = document.getElementById('recPlayContainer');
    const skipBackwardButton = document.getElementById("skip-backward");
const skipForwardButton = document.getElementById("skip-forward");

    
    const recentlyPlayed = [
        {name :'ARR',
        description :'Pop hits to keep you fresh!',
        image: './assets/mix8.jpg',
        p : `Playlist &#x2022; Spotify`,
        id :'06',
        i: 'bi bi-play-circle-fill',
        url:"./assets/6.mp3"
  
        },
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
  
    ];

     const favoritePlaylists = [];
    const recplay = [];
    const searchInput = document.getElementById('search-input');
    let searchSuggestions = null;
    let initialRecentlyPlayed = [...recentlyPlayed];
    let currentIndex = recentlyPlayed.length;
    let currentTrackIndex = 0;
   

    function createCard(recentlyPlayed, container) {
        var cardDiv = document.createElement('div');
        cardDiv.className = 'link-flex-recentlyPlayed-flex recentlyPlayed-card';
  
        var img = document.createElement('img');
        img.src = recentlyPlayed.image;
        img.className = 'recentlyPlayed-cover';
  
        var colFlexDiv = document.createElement('div');
        colFlexDiv.className = 'recentlyPlayed col-flex';
  
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

        
        // Add a favorite (fav) icon
        var favIcon = document.createElement('i');
        favIcon.className = 'bi bi-suit-heart-fill ';
        favIcon.title = 'Add to favorites';

        // Add hover effect to the card
        cardDiv.addEventListener('mouseenter', function () {
            favIcon.style.display = 'inline-block';
        });
       const sidebarFavoriteContainer = document.getElementById('albums-container');
        cardDiv.addEventListener('mouseleave', function () {
            favIcon.style.display = 'none';
        });

        // Event listener for the favorite icon
        favIcon.addEventListener('click', function (event) {
            if (!favoritePlaylists.some(item => item.id === recentlyPlayed.id)) {
                favoritePlaylists.push(recentlyPlayed);
                console.log('Added to favorites:', recentlyPlayed.name);
                // Append the card to the favoritePlaylists container
                createFavoriteCard(recentlyPlayed, favoritePlaylistsContainer);
            }
            event.stopPropagation();
        });



  
        playIcon.addEventListener('click', function (event) {
            var clickedButton = event.target;
        
            if (audioElement.paused) {
                playAudio(recentlyPlayed.url, recentlyPlayed.name); // Pass the title here
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
function createFavoriteCard(recentlyPlayed, container) {
    var favoriteCardDiv = document.createElement('div');
    favoriteCardDiv.className = 'link-flex-favorite favorite-card';

    var favImg = document.createElement('img');
    favImg.src = recentlyPlayed.image;
    favImg.className = 'favorite-cover';

    var colFlexDiv = document.createElement('div');
    colFlexDiv.className = 'favorite col-flex';

    var pName = document.createElement('p');
    pName.className = 'favorite-name';
    pName.textContent = recentlyPlayed.name;

    var pDescription = document.createElement('p');
    pDescription.className = 'favorite-description';
    pDescription.textContent = recentlyPlayed.description;

    var pPlaylist = document.createElement('p');
    pPlaylist.className = 'favorite-playlist';
    pPlaylist.innerHTML = recentlyPlayed.p;

    // Create play/pause button
    var playPauseButton = document.createElement('i');
    playPauseButton.className = recentlyPlayed.i + ' play-pause-button';
    playPauseButton.id = recentlyPlayed.id;

    playPauseButton.addEventListener('click', function (event) {
        var clickedButton = event.target;

        if (audioElement.paused) {
            playAudio(recentlyPlayed.url);
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
        const indexToRemove = favoritePlaylists.findIndex(item => item.id === recentlyPlayed.id);
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
    function displayFilteredResults(filteredItems) {
        recentlyPlayedContainer.innerHTML = '';
    
        filteredItems.forEach(item => {
            createCard(item, recentlyPlayedContainer);
        });
    }
    
    function updateSearchSuggestions(query) {
        if (!searchSuggestions) {
            searchSuggestions = document.createElement('div');
            searchSuggestions.id = 'search-suggestions';
            document.getElementById('search-container').appendChild(searchSuggestions);
        } else {
            searchSuggestions.innerHTML = '';
        }
    
        if (query.trim() !== '') {
            const filteredItems = recentlyPlayed.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
    
            filteredItems.forEach(item => {
                const suggestionItem = document.createElement('div');
                suggestionItem.textContent = item.name;
    
                suggestionItem.addEventListener('click', function () {
                    // Update the search input value with the selected suggestion
                    searchInput.value = item.name;
                    // Clear the suggestions
                    searchSuggestions.innerHTML = '';
                    // Filter and display the results based on both search input and selected suggestion
                    const combinedResults = recentlyPlayed.filter(result =>
                        result.name.toLowerCase().includes(searchInput.value.toLowerCase())
                    );
                    displayFilteredResults(combinedResults);
                });
    
                searchSuggestions.appendChild(suggestionItem);
            });
    
            // Display results based on search input
            displayFilteredResults(filteredItems);
        } else {
            // If the query is empty, display all items
            displayFilteredResults(recentlyPlayed);
        }
    }
    
    searchInput.addEventListener('input', function () {
        const query = searchInput.value;
        updateSearchSuggestions(query);
    });
    
    const searchIcon = document.getElementById('search-icon');
    searchIcon.addEventListener('click', function () {
        const query = searchInput.value;
        updateSearchSuggestions(query);
    });
    

    //show more
    function loadMoreData() {
        const itemsToAdd = 3;

        for (let i = 0; i < itemsToAdd; i++) {
            const indexToAdd = i % initialRecentlyPlayed.length;
            const itemToAdd = initialRecentlyPlayed[indexToAdd];
            recentlyPlayed.push(itemToAdd);
            createCard(itemToAdd, recentlyPlayedContainer);
        }

        currentIndex = recentlyPlayed.length;
    }

    showMoreButton.addEventListener('click', function () {
        loadMoreData();
    });

    recentlyPlayed.forEach(function (item) {
        createCard(item, recentlyPlayedContainer);
    });


//audio

function updatePlayerUI(track) {
    totalTimeElement.textContent = formatTime(track.duration);
}
function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    return minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
}

function skipBackward() {
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
        loadTrack(currentTrackIndex);
        playAudio(recentlyPlayed[currentTrackIndex].url, recentlyPlayed[currentTrackIndex].name);
    }
}
// Function to handle skip forward
function skipForward() {
    if (currentTrackIndex < recentlyPlayed.length - 1) {
        currentTrackIndex++;
        loadTrack(currentTrackIndex);
        playAudio(recentlyPlayed[currentTrackIndex].url, recentlyPlayed[currentTrackIndex].name);
    }
}

// Function to load a track
function loadTrack(index) {
    // Implement the logic to load the track based on the provided index
    // This may include updating UI elements, setting the source for the audio element, etc.
    // Example:
    const audioElement = document.getElementById('audio-player');
    audioElement.src = recentlyPlayed[index].url;
}
// Event listener for skip backward button
skipBackwardButton.addEventListener("click", function () {
    skipBackward();
});

// Event listener for skip forward button
skipForwardButton.addEventListener("click", function () {
    skipForward();
});

//play pause...
// Event listener for play/pause button
document.getElementById('play-pause').addEventListener('click', function () {
    togglePlayPause();
});

// Function to toggle play/pause
function togglePlayPause() {
    var audioElement = document.getElementById('audio-player');
    var playPauseButton = document.getElementById('play-pause');

    if (audioElement.paused) {
        audioElement.play().catch(error => console.error(error));
        playPauseButton.className = 'bi bi-pause-circle-fill play-pause-button';
    } else {
        audioElement.pause();
        playPauseButton.className = 'bi bi-play-circle-fill play-pause-button';
    }
}
function playAudio(url, title, imageUrl) {
    audioElement.src = url;

    // Use the canplay event to check when the audio is ready to be played
    audioElement.addEventListener('canplay', function () {
        audioElement.play().catch(error => console.error(error));
        updateSongTitle(title);
        updateSongImage(imageUrl);
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
// Event listener for the play icon in the recently played container
recentlyPlayedContainer.addEventListener('click', function (event) {
    var clickedElement = event.target;

    // Check if the clicked element has the play-pause-button class
    if (clickedElement.classList.contains('play-pause-button')) {
        // Find the corresponding recentlyPlayed object based on the id
        const clickedId = clickedElement.id;
        const clickedItem = recentlyPlayed.find(item => item.id === clickedId);

        // Check if the clicked button is a play button
        if (clickedElement.classList.contains('bi-play-circle-fill')) {
            // Add the clicked item to the recplay array and create a recPlay card
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
function createRecPlayCard(recentlyPlayed, container) {
    var recPlayCardDiv = document.createElement('div');
    recPlayCardDiv.className = 'link-flex-recplay recplay-card';

    // Add a delete (remove) icon
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'bi bi-x-circle-fill delete-icon';
    deleteIcon.title = 'Remove from recplay';

    // Event listener for the delete icon
    deleteIcon.addEventListener('click', function (event) {
        // Remove the playlist from recplay
        const indexToRemove = recplay.findIndex(item => item.id === recentlyPlayed.id);
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
    recImg.src = recentlyPlayed.image;
    recImg.className = 'recplay-cover';

    var pName = document.createElement('p');
    pName.className = 'recplay-name';
    pName.textContent = recentlyPlayed.name;

    var pDescription = document.createElement('p');
    pDescription.className = 'recplay-description';
    pDescription.textContent = recentlyPlayed.description;

    var pPlaylist = document.createElement('p');
    pPlaylist.className = 'recplay-playlist';
    pPlaylist.innerHTML = recentlyPlayed.p;

    var playIcon = document.createElement('i');
    playIcon.className = recentlyPlayed.i;
    playIcon.id = recentlyPlayed.id;

    // Create play/pause button
    var playPauseButton = document.createElement('i');
    playPauseButton.className = 'bi bi-play-circle-fill play-pause-button';
    playPauseButton.id = recentlyPlayed.id;

    playPauseButton.addEventListener('click', function (event) {
        var clickedButton = event.target;

        if (audioElement.paused) {
            playAudio(recentlyPlayed.url);
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
