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
  var tween = TweenMax.to('#hireme-text', 0.5, {
    scale: 3
  });
  
  var scene = new ScrollScene({ triggerElement: '#hireme'})
                .setTween(tween)
                .addTo(controller);

  // add multiple scenes at once
  // var scene2;
  // controller.addScene([
  //     scene, // add above defined scene
  //     scene2 = new ScrollScene({duration: 200}), // add scene and assign handler "scene2"
  //     new ScrollScene({offset: 20}) // add anonymous scene
  // ]);
}

$(document).ready(function(){
  GracedoCom.initialize(); 
  fadeIn();
  scrollMagicFxns();
  
  // blurredNav();
  animateScroll();
});
