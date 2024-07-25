const songName = document.getElementById('songName');
const searchBtn = document.getElementById('searchBtn');
const list = document.getElementById('list');
const audio = document.getElementById('audio');


const fetchData = async (query) => {
    try {
        const res = await fetch(`https://saavn.dev/api/search/songs?query=${query}`);
        const data = await res.json();
        displaySongs(data.data.results);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displaySongs = (songs) => {
  
    list.innerHTML = ''; // Clear previous results
    songs.forEach((song) => {
        const div = document.createElement('div');
        div.classList = "col-lg-2 col-6 my-2";
        div.innerHTML = `
            <img src="${song.image[2].url}" class="img-fluid rounded-3" alt="${song.title}"/>
            
        `;
        list.appendChild(div);
        div.addEventListener('click', () => {
               audio.src = song.downloadUrl[2].url;
               audio.play()

        });
    });
};

searchBtn.addEventListener('click', () => {
    if (songName.value.length > 0) {
        fetchData(songName.value);
    }
});

fetchData("latest")