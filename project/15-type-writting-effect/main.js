const typing = document.querySelector(".typing");
const texts = ["Valentino Stania", "Frontend Developer", "Backend Developer"];

let [count, index] = [0, 0];
let curr = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }

    curr = texts[count];
    letter = curr.slice(0, ++index);

    typing.textContent = letter;
    if (letter.length === curr.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 450);
})();
