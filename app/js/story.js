/*
  This file define the functions click(el), emitSlideChange(),listenSlideChange() and trackCurrentSlide().
  These functions allow the odyssey.js library work correctly. The function checkIndex(index) contains
  a switch(index) operation that  call a different slide everytime the user click a navigation button or dot.
  There are some functions defined here that show or hide the layers that belong to each slide.
  At the end of this script, the function initOdyssey() is created and define the order and the zoom
  of each slides.
*/
var seq;
var slides;


// make the "#hide_menu" element visible
function show(){
  $("#hide_menu")
  .css({
    "opacity": 1
  })
  .mouseleave(function(){
    $(this).css({
      "opacity":1
    })
  })
}

// hide "#hide_menu" button. Show it when mouse hover on it.
function hide(){
  $("#hide_menu")
  .css({
    opacity: 0
  })
  .mouseover(function(){
    $(this).css({
      "opacity": 1
    })
  })
  .mouseleave(function(){
    $(this).css({
      "opacity":0
    })
  })
}

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


// functions that define the title for each slide/dot from titleZero() to titleNineteen()
function titleZero(){
  $("li#0").addClass("active");
  if ($("li#0").hasClass("active")){
    $("#title").empty();
    $("#title").text("ExoMars");
  }
}
function titleOne(){
  $("li#1").addClass("active");
  if ($("li#1").hasClass("active")){
    $("#title").empty();
    $("#title").text("MOLA");
  }
}
function titleTwo(){
  $("li#2").addClass("active");
  if ($("li#2").hasClass("active")){
    $("#title").empty();
    $("#title").text("Elevation constraint");
  }
}
function titleThree(){
  $("li#3").addClass("active");
  if ($("li#3").hasClass("active")){
    $("#title").empty();
    $("#title").text("Latitude constraint");
  }
}
function titleFour(){
  $("li#4").addClass("active");
  if ($("li#4").hasClass("active")){
    $("#title").empty();
    $("#title").text("Geological constraint");
  }
}
function titleFive(){
  $("li#5").addClass("active");
  if ($("li#5").hasClass("active")){
    $("#title").empty();
    $("#title").text("Defining the landing sites");
  }
}
function titleSix(){
  $("li#6").addClass("active");
  if ($("li#6").hasClass("active")){
    $("#title").empty();
    $("#title").text("Candidate landing Sites");
  }
}
function titleSeven(){
  $("li#7").addClass("active");
  if ($("li#7").hasClass("active")){
    $("#title").empty();
    $("#title").text("Aram Dorsum");
  }
}

function titleEight(){
  $("li#8").addClass("active");
  if ($("li#8").hasClass("active")){
    $("#title").empty();
    $("#title").text("Hypanis Vallis");
  }
}
function titleNine(){
  $("li#9").addClass("active");
  if ($("li#9").hasClass("active")){
    $("#title").empty();
    $("#title").text("Oxia Planum");
  }
}
function titleTen(){
  $("li#10").addClass("active");
  if ($("li#10").hasClass("active")){
    $("#title").empty();
    $("#title").text("Mawrth Vallis");
  }
}

function titleEleven(){
  $("li#11").addClass("active");
  if ($("li#11").hasClass("active")){
    $("#title").empty();
    $("#title").text("The end");
  }
}
  // check the index being returned by trackCurrentSlide()
  var checkIndex = function(index) {
    switch(index){
      case 0: slideZero(),hide(),titleZero(),console.log(index),$("#0").addClass("active"),$("#1").removeClass("active"),$("#11").removeClass("active"); // introduction
      break;
      case 1: slideOne(),hide(),titleOne(),console.log(index),$("#0").removeClass("active") ,$("#1").addClass("active"),$("#2").removeClass("active");// MOLA
      break;
      case 2: slideTwo(),hide(),titleTwo(),console.log(index),$("#1").removeClass("active") ,$("#2").addClass("active"),$("#3").removeClass("active"); // LSSWG
      break;
      case 3: slideThree(),hide(),titleThree(),console.log(index),$("#2").removeClass("active") ,$("#3").addClass("active"),$("#4").removeClass("active"); // 4 landing sites
      break;
      case 4: slideFour(),hide(),titleFour(),console.log(index),$("#3").removeClass("active") ,$("#4").addClass("active"),$("#5").removeClass("active"); // aram dorsum
      break;
      case 5: slideFive(),hide(),titleFive(),console.log(index),$("#4").removeClass("active") ,$("#5").addClass("active"),$("#6").removeClass("active");// HRSC / aram dorsum
      break
      case 6: slideSix(),hide(),titleSix(),console.log(index),$("#5").removeClass("active") ,$("#6").addClass("active"),$("#7").removeClass("active"); //  landing site aram dorsum 2018
      break;
      case 7: slideSeven(),hide(),titleSeven(),console.log(index), $("#6").removeClass("active") ,$("#7").addClass("active"),$("#8").removeClass("active");//  landing site aram dorsum 2020
      break;
      case 8: slideEight(),hide(),titleEight(),console.log(index), $("#7").removeClass("active") ,$("#8").addClass("active"),$("#9").removeClass("active");// Oxia Planum
      break;
      case 9: slideNine(),hide(),titleNine(),console.log(index), $("#8").removeClass("active") ,$("#9").addClass("active"),$("#10").removeClass("active");// HiRISE / Mawrth Vallis
      break;
      case 10: slideTen(),hide(),titleTen(),console.log(index), $("#9").removeClass("active") ,$("#10").addClass("active"),$("#11").removeClass("active");// End
      break;
      case 11: slideEleven(),show(),titleEleven(),console.log(index), $("#10").removeClass("active") ,$("#11").addClass("active"),$("#0").removeClass("active");// End
      break;
    };
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

// anchor permanent link to each slide....does't load vector data

  if (location.hash != "") {
    var chapter = parseInt(location.hash.replace('#', ''), 10);
    el.story.go(chapter, seq.step(chapter),O.Parallel(slides.activate(chapter)));
  } else {
    el.story.go(0,seq.step(0));
  }


// this group of sentences define:
//when the user click the dots, the odyssey moves to the slide that corresponds to each dot

    $("li#0").click(function(){
      el.story.go(0,seq.step(0));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#1").click(function(){
      el.story.go(1,seq.step(1));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#2").click(function(){
      el.story.go(2,seq.step(2));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#3").click(function(){
      el.story.go(3,seq.step(3));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#4").click(function(){
      el.story.go(4,seq.step(4));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#5").click(function(){
      el.story.go(5,seq.step(5));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#6").click(function(){
      el.story.go(6,seq.step(6));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#7").click(function(){
      el.story.go(7,seq.step(7));
      $("li").removeClass("active");
      $(this).addClass("active");
    });

    $("li#8").click(function(){
      el.story.go(8,seq.step(8));
      $("li").removeClass("active");
      $(this).addClass("active");
    });

    $("li#9").click(function(){
      el.story.go(9,seq.step(9));
      $("li").removeClass("active");
      $(this).addClass("active");
    });

    $("li#10").click(function(){
      el.story.go(10,seq.step(10));
      $("li").removeClass("active");
      $(this).addClass("active");
    });

    $("li#11").click(function(){
      el.story.go(11,seq.step(11));
      $("li").removeClass("active");
      $(this).addClass("active");
    });

  }
