// Ambil tahun 2021
let date = new Date('Jan 1, 2021 00:00:00').getTime();

function newYear(){
    // ambil waktu sekarang
    let now = new Date().getTime();
        // tahun 2021 - waktu sekarang
        gap = date - now;
    
        // Ubah ke detik,menit,jam dan hari
        let second = 1000;
        let minute = second * 60;   // 60,000
        let hour = minute * 60;     // 36,000,000
        let day = hour * 24;        // 864,000,000 

        // Ubah gap ke dalam detik ,menit, jam dan hari
        let d = Math.floor(gap / day);
        let h = Math.floor((gap % (day)) / hour);
        let m = Math.floor((gap % (hour)) / minute);
        let s = Math.floor((gap % (minute)) / second);
        

        // Munculkan teks ke html
        document.getElementById('day').innerText = d;
        document.getElementById('minute').innerText = m;
        document.getElementById('hour').innerText = h;
        document.getElementById('second').innerText = s;
}

// Ubah agar muncul setiap 1 detik
setInterval(() => {
   newYear() 
}, 1000);

newYear();

// src : YT Online Tutorials