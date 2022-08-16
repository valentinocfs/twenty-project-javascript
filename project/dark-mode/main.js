const circle = document.querySelector('.bxs-circle');
const dark = document.querySelector('.dark-mode')

dark.addEventListener('click', setDark);

function setDark(){
    circle.classList.toggle('swipe')
    document.body.classList.toggle('dark')
}
