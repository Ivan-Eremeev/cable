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
	
	// Выпадайка при клике
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
	
	// Swiper slider
	const swiperWelcome = new Swiper('#welcomeSlider', {
		effect: 'fade',
		speed: 1000,
		navigation: {
			prevEl: '.welcome__button--prev',
			nextEl: '.welcome__button--next',
		},
	});

	// Инициализация swiper на мобилке
	function swiperToggleInit() {
		let swiperLines = undefined,
				swiperTypes = undefined;
		swiperLinesToggle();
		swiperTypesToggle();
		window.addEventListener('resize', () => {
			swiperLinesToggle();
			swiperTypesToggle();
		})
		function swiperLinesToggle() {
			if (window.innerWidth <= breakSm && swiperLines == undefined) {
				swiperLines = new Swiper('#linesSlider', {
					slidesPerView: 1,
					breakpoints: {
						500: {
							slidesPerView: 2,
						},
					}
				});
			} else if (window.innerWidth > breakSm && swiperLines != undefined) {
				swiperLines.destroy();
				swiperLines = undefined;
			}
		}
		function swiperTypesToggle() {
			if (window.innerWidth <= breakSm && swiperTypes == undefined) {
				swiperTypes = new Swiper('#typesSlider', {
					slidesPerView: 1,
					breakpoints: {
						500: {
							slidesPerView: 2,
						},
					}
				});
			} else if (window.innerWidth > breakSm && swiperTypes != undefined) {
				swiperTypes.destroy();
				swiperTypes = undefined;
			}
		}
	}
	swiperToggleInit();

});