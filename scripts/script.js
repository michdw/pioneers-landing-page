// $('#down-arrow').click(function () {
//     $('html,body').animate({
//         scrollTop: $('#info').offset().top
//     }, 150);
// })
// $('#red-arrow').click(function () {
//     $('html,body').animate({
//         scrollTop: $('#give').offset().top
//     }, 150);
// })



$(document).ready(function () {
    $('#mailform').load('components/mailform.html')
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


