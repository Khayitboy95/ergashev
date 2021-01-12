$(function(){
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1500,
        grabCursor: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },
            touchStart: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                        speed + "ms";
                }
            }
        }
    };
    var swiper = new Swiper(".section1 .swiper-container", swiperOptions);

    $(window).on('scroll',function () {
        if($(window).scrollTop()){
            $('header').addClass('fixed');
        }
        else{
            $('header').removeClass('fixed');
        }
    });

    $(".menu-icon").click(function() {
        $('.header-menu').addClass('active');
    });
    $(".close-btn").click(function() {
        $('.header-menu').removeClass('active');
    });

    $('.dynamic').bind('click', function(e) {
        e.preventDefault();
        var target = $(this).attr("data-link"); // Set the target as variable
        var targetOff = $("#" + target).offset().top - 50;
        $('html, body').stop().animate({
            scrollTop: targetOff
        }, 1800);
        $('.close-btn').trigger('click');
        return false;
    });
    $('.category__list>a').mouseover(function(e) {
        let currentIndex = $(e.target).attr('data-index');
        $(e.target).siblings().addClass('card_opacity');
        $(".category__bg>div:nth-child("+currentIndex+")").addClass('bg_active')
    });
    $('.category__list>a').mouseout(function(e) {
        $('.category__list>a').removeClass('card_opacity');
        $('.category__bg>div').removeClass('bg_active');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.topBtn').addClass('active');
        } else {
            $('.topBtn').removeClass('active');
        }
    });
    
    $(".topBtn").click(function() {
        $("html, body").animate({scrollTop: 0}, 1800);
     });

    $(window).on('load', function () {
        setTimeout(function(){
            $('.preloader').fadeOut();
        },4000);
   });


});