// click the arrow down on the hero to scroll down to 
// the first section
$(".fa-angle-down").on('click', function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".about").offset().top
    }, 1000);
})

// bounce menu arrow 0.2 sec after page renders
// first, create function that animates the bounce
const bounceMenuArrow = ()=>{
    $(".fa-angle-right").animate({
        left: "50px",
        fontSize: "6em",
        top: '48%'
    }, 200, 'swing', function(){
        $(".fa-angle-right").animate({
            left: "0",
            fontSize: "3em",
            top: '50%'
        }, 200)
    })
}

// create trigger for the bounce
$(document).ready(function(){
    setTimeout(bounceMenuArrow, 500);
    setTimeout(bounceMenuArrow, 910);
})

// show menu
const showMenu = ()=>{
    $(".fa-angle-right").addClass('hidden');
    $(".fa-angle-left").removeClass('hidden');
    $('.navbar').removeClass('hidden');
}
$(".fa-angle-right").on('click', function(){
    showMenu();
})

// hide menu
const hideMenu = ()=>{
    $(".fa-angle-left").addClass('hidden');
    $(".fa-angle-right").removeClass('hidden');
    $('.navbar').addClass('hidden');
    setTimeout(bounceMenuArrow, 500);
}
$(".fa-angle-left").on('click', function(){
    hideMenu();
})

// sidebar link behavior - needs to take you to the sections of page
// that correspond to the links, unless you click resume, then it just
// needs to redirect to the google doc
$('.nav-link').on('click', function(e){
    let text = e.target.outerText.toLowerCase();
    hideMenu();
    // console.log(text);
    if (document.querySelector(`.${text}`)){
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`.${text}`).offset().top
        }, 1000);
        if (text==='contact'){
            $(".contact").animate({
                backgroundColor: 'var(--secondary-bg-color)'
            }, 200, 'swing', function(){
                $(".contact").animate({
                    backgroundColor: 'var(--main-bg-color)'
                }, 200)
            })
        }
    } else {
        return false
    }
})