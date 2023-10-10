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
	let sectionNum = parseInt((pos / height) * 2);

	if (sectionNum >= 2 && sectionNum<=4) {
		document.getElementById("firstpage").style.top += (pos - height);
	}
	else if(sectionNum>=6 && sectionNum<=8){
		document.getElementById("secondpage").style.top += (pos - height);
	}

}