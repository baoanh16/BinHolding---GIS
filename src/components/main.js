$(document).ready(function () {
	// Viết Script ở đây!

	// GO TOP TOP BUTTON START HERE
	if ($(document).innerWidth() >= 1025) {
		$('#go-to-top').css({
			'left': ($(document).width() - $('.container').width()) / 2 + $('.container').width()
		})
	} else {
		$('#go-to-top').css({
			'right': 20,
		})
	}
	if ($(window).scrollTop() >= ($(document).height() - $(window).height() - 100)) {
		$('#go-to-top').fadeIn()
	} else {
		$('#go-to-top').fadeOut()
	}


	$('#go-to-top').on('click', function (e) {
		e.preventDefault()
		$('html,body').animate({
			scrollTop: 0
		}, 1200)
	})
	// GO TOP TOP BUTTON END HERE


	// Toggle language
	$('.language .current').on('click', function () {
		$(this).siblings('.dropdown').slideToggle()
	})
	// End Toggle Language


	// Chuyển mấy cái cục trên header bắt đầu ở đây
	if ($('.navbar-top-list').length > 0) {
		var moveNavBarTopList = new MappingListener({
			selector: '.navbar-top-list',
			mobileWrapper: '#mobile-menu',
			mobileMethod: 'appendTo',
			desktopWrapper: '.navbar-top',
			desktopMethod: 'prependTo',
			breakpoint: 1025,
		}).watch()
	}
	if ($('.search').length > 0) {
		var moveNavBarTopList = new MappingListener({
			selector: '.search',
			mobileWrapper: '#mobile-menu',
			mobileMethod: 'appendTo',
			desktopWrapper: '.language',
			desktopMethod: 'insertBefore',
			breakpoint: 1025,
		}).watch()
	}
	if ($('.navbar-bottom').length > 0) {
		var moveNavBarTopList = new MappingListener({
			selector: '.navbar-bottom',
			mobileWrapper: '#mobile-menu',
			mobileMethod: 'appendTo',
			desktopWrapper: '.navbar-top',
			desktopMethod: 'insertAfter',
			breakpoint: 1025,
		}).watch()
	}
	// Chuyển mấy cái cục trên header kết thúc ở đây


	// Toggle menu trên tablet với điện thoại
	$('header .menu-mobile-toggler').on('click', function () {
		$('#mobile-menu').toggleClass('show')
		if ($('#mobile-menu').hasClass('show')) {
			$('body').addClass('hide')
		} else {
			$('body').removeClass('hide')
		}
	})
	// Toggle menu trên tablet với điện thoại kết thúc ở đây


	// Home Banner
	var HomeBanner = new Swiper('.home-banner .swiper-container', {
		slidesPerView: 1,
		speed: 1200,
		loop: true,
		pagination: {
			el: '.home-banner .swiper-pagination',
			bulletElement: 'span',
			clickable: true,
		},
		on: {
			slideChangeTransitionEnd: function () {
				$('.home-banner .swiper-container .swiper-slide').find('.textbox').removeClass('active')
				$('.home-banner .swiper-container .swiper-slide-active').find('.textbox').addClass('active')
			}
		}
	})

	// Home Services Slider
	var HomeServices = new Swiper('.home-2 .swiper-container', {
		slidesPerView: 3,
		speed: 1200,
		loop: true,
		spaceBetween: 20,
		breakpoints: {
			1024: {
				slidesPerView: 2.3,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 1.3
			}
		}
	})

	// Home Rewards Slider
	var HomeReward = new Swiper('.home-5 .swiper-container', {
		slidesPerView: 4,
		speed: 1200,
		autoplay: {
			delay: 4000,
			disabelOnInteraction: false,
		},
		loop: true,
		spaceBetween: 40,
		navigation: {
			prevEl: '.home-5 .swiper-prev',
			nextEl: '.home-5 .swiper-next'
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			}
		}
	})


	// fix thanh điều hướng trang giới thiệu trên màn hình lớn
	if ($('.nav-1').length > 0) {

		var fixOffsetNav1 = $('.nav-1').offset().top
	}
	var scTop = fixOffsetNav1 - $('header').outerHeight()
	if ($(window).scrollTop() >= scTop) {
		$('.nav-1').css({
			'position': 'fixed',
			'width': '100%',
			'top': $('header').outerHeight(),
			'left': 0,
			'margin-top': 0
		})
	} else {
		$('.nav-1').removeAttr('style')
	}
	$(window).on('scroll', function () {
		if ($(window).scrollTop() >= scTop) {
			$('.nav-1').css({
				'position': 'fixed',
				'width': '100%',
				'top': $('header').outerHeight(),
				'left': 0,
				'margin-top': 0
			})
		} else {
			$('.nav-1').removeAttr('style')
		}
	})
	// fix thanh điều hướng trang giới thiệu trên màn hình lớn kết thúc ở đây



	$(window).on('scroll', function () {
		if ($(window).scrollTop() >= ($(document).height() - $(window).height() - 100)) {
			$('#go-to-top').fadeIn()
		} else {
			$('#go-to-top').fadeOut()
		}
	})
	$(window).on('resize', function () {
		if ($(document).innerWidth() >= 1025) {
			$('#go-to-top').css({
				'left': ($(document).width() - $('.container').width()) / 2 + $('.container').width(),
				"right": 'unset',
			})
		} else {
			$('#go-to-top').css({
				"left": 'unset',
				'right': 20,
			})
		}
	})

	//About -active nav and scroll
	$('.nav-1 li').each(function () {
		$(this).on('click', function (e) {
			e.preventDefault()
			let target = $(this).find('a').attr('data-target')
			$(this).addClass('active')
			$(this).siblings().removeClass('active')
			$('html,body').animate({
				scrollTop: $(target).offset().top - $('header').height() - $('.nav-1 .category').height()
			}, 1500)
			$('.nav-1 ul').removeClass('mobile-open')
		})
	})

	// Popup trang about
	$('.about-4 [data-target]').each(function () {
		let target = $(this).attr('data-target')
		$(this).on('click', function (e) {
			e.preventDefault()
			$(target).addClass('open')
			if ($(target).hasClass('open')) {
				$('body').addClass('hide')
			} else {
				$('body').removeClass('hide')
			}
		})

		$(target).find('.popup-close').on('click', function () {
			$(target).removeClass('open')
			$('body').removeClass('hide')
		})
	})

	$('.nav-1 .category').on('click', function () {
		$(this).siblings('ul').toggleClass('mobile-open')
	})
	$('.nav-2 .category').on('click', function () {
		$(this).siblings('ul').toggleClass('mobile-open')
	})


	$('.tooltip-toggle').on('mouseenter', function () {
		$(this).siblings('.tooltip').fadeIn()
	})
	$('.tooltip-toggle').on('mouseleave', function () {
		$(this).siblings('.tooltip').fadeOut()
	})
	$('.slider .ui-slider-custom').each(function () {
		$(this).slider({
			min: $(this).find('.min').attr('data-value'),
			max: $(this).find('.max').attr('data-value'),
			step: 10,
			value: 0, // default value of slider
			slide: function (event, ui) {
				let currentValue = Math.round(ui.value / 100) * 10
				$(this).find(".ui-slider-handle").html('<span class="value" current-value="' + currentValue + '">' + currentValue + '</span>');
			}
		})
	})


	$('.best-match-wrapper .match-item').on('click', function (e) {
		$(this).find('.content').fadeToggle()
		$(this).siblings('.match-item').find('.content').fadeOut()

	})
});