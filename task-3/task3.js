const body = document.body;

const div = document.createElement('div');
body.append(div);

//div.classList.add('bimage');
div.className = 'bimage d-flex flex-column justify-content-center';

const h1 = document.createElement('h1');
h1.innerText = 'Code is more than some bytes in a file'
div.appendChild(h1)

h1.classList.add('top');

const bimageElement = document.querySelector('.bimage');
bimageElement.style.backgroundImage = 'url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/codingbg.png)'
bimageElement.style.backgroundSize = 'cover';
bimageElement.style.height = '100vh';
bimageElement.style.padding = '30px';
bimageElement.style.borderColor = '#48ee59';
bimageElement.style.borderWidth = '5px';
bimageElement.style.borderStyle = 'solid';

const topElement = document.querySelector('.top');
topElement.style.color = 'white';
topElement.style.fontFamily = 'bree serif';
topElement.style.backgroundColor = '#00000080';
topElement.style.padding = '15px';
topElement.style.fontSize = '30px'
topElement.style.textAlign = 'center'

