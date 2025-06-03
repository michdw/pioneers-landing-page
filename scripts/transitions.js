$(window).scroll(function () {

  function updateNavLinks(section) {
    if (($body).hasClass('at-' + section)) {
      let $activeNavLink = $('a[href="#' + section + '"]')
      $activeNavLink.addClass('active-navlink');
      $('a').not($activeNavLink).removeClass('active-navlink');
    }
  }

  // selectors
  let $window = $(window),
    $body = $('body'),
    $panel = $('.panel');

  if ($window.scrollTop() > 0) $('#landing-img').fadeOut(200);

  if ($window.scrollTop() > $window.height() / 10) {
    $('h1').css('opacity', '0');
    $('nav').removeClass('nav-full').addClass('nav-diminished');
  }
  if ($window.scrollTop() == 0) {
    $('h1').css('opacity', '1')
    $('#landing-img').delay(100).fadeIn();
    $('nav').removeClass('nav-diminished').addClass('nav-full');
  }

  // Change 33% earlier than scroll position so colour is there when you arrive.
  let scroll = $window.scrollTop() + ($window.height() / 2);

  $panel.each(function () {
    let $this = $(this);
    
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      $body.removeClass(function (index, css) {
        return (css.match(/(^|\s)at-\S+/g) || []).join(' ');
      });

      let atSection = $(this).data('at');

      $body.addClass('at-' + atSection);

      updateNavLinks('landing')
      updateNavLinks('info')
      updateNavLinks('give')
      updateNavLinks('subscribe')

    }
  });

}).scroll();
