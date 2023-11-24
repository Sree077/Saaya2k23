(function ($) {

	"use strict";

	$('.owl-show-events').owlCarousel({
		items: 4,
		loop: true,
		dots: true,
		nav: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	})

	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	let countDown = new Date('Nov 24, 2023 09:30:00').getTime(),
		x = setInterval(function () {

			let now = new Date().getTime(),
				distance = countDown - now;

			// document.getElementById('days-count').innerHTML = 0,
			// document.getElementById('days').innerText = 0 + " :",
			// document.getElementById('hours').innerText = 0 + "  :",
			// document.getElementById('minutes').innerText = 0 + "  :",
			// document.getElementById('seconds').innerText = 0;



		}, second)

	$(function () {
		$("#tabs").tabs();
	});


	$('.schedule-filter li').on('click', function () {
		var tsfilter = $(this).data('tsfilter');
		$('.schedule-filter li').removeClass('active');
		$(this).addClass('active');
		if (tsfilter == 'all') {
			$('.schedule-table').removeClass('filtering');
			$('.ts-item').removeClass('show');
		} else {
			$('.schedule-table').addClass('filtering');
		}
		$('.ts-item').each(function () {
			$(this).removeClass('show');
			if ($(this).data('tsmeta') == tsfilter) {
				$(this).addClass('show');
			}
		});
	});


	// Window Resize Mobile Menu Fix
	mobileNav();



	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Page loading animation
	$(window).on('load', function () {
		// Simulate a delay using setTimeout
		setTimeout(function () {
			// Add the 'loaded' class to hide the preloader
			$('#js-preloader').addClass('loaded');
		}, 100); // Adjust the timeout duration as needed
	});



	// Window Resize Mobile Menu Fix
	$(window).on('resize', function () {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function () {
			if (width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);