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
    var navbarHeight = $('.navbar').height();
    var target = $(event.target).text();
    if(target === "gracedo") {
       $('body, html').animate({scrollTop: 0}, 500);
    } else {
      $('body, html').animate({scrollTop: ($('#'+target).offset().top - navbarHeight)}, 500);
    }
  })
}

var fadeIn = function() {
  $("body").delay(3).animate({ opacity: 1 }, 800);
}

var scrollMagicFxns = function() {
  // init controller
  var controller = new ScrollMagic();
  // var tweenHeaders = TweenMax.from("section #sec-header-move", 1, {marginRight: -900, ease: Back.easeOut});
  var tweenHire = TweenMax.to('#hireme-text', 0.5, {scale: 2, ease: Back.easeOut});
                
  // var sceneHeaders = new ScrollScene({duration: 200, offset: -100})
//               .triggerHook("onCenter")
//               .triggerElement("section #sec-header-move")
//               .setTween(tweenHeaders)
//               .addTo(controller);
  
  var sceneHire = new ScrollScene({triggerElement: '#hireme'})
                .setTween(tweenHire)
                .addTo(controller);
}

var tooltipInit = function() {
  $(function () {
    $("[data-toggle='tooltip']").tooltip();
  });
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

var blinkingText = function() {
  $(function() {
    var x = 0;
    setInterval(function() {
      if(x === 0) {
        $('.fa-terminal').css('color', '#63A57B');
        x = 1;
      } else {
        if(x === 1) {
          $('.fa-terminal').css('color', '#ffffff');
          x = 0;
        }
      }
    }, 500);
	});
}

$(document).ready(function(){
  GracedoCom.initialize(); 
  fadeIn();
  scrollMagicFxns();
  tooltipInit();
  setInterval ('cursorAnimation()', 600);
  blinkingText();
  animateScroll();
});
