/*
  This file define the functions click(el), emitSlideChange(),listenSlideChange() and trackCurrentSlide().
  These functions allow the odyssey.js library work correctly. The function checkIndex(index) contains
  a switch(index) operation that  call a different slide everytime the user click a navigation button or dot.
  There are some functions defined here that show or hide the layers that belong to each slide.
  At the end of this script, the function initOdyssey() is created and define the order and the zoom
  of each slides.
*/

// global variables
var seq;
var slides;

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
  var checkIndex = function(index) {
    switch(index){
      case 0: slideZero(),hide(),titleZero(),console.log(index),$("#0").addClass("active"),$("#1").removeClass("active"),$("#11").removeClass("active");
      break;
      case 1: slideOne(),hide(),titleOne(),console.log(index),$("#0").removeClass("active") ,$("#1").addClass("active"),$("#2").removeClass("active");
      break;
      case 2: slideTwo(),hide(),titleTwo(),console.log(index),$("#1").removeClass("active") ,$("#2").addClass("active"),$("#3").removeClass("active");
      break;
      case 3: slideThree(),hide(),titleThree(),console.log(index),$("#2").removeClass("active") ,$("#3").addClass("active"),$("#4").removeClass("active");
      break;
      case 4: slideFour(),hide(),titleFour(),console.log(index),$("#3").removeClass("active") ,$("#4").addClass("active"),$("#5").removeClass("active");
      break;
      case 5: slideFive(),hide(),titleFive(),console.log(index),$("#4").removeClass("active") ,$("#5").addClass("active"),$("#6").removeClass("active");
      break
      case 6: slideSix(),hide(),titleSix(),console.log(index),$("#5").removeClass("active") ,$("#6").addClass("active"),$("#7").removeClass("active");
      break;
      case 7: slideSeven(),hide(),titleSeven(),console.log(index), $("#6").removeClass("active") ,$("#7").addClass("active"),$("#8").removeClass("active");
      break;
      case 8: slideEight(),hide(),titleEight(),console.log(index), $("#7").removeClass("active") ,$("#8").addClass("active"),$("#9").removeClass("active");
      break;
      case 9: slideNine(),hide(),titleNine(),console.log(index), $("#8").removeClass("active") ,$("#9").addClass("active"),$("#10").removeClass("active");
      break;
      case 10: slideTen(),hide(),titleTen(),console.log(index), $("#9").removeClass("active") ,$("#10").addClass("active"),$("#11").removeClass("active");
      break;
      case 11: slideEleven(),show(),titleEleven(),console.log(index), $("#10").removeClass("active") ,$("#11").addClass("active"),$("#0").removeClass("active");
      break;
    };

    /* Block legend */
    // The legends are added to the map depending on the slide. Are added in this way to avoid to load them everytime that the user change
    // the slides of the story.
    if (index == 1){
      $('#map').append(el.lengendMOLA.render().el);
    } else {
      $('#map:last-child').remove(el.lengendMOLA.render().el);
    }
    if (index == 2){
      $('#map').append(el.legendElevation.render().el);
    } else {
      $('#map:last-child').remove(el.legendElevation.render().el);
    }
    if (index == 4){
      $('#map').append(el.legendGeology.render().el);
    } else {
      $('#map:last-child').remove(el.legendGeology.render().el);
      }
    if (index == 7 || index == 8 || index == 9 || index == 10){
      $('#map').append(el.legendEllipses.render().el);
    } else {
      $('#map:last-child').remove(el.legendEllipses.render().el);
      }
}

  // intro
function slideZero() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapShadedColor)){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapShadedColor);
    el.map.addLayer(el.basemapCelestia);
  }
  el.landingSite.hide();
  el.dashellipses4.hide();
  el.nomenclatorGlobal.show();
  el.nomenclatorRegional.hide();
  el.geoNoOkContraint.hide();
// layers to hide when clicking buttons (not following the story order)
  el.landingSite8.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.elevationConstraint.hide();
  el.elevationConstraintNoOkLS.hide();
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.ellipses7.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses3.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();

  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();

};
// MOLA Shaded presentation
function slideOne() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapCelestia)){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapCelestia);
    el.map.addLayer(el.basemapShadedColor);
  }
  el.landingSite.hide();
  el.dashellipses4.hide();
  el.nomenclatorGlobal.hide();
  el.nomenclatorRegional.hide();
  el.geoNoOkContraint.hide();
  el.legendElevation.hide();
// layers to hide when clicking buttons (not following the story order)
  el.landingSite8.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.elevationConstraint.hide();
  el.elevationConstraintNoOkLS.hide();
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.ellipses7.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses3.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();

  //legends
  el.lengendMOLA.show();
  el.legendElevation.hide();
  el.legendGeology.hide();
  };


// function two slideTwo() elevation constrain
function slideTwo() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapCelestia)){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapCelestia);
    el.map.addLayer(el.basemapShadedColor);
  }

  el.landingSite.hide();
  el.elevationConstraint.show();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.geoNoOkContraint.hide();
  el.landingSite8.hide();
  el.duneConstraint.hide();
  el.nomenclatorRegional.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.elevationConstraintNoOkLS.hide();
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.ellipses7.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses3.hide();
  el.dashellipses4.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();

  //legends
  el.lengendMOLA.hide();
  el.legendElevation.show();
  el.legendGeology.hide();
};
// latitude constraint landing sites
function slideThree() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapShadedColor)){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapShadedColor);
    el.map.addLayer(el.basemapCelestia);
  }
  el.latConstraint.show();
  el.geoConstraint.hide();
  el.geoNoOkContraint.hide();
  el.elevationConstraint.hide();
  el.landingSite8.hide();
  el.landingSite.hide();
  el.duneConstraint.hide();
  el.nomenclatorRegional.hide();
  el.elevationConstraintNoOkLS.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.ellipses7.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses3.hide();
  el.dashellipses4.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();

  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
};
// geological constraint
function slideFour() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapCelestia)){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapCelestia);
    el.map.addLayer(el.basemapShadedColor);
  }
  el.landingSite8.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.geoNoOkContraint.show();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.nomenclatorRegional.hide();
  el.elevationConstraint.hide();
  el.elevationConstraintNoOkLS.hide();
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.ellipses7.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses3.hide();
  el.dashellipses4.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();

  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.show();

};
// Mix of constraints
function slideFive() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapShadedColor)){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapShadedColor);
    el.map.addLayer(el.basemapCelestia);
  }
  el.elevationConstraint.hide();
  el.latConstraint.show();
  el.geoConstraint.show();
  el.geoNoOkContraint.hide();
  el.elevationConstraintNoOkLS.show();
  el.landingSite8.show();
  el.duneConstraint.hide();
  el.nomenclatorRegional.hide();
  el.landingSite.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.ellipses7.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses3.hide();
  el.dashellipses4.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();

  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
};
// 4 landing sites
function slideSix() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapShadedColor)){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapShadedColor);
    el.map.addLayer(el.basemapCelestia);
  }
  el.landingSite.show();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.geoNoOkContraint.hide();
  el.elevationConstraintNoOkLS.hide();
  el.landingSite8.hide();
  el.duneConstraint.hide();
  el.nomenclatorRegional.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.elevationConstraint.hide();
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.ellipses7.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses3.hide();
  el.dashellipses4.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();

  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
};
// Aram Dorsum
function slideSeven(){
  if (el.map.hasLayer(el.basemapShadedColor) || el.map.hasLayer(el.basemapCelestia)){
    el.map.removeLayer(el.basemapCelestia);
    el.map.removeLayer(el.basemapShadedColor);
    el.map.addLayer(el.basemapViking);
  }
  el.landingSite.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.ellipses1.show();
  el.ellipses5.show();
  el.dashellipses1.show();
  el.dashellipses5.show();
  el.nomenclatorRegional.show();
  el.elevationConstraintNoOkLS.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.elevationConstraint.hide();
  el.geoNoOkContraint.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
  el.ellipses6.hide();
  el.ellipses7.hide();
  el.ellipses8.hide();
  el.dashellipses2.hide();
  el.dashellipses3.hide();
  el.dashellipses4.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();
  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
};

  // Hypanis Vallis
function slideEight() {
  if (el.map.hasLayer(el.basemapShadedColor) || el.map.hasLayer(el.basemapCelestia)){
    el.map.removeLayer(el.basemapCelestia);
    el.map.removeLayer(el.basemapShadedColor);
    el.map.addLayer(el.basemapViking);
  }
  el.ellipses1.hide();
  el.ellipses2.show();
  el.ellipses5.hide();
  el.ellipses6.show();
  el.dashellipses2.show();
  el.dashellipses5.hide();
  el.dashellipses6.show();

  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.landingSite8.hide();
  el.landingSite.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.elevationConstraint.hide();
  el.geoNoOkContraint.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
  el.ellipses7.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses3.hide();
  el.dashellipses4.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();
  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
};

  // Oxia Planum
function slideNine() {
  if (el.map.hasLayer(el.basemapShadedColor) || el.map.hasLayer(el.basemapCelestia)){
    el.map.removeLayer(el.basemapCelestia);
    el.map.removeLayer(el.basemapShadedColor);
    el.map.addLayer(el.basemapViking);
  }
  el.ellipses2.hide();
  el.ellipses3.show();
  el.ellipses6.hide();
  el.ellipses7.show();
  el.dashellipses3.show();
  el.dashellipses7.show();
  el.dashellipses2.hide();
  el.dashellipses6.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.landingSite8.hide();
  el.landingSite.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.elevationConstraint.hide();
  el.geoNoOkContraint.hide();
  el.elevationConstraintNoOkLS.hide();
  el.ellipses1.hide();
  el.ellipses4.hide();
  el.ellipses5.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses4.hide();
  el.dashellipses5.hide();
  el.dashellipses8.hide();

  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
};


// Mawrth Vallis
function slideTen() {
  if (el.map.hasLayer(el.basemapShadedColor) || el.map.hasLayer(el.basemapCelestia)){
    el.map.removeLayer(el.basemapCelestia);
    el.map.removeLayer(el.basemapShadedColor);
    el.map.addLayer(el.basemapViking);
  }
  el.ellipses4.show();
  el.ellipses8.show();
  el.ellipses3.hide();
  el.ellipses7.hide();
  el.dashellipses4.show();
  el.dashellipses8.show();
  el.dashellipses3.hide();
  el.dashellipses7.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.landingSite8.hide();
  el.landingSite.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.elevationConstraint.hide();
  el.geoNoOkContraint.hide();
  el.elevationConstraintNoOkLS.hide();
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
};

  // End of the story/overview
function slideEleven() {
  if (el.map.hasLayer(el.basemapViking) || el.map.hasLayer(el.basemapShadedColor) ){
    el.map.removeLayer(el.basemapViking);
    el.map.removeLayer(el.basemapShadedColor);
    el.map.addLayer(el.basemapCelestia);
  }
  el.nomenclatorGlobal.hide();
  el.nomenclatorRegional.hide();
  el.ellipses4.hide();
  el.ellipses8.hide();
  el.landingSite.show();
  el.dashellipses4.hide();
  el.dashellipses8.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.elevationConstraintNoOkLS.hide();
  el.landingSite8.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.elevationConstraint.hide();
  el.geoNoOkContraint.hide();
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.ellipses7.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses3.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  //legends
  el.lengendMOLA.hide();
  el.legendElevation.hide();
  el.legendGeology.hide();
};
// start initOdyssey fucntion (it is called in the main.js)
function initOdyssey(O) {

    // O is for Odyssey
    var map = el.map;
    seq = O.Triggers.Sequential();
    // enable keys to move slides
    O.Keys().on('map').left().then(seq.prev, seq)
    O.Keys().on('map').right().then(seq.next, seq)
    // set up triggers for slide arrows
    click(document.querySelectorAll('.next')).then(seq.next, seq)
    click(document.querySelectorAll('.prev')).then(seq.prev, seq)
    slides = O.Actions.Slides('slides');
    el.story =  O.Story()
    .addState(
        seq.step(0),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(0),
            O.Location.changeHash('0'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(1),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(1),
            O.Location.changeHash('1'),
            emitSlideChange
          )

    )
    .addState(
        seq.step(2),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(2),
            O.Location.changeHash('2'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(3),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(3),
            O.Location.changeHash('3'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(4),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(4),
            O.Location.changeHash('4'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(5),
          O.Parallel(
            el.map.actions.setView(el.center,3),
            slides.activate(5),
            O.Location.changeHash('5'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(6),
          O.Parallel(
            el.map.actions.setView(el.center,4),
            slides.activate(6),
            O.Location.changeHash('6'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(7),
          O.Parallel(
            el.map.actions.setView(el.Aram,9),
            slides.activate(7),
            O.Location.changeHash('7'),
            emitSlideChange
          )
    )

    .addState(
        seq.step(8),
          O.Parallel(
            el.map.actions.setView(el.Hypanis,9),
            slides.activate(8),
            O.Location.changeHash('8'),
            emitSlideChange
          )
    )

    .addState(
        seq.step(9),
          O.Parallel(
            el.map.actions.setView(el.Oxia,9),
            slides.activate(9),
            O.Location.changeHash('9'),
            emitSlideChange
          )
    )

    .addState(
        seq.step(10),
          O.Parallel(
            el.map.actions.setView(el.Mawrth,9),
            slides.activate(10),
            O.Location.changeHash('10'),
            emitSlideChange
          )
    )

    .addState(
        seq.step(11),
          O.Parallel(
            el.map.actions.setView(el.center,3,true),
            slides.activate(11),
            O.Location.changeHash('11'),
            emitSlideChange
          )
      )

// anchor permanent link to each slide

  if (location.hash != "") {
    var chapter = parseInt(location.hash.replace('#', ''), 10);
    el.story.go(chapter, seq.step(chapter),O.Parallel(slides.activate(chapter)));
  } else {
    el.story.go(0,seq.step(0));
  }

}
