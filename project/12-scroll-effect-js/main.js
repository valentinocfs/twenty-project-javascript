window.addEventListener('scroll', elementScroll);

function elementScroll(){
    const home = document.querySelectorAll('.scroll')

    home.forEach(m => {
        const scroll = window.pageYOffset;
        const rate = scroll * m.dataset.rate;
        
        if(m.classList.contains('circle')){
            m.style.transform = `translate3D(${rate * 2}px, ${rate * (-2)}px, 0px)`
        } else{
            m.style.transform = `translate3D(0px, ${rate}px, 0px)`
        }
        
    })
}