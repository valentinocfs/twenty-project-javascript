let getYear = new Date().getFullYear() + 1;
let date = new Date(`Jan 1, ${getYear} 00:00:00`).getTime();

function newYear() {
    let now = new Date().getTime();
    gap = date - now;

    // Ubah ke detik,menit,jam dan hari
    let second = 1000;
    let minute = second * 60; // 60,000
    let hour = minute * 60; // 36,000,000
    let day = hour * 24; // 864,000,000

    // Ubah gap ke dalam detik ,menit, jam dan hari
    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);

    // Munculkan teks ke html
    document.getElementById("day").innerText = d;
    document.getElementById("minute").innerText = m;
    document.getElementById("hour").innerText = h;
    document.getElementById("second").innerText = s;
}

setInterval(() => {
    newYear();
}, 1000);

newYear();

document.querySelector(".year").innerHTML = getYear;
