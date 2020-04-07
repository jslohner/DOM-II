// Your code goes here

const get = (selector) => document.querySelector(selector);
const getAll = selector => document.querySelectorAll(selector);

let body = get('body div.container.home');
let nav = get('nav');
let navLinks = getAll('nav a');
let logo = get('.logo-heading');
let header = get('header');
let paragraphs = getAll('p');
// let introImg = get('.intro img');
// let lgImg = get('.img-content img');
// let aaImg = get('.img-fluid.rounded');
// let pydImg = get('.content-destination img');

let fontButton = document.createElement('button');
fontButton.textContent = 'Font Button';
fontButton.style.color = 'black';
fontButton.style.border = 0;
fontButton.addEventListener('mouseover', hoverOnNav);
fontButton.addEventListener('mouseout', hoverOffNav);
nav.appendChild(fontButton);

function changeBackgroundColor(event) {
	event.target.style.backgroundColor = 'blue';
}

function hoverOnNav(event) {
	event.target.style.color = '#191970';
	event.target.style.backgroundColor = '#008B8B';
	event.target.style.padding = '10px';
	event.target.style.fontSize = '20px';
}
function hoverOffNav(event) {
	event.target.style.color = '';
	event.target.style.backgroundColor = '';
	event.target.style.padding = '';
	event.target.style.fontSize = '';
}
function altClickHeader(event) {
	if (event.altKey === true) {
		let randomColor = Math.floor(Math.random()*16777215).toString(16);
		header.style.backgroundColor = `#${randomColor}`;
	}
}

function changeFont(event) {

}

body.addEventListener('click', changeBackgroundColor);

header.addEventListener('click', altClickHeader);

navLinks.forEach((link) => link.addEventListener('mouseover', hoverOnNav));
navLinks.forEach((link) => link.addEventListener('mouseout', hoverOffNav));

// fontButton.addEventListener('click')
