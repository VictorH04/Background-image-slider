// ! Selecting everything
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

// ! Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// ! Functions

function nextSlide() {
	container.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });

	if (counter === 4) {
		counter = -1;
	}

	counter++;

	container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;
	console.log(counter);
}

function prevSlide() {
	container.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });

	if (counter === 0) {
		counter = 5;
	}

	counter--;

	container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;
	console.log(counter);
}
