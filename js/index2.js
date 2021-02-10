$(".slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint: 769, /* 1px정도 차이가 나기떄문에 1px크게 잡는다. */
        settings: {
            arrows:false
        }
    }]
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


$(window).on('scroll',function(){
    var sct = $(this).scrollTop()
    if ( sct >= 30 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
    } else if ( sct < 30 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
    }
})


$('#header .open').on('click',function(){
    $(this).removeClass('on')
    $(this).next().next().addClass('on')
    $(this).next().addClass('on')
})
$('#header .close').on('click',function(){
    $(this).removeClass('on')
    $(this).prev().prev().addClass('on')
    $(this).prev().removeClass('on')
    $(this).prev().find('.depth1 > li').removeClass('on')
})




var deviceSize1 = 1024;
var deviceSize2 = 768;
function scrollOX(status) {
    $('html').css({
        overflowY:status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hiddnn')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd>0) {
    deviceSize1 -= swd
    deviceSize2 -= swd
}

var ww;
function init(){
    ww = $(window).width()
    if (ww>deviceSize1 && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('tablet')
        $('html').scrollTop(0)
    } else if ( ww<=deviceSize1 && ww>deviceSize2 && !$('html').hasClass('tablet') ) {
        $('html').addClass('tablet').removeClass('pc mobile') 
        $('html').scrollTop(0) 
        $('.depth1 > li').removeClass('on')
    } else if ( ww<=deviceSize2 && !$('html').hasClass('mobile') ) {
        $('html').addClass('mobile').removeClass('tablet')
        $('html').scrollTop(0)
        $('#nav').removeClass('on')
        $('#header .close').removeClass('on')
        $('#header .open').addClass('on')
    }
}

init()

$(window).on('resize', function(){
    init()
})


$('.depth1 > li').hover(
    function(){
        if( $('html').hasClass('pc') || $('html').hasClass('tablet')) {
            $(this).addClass('on')
        }
    },
    function(){
        if( $('html').hasClass('pc') || $('html').hasClass('tablet')) {
            $(this).removeClass('on')
        }
    }
)
$('.depth1 > li').on('click',function(e){
    if ( $('html').hasClass('mobile')) {
        e.preventDefault()
        $(this).toggleClass('on').siblings().removeClass('on')
    }
})

// if ( $('html').hasClass('pc') || $('html').hasClass('tablet') ) { 
//     $('.depth1 > li').hover(
//         function(){
//             $(this).addClass('on')
//         },
//         function(){
//             $(this).removeClass('on')
//         }
//     )
//  } else { 
//      $('.depth1 > li').on('click',function(){
//         $(this).toggleClass('on').siblings().removeClass('on')
//      })
//  }





$('.depth2 > li').on('click', function(e){
    e.stopPropagation()
})