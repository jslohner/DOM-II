// Your code goes here

// selectors
const get = (selector) => document.querySelector(selector);
const getAll = selector => document.querySelectorAll(selector);


// add classes
let h1s = getAll('h1');
h1s.forEach(title => title.classList.add('title'));
let h2s = getAll('h2');
h2s.forEach(title => title.classList.add('title'));
let h4s = getAll('h4');
h4s.forEach(title => title.classList.add('title'));


// fetch elements
let body = get('body div.container.home');
let nav = get('nav');
let navLinks = getAll('nav a');
let logo = get('.logo-heading');
let header = get('header');
let home = get('.home');
let paragraphs = getAll('p');
let titles = getAll('.title');
let introImg = get('.intro img');
let lgImg = get('.img-content img');
let aaImg = get('.img-fluid.rounded');
let pydImg = get('.content-destination img');
let imgList = [introImg, lgImg, aaImg, pydImg];
let footer = get('footer');


// create buttons
let paragraphFontButton = document.createElement('button');
paragraphFontButton.textContent = 'P Font';
paragraphFontButton.style.color = 'black';
paragraphFontButton.style.border = 0;
paragraphFontButton.addEventListener('mouseover', hoverOn);
paragraphFontButton.addEventListener('mouseout', hoverOff);
nav.appendChild(paragraphFontButton);

let titleFontButton = document.createElement('button');
titleFontButton.textContent = 'Title Font';
titleFontButton.style.color = 'black';
titleFontButton.style.border = 0;
titleFontButton.addEventListener('mouseover', hoverOn);
titleFontButton.addEventListener('mouseout', hoverOff);
nav.appendChild(titleFontButton);


// functions
function doubleClickDisplayNone(event) {
	event.target.style.display = 'none';
	console.log('deleted');
	event.stopPropagation();
}
function hoverOn(event) {
	event.target.style.color = '#191970';
	event.target.style.backgroundColor = '#008B8B';
	event.target.style.padding = '10px';
	event.target.style.fontSize = '20px';
	console.log(event.target);
	event.stopPropagation();
}
function hoverOff(event) {
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
function paragraphFont(event) {
	let fonts = ['Palatino Linotype', 'Book Antiqua', 'Times New Roman', 'Arial', 'Helvetica', 'Arial Black', 'Impact', 'Lucida Sans Unicode', 'Tahoma', 'Verdana', 'Courier New', 'Lucida Console'];
	randomFont = fonts[Math.floor(Math.random() * fonts.length)];
	paragraphs.forEach((p) => p.style.fontFamily = randomFont);
}
function titleFont(event) {
	let fonts = ['Palatino Linotype', 'Book Antiqua', 'Times New Roman', 'Arial', 'Helvetica', 'Arial Black', 'Impact', 'Lucida Sans Unicode', 'Tahoma', 'Verdana', 'Courier New', 'Lucida Console'];
	randomFont = fonts[Math.floor(Math.random() * fonts.length)];
	titles.forEach((title) => title.style.fontFamily = randomFont);
}
function randomBackgroundColor(event) {
	if (event.key === 'b') {
		let sections = [header, home, footer];
		let changeSection = sections[Math.floor(Math.random() * sections.length)];
		let randomColor = Math.floor(Math.random()*16777215).toString(16);
		changeSection.style.backgroundColor = `#${randomColor}`;
	}
}
function resizeWindow(event) {
	introImg.style.display = 'none';
	pydImg.style.display = 'none';
}
function scrollColor(event) {
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
	header.style.backgroundColor = `#${randomColor}`;
	home.style.color = `#${randomColor}`;
}
function noMenuImgs(event) {
	event.preventDefault();
}


// event listeners
window.addEventListener('load', (event) => {console.log('Fun Bus Travel Agency Webpage is now fully loaded!')});

window.addEventListener('scroll', scrollColor);

header.addEventListener('click', altClickHeader);
home.addEventListener('dblclick', doubleClickDisplayNone);
home.addEventListener('mouseover', hoverOn);
home.addEventListener('mouseout', hoverOff);

navLinks.forEach((link) => link.addEventListener('mouseover', hoverOn));
navLinks.forEach((link) => link.addEventListener('mouseout', hoverOff));
navLinks.forEach((link) => link.addEventListener('click', (event) => {event.preventDefault()}));

paragraphFontButton.addEventListener('click', paragraphFont);
titleFontButton.addEventListener('click', titleFont);

imgList.forEach((img) => img.addEventListener('dblclick', doubleClickDisplayNone));
imgList.forEach((img) => img.addEventListener('contextmenu', noMenuImgs))
imgList.forEach((img) => img.addEventListener('mouseover', hoverOn));
imgList.forEach((img) => img.addEventListener('mouseout', hoverOff));

document.addEventListener('keydown', randomBackgroundColor);

window.addEventListener('resize', resizeWindow);
