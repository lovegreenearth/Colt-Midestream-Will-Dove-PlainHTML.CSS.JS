/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() > 20) {
        $('#nav').addClass('fixed-header');
    }
    else {
        $('#nav').removeClass('fixed-header');
    }
});
