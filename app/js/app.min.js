// $(".learn__item").each(function (index) {
//     let num = index+1
//     $(this).css('transition-delay', `${0.4*num*0.5}s`)
// })
// $(".fast__item").each(function (index) {
//     let num = index+1
//     $(this).css('transition-delay', `${0.4*num*0.5}s`)
// })
$('.people__slide').each(function () {
    $(this).on('click', () => {
        $(this).toggleClass('active')
    })
})
$(window).on('scroll', () => {
    if ($(window).scrollTop() > 50) {
        $('.header').addClass('scroll')
    } else {
        $('.header').removeClass('scroll')
    }
})
if ($(window).scrollTop() > 50) {
    $('.header').addClass('scroll')
} else {
    $('.header').removeClass('scroll')
}

$('.learn__item-close').each(function (index) {
    $(this).on('click', () => {
        if ($('.learn__item').eq(index).hasClass('active')) {
            $('.learn__item-bot').slideUp()
            $('.learn__item').removeClass('active')
        } else {
            $('.learn__item-bot').slideUp()
            $('.learn__item').removeClass('active')

            $('.learn__item-bot').eq(index).slideDown()
            $('.learn__item').eq(index).addClass('active')
        }
    })
})
$('.learn__item-bot').eq(0).slideDown()
$('.learn__item').eq(0).addClass('active')

const swiper = new Swiper('.people__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".people-pagination",
        type: "progressbar",
    },
    breakpoints: {
        1550: {
            slidesPerView: 3.48,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 3.26,
            spaceBetween: 30,
        },
        760: {
            slidesPerView: 2,
            spaceBetween: 16,
        }
    }
});



function fadeIn (item) {
    $(item).each(function () {
        if ($(window).width() > 999) {
            if ($(window).scrollTop() >= $(this).offset().top - $(window).height() + 200) {
                $(this).addClass('fade-out')
            }
        } else {
            if ($(window).scrollTop() >= $(this).offset().top - $(window).height() + 50) {
                $(this).addClass('fade-out')
            }
        }
    })
}
$(window).on('scroll', () => {
    fadeIn('.fade-in')
})
fadeIn('.fade-in')

$('.pop__close, .pop .btn-red, .pop-bg').on('click', () => {
    $('.pop').removeClass('active')
    $('body').removeClass('scroll')
})

if ($(window).width() <= 999) {

    //sphere slider
    $('.sphere__slider').addClass('swiper')
    $('.sphere__items').addClass('swiper-wrapper')
    $('.sphere__item').addClass('swiper-slide')
    const swiperSphere = new Swiper('.sphere__slider', {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
            el: ".sphere-pagination",
            type: "progressbar",
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
            }
        }
    });

    //why slider
    $('.why__slider').addClass('swiper')
    $('.why__items').addClass('swiper-wrapper')
    $('.why__item').addClass('swiper-slide')
    const swiperWhy = new Swiper('.why__slider', {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
            el: ".why-pagination",
            type: "progressbar",
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
            }
        }
    });
}

if ($(window).width() <= 759) {

    //four slider
    $('.four__slider').addClass('swiper')
    $('.four__items').addClass('swiper-wrapper')
    $('.four__item').addClass('swiper-slide')
    const swiperSphere = new Swiper('.four__slider', {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
            el: ".four-pagination",
            type: "progressbar",
        }
    });
}

$('.header__burger').on('click', () => {
    $('.header').toggleClass('opened')
    $('.mob').toggleClass('active')
    $('body').toggleClass('scroll')
})

$('.mob-bg').on('click', () => {
    $('.header').removeClass('opened')
    $('.mob').removeClass('active')
    $('body').removeClass('scroll')
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - document.querySelector('.header').scrollHeight
    }, 500);
});


$('.mob .btn-red').on('click', () => {
    $('.mob').removeClass('active')
    $('.header').removeClass('opened')
    $('body').removeClass('scroll')
})

$('.contact .btn-red').on('click', () => {
    $('.pop').addClass('active')
    $('body').addClass('scroll')
})


$('.mob .mob__links a').each(function () {
    $(this).on('click', () => {
        $('.header').removeClass('opened')
        $('.mob').removeClass('active')
        $('body').removeClass('scroll')
    })
})