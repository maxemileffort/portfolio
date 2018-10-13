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
        fontSize: "6em",
        left: "50px",
        top: '48%'
    }, 200, 'swing', function(){
        $(".fa-angle-right").animate({
            fontSize: "3em",
            left: "0",
            top: '50%'
        }, 200)
    })
}

// bounce bottom arrow
const bounceBottomArrow = ()=>{
    $(".arrow").animate({
        top: '91%'
    }, 200, 'swing', function(){
        $(".arrow").animate({
            top: '93%'
        }, 200)
    })
}

// create trigger for the arrows to bounce
$(document).ready(function(){
    setTimeout(bounceMenuArrow, 1000);
    setTimeout(bounceMenuArrow, 1400);
    setInterval(bounceBottomArrow, 600);
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
}
$(".fa-angle-left").on('click', function(){
    hideMenu();
})

// animate contact section to draw attention to it
const flashContact = ()=>{
    $(".contact").animate({
        fontSize: '1.5em'
    }, 200, 'swing', function(){
        $(".contact").animate({
            fontSize: '1em'
        }, 200)
    })
}

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
            setTimeout(flashContact, 1250)
        }
    } else {
        return false
    }
})
