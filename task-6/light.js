//// style 

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.style.backgroundColor = '#1f1d41';
    button.style.color = 'white';
    button.style.fontFamily = 'Roboto';
    button.fontSize = '15px';
    button.style.width = '70px';
    button.style.height = '40px';
    button.style.borderWidth = '0px';
    button.style.borderRadius = '10px';
    button.style.marginTop = '45px'

});

const container = document.querySelectorAll('.cont');
container.forEach(container => {
    container.style.backgroundColor = '#86d2f2';
    container.style.padding = '20px';
    container.style.height = '100vh';
});

const trafficLight = document.querySelectorAll('.traffic-light');
trafficLight.forEach(trafficLight => {
    trafficLight.style.color = '#1f1d41';
    trafficLight.style.fontFamily = 'Roboto';
    trafficLight.style.fontSize = '46px'
    trafficLight.style.fontWeight = 'bold';
});

const traffic = document.querySelectorAll('.traffic');
traffic.forEach(traffic => {
    traffic.style.backgroundColor = '#1f1d41';
    traffic.style.width = '100px';
    traffic.style.height = '300px';
    traffic.style.borderRadius = '40px';
    traffic.style.marginLeft = '30px';
    traffic.style.padding = '20px';
});

const bulb = document.querySelectorAll('.bulb');
bulb.forEach(bulb => {
    bulb.style.backgroundColor = '#4b5069';
    bulb.style.width = '50px';
    bulb.style.height = '50px';
    bulb.style.borderRadius = '50px';
    bulb.style.marginTop = '25px';
    bulb.style.marginBottom = '25px';
    bulb.style.marginLeft = '5px'
})


///// JavaScript 

function turnOnRed(){
    reset();
    let stopButton = document.getElementById('stopButton');
    stopButton.style.backgroundColor = 'rgb(255, 24, 24)';
    let stopLight = document.getElementById('stopLight');
    stopLight.style.backgroundColor = 'rgb(255, 24, 24)';
}

function turnOnYellow(){
    reset();
    let readyButton = document.getElementById('readyButton');
    readyButton.style.backgroundColor = 'rgb(238, 234, 6)';
    let readyLight = document.getElementById('readyLight');
    readyLight.style.backgroundColor = 'rgb(238, 234, 6)';
}

function turnOnGreen(){
    reset();
    let goButton = document.getElementById('goButton');
    goButton.style.backgroundColor = 'rgb(34, 209, 18)';
    let goLight = document.getElementById('goLight');
    goLight.style.backgroundColor = 'rgb(34, 209, 18)';
}

function reset(){
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(buttons => {
        buttons.style.backgroundColor = '#1f1d41'
    });

    const lights = document.querySelectorAll('.bulb');
    lights.forEach(lights => {
        lights.style.backgroundColor = '#4b5069'
    })
}
