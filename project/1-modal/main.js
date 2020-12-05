const modalOpen = document.querySelector('.modal-open');
const modalClose = document.querySelector('.modal-close');
const modal = document.querySelector('.container');

modalOpen.addEventListener('click', function() {
    modal.style.display = 'block';
});

modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
});

