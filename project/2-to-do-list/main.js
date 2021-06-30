// Fitur
// Menambah, Selesai, dan Hapus

let input = document.querySelector("input");

function add() {
    if (!input.value == "") {
        let todo = document.querySelector(".todos");
        let newtext = `<li>
                                <span onclick="toggle(this)" class="todolist">${input.value}</span>
                                <span onclick="remove(this)"><i class='bx bx-x-circle'></i></span>
                            </li>`;

        todo.insertAdjacentHTML("beforeend", newtext);
    }

    input.value = "";
}

function toggle(el) {
    el.classList.toggle("strike");
}

function remove(el) {
    el.parentElement.remove();
}
