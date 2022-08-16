const url = "https://pokeapi.co/api/v2/pokemon/";

function getPokedexAPI() {
    return fetch(url)
        .then((response) => {
            if (!response.status === 200) {
                return null;
            }
            return response.json();
        })
        .then((data) => getData(data.results));
}

function getData(data) {
    const pokemons = data;
    showPokedex(pokemons);
}

function showPokedex(data) {
    const cards = `
    <div class="cards">
        ${data
            .map((item, idx) => {
                return `
                <div class="card">
                    <div class="img-card">
                        <img src=${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                            idx + 1
                        }.svg`} />
                    </div>
                    <div class="info-card">
                        <h2>${item.name}</h2>
                    </div>

                </div>
                `;
            })
            .join("")}
    </div>
    `;

    document.getElementById("container").insertAdjacentHTML("afterend", cards);
}

getPokedexAPI();
