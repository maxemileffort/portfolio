let height = $(window).height();
let width = $(window).width();
let expanded = false;



// click the arrow down on the hero to scroll down to 
// the first section
$(".fa-angle-down").on('click', function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".about").offset().top - 80
    }, 1000);
})

// bounce bottom arrow
const bounceBottomArrow = ()=>{
    let start = height-70;
    $('.arrow').css({'top': `${start}px`} );
    $(".arrow").animate({
        top: `${start+15}px`
    }, 200, 'swing', function(){
        $(".arrow").animate({
            top: `${start}px`
        }, 200)
    })
}

const getMobileOperatingSystem = ()=>{
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      }
      if (/android/i.test(userAgent)) {
          return "Android";
      }
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }
      return "unknown";
}

// jQuery .animate() doesn't do well with iOS, so for now,
// check for it and disable it if user is using Apple device
let userOS = getMobileOperatingSystem();

// animate contact section to draw attention to it
const flashContact = ()=>{
    // console.log(width)
    
    // if the screen is small, like a tablet or phone,
    // instead of blowing up the contact info, shrink it first
    if (userOS !== 'iOS'){
        if(width<1024){
            $(".contact").animate({
                fontSize: '0.8em'
            }, 200, 'swing', function(){
                $(".contact").animate({
                    fontSize: '1em'
                }, 200)
            })
            return 
        } else {
            $(".contact").animate({
                fontSize: '1.5em'
            }, 200, 'swing', function(){
                $(".contact").animate({
                    fontSize: '1em'
                }, 200)
            }) 
            return
        }
    }
    return 
}

// check window size and render navbar accordingly
// this is a redundant check, due to how the jquery manipulates css
// for the hamburger menu
const checkWindow = ()=>{
    let mediaQuery = '(max-width:1024px)';
    let windowWidth = window.matchMedia(mediaQuery);
    if (!windowWidth.matches){
        $('.logo').css({'display': 'block'} );
        $('.nav-item-list').css({'display': 'flex'} );
        return
    }
    if (windowWidth.matches){
        $('.logo').css({'display': 'none'} );
        $('.nav-item-list').css({'display': 'none'} );
        return
    }
}

// resize hero image dynamically to avoid weird spaces
// between arrow and next section
const resizeHero = ()=>{
    height = $(window).height();
    width = $(window).width();
    if (userOS !== 'iOS'){
        $('.hero').css({'height': height+'px'});
        $('.title').css({'bottom': '45%'});
        $('.tagline').css({'bottom': '40%'});
        $('.contact-btn').css({'bottom': '30%'});
        checkWindow();
        return
    } else {
        $('.hero').css({'height': height+'px'});
        $('.title').css({'bottom': '45%'});
        $('.tagline').css({'bottom': '35%'});
        $('.contact-btn').css({'bottom': '25%'});
        checkWindow();
        return
    }
    
}

window.onresize = resizeHero;

// create trigger for the arrow to bounce
$(document).ready(function(){
    setInterval(bounceBottomArrow, 1500);
    resizeHero();
})

// expand menu
$('.hamburger-menu').on('click', function(){
    // if menu is collapsed, expand it
    if(!expanded){
        expanded = true
        $('.hamburger-menu').html('<p><i class="fas fa-window-close"></i> Close</p>');
        $('.logo').css({'display': 'block'} );
        $('.nav-item-list').css({'display': 'flex'} );
        $('.navbar').animate({
            height: '475px'
        }, 100);
        return
    }
    // if menu is expanded, collapse it
    if(expanded){
        expanded = false
        $('.hamburger-menu').html('<p><i class="fas fa-bars"></i> Menu</p>');
        $('.logo').css({'display': 'none'} );
        $('.nav-item-list').css({'display': 'none'} );
        $('.navbar').animate({
            height: '80px'
        }, 100);
        return
    }
})

// navbar link behavior - needs to take you to the sections of page
// that correspond to the links, unless you click resume, then it just
// needs to redirect to the google doc
$('.nav-link').on('click', function(e){
    let text = e.target.outerText.toLowerCase();
    // console.log(text);
    if (document.querySelector(`.${text}`)){
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`.${text}`).offset().top - 80
        }, 1000);
        if (text==='contact'){
            setTimeout(flashContact, 1250)
        }
        if(expanded){
            expanded = false
            $('.hamburger-menu').html('<p><i class="fas fa-bars"></i> Menu</p>');
            $('.logo').css({'display': 'none'} );
            $('.nav-item-list').css({'display': 'none'} );
            $('.navbar').animate({
                height: '80px'
            }, 100);
        }
    } else {
        return false
    }
})

// user clicks contact button
$('.contact-btn').on('click', function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(`.contact`).offset().top - 80
    }, 1000);
    setTimeout(flashContact, 1250)
})

// scroll to the top if the logo is clicked
$('.logo').on('click', function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`.hero`).offset().top
        }, 500);
        if(expanded){
            expanded = false
        $('.hamburger-menu').html('<p><i class="fas fa-bars"></i> Menu</p>');
        $('.logo').css({'display': 'none'} );
        $('.nav-item-list').css({'display': 'none'} );
        $('.navbar').animate({
            height: '80px'
        }, 100);
        }
        return
})

// when user hovers over project-tile, a new message appears
$('.project-pic').hover(function(e){
    let element = e.currentTarget;
    $(element).css({'opacity': '0.5'});
    $(element).siblings('.view-app').css({'display': 'block'});
}, function(e){
    let element = e.currentTarget;
    $(element).css({'opacity': '1'});
    $(element).siblings('.view-app').css({'display': 'none'});
})
