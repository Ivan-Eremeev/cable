//  Ivan Eremeev - 2021
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

document.addEventListener('DOMContentLoaded', () => {

	// Брэйкпоинты js
	var breakXl = 1400,
		breakLg = 1200,
		breakMd = 1025,
		breakSm = 769,
		breakXs = 500;
	
	// Выпадайка при клике
	function drop() {
		let triggers = document.querySelectorAll('.js-dropTrigger'),
				closes = document.querySelectorAll('.js-dropClose');
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
		for (let i = 0; i < closes.length; i++) {
			let close = closes[i];
			close.addEventListener('click', () => {
				let drop = document.getElementById(close.getAttribute('data-drop')),
						trigger = document.querySelector('[data-drop=' + close.getAttribute('data-drop') + ']');
				drop.classList.remove('open');
				trigger.classList.remove('active');
			})
		}
	}
	drop();
	
	// Swiper slider
	const swiperWelcome = new Swiper('#welcomeSlider', {
		effect: 'fade',
		speed: 1000,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			prevEl: '.welcome__button--prev',
			nextEl: '.welcome__button--next',
		},
	});

	// Инициализация swiper на мобилке
	function swiperToggleInit() {
		let swiperLines = undefined,
				swiperTypes = undefined,
				swiperNews = undefined;
		swiperLinesToggle();
		swiperTypesToggle();
		swiperNewsToggle();
		window.addEventListener('resize', () => {
			swiperLinesToggle();
			swiperTypesToggle();
			swiperNewsToggle();
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
		function swiperNewsToggle() {
			if (window.innerWidth <= breakSm && swiperNews == undefined) {
				swiperNews = new Swiper('#newsSlider', {
					slidesPerView: 1,
					breakpoints: {
						500: {
							slidesPerView: 2,
						},
					}
				});
			} else if (window.innerWidth > breakSm && swiperNews != undefined) {
				swiperNews.destroy();
				swiperNews = undefined;
			}
		}
	}
	swiperToggleInit();

	// Меню
	function menu() {
		let btn = document.getElementById('menu-btn'),
				menu = document.getElementById('menu'),
				close = document.getElementById('menu-close'),
				childItems = document.querySelectorAll('.menu__child'),
				submenus = document.querySelectorAll('.menu__drop'),
				backs = document.querySelectorAll('.menu__back');
		btn.addEventListener('click', () => {
			if (!btn.classList.contains('active')) {
				btn.classList.add('active');
				menu.classList.add('open');	
			}else {
				btn.classList.remove('active');
				menu.classList.remove('open');
				for (let i = 0; i < childItems.length; i++) {
					childItems[i].classList.remove('active');
				}
				for (let i = 0; i < submenus.length; i++) {
					submenus[i].classList.remove('open');
				}
			}
			document.addEventListener('click', (e) => {
				if (!btn.contains(e.target)
					&& !menu.contains(e.target)) {
					btn.classList.remove('active');
					menu.classList.remove('open');
					for (let i = 0; i < childItems.length; i++) {
						childItems[i].classList.remove('active');
					}
					for (let i = 0; i < submenus.length; i++) {
						submenus[i].classList.remove('open');
					}
				}
			});
		})
		close.addEventListener('click', () => {
			btn.classList.remove('active');
			menu.classList.remove('open');
		})
		for (let i = 0; i < childItems.length; i++) {
			let childItem = childItems[i];
			childItem.querySelector('a').addEventListener('click', (e) => {
				e.preventDefault();
				let submenu = childItem.querySelector('.menu__drop');
				childItem.classList.add('active');
				submenu.classList.add('open');
				close.addEventListener('click', () => {
					childItem.classList.remove('active');
					submenu.classList.remove('open');
				})
			})
		}
		for (let i = 0; i < backs.length; i++) {
			let back = backs[i];
			back.addEventListener('click', () => {
				back.closest('.menu__child').classList.remove('active');
				back.closest('.menu__drop').classList.remove('open');
			})
		}
	}
	menu();

});