function changeColor(colorName, colorValue){
    let body = document.body;
    let textSpan = document.getElementById("text");
    body.style.backgroundColor = colorValue;
    textSpan.textContent = colorName;
    textSpan.style.color = colorValue;
}

function changeYellow(){
    changeColor('Yellow', 'rgb(248, 248, 64)');
}

function changeGreen(){
    changeColor('Green','rgb(103, 218, 103)');
}

function changeBlue(){
    changeColor('Blue','rgb(106, 106, 226)');
}

function changePink(){
    changeColor('Pink','rgb(231, 120, 139)');
}