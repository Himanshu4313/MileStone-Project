const movieSearchBox = document.getElementById("searchMovieBox");
const displayCard = document.getElementById("displayMovieCard");
const searchButton = document.getElementById("searchbtn");

// load movie api

async function loadMovie(movieName) {
  const URL = `https://www.omdbapi.com/?s=${movieName}&apikey=75b4a1b0`;

  const response = await fetch(`${URL}`);
  const data = await response.json();
  console.log(data);

  if (data.Response === "True") {
      let statment = "";
      data.Search.map((obj) =>{
          
          statment += ` <div class="card" style="width: 17rem">
            <div class="cardImage">
               <img
              src=${obj.Poster}
              class="card-img-top"
              alt='PosterImage'
              id="movieImage"
            />
            </div>
    
            <div class="card-body">
              <h5 class="card-title">Card title:${obj.Title}</h5>
              <button id="watchNowbtn">Watch Now</button>
            </div>
          </div>`;
      })
      
      displayCard.innerHTML = statment;
   
  } else if (data.Response === "False") {
    displayCard.innerText = "Movie not found";
  } else {
    displayCard.innerText = "Something went wrong";
  }
}

// MovieData(movieSearchBox.value);

searchButton.addEventListener("click", () => {
  loadMovie(movieSearchBox.value);
  movieSearchBox.value = "";
});
