const imagePreview = document.querySelector('.image-preview')
const inputFile = document.querySelector('#input-file')

inputFile.addEventListener('change', function() {
    imagePreview.style.display = 'none';
    imagePreview.nextElementSibling.style.display = 'block'; 
    imagePreview.nextElementSibling.innerHTML = "File is Not Image"
    
    const file = this.files[0];
    // console.log(file);
    
    changePreview(file)
})

function changePreview(file) {
    if(file){
        const type = file.name.split('.')[1];
        const ext = ['png', 'svg', 'jpeg', 'jpg'];

        const reader = new FileReader();        
        // console.log(reader);

        reader.addEventListener('load', function() {
            // console.log(reader);
            console.log(type);
            if(ext.includes(type.toLowerCase())) {
                changeDisplay(imagePreview);
                imagePreview.setAttribute('src', this.result);
            } else {
                imagePreview.nextElementSibling.innerHTML = 'File is not Image'
            }
        })

        reader.readAsDataURL(file);
    }
}

function changeDisplay(image){
    image.style.display = 'block';
    image.nextElementSibling.style.display = 'none';

}