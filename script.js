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
	// width saves current web page width
	let width = 1700;
	// height saves current web page height
	let height = 803;
	// Calculate which section the user has scrolled to
	// parseInt() function used to ignore decimals
	let sectionNum = (pos / height) * 2;

	if (sectionNum >= 1.98 && sectionNum <= 4) {
		firstPageElement.style.top = (currentTop1 + (pos - height)) + 'px';
		firstemily.style.height = 200 - (pos - height)/5.5 + 'px';
		firstemily.style.top=(currentEmilyTop1 + (pos - height)+10) + 'px';
		firstemily.style.left=(currentEmilyLeft1/100*width) + 'px';
	}
	else if (sectionNum >= 5.78 && sectionNum <= 8) {
		secondPageElement.style.top = (currentTop2 + (pos - 2.9 * height)) + 'px';
		secondemily.style.top=(currentEmilyTop2/100*height + (pos - 2.35*height)-pos/5+40) + 'px';
		secondemily.style.left=(currentEmilyLeft2/100*width + (pos - 2.9*height)/5) + 'px';
		secondemily.style.height = 270 - (pos - 2.9*height)/10 + 'px';
	}
	else if (sectionNum >= 10 && sectionNum <= 15) {
		thirdPageElement.style.top = (currentTop3 + (pos - 5 * height)) + 'px';
		thirdemily.style.top=(currentEmilyTop3/100*height + (pos - 3.33*height)-pos/3) + 'px';
		thirdemily.style.left=(currentEmilyLeft3/100*width + (pos - 5*height)*1.06) + 'px';
		thirdemily.style.height = 2700 - (pos - 5*height)*3.15 + 'px';
	}

}