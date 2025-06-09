
$(document).ready(function () {
    $('.dbl-arrow').click(function () {
        let dest = '#' + $(this).data('goto')
        $('html,body').animate({
            scrollTop: $(dest).offset().top
        }, 150)
    })
})

$(window).load(function () {
    $('#loading-screen').delay(200).fadeOut(0)
})


