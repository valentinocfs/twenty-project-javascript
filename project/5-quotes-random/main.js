const home = document.querySelector('.home');
const quote = document.querySelector('.quote');
const btn = document.querySelector('button');

const quotes = [
    '"All your dreams can come true if you have the courage to pursue them." - Walt Disney', 
    '"If you change the way you look at things, the things you look at change." ~ Wayne Dyer', 
    '"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage." ~ Laozi', 
    '"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great." ~ Mark Twain', 
    '"If you hear a voice within you say \'you cannot paint,\' then by all means paint, and that voice will be silenced." ~ Vincent Van Gogh', 
    '"Strength does not come from physical capacity. It comes from an indomitable will." ~ Mahatma Gandhi', 
    '"Don\'t wait. The time will never be just right." ~ Napoleon Hill'
]

let len = quotes.length;

btn.addEventListener('click', () => {

    let random = Math.floor(Math.random()* len);
    quote.innerText = quotes[random];
})