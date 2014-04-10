window.GracedoCom = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  }
};

var animateScroll = function() {
  $('.navlink').click(function(event) {
    event.preventDefault();
    var navbarHeight = 200;
    var target = $(event.target).text();
    if(target === "gracedo") {
       $('body, html').animate({scrollTop: 0}, 500);
    } else {
      $('body, html').animate({scrollTop: ($('#'+target).offset().top - navbarHeight)}, 500);
    }
  })
}

var fadeIn = function() {
  $("body").delay(3).animate({ opacity: 1 }, 500);
}

var blurredNav = function() {
  $('.navbar').blurjs({
    source: 'body',
    radius: 30,
    overlay: 'rgba(0, 0, 0, .2)'
   });{}
}

$(document).ready(function(){
  GracedoCom.initialize();
  fadeIn();
  blurredNav();
  animateScroll();
});
