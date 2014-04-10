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

// var blurredNav = function() {
//   $('.navbar').blurjs({
//     source: 'body',
//     radius: 30,
//     overlay: 'rgba(0, 0, 0, .2)'
//    });{}
// }

var hiremeZoom = function(scrollorama) {
  scrollorama.animate('#hireme-text'), {
    duration: 800,
    property: 'zoom',
    enablePin: false,
    end: 2
  }
}

var scrollMagicFxns = function() {
  // init controller
  var controller = new ScrollMagic();
  debugger
  var tweenHeaders = TweenMax.from("section #sec-header-move", 1, {marginRight: -900, ease: Back.easeOut});
  var tweenHire = TweenMax.to('#hireme-text', 0.5, {scale: 3, ease: Back.easeOut});
                
  var sceneHeaders = new ScrollScene({duration: 200, offset: -100})
    					.triggerHook("onCenter")
    					.triggerElement("section #sec-header-move")
  						.setTween(tweenHeaders)
  						.addTo(controller);
  
  var sceneHire = new ScrollScene({triggerElement: '#hireme'})
                .setTween(tweenHire)
                .addTo(controller);
}

$(document).ready(function(){
  GracedoCom.initialize(); 
  fadeIn();
  scrollMagicFxns();
  
  // blurredNav();
  animateScroll();
});
