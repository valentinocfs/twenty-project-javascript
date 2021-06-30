const btn = document.querySelector(".joke-btn");
const parag = document.querySelector(".jokeEl");

parag.innerHTML = "Here Goes The Joke";

btn.addEventListener("click", generate);

async function generate() {
    let url = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    });

    const joke = await url.json();
    // console.log(joke);

    parag.innerHTML = joke.joke;
}
