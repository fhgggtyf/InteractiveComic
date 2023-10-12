let firstPageElement = document.getElementById('firstpage');
let currentTop1 = parseInt(firstPageElement.style.top);
let firstemily = document.getElementById('emily1');
let currentEmilyTop1 = parseInt(firstemily.style.top);
let currentEmilyLeft1 = parseInt(firstemily.style.left);

let secondPageElement = document.getElementById('secondpage');
let currentTop2 = parseInt(secondPageElement.style.top);
let secondemily = document.getElementById('emily2');
let currentEmilyTop2 = parseInt(secondemily.style.top);
let currentEmilyLeft2 = parseInt(secondemily.style.left);

let thirdPageElement = document.getElementById('thirdpage');
let currentTop3 = parseInt(thirdPageElement.style.top);
let thirdemily = document.getElementById('emily3');
let currentEmilyTop3 = parseInt(thirdemily.style.top);
let currentEmilyLeft3 = parseInt(thirdemily.style.left);

document.addEventListener('scroll', scrollEvent);

function scrollEvent() {

	// pos saves current scrollY position
	let pos = window.scrollY;
	let absPos=803*window.scrollY/window.innerHeight;
	// width saves current web page width
	let width = 1700;
	// height saves current web page height
	let height = 803;
	// Calculate which section the user has scrolled to
	// parseInt() function used to ignore decimals
	let sectionNum = (absPos / height) * 2;

	if (sectionNum >= 2 && sectionNum <= 4) {
		firstPageElement.style.top = (currentTop1 + (pos - window.innerHeight)) + 'px';
		firstemily.style.height = 200 - 150*(pos - window.innerHeight)/innerHeight + 'px';
		firstemily.style.top=(currentEmilyTop1 + (pos - window.innerHeight)+20) + 'px';
		firstemily.style.left=(currentEmilyLeft1) + 'px';
	}
	else if (sectionNum >= 6 && sectionNum <= 8) {
		secondPageElement.style.top = (currentTop2 + (pos - 3 * window.innerHeight)) + 'px';
		secondemily.style.top=(currentEmilyTop2 + (pos - 2.45*window.innerHeight)-pos/5+40) + 'px';
		secondemily.style.left=(currentEmilyLeft2 + 170*(pos - 3*window.innerHeight)/innerHeight) + 'px';
		secondemily.style.height = 270 - 70*(pos - 3*window.innerHeight)/innerHeight + 'px';
	}
	else if (sectionNum >= 10 && sectionNum <= 14) {
		thirdPageElement.style.top = (currentTop3 + (pos - 5 * window.innerHeight)) + 'px';
		thirdemily.style.top=(currentEmilyTop3 + (pos - 4*window.innerHeight)-pos/5) + 'px';
		thirdemily.style.left=(currentEmilyLeft3 + 880*(pos - 5*window.innerHeight)/window.innerHeight) + 'px';
		thirdemily.style.height = 2700 - 2600*(pos - 5*window.innerHeight)/window.innerHeight + 'px';
	}

}