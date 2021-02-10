// 제이쿼리메소드302p
var ww = $(window).width()
console.log(ww)

if (ww>=769) {
    $('#nav .depth1 > li').hover(
        function(){
            $(this).addClass('on')
        },
        function(){
            $(this).removeClass('on')
        }
    )
} else {
    $('#nav .depth1 > li').on('click', function(){
        $(this).toggleClass('on')
        // var display = $(this).find('.depth2').css('display')
        // if (display === 'none')
        // if ( !$(this).hasClass('on')) {
        //     $(this).addClass('on')
        // } else {
        //     $(this).removeClass('on')
        // }
        $(this).siblings().removeClass('on')

    })
}


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

$('#header .open').on('click', function(){
    $(this).next().css ({
        display: ' block '
    })
    $(this).css ({
        display: 'none'
    })
    $(this).next().next().css({
        display: 'block'
    })
})
$('#header .close').on('click', function(){
    $(this).prev().css ({
        display: ' none '
    })
    $(this).css ({
        display: 'none'
    })
    $(this).prev().prev().css({
        display: 'block'
    })
})

// p.326
// $('#nav .depth1 > li').on('mouseenter', function(){
//     $(this).addClass('on')
// })
// $('#nav .depth1 > li').on('mouseleave', function(){
//     $(this).removeClass('on')
// })


// $('#nav .depth1 > li').hover(
//     function(){
//         $(this).addClass('on')
//     },
//     function(){
//         $(this).removeClass('on')
//     }
// )


$(window).on('scroll',function(){
    var sct = $(this).scrollTop()
    if ( sct >= 30 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
    } else if ( sct < 30 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
    }
})

