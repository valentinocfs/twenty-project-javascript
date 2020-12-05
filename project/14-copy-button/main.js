const copy = document.querySelector('.ph-copy-simple');
const textInput = document.querySelector('#textInput');
const inputButton = textInput.nextElementSibling;
const textContent = document.querySelector('.text-content')

copy.addEventListener('click', function() {
    // const log = document.execCommand('copy')
    // const msg = log ? textContent.innerText : 'error';
    // console.log(msg);
    navigator.clipboard.writeText(textContent.innerText);
})


inputButton.addEventListener('click', function() {
    console.log(textInput.value);
    textContent.innerHTML = textInput.value;
})