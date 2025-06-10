// selectors
let $window = $(window)
let $body = $('body')
let $panel = $('.panel')
let $lastDownArrow = $('#give .dbl-arrow')
let $backToTop = $('#backToTop')

$window.load(function () {
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
        if ($body.hasClass('at-follow')) {
          $lastDownArrow.addClass('invisible')
          $backToTop.removeClass('invisible')
        } else {
          $backToTop.addClass('invisible')
          $lastDownArrow.removeClass('invisible')
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
