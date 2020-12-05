const url = ['ZPFon7jXuBU','De-pksZy6a0', 'M4GkNCHYcvk', 'avkcvzrvPhM','rdBkym-eyIc', '83to4Ti8xD8'];

let curr = 0;

function addVideo(){
    const link = document.querySelector('input').value;
    url.push(link);
    document.querySelector('input').value = ''
}

function maxVideo(){
    return url.length - 1;
}


function next(){
    curr = (curr === maxVideo()) ? curr = 0 : curr + 1;
    change()
}

function previous(){
    curr = (curr === 0) ? curr = maxVideo() : curr - 1;
    change()
}

function change(){
    return document.querySelector('iframe')
    .setAttribute('src', 'https://www.youtube.com/embed/' + url[curr])
}

function shuffle(){
    const random = Math.round(Math.random() * url.length ); 
    curr = random
    change()
}

function first(){
    curr = 0
    change()
}

function last(){
    curr = maxVideo()
    change()
}
