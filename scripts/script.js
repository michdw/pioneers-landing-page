// let animateScroll = true;

$(document).ready(function () {
    $('#mailform').load('components/mailform.html')
    $('#down-arrow').click(function() {
        $('html,body').animate({
            scrollTop: $('#info').offset().top
        }, 150);
    })    
});

$(window).load(function() {
    $('#loading-screen').delay(200).fadeOut(0)
})
