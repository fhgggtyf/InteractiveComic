let stories = [
	'I am a mosquito',
	'I flew in your door',
	'I am flying in your room',
	'I am dead'
];

let mosquitoDiv = document.getElementById('mosquito-div');
let mosquitoText = document.getElementById('mosquito-text');
let handDiv = document.getElementById('hand-div');
let navButtons = document.getElementsByClassName('nav-btn');

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
	let sectionNum = parseInt(pos / height);
	if (sectionNum == 0) {
		document.getElementById('outside').style.backgroundAttachment = "fixed";
		document.getElementById('room').style.backgroundAttachment = "scroll";	}
	else if (sectionNum == 2) {
		document.getElementById('outside').style.backgroundAttachment = "scroll";
		document.getElementById('room').style.backgroundAttachment = "fixed";
	}
	// Set the text of mosquito-text element depending on which section the user has currently scrolled to
	mosquitoText.innerHTML = stories[sectionNum];
	// Map vertical scroll position to the horizontal position of the mosquito
	if (sectionNum != 3) {
		document.getElementById("mosquito").src="img/mosquito.png"
		mosquitoDiv.style.left = pos / (height * 4) * width + 'px';
		mosquitoDiv.style.bottom = pos / (height * 12) * width + 'px';
		handDiv.style.opacity = 0;
		if (sectionNum == 2) {
			handDiv.style.opacity = 1;
			handDiv.style.left = (pos - 2 * height) / (height) * width + 'px';;
		}
	}
	else {
		handDiv.style.opacity = 0;
		document. getElementById("mosquito"). src="img/mosquitodead.png"
		mosquitoDiv.style.left = pos / (height * 4) * width + 'px';
		mosquitoDiv.style.bottom = 0;
	}

	for (let i = 0; i < navButtons.length; i++) {
		navButtons[i].style.backgroundColor = 'white';
	}

	// Set color of current section button to black
	navButtons[sectionNum].style.backgroundColor = 'black';
}