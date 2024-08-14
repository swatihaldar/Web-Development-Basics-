const body = document.body;
document.body.style.backgroundImage = 'url(https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad)';
document.body.style.backgroundSize = 'cover';
document.body.style.height = '100vh';

const div = document.createElement('div');
div.classList.add('container');
body.append(div)

const divElement = document.querySelector('.container');
divElement.style.backgroundColor = '#f6c56e'
divElement.style.backgroundSize = 'cover'
divElement.style.height = '35vh';
divElement.style.borderTopRightRadius = '15px';
divElement.style.borderTopLeftRadius = '15px';
divElement.style.padding = '12px'
divElement.style.position = 'absolute';
divElement.style.bottom = '0px';
divElement.style.left = '0px';
divElement.style.right = '0px';

const heading = document.createElement('h1');
heading.innerText = 'Happy Meals';
heading.style.color = '#323f4b';
heading.style.fontFamily = 'Bree Serif';
div.appendChild(heading);

const para = document.createElement('p');
para.innerText = 'Discover the best foods over the 1,000 restaurants';
para.style.color = '#323f4b';
para.style.fontFamily = 'Roboto'
para.style.fontWeight = 'bold'
div.appendChild(para);

const buttonDiv = document.createElement('div');
div.append(buttonDiv);

const button = document.createElement('button');
button.innerText = 'Book Now';
button.style.padding = '12px';
button.style.paddingRight = '30px';
button.style.paddingLeft = '30px';
button.style.borderRadius = '10px';
button.style.border = '10px'
buttonDiv.appendChild(button);

