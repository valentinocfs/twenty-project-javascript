const url = "https://masak-apa.tomorisakura.vercel.app/api";

// Event handler

document.querySelector("#searchButton").addEventListener("click", function () {
    handleChangeInput();
});

window.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        handleChangeInput();
    }
});

function handleChangeInput() {
    const inputValue = document.querySelector("#searchInput");
    removeDisplayRecipes();
    getDataBySeachToAPI(inputValue.value);
    inputValue.value = "";
}

// API

(async function getDataRecomendedToAPI() {
    let data = await fetch(`${url}/recipes`);
    let response = await data.json();
    diplayRecipes(response.results);
})();

async function getDataBySeachToAPI(params) {
    let data = await fetch(`${url}/search/?q=${params}`);
    let response = await data.json();
    diplayRecipes(response.results);
}

// DOM

function diplayRecipes(data) {
    const cards = data
        .map((item) => {
            return `
            <div class="card">
                <div class="card-title">
                    ${item.title}
                </div>
                <div class="card-body">
                    <img src="${item.thumb}" alt="${item.title}" />
                    <div>
                        <p>${item.portion || item.serving}</p>
                        <p>${item.times}</p>
                    </div>
                    <p>Kesulitan : ${item.dificulty || item.difficulty}</p>
                </div>
                <div class="card-footer">
                    <button data-id="${item.key}">Selengkapnya</button>
                </div>
            </div>
        `;
        })
        .join(" ");

    document.querySelector(".cards").insertAdjacentHTML("afterbegin", cards);
}

function removeDisplayRecipes() {
    document.querySelector(".cards").innerHTML = "";
}
