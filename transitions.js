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

  if($window.scrollTop() > 0) {
    $('#vanishingText').addClass('invisible');
    $('nav').removeClass('nav-full').addClass('nav-diminished');
  }
  if($window.scrollTop() == 0) {
    $('#vanishingText').removeClass('invisible');
    $('nav').removeClass('nav-diminished').addClass('nav-full');
  }

  // Change 33% earlier than scroll position so colour is there when you arrive.
  let scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    let $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body
      $body.removeClass(function (index, css) {
        return (css.match(/(^|\s)at-\S+/g) || []).join(' ');
      });
      
      // Add class of currently active div
      let atSection = $(this).data('at');
      
      $body.addClass('at-' + atSection);

      updateNavLinks('landing')
      updateNavLinks('info')
      updateNavLinks('give')
      updateNavLinks('subscribe')

    }
  });

}).scroll();
