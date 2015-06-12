function click(el) {
    var element = O.Core.getElement(el);
    var t = O.Trigger();
    function click() {
  t.trigger();
    }
   if (element) element.onclick = click;
    return t;
 }

// trigger a custom event called SlideChange
  var emitSlideChange = O.Action( function() {
   $(document).trigger('slideChange', function(){
      trackCurrentSlide();
   });
});

// listen for the slideChange event to be triggered
  function listenSlideChange() {
    $(document).on('slideChange', function() {
  trackCurrentSlide();
    });
}

  // fire "this" each time the user changes a slide
  function trackCurrentSlide(){
  slides = $('#slides').children(); // creates an array of slides
  slides.each(function(i){
    if ($(this).hasClass('selected')){
        checkIndex(i);
    }
  });
  }


  // check the index being returned by trackCurrentSlide()
  function checkIndex(index) {
    switch(index){
      case 0: slideZero(), console.log(index),$("#0").addClass("active"),$("#1").removeClass("active"),$("#16").removeClass("active"); // introduction
      break;
      case 1: slideOne(),console.log(index),$("#0").removeClass("active") ,$("#1").addClass("active"),$("#2").removeClass("active");// MOLA
      break;
      case 2: slideTwo(),console.log(index),$("#1").removeClass("active") ,$("#2").addClass("active"),$("#3").removeClass("active"); // LSSWG
      break;
      case 3: slideThree(),console.log(index),$("#2").removeClass("active") ,$("#3").addClass("active"),$("#4").removeClass("active"); // 4 landing sites
      break;
      case 4: slideFour(),console.log(index),$("#3").removeClass("active") ,$("#4").addClass("active"),$("#5").removeClass("active"); // aram dorsum
      break;
      case 5: slideFive(),console.log(index),$("#4").removeClass("active") ,$("#5").addClass("active"),$("#6").removeClass("active");// HRSC / aram dorsum
      break
      case 6: slideSix(),console.log(index),$("#5").removeClass("active") ,$("#6").addClass("active"),$("#7").removeClass("active"); //  landing site aram dorsum 2018
      break;
      case 7: slideSeven(),console.log(index), $("#6").removeClass("active") ,$("#7").addClass("active"),$("#8").removeClass("active");//  landing site aram dorsum 2020
      break;
      case 8: slideEight(),console.log(index),$("#7").removeClass("active") ,$("#8").addClass("active"),$("#9").removeClass("active"); // Hypanis Vallis
      break;
      case 9: slideNine(),console.log(index), $("#8").removeClass("active") ,$("#9").addClass("active"),$("#10").removeClass("active");// Hypanis Vallis
      break;
      case 10: slideTen(),console.log(index),$("#9").removeClass("active") ,$("#10").addClass("active"),$("#11").removeClass("active"); // Oxia Planum
      break;
      case 11: slideEleven(),console.log(index),$("#10").removeClass("active") ,$("#11").addClass("active"),$("#12").removeClass("active"); // HiRISE / Oxia Planum
      break;
      case 12: slideTwelve(),console.log(index), $("#11").removeClass("active") ,$("#12").addClass("active"),$("#13").removeClass("active");// Oxia Planum
      break;
      case 13: slideThirteen(),console.log(index),$("#12").removeClass("active") ,$("#13").addClass("active"),$("#14").removeClass("active"); // Mawrth Vallis
      break;
      case 14: slideFourteen(),console.log(index), $("#13").removeClass("active") ,$("#14").addClass("active"),$("#15").removeClass("active");// HiRISE / Mawrth Vallis
      break;
      case 15: slideFifteen(),console.log(index), $("#14").removeClass("active") ,$("#15").addClass("active"),$("#16").removeClass("active");// Mawrth Vallis
      break;
      case 16: slideSixteen(),console.log(index), $("#15").removeClass("active") ,$("#16").addClass("active"),$("#0").removeClass("active");// End
      break;
    };

  }

  // intro
function slideZero() {
  el.landingSite.hide();
  el.dashellipses4.hide();
  el.nomenclator.hide();


};
// MOLA
  function slideOne() {
  el.landingSite8.hide();
};
// LSSWG
function slideTwo() {

  el.landingSite8.show();
  el.landingSite.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
};
// 4 landing sites
function slideThree() {
  el.landingSite.show();
  el.latConstraint.show();
  el.geoConstraint.show();
  el.landingSite8.hide();
  el.duneConstraint.show();
  el.nomenclator.hide();
};
// Aram Dorsum
function slideFour() {
  el.landingSite.hide();
   el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
   el.ellipses1.hide();
   el.ellipses5.hide();
  el.dashellipses1.hide();
  el.nomenclator.show();
};
// HRSC
function slideFive() {
   el.ellipses1.hide();
   el.ellipses5.hide();
  el.dashellipses1.hide();
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();


};
// Aram Dorsum landing site 2018
function slideSix() {
   el.ellipses1.show();
  el.ellipses5.hide();
  el.dashellipses1.show();
  el.map.addLayer(el.torqueEllipses1); // adds torque layer to the map
  el.torqueEllipses1.setZIndex(1000);
  el.torqueEllipses1.show();
  el.torqueEllipses1.play();
  el.dashellipses5.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();

};
// Aram Dorsum landing site 2020
function slideSeven() {
   el.ellipses1.hide();
   el.ellipses5.show();
  el.dashellipses1.hide();
  el.dashellipses5.show();
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.map.addLayer(el.torqueEllipses2); // adds torque layer to the map
  el.torqueEllipses2.setZIndex(1000);
  el.torqueEllipses2.show();
  el.torqueEllipses2.play();

};
  // Hypanis Vallis
function slideEight() {
   el.ellipses1.hide();
   el.ellipses2.hide();
   el.ellipses5.hide();
   el.ellipses6.hide();
  el.dashellipses2.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.torqueEllipses2.hide();
  el.torqueEllipses2.stop();
};
// Hypanis Vallis landing sites
function slideNine() {
   el.ellipses2.show();
   el.ellipses3.hide();
   el.ellipses6.show();
  el.dashellipses2.show();
  el.dashellipses6.show();
};
  // Oxia Planum
function slideTen() {
   el.ellipses2.hide();
   el.ellipses3.hide();
   el.ellipses6.hide();
   el.ellipses7.hide();
  el.dashellipses2.hide();
  el.dashellipses6.hide();
};
// hirise
function slideEleven() {
   el.ellipses2.hide();
   el.ellipses3.hide();
   el.ellipses6.hide();
   el.ellipses7.hide();
  el.dashellipses3.hide();
  el.dashellipses7.hide();
};
// Oxia Planum landing sites
function slideTwelve() {
   el.ellipses3.show();
   el.ellipses4.hide();
   el.ellipses7.show();
  el.dashellipses3.show();
  el.dashellipses4.hide();
  el.dashellipses7.show();
};
// Mawrth Vallis
function slideThirteen() {
   el.ellipses3.hide();
   el.ellipses7.hide();
  el.dashellipses3.hide();
  el.dashellipses7.hide();
};
// Mawrth Vallis HiRISE
function slideFourteen() {
el.ellipses4.hide();
el.ellipses8.hide();
el.dashellipses4.hide();
el.dashellipses8.hide();

};
// Mawrth Vallis landing sites
function slideFifteen() {
   el.ellipses4.show();
   el.ellipses8.show();
  el.dashellipses4.show();
  el.dashellipses8.show();
  el.landingSite.hide();

};
  // End of the story/overview
function slideSixteen() {
  el.nomenclator.hide();
  el.ellipses4.hide();
   el.ellipses8.hide();
   el.landingSite.show();
  el.dashellipses4.hide();
  el.dashellipses8.hide();
};
function initOdyssey(O) {
    // O is for Odyssey
    var map = el.map;
    var seq = O.Triggers.Sequential();
    // enable keys to move slides
    O.Triggers.Keys().left().then(seq.prev, seq)
    O.Triggers.Keys().right().then(seq.next, seq)
    // set up triggers for slide arrows
    click(document.querySelectorAll('.next')).then(seq.next, seq)
    click(document.querySelectorAll('.prev')).then(seq.prev, seq)
    var slides = O.Actions.Slides('slides');
    el.story =  O.Story()
    .addState(
        seq.step(0),
          O.Parallel(
            el.map.actions.setView(el.center,3),
      slides.activate(0),
            emitSlideChange
          )
    )
    .addState(
        seq.step(1),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(1),
            emitSlideChange
          )
    )
    .addState(
        seq.step(2),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(2),
            emitSlideChange
          )
    )
    .addState(
        seq.step(3),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(3),
            emitSlideChange
          )
    )
    .addState(
        seq.step(4),
          O.Parallel(
            el.map.actions.setView(el.Aram,7),
            slides.activate(4),
            emitSlideChange
          )
    )
    .addState(
        seq.step(5),
          O.Parallel(
            el.map.actions.setView(el.Aram,7),
            slides.activate(5),
            emitSlideChange
          )
    )
    .addState(
        seq.step(6),
          O.Parallel(
            el.map.actions.setView(el.Aram,8),
            slides.activate(6),
            emitSlideChange
          )
    )
    .addState(
        seq.step(7),
          O.Parallel(
            el.map.actions.setView(el.Aram,8),
            slides.activate(7),
            emitSlideChange
          )
    )
    .addState(
        seq.step(8),
          O.Parallel(
            el.map.actions.setView(el.Hypanis,8),
            slides.activate(8),
            emitSlideChange
          )
    )
    .addState(
        seq.step(9),
          O.Parallel(
            el.map.actions.setView(el.Hypanis,8),
            slides.activate(9),
            emitSlideChange
          )
    )
    .addState(
        seq.step(10),
          O.Parallel(
            el.map.actions.setView(el.Oxia,8),
            slides.activate(10),
            emitSlideChange
          )
    )
    .addState(
        seq.step(11),
          O.Parallel(
            el.map.actions.setView(el.Oxia,10),
            slides.activate(11),
            emitSlideChange
          )
    )
    .addState(
        seq.step(12),
          O.Parallel(
            el.map.actions.setView(el.Oxia,9),
            slides.activate(12),
            emitSlideChange
          )
    )
    .addState(
        seq.step(13),
          O.Parallel(
            el.map.actions.setView(el.Mawrth,8),
            slides.activate(13),
            emitSlideChange
          )
    )
    .addState(
        seq.step(14),
          O.Parallel(
            el.map.actions.setView(el.Mawrth,10),
            slides.activate(14),
            emitSlideChange
          )
    )
    .addState(
        seq.step(15),
          O.Parallel(
          el.map.actions.setView(el.Mawrth,9),
          slides.activate(15),
          emitSlideChange
          )
    )
    .addState(
        seq.step(16),
          O.Parallel(
            el.map.actions.setView(el.center,3,true),
            slides.activate(16),
            emitSlideChange
          )
      )
    el.story.go(0);

// this group of sentences define:
//when the user click the dots, the odyssey moves to the slide that corresponds to each dot
    $("li#0").click(function(){
      el.story.go(0);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#1").click(function(){
      el.story.go(1);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#2").click(function(){
      el.story.go(2);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#3").click(function(){
      el.story.go(3);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#4").click(function(){
      el.story.go(4);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#5").click(function(){
      el.story.go(5);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#6").click(function(){
      el.story.go(6);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#7").click(function(){
      el.story.go(7);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#8").click(function(){
      el.story.go(8);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#9").click(function(){
      el.story.go(9);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#10").click(function(){
      el.story.go(10);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#11").click(function(){
      el.story.go(11);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#12").click(function(){
      el.story.go(12);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#13").click(function(){
      el.story.go(13);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#14").click(function(){
      el.story.go(14);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#15").click(function(){
      el.story.go(15);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#16").click(function(){
      el.story.go(16);
      $("li").removeClass("active");
      $(this).addClass("active");
    });
  }
