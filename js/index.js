$(".slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

$('.slidebtn').on('click', function(){
    var $ibtn = $(this).find('i')
    if ($ibtn.hasClass('fas fa-pause')) {
        $('.slide-group').slick('slickPause')
        $ibtn.removeClass('fas fa-pause').addClass('fas fa-play')
    } else {
        $('.slide-group').slick('slickPlay')
        $ibtn.removeClass('fas fa-play').addClass('fas fa-pause')
    }
})

