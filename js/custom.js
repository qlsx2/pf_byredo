

$(function () {
    var swiper = new Swiper(".main_visual_slide", {
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: { delay: 3000 },
        slideActiveClass: 'on',
        autoplay: 'on',
        loop: 'on'
    });

    var swiper = new Swiper(".main_best_slide", {
        spaceBetween: 20,
        slidesPerView: '2',
        loop: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },

        breakpoints: {

            768: {
                slidesPerView: 4,  //브라우저가 768보다 클 때
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,  //브라우저가 1024보다 클 때
                spaceBetween: 20,

            },
        },
    });


});

//*모바일 버튼//--------------------------

$(function () {
    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    });
})

//* 휠을 했을 떄 gnb 메뉴 지우고 생기게하기 ===============

$(function () {

    $(window).on('wheel', function (e) {
        console.log(e.originalEvent.deltaY)

        let dt = e.originalEvent.deltaY;

        if (dt > 1) {
            $('.header .gnb').addClass('active')
        } else {
            $('.header .gnb').removeClass('active')
        }

    })

})



$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })


});
