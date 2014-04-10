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
    $('body, html').animate({scrollTop: ($('#'+target).offset().top - navbarHeight)}, 500);
  })
}

$(document).ready(function(){
  GracedoCom.initialize();
  animateScroll();
});
