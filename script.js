function scrollDownAndUp(duration) {
	const scrollHeight = document.documentElement.scrollHeight;
	const windowHeight = window.innerHeight;
	const scrollStep = (scrollHeight - windowHeight) / (duration / 2); // Half the duration for each direction
	let currentScrollPosition = document.documentElement.scrollHeight;
	let scrollingDown = false;

	function scroll() {
		if (scrollingDown && currentScrollPosition < scrollHeight - windowHeight) {
			currentScrollPosition += scrollStep;
			window.scrollTo(0, currentScrollPosition);
			requestAnimationFrame(scroll);
		} else if (!scrollingDown && currentScrollPosition > 0) {
			currentScrollPosition -= scrollStep;
			window.scrollTo(0, currentScrollPosition);
			requestAnimationFrame(scroll);
		} else {
			// Change scrolling direction when reaching the bottom or top
				return;

		}
	}

	requestAnimationFrame(scroll);
}

// Call the scrollDownAndUp function when the page loads
window.addEventListener('load', function () {
	setTimeout(function() {
		// Scroll to the bottom of the page
		document.documentElement.scrollTop = document.documentElement.scrollHeight;
		// Alternatively, you can use document.body.scrollTop for older browsers:
		// document.body.scrollTop = document.body.scrollHeight;
	  }, 0);
	scrollDownAndUp(150);
});

let firstPageElement = document.getElementById('firstpage');
let currentTop1 = parseInt(firstPageElement.style.top);

let secondPageElement = document.getElementById('secondpage');
let currentTop2 = parseInt(secondPageElement.style.top);

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
	}
	else if (sectionNum >= 5.25 && sectionNum <= 90) {
		secondPageElement.style.top = (currentTop1 + (pos - 2.75 * height)) + 'px';
	}

}