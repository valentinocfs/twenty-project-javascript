// intersection observer
const hide = document.querySelectorAll('.hide');


observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
            entry.target.style.animation = `show ${entry.target.dataset.delay} forwards ease`;
        } else {
            entry.target.style.animation = '';
        }
    })
})

hide.forEach((m)=> {
    observer.observe(m)
})