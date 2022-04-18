var container = document.querySelector(".container")
var swiperHero = new Swiper('.hero-swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
        delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: '.swiper-bullet-pagination',
        type: 'bullets',
        clickable: true
    }

})

var swiperGallery = new Swiper('.gallery-swiper', {
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".gallery-swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
    },
    breakpoints: {
        291: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
        400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 38,
        },
        
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 38,
        },
        940: { 
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 34,
      
        },
        1367: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        }
    }

});


var swiperEvents = new Swiper(".events-swiper", {
    spaceBetween: 0,
    pagination: {
        el: ".events-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.events-button-next',
        prevEl: '.events-button-prev',
    },
    breakpoints: {
        290: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
        618: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
        668: {
            spaceBetween: 34,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        924: {
            spaceBetween: 27,
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1024: {
            spaceBetween: 27,
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1280: {
            spaceBetween: 35,
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        1366: {
            spaceBetween: 33,
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        1600: {
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 1,
        }
    }
});

var swiperPartners = new Swiper(".partners-swiper", {
    spaceBetween: 50,
    loop: false,
    navigation: {
        nextEl: ".partners-button-next",
        prevEl: ".partners-button-prev",
    },
    breakpoints: {
        471: {
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        562: {
            spaceBetween: 33.97,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        818: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1280: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        1367: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
})