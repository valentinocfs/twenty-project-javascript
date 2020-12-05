// Fitur
    // Menambah, Selesai, dan Hapus

// ambil nilai input
let input = document.querySelector('input');

function add(){

    // tambahkan ke dalam ul
        // Cara Pertama
        // let todo = document.createElement('li');
        // let text = document.createTextNode(input.value)
        // todo.appendChild(text)
        // const todos = document.querySelector('.todos');
        // todos.appendChild(todo)
        
        // Cara Kedua
        let todo = document.querySelector('.todos')
        todo.style.border = '1px solid rgba(0,0,0,.3)'
        let newtext = `<li>
                            <span onclick="toggle(this)">${input.value}</span>
                            <span onclick="remove(this)"><i class='bx bx-x-circle'></i></span>
                        </li>`;

        todo.insertAdjacentHTML('beforeend', newtext)

    // kosongkan nilai value
    input.value = "";
}

function toggle(el){
    el.classList.toggle('strike');
}

function remove(el){
    el.parentElement.remove();
}