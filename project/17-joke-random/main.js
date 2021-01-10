// API

const btn = document.querySelector('.joke-btn');
const parag = document.querySelector('.jokeEl');

// console.log(container);
parag.innerHTML = '/Here Goes The Joke';

btn.addEventListener('click', generate);

// generate()

async function generate(){
    // call API
    let url = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept' : 'application/json'
        }
    });

    const joke = await url.json();
    // console.log(joke);

    // set joke
    parag.innerHTML = joke.joke;
}
