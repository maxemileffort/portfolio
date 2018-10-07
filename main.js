// click the arrow down on the hero to scroll down to 
// the first section
$(".fa-angle-down").on('click', function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".about-me").offset().top
    }, 1000);
})

// show menu
$(".fa-angle-right").on('click', function(){
    $(".fa-angle-right").addClass('hidden');
    $(".fa-angle-left").removeClass('hidden');
    $('.navbar').removeClass('hidden')
})

// hide menu
$(".fa-angle-left").on('click', function(){
    $(".fa-angle-left").addClass('hidden');
    $(".fa-angle-right").removeClass('hidden');
    $('.navbar').addClass('hidden')
})

