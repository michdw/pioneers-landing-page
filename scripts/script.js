// selectors
let $window = $(window)
let $body = $('body')
let $panel = $('.panel')

$window.load(function () {
  $('#loading-screen').delay(200).fadeOut(0)

  // scroll transitions
  $window
    .scroll(function () {
      // navbar and image behavior dependent on scroll position
      if ($window.scrollTop() > 0) $('#name-heading').css('opacity', '0')

      if ($window.scrollTop() > $window.height() / 8) {
        $('#landing-img').fadeOut(200)
        $('nav').removeClass('nav-full').addClass('nav-diminished')
      }
      if ($window.scrollTop() == 0) {
        $('#name-heading').css('opacity', '1')
        setTimeout(function () {
          if ($window.scrollTop() == 0) {
            $('#landing-img').fadeIn(150)
            $('nav').removeClass('nav-diminished').addClass('nav-full')
          }
        }, 150)
      }

      // define the point at which bg color changes between panels
      let scroll = $window.scrollTop() + $window.height() / 2

      // show lighter text on navbar link for current location
      function updateNavLinks(section) {
        if ($body.hasClass('at-' + section)) {
          let $activeNavLink = $('a[href="#' + section + '"]')
          $activeNavLink.addClass('active-navlink')
          $('a').not($activeNavLink).removeClass('active-navlink')
        }
      }

      $panel.each(function () {
        let $this = $(this)

        // color transitions
        if (
          $this.position().top <= scroll &&
          $this.position().top + $this.height() > scroll
        ) {
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)at-\S+/g) || []).join(' ')
          })

          let atSection = $(this).data('at')

          $body.addClass('at-' + atSection)

          // nav link transitions
          updateNavLinks('landing')
          updateNavLinks('info')
          updateNavLinks('give')
          updateNavLinks('follow')
        }
      })
    })
    .scroll()
})

// arrow clicks to navigate between sections
$(document).ready(function () {
  $('.dbl-arrow, #up-arrow').click(function () {
      let dest = '#' + $(this).data('goto')
      let ms = dest == '#landing' ? 0 : 150
      $('html,body').animate({
          scrollTop: $(dest).offset().top
      }, ms)
  })
})