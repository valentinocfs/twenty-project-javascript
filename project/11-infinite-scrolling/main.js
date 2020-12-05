const loading = document.querySelector('.loading')
const cards = document.querySelector('.cards');
let mat = 5; 

window.addEventListener('scroll', function() {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    // console.log({scrollTop, scrollHeight, clientHeight})
    if(clientHeight + scrollTop >= scrollHeight - 10){
        // show loading animation
        const loading = showLoading();
        // update post
        setTimeout(updatePost, 2000);
    }
})

function showLoading(){
    loading.classList.add('show')
}

function updatePost(){
    let post = document.createElement('div');
    post.classList.add('class')
    post.innerHTML = `
        <div class="card">
          <h3>Nama ${mat++}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            eaque repellendus. Explicabo ea consectetur dolorem minima, porro
            temporibus nostrum soluta.
          </p>
          <div class="card-btn">
            <p>like</p>
            <p>Comment</p>
            <p>Share</p>
          </div>
        </div>
        `; 
    cards.appendChild(post)
    return post
}
