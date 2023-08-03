$(window).scroll(function(){
    if ($(window).scrollTop() > 20) {
        $('#nav').addClass('fixed-header');
    }
    else {
        $('#nav').removeClass('fixed-header');
    }

    if ($(window).scrollTop() > 200) {
        $('#scroll-up').addClass('fixed-scroll');
    }
    else {
        $('#scroll-up').removeClass('fixed-scroll');
    }
});

document.getElementById("scroll-up").addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});