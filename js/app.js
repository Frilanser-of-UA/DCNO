var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}
; //Функция которая определяет точскрин или десктоп
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});; //Работа с картинками webP
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();; //Работа с картинками ibg
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}

; //Slide toggle slide-toggle
window.addEventListener("load", function () {
	if (document.querySelector('.wrapper')) {
		setTimeout(function () {
			document.querySelector('.wrapper').classList.add('_loaded');
		}, 0);
	}
});

let unlock = true;
; //load-wrapper
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================; //body-lock
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}; //ActionsOnHash

const navOpen = document.querySelector('.dc-header-nav');
if (!isMobile.any()) {
    navOpen.addEventListener("mouseover", function (e) {
        let targetItem = e.target;
        if (targetItem.closest('.dc-header-item')) {
            targetItem.closest('.dc-header-item').classList.add('hover')
        }
    });
    const navClose = document.querySelector('.dc-header-nav');
    navClose.addEventListener("mouseout", function (e) {
        let targetItem = e.target;
        if (targetItem.closest('.dc-header-item')) {
            targetItem.closest('.dc-header-item').classList.remove('hover')
        }
    });
    document.addEventListener("click", documentActions);
    function documentActions(e) {
        const targetElement = e.target;
        if (targetElement.classList.contains('btn-close')) {
            document.querySelector('.dc-header-item.hover').classList.remove('hover');
        }
    }
}
else if (isMobile.any() || window.innerWidth > 768) {
    document.querySelectorAll('.dc-header-item').forEach(function (link, index) {
        link.addEventListener('click', function () {
            if (this.classList.contains('opened')) {
                this.classList.remove('opened');
            } else {
                const activeLink = document.querySelector('.dc-header-item.opened');
                if (activeLink) {
                    activeLink.classList.remove('opened');
                }
                this.classList.add('opened');
            }
        });
    });
}
if (window.innerWidth <= 768) {
    const menu = document.querySelector('.dc-header-navbar'),
        burger = document.querySelector('.dc-btn-burger'),
        headerBody = document.querySelector('.dc-header-body'),
        block = document.querySelector('.dc-scroll-lock');

    const lockScroll = () => {
        document.body.classList.add('lock')
    }
    const unlockScroll = () => {
        document.body.classList.remove('lock')
    }

    const initialMenu = () => {
        document.querySelectorAll('.dc-menu-dropdown').forEach(function (item) {
            item.classList.remove('transformation');
        });
        document.querySelectorAll('.dc-header-navbar').forEach(function (item) {
            item.classList.remove('transformation');
        });


        // document.querySelectorAll('.dc-header-navbar').classList.remove('transformation');
        scrollTop();
    }
    const scrollTop = () => {
        menu.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    burger.addEventListener('click', () => {
        if (!burger.classList.contains('active')) {
            menu.classList.add('open');
            burger.classList.add('active');
            headerBody.classList.add('active');
            lockScroll();
            initialMenu();
        } else if (burger.classList.contains('active')) {
            menu.classList.remove('open');
            burger.classList.remove('active');
            headerBody.classList.remove('active');
            unlockScroll();
        }
    });
    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            if (Math.ceil(block.scrollTop + block.clientHeight) >= Math.ceil(block.scrollHeight)) {
                e.target.closest('.dc-header-navbar').classList.add('transformation');
                scrollTop();
            }
            e.target.closest('.dc-header-item').querySelector('.dc-menu-dropdown').classList.add('transformation')
            scrollTop();
        }
        if (e.target.classList.contains('btn-close')) {
            e.preventDefault();
            e.target.closest('.dc-menu-dropdown').classList.remove('transformation');
            e.target.closest('.dc-header-body').querySelector('.dc-header-navbar').classList.remove('transformation')
            scrollTop();
        }
        if (e.target.classList.contains('dc-dropdown-link') && !e.target.classList.contains('dc-dropdown-ic')) {
            menu.classList.remove('open');
            burger.classList.remove('active');
            headerBody.classList.remove('active');
            unlockScroll();
        }
    });
}
if (isMobile.any()) {
    document.querySelectorAll('.dc-dropdown-ic').forEach(function (link, index) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (this.classList.contains('opened')) {
                this.classList.remove('opened');
            } else {
                const activeLink2 = document.querySelector('.dc-dropdown-ic.opened');
                if (activeLink2) {
                    activeLink2.classList.remove('opened');
                }
                this.classList.add('opened');

            }
        });
    });
}

// scroll app btn
const scrollUp = document.querySelector('.scroll-up');
if (scrollUp) {
    scrollUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
    if (isMobile.any()) {
        scrollUp.classList.add('touch');
    }
}



// hover card img
const cardItem = document.querySelectorAll('.dc-card-referens');
if (!isMobile.any()) {
    cardItem.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            let self = e.currentTarget;
            let selfData = self.dataset.hover;
            let currentEl = document.querySelector(`.dc-img-hover[data-hover="${selfData}"]`)
            self.classList.add('hover');
            currentEl.classList.add('hover');
        })
        el.addEventListener('mouseleave', (e) => {
            let self = e.currentTarget;
            let selfData = self.dataset.hover;
            let currentEl = document.querySelector(`.dc-img-hover[data-hover="${selfData}"]`)
            self.classList.remove('hover');
            currentEl.classList.remove('hover');

        })
    });
}
//  nav (добавление id и количество точек навигации создаеться 
// динамически и зависит от количества секций с классом dc-scroll)
let summEl = document.querySelectorAll('.dc-scroll');
let dots = document.querySelector('.dc-page-nav');
if (summEl.length > 0 || window.innerWidth > 992) {
    for (let i = 0; i < summEl.length; i++) {
        let idSection = summEl[i];
        let num = [i + 1];
        idSection.id = `section-${num}`;
        document.querySelector('.dc-page-nav').insertAdjacentHTML('beforeEnd',
            `
        
    <a class="dc-nav-dot" href="#section-${num}"></a>
        `
        )
    }
}
const observerDot = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.dc-nav-dot').forEach((link) => {
                let id = link.getAttribute('href').replace('#', '');
                if (id === entry.target.id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.dc-scroll').forEach(section => { observerDot.observe(section) });

// ======================
// var paralax = document.querySelectorAll('.dc-animate');
// paralax.forEach((el) => {
//     /* коэфициент сдвига: 1 сдвиг равный смещению по оси Y, 0 без сдвига */
//     var moveCoef = 0.15;

//     window.addEventListener("scroll", scroll);
//     window.addEventListener("resize", scroll);
//     scroll();
//     function scroll() {

//         /* берём огнаничивающий прямоугольник паралакса относительно окна (фрейма) */
//         var r = el.getBoundingClientRect();

//         /* центр паралакса */
//         var paralaxYCenter = r.y + r.height / 2;
//         /* центр экрана */
//         var scrollYCenter = window.innerHeight / 2;

//         /* Вычисляем смещение */
//         var move = (paralaxYCenter - scrollYCenter) * moveCoef - 100;

//         el.style.marginTop = move + "px";
//     }
// });


const gallerySlider = new Swiper('.dc-carousel', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: false,
    loop: true,
    speed: 1200,
    autoplay: {
        dalay: 800,
        stopOnLastSlide: false,
    },

});

const sliders = document.querySelectorAll('.dc-slider-content');
sliders.forEach((el) => {
    let contentSlider = new Swiper(el, {
        spaceBetween: 24,
        autoHeight: false,
        speed: 1800,
        pagination: {
            el: el.querySelector('.swiper-pagination'),
            clickable: true,
        },
        navigation: {
            nextEl: el.querySelector('.next-content'),
            prevEl: el.querySelector('.prev-content'),

        },
        breakpoints: {
            320: {
                slidesPerView: 1.25,
                maxBackfaceHiddenSlides: 1.25,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
                maxBackfaceHiddenSlides: 2,
            },
            768: {
                slidesPerView: 3,
                maxBackfaceHiddenSlides: 3,
            },
            992: {
                slidesPerView: 4,
                maxBackfaceHiddenSlides: 4,
                spaceBetween: 24,
            },
        },
    });
});

const contentTeaser = new Swiper('.dc-slider-teaser', {

    autoHeight: false,
    speed: 1800,
    loop: true,
    pagination: {
        el: '.pagination-teaser',
        clickable: true,
    },
    navigation: {
        nextEl: '.next-teaser',
        prevEl: '.prev-teaser',

    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            maxBackfaceHiddenSlides: 1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
            maxBackfaceHiddenSlides: 2,
        },
        992: {
            slidesPerView: 2,
            maxBackfaceHiddenSlides: 2,
            spaceBetween: 24,
        },
        1200: {
            spaceBetween: 72,
            slidesPerView: 3,
            maxBackfaceHiddenSlides: 3,
        },
    },

});

let statementBlock = document.querySelector('.dc-slider-statement');
if (statementBlock) {
    const splideStatement = new Splide(statementBlock, {
        fixedWidth: '267px',
        fixedHeight: '350px',
        gap: '24px',
        perPage: 'auto',
        focus: 2,
        arrows: true,
        pagination: true,
        updateOnMove: false,
        trimSpace: true,
        breakpoints: {
            1199.98: {
                focus: 'center',
            },
            991.98: {
                fixedWidth: '200px',
                gap: '16px',
            },
            767.98: {
                focus: 0,
                perPage: 1,
                fixedWidth: '100%',
                fixedHeight: '216px',
            }
        },
        classes: {
            // Add classes for arrows.
            arrows: 'splide__arrows',
            arrow: 'splide__arrow ',
            prev: 'splide__arrow--prev',
            next: 'splide__arrow--next',

            // Add classes for pagination.
            pagination: 'splide__pagination', // container
            page: 'splide__pagination__page', // each button
        },

    }).mount();

    const slideListSlides = document.querySelectorAll('.dc-slider-statement .splide__slide');
    const slideList = document.querySelector('.splide__list');
    const sliderBtns = document.querySelectorAll('.dc-slider-statement .splide__arrow');
    if (slideListSlides.length <= 3) {
        slideList.classList.add('transform-important');
        sliderBtns.forEach((el) => {
            el.addEventListener('click', () => {
                slideList.classList.remove('transform-important');
            })
        });
    } else {
        slideList.classList.remove('transform-important');
    }
}
gsap.registerPlugin(ScrollTrigger);
// animate hero video
gsap.to('.dc-fullscreen', {
    scrollTrigger: {
        trigger: '.dc-fullscreen',
        start: 'top top',
        scrub: 1,
    },
    scale: 0.4,
    opacity: 0.85,
});
// animate blur 
gsap.to('.anim-top-left', {
    scrollTrigger: {
        trigger: '.dc-fullscreen',
        start: 'top top',
        scrub: 2,
    },
    opacity: 1,
});
// hero section triger
// let tlBlur1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".dc-fullscreen",
//         start: "top top",
//         end: "+=500",
//         scrub: 1,
//         snap: {
//             snapTo: "labels",
//             ease: "laniar",
//         },
//     },
// });
// tlBlur1.addLabel("start")
//     .to(".anim-top-left", { opacity: 1, })
//     .addLabel("end");
// ======================
// servity section triger
let tlBlur2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".dc-servity",
        start: "-=100 top",
        end: "+=800",
        scrub: 1,
        snap: {
            snapTo: "labels",
            duration: { min: 0.2, max: 3 },
            delay: 0.2,
            ease: "laniar",
        },
        // markers: {
        //     startColor: 'green',
        //     endColor: "yellow",
        // }
    },
});
tlBlur2.addLabel("start")
    .to(".anim-top-left", { top: '60%', })
    .addLabel("end");
// ======================
// dc-content section triger
let tlBlur3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".dc-text-icon",
        start: "top top",
        end: "+=600",
        scrub: 1,
        snap: {
            snapTo: "labels",
            duration: { min: 0.2, max: 3 },
            delay: 0.2,
            ease: "laniar",
        },
        // markers: {
        //     startColor: 'red',
        //     endColor: "white",
        // }
    },
});
tlBlur3.addLabel("start")
    .to(".anim-top-left", { top: '20%', })
    .addLabel("end");



















// const tl = gsap.timeline();
// tl.to('.dc-page-nav', { top: 500 });



// scrollTrigger.create({
//     animation: tl,
//     trigger: '.dc-fullscreen',
//     start: 'top top',
//     // end: "top 50%",
//     scrub: 1,
//     pin: true,
//     markers: {
//         startColor: 'yellow',
//         endColor: "white",
//     }
// })
// gsap.to('.dc-page-nav', {
//     scrollTrigger: {
//         trigger: '.dc-fullscreen',
//         start: 'top top',

//         // end: "top 50%",
//         scrub: 1,
//         markers: {
//             startColor: 'yellow',
//             endColor: "white",
//         }
//     },
//     top: 340,
// })
// gsap.to('.dc-page-nav', {
//     scrollTrigger: {
//         trigger: '.dc-text-icon',
//         start: 'top top',
//         scrub: 1,
//         end: "top 50%",
//         markers: {
//             startColor: 'yellow',
//             endColor: "white",
//         }
//     },
//     top: 140,
// });

// animate dots nav-page







// const collageItems = Array.from(document.querySelectorAll(".collage__item"));
// collageItems.forEach((elem) => {
//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top 75%", // к примеру :)
//     animation: gsap.from(elem, {
//       autoAlpha: 0,
//       y: 150,
//       duration: 1.5,
//       ease: "power1.out"
//     })
//   });
// });






