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
	let width = window.innerWidth;
	// height saves current web page height
	let height = window.innerHeight;
	// Calculate which section the user has scrolled to
	// parseInt() function used to ignore decimals
	let sectionNum = (pos / height) * 2;

	if (sectionNum >= 2 && sectionNum <= 4) {
		firstPageElement.style.top = (currentTop1 + (pos - height)) + 'px'; //follow scroll 
		firstemily.style.top=(currentEmilyTop1/100*height + (pos - height)+5) + 'px';
		firstemily.style.left=((currentEmilyLeft1/100*width)+0.00007*width*(pos - height)) + 'px';
		firstemily.style.height = 200 - 150*(pos - height)/height + 'px';
	}
	else if (sectionNum >= 6 && sectionNum <= 8) {
		secondPageElement.style.top = (currentTop2 + (pos - 3 * height)) + 'px';
		secondemily.style.top=(currentEmilyTop2/100*height + 0.8*(pos - 3*height)) + 'px';
		secondemily.style.left=(currentEmilyLeft2/100*width + 0.00019*(pos - 3*height)*width) + 'px';
		secondemily.style.height = 270 - 120*(pos - 3*height)/height + 'px';
	}
	else if (sectionNum >= 10 && sectionNum <= 14) {
		thirdPageElement.style.top = (currentTop3 + (pos - 5 * height)) + 'px';
		if(sectionNum<12.18){
			thirdemily.style.opacity="1";
			thirdemily.style.top=(currentEmilyTop3/100*height + 0.8*(pos - 5*height)) + 'px';
			thirdemily.style.left=(currentEmilyLeft3/100*width + 0.000255*width*(pos - 5*height)) + 'px';
			thirdemily.style.height = 2700 - 2550*(pos - 5*height)/height + 'px';
		}
		else{
			thirdemily.style.opacity="0";
		}

	}

}