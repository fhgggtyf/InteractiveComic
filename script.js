let firstPageElement = document.getElementById('firstpage');
let currentTop1 = parseInt(firstPageElement.style.top);
let firstemily = document.getElementById('emily1');
let currentEmilyTop1 = parseInt(firstemily.style.top);

let secondPageElement = document.getElementById('secondpage');
let currentTop2 = parseInt(secondPageElement.style.top);
let secondemily = document.getElementById('emily2');
let currentEmilyTop2 = parseInt(secondemily.style.top);
let currentEmilyLeft2 = parseInt(secondemily.style.left);

document.addEventListener('scroll', scrollEvent);

function scrollEvent() {

	// pos saves current scrollY position
	let pos = window.scrollY;
	// width saves current web page width
	let width = window.innerWidth;
	// height saves current web page height
	let height = window.innerHeight;
	// Calculate which section the user has scrolled to
	// parseInt() function used to ignore decimals
	let sectionNum = (pos / height) * 2;

	if (sectionNum >= 1.98 && sectionNum <= 4) {
		firstPageElement.style.top = (currentTop1 + (pos - height)) + 'px';
		firstemily.style.height = 200 - (pos - height)/5.5 + 'px';
		firstemily.style.top=(currentEmilyTop1/100*height + (pos - height)) + 'px';
	}
	else if (sectionNum >= 5.78 && sectionNum <= 8) {
		secondPageElement.style.top = (currentTop2 + (pos - 2.9 * height)) + 'px';
		secondemily.style.top=(currentEmilyTop2/100*height + (pos - 2.35*height)-pos/5) + 'px';
		secondemily.style.left=(currentEmilyLeft2/100*width + (pos - 2.9*height)/5) + 'px';
		secondemily.style.height = 270 - (pos - 2.9*height)/10 + 'px';
	}

}