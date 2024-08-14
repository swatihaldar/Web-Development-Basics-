const image = document.getElementById('emoji');
image.style.width = '40vh';
image.style.height = '40vh';
image.style.paddingBottom = '5px';

const button = document.getElementById('unhappy');
button.style.backgroundColor = 'blue';
button.style.color = '#ffffff';
button.style.padding = '12px 30px 12px 30px'
button.style.border = '0px';
button.style.width = '120px'
button.style.borderRadius = '9px'

function changeEmoji(){
    let img = document.getElementById('emoji');
    img.src = 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png';
    let butt = document.getElementById('unhappy');
    butt.textContent = 'happy';
}

