function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
      console.log('mostra resultado')
    }
  
    if (file) {
      reader.readAsDataURL(file);
      console.log('ler dados', file)
    } else {
      preview.src = "";
    }
}

const opaa = {
    width: '100px',
    height: '100px'
}