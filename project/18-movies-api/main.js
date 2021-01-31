document
    .querySelector("#searchButton")
    .addEventListener("click", handleChangeButton);

window.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        handleChangeButton();
    }
});

window.addEventListener("click", function (e) {
    if (e.target.className === "detailbutton") {
        const id = e.target.getAttribute("data-id");
        getDetailDataToAPI(id);
    }
    if ((e.target.className = "close-btn")) {
        removeDetailMovie();
        document.querySelector(".alert-container").style.display = "none";
    }
});

function getDataToAPI(title) {
    const url = "https://www.omdbapi.com/?apikey=91414f35&s=";
    return fetch(url + title)
        .then((response) => {
            if (response.status === 200 && response.ok) {
                return response.json();
            }
            return null;
        })
        .then((movies) => updateDisplayMovie(movies.Search));
}

function getDetailDataToAPI(id) {
    const url = "https://www.omdbapi.com/?apikey=91414f35&i=";
    return fetch(url + id)
        .then((response) => {
            if (response.status === 200 && response.ok) {
                return response.json();
            }
            return null;
        })
        .then((movie) => updateDetailDisplay(movie));
}

function updateDetailDisplay(movie) {
    const {
        Title,
        Poster,
        Country,
        Genre,
        Plot,
        Actors,
        Released,
        Writer,
        imdbRating,
    } = movie;

    const data = `
    <div class="alert">
        <div class="alert-title">
            <p>${Title}</p>
        </div>
        <div class="alert-body">
            <div class="image">
                <img src="${Poster}" alt="${Title}" />
            </div>
            <div class="info">
                <p><b>Actors</b> : ${Actors}</p>
                <p><b>Genre</b> : ${Genre}</p>
                <p><b>Released</b> : ${Released}</p>
                <p><b>Writer</b> : ${Writer}</p>
                <p><b>Rating</b> : ${imdbRating}</p>
                <p><b>Country</b> : ${Country}</p>
                <p><b>Plot</b> : ${Plot}</p>
            </div>
        </div>
        <div class="alert-footer">
            <button class="close-btn">Close</button>
        </div>
    </div>
    `;

    document.querySelector(".alert-container").style.display = "block";

    document
        .querySelector(".alert-container")
        .insertAdjacentHTML("afterbegin", data);
}

function handleChangeButton() {
    removeDisplayMovie();
    const inputMovies = document.querySelector("#inputMovies").value;
    getDataToAPI(inputMovies);
    inputMovies.value = "";
}

function updateDisplayMovie(movies) {
    const data = movies
        .map((movie) => {
            return `
        <div class="card">
            <div class="card-title">
                <p>${movie.Title}</p>
            </div>
            <div class="card-body">
                <img src=${`${movie.Poster}`} alt=${movie.Title} />
            </div>
            <div class="card-footer">
                <button class="detailbutton" data-id="${
                    movie.imdbID
                }">More Detail</button>
            </div>    
        </div>
        `;
        })
        .join("");

    document.querySelector("#cards").insertAdjacentHTML("afterbegin", data);
}

function removeDisplayMovie() {
    document.querySelector("#cards").innerHTML = "";
}

function removeDetailMovie() {
    document.querySelector(".alert-container").innerHTML = "";
}
