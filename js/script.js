$( document).ready(function() {

	$(document).mouseup(function (e) {
		var container = $('.popup_active .popup__inner');
		if (container.has(e.target).length === 0) {
			container.closest('.popup_active').removeClass('popup_active');
			$('body').removeClass('show-popup');
		}
	});
	
	// popup handler
	$('.popup__close').on('click', function(e) {
		$(this).closest('.popup_active').removeClass('popup_active');
		$('body').removeClass('show-popup');
	});

	// popup add to cart
	$('.product-details__add').on('click', function(e) {
		$('.popup_cart').addClass('popup_active');
		$('body').addClass('show-popup');
	});

	// checkout stages handler
	$('.checkout__state-marker div').on('click', function(e) {
		let curIndex = $(this).parent().parent().index();
		let markers = $('.checkout__state-marker');

		$('.checkout__state-innter').css('transform', 'translateX(-' + (100 * curIndex) + '%)');
		$('.checkout__state-marker').removeClass('checkout__state-marker_active');
		
		for (var i = 0; i < markers.length; i++) {
			if (i <= curIndex) {
				$(markers[i]).addClass('checkout__state-marker_active');
			}
		}
	});

	// product counter handler
	$('.product-card__counter__mn').on('click', function(e) {
		let curVal = $(this).parent().find('.product-card__counter__count').val();
		if (curVal > 1) {
			curVal--;
			$(this).parent().find('.product-card__counter__count').val(curVal);
		}
	});

	$('.product-card__counter__pl').on('click', function(e) {
		let curVal = $(this).parent().find('.product-card__counter__count').val();

		if (curVal < 1000) {
			curVal++;
			$(this).parent().find('.product-card__counter__count').val(curVal);
		}
	})

	$('.product-card__counter__count').on('change', function(e) {
		let curVal = $(this).val();

		if (curVal > 1000) {
			curVal = 1000;
		}

		if (curVal < 1) {
			curVal = 1;
		}

		$(this).val(curVal);
	});

	// orders__menu handler
	$('.orders__menu-item').on('click', function(e) {
		$('.orders__menu-item').removeClass('orders__menu-item_active');
		$('.orders__type').removeClass('orders__type_active');
		$(this).addClass('orders__menu-item_active');
		const curId = $(this).attr('data-id');
		$('.orders__type[data-id="' + curId + '"]').addClass('orders__type_active');
	});

	// sleders init
	var swiperOffers = new Swiper(".offers-swiper", {
		slidesPerView: 4,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15
			},
			1110: {
				slidesPerView: 3
				},
			1330: {
				slidesPerView: 4
			},
			1400: {
				spaceBetween: 30
			}
		},
		navigation: {
			nextEl: ".offers .arrows-group__left",
			prevEl: ".offers .arrows-group__right"
		}
	});

	var swiperBS = new Swiper(".bs-swiper", {
		slidesPerView: 4,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
			slidesPerView: 2,
			spaceBetween: 15
			},
			1110: {
				slidesPerView: 3
			},
			1330: {
			slidesPerView: 4
			},
			1400: {
				spaceBetween: 55
			}
		},
		navigation: {
			nextEl: ".best-selling .arrows-group__left",
			prevEl: ".best-selling .arrows-group__right"
		}
	});

	var swiperProducts = new Swiper(".popular-products-swiper", {
		slidesPerView: 4,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
			slidesPerView: 2,
			spaceBetween: 15
			},
			1110: {
				slidesPerView: 3
			},
			1330: {
			slidesPerView: 4
			},
			1400: {
				spaceBetween: 30
			}
		},
		navigation: {
			nextEl: ".like-products .arrows-group__left",
			prevEl: ".like-products .arrows-group__right"
		}
	});
});