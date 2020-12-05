window.addEventListener('scroll', function(){
    const distance = this.scrollY;
    console.log(distance)
    const scroll = document.querySelectorAll('.gsap')

    if(distance >= 300 && distance < 350){
        scroll.forEach(el => {
            update(el)
        })
    }
})


function update(entries){
    gsap.from(entries, {
        duration: 1, 
        opacity: 0,
        translateX: '-100px',
        ease: 'elastic'
    })
    gsap.to(entries, {
        duration: 1,
        opacity: 1, 
        translateX: '0',
    })
}