//  Ivan Eremeev - 2021
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

document.addEventListener('DOMContentLoaded', () => {

	// Брэйкпоинты js
	let	breakXl = 1400,
			breakLg = 1200,
			breakMd = 1025,
			breakSm = 769,
			breakXs = 500;
	
	function drop() {
		let triggers = document.querySelectorAll('.js-dropTrigger');
		for (let i = 0; i < triggers.length; i++) {
			let trigger = triggers[i];
			trigger.addEventListener('click', () => {
				let drop = document.getElementById(trigger.getAttribute('data-drop'));
				if (!trigger.classList.contains('active')) {
					trigger.classList.add('active');
					drop.classList.add('open');
				}else {
					trigger.classList.remove('active');
					drop.classList.remove('open');
				}
				document.addEventListener('click', (e) => {
					if (!trigger.contains(e.target)
						&& !drop.contains(e.target)) {
						trigger.classList.remove('active');
						drop.classList.remove('open');
					}
				});
			})
		}
	}
	drop();
	
	const swiperWelcome = new Swiper('#welcomeSlider', {
		// Optional parameters
		loop: true,
		// Navigation arrows
		navigation: {
			prevEl: '.welcome__button--prev',
			nextEl: '.welcome__button--next',
		},
	});

});