---
layout: null
sitemap:
exclude: 'yes'
---

togglePanel = function(panelClassName) {
  if ($(panelClassName).hasClass('showing')){
    $(panelClassName).removeClass('animated slideInRight')
    $('.panel-cover').removeClass('panel-cover--collapsed')
    $('.panel-cover').css('max-width', '100%')
    $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
    $(panelClassName).removeClass('showing')
    window.location.hash = '';
    parent.location.hash = ''
    return;
  }

  $(panelClassName).show()
  currentWidth = $('.panel-cover').width()
  if (currentWidth < 960) {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $(panelClassName).addClass('animated slideInRight')
  } else {
    $('.panel-cover').css('max-width', currentWidth)
    $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
  }
  $(panelClassName).addClass('showing');
}

hidePanel = function(panelClassName) {
  if ($(panelClassName).hasClass('showing')){
    $(panelClassName).removeClass('animated slideInRight')
    $(panelClassName).removeClass('showing')
  }
  $(panelClassName).hide()
}

$(document).ready(function () {

  $('.projects-button').click(function() {
    hidePanel('.research-panel')
    hidePanel('.games-panel')
    togglePanel('.projects-panel')
  })

  $('.research-button').click(function() {
    hidePanel('.projects-panel')
    hidePanel('.games-panel')
    togglePanel('.research-panel')
  })

  $('.games-button').click(function() {
    hidePanel('.research-panel')
    hidePanel('.projects-panel')
    togglePanel('.games-panel')
  })

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .projects-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
})
