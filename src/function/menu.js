import $ from 'jquery';

let menuState = true;
$(function() {
    $(".hamburger").click(function() {
        if(!menuState) return;
        menuState = false;
        $(this).toggleClass("hamburger--active")
        $(".menu").fadeToggle(function() {
            menuState = true;
        })
    })
    
    // $('.tab__toggle').click(function() {
    //     if(!$(this).hasClass('tab__toggle--active')) {
    //         $('.tab__item').slideUp();
    //         $('.tab__toggle').removeClass('tab__toggle--active')
    //     }
    
    //     $(this).next().slideToggle();
    //     $(this).toggleClass('tab__toggle--active')
    // })
    
    // $('*[data-click]').click(function() {
    //     $('.tab__item').hide();
    //     $('.tab__toggle').removeClass('tab__toggle--active')
    //     $(`*[data-tab=${$(this).attr("data-click")}]`).click()
    // });

    // $(window).on('scroll', function() {
    //     let scrollTop = $(this).scrollTop();
    //     if(scrollTop > $('.kv').height()/2) {
    //         $(".menu").addClass("menu--active");
    //     } else {
    //         $(".menu").removeClass("menu--active");
    //     }
    // });

    $('.wrap').css({
        "padding-bottom": $('.menu').height() + 20
    })

    // $(document).on('click', 'a[href^="#"]', function(e) {
    //     e.preventDefault();
    //     $(window).animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 500)
    // })
})