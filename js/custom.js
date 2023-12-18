(function () {

	'use strict'
	  
	let maxHeight = 0;

	// Tüm elemanların yüksekliğini kontrol et
	document.querySelectorAll('.swiper-slide').forEach(function(slide) {
	const slideHeight = slide.clientHeight;
	if (slideHeight > maxHeight) {
		maxHeight = slideHeight;
	}
	});

	// Tüm elemanların yüksekliğini en büyük olanla eşitle
	document.querySelectorAll('.swiper-slide').forEach(function(slide) {
	slide.style.height = `${maxHeight}px`;
	});


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var rellax = new Rellax('.rellax');

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();
	

	var tinyslier = function() {

		var el = document.querySelectorAll('.wide-slider-testimonial');
		if ( el.length > 0 ) {
			var slider = tns({
				container: ".wide-slider-testimonial",
				items: 1,
				slideBy: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 700,
				nav: true,
				loop: true,
				edgePadding: 40,
				controls: true,
				controlsPosition: "bottom",
				autoHeight: true,
				autoplay: true,
				mouseDrag: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false,
				controlsContainer: "#prevnext-testimonial",
				responsive: {
					350: {
						items: 1
					},
					
					500: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 5
					}
				},
			});
		}


		var destinationSlider = document.querySelectorAll('.destination-slider');

		if ( destinationSlider.length > 0 ) {
			var desSlider = tns({
				container: ".destination-slider",
				mouseDrag: true,
				items: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 700,
				edgePadding: 50,
				nav: true,
				gutter: 30,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: "#destination-controls",
				responsive: {
					350: {
						items: 1
					},
					500: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 5
					}
				},
			})
		}
		var swiper = new Swiper('.swiper-container',{
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			loopAdditionalSlides: 1,
			loopedSlides: 1,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			breakpoints: {
				350: {
					slidesPerView: 1
				},
				500: {
					slidesPerView: 2
				},
				600: {
					slidesPerView: 3
				},
				900: {
					slidesPerView: 4
				}
			}
		});
		
		

	}
	tinyslier();


	var lightbox = function() {
		var lightboxVideo = GLightbox({
			selector: '.glightbox3'
		});
	};
	lightbox();



})();
function showText() {
	var additionalText = document.getElementById('additionalText');
	var additionalTextButton = document.getElementById('dahaFazlaButon');
	if (additionalText.style.display === 'none') {
		additionalText.style.display = 'inline';
		additionalTextButton.textContent = 'Daha az göster';
	} else {
		additionalText.style.display = 'none';
		additionalTextButton.textContent = 'Daha fazlası';
	}
}


