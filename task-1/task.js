const body = document.body;
document.body.style.backgroundImage = "url(https://w0.peakpx.com/wallpaper/865/443/HD-wallpaper-books-reading-tea-aesthetics.jpg)"
document.body.style.backgroundSize = "cover";
// document.body.style.backgroundPosition = "center";
document.body.style.height = "150vh";

const div = document.createElement("div");
body.append(div);

div.classList.add('swati');

const heading = document.createElement('h1');
heading.innerText  = 'Todolist';
heading.style.color = 'white';
heading.style.textAlign = 'center';
heading.style.fontSize = '100px'
div.appendChild(heading);

const para = document.createElement('p');
para.innerText = 'Each day I will accomplish one thing on my todolist.';
para.style.color = 'white';
para.style.textAlign = 'center';
para.style.fontSize = '30px'
div.appendChild(para);

const heading1 = document.createElement('h4');
heading1.innerText = 'Reading a Booking';
heading1.style.color = 'white';
heading1.style.fontSize = '50px'
div.appendChild(heading1);

const para2 = document.createElement('p');
para2.innerText = "I don't think that the human race will survive the next thousand years, unless we spread into space. There are too many accidents that can befall life on a single planet. But I'm an optimist...";
para2.style.color = 'white';
para2.style.fontSize = '30px'
div.appendChild(para2);

const button = document.createElement('button');

const buttonDiv = document.createElement('div');
buttonDiv.style.textAlign = 'center';
buttonDiv.append(button);

button.innerText = 'Start';
button.style.color = 'white';
button.style.backgroundColor = 'orange';
button.style.padding = '10px 25px';
button.style.fontSize = '30px'
div.appendChild(buttonDiv);

const para3 = document.createElement('p');
para3.innerText = "Don't skip introduction";
para3.style.fontSize = '30px'
para3.style.color = 'white';
para3.style.textAlign = 'center';
para3.style.textDecoration = 'underline';
div.appendChild(para3);
