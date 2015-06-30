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


  // check the index being returned by trackCurrentSlide()
  var checkIndex = function(index) {
    switch(index){
      case 0: slideZero(),hide(),console.log(index),$("#0").addClass("active"),$("#1").removeClass("active"),$("#19").removeClass("active"); // introduction
      break;
      case 1: slideOne(),hide(),console.log(index),$("#0").removeClass("active") ,$("#1").addClass("active"),$("#2").removeClass("active");// MOLA
      break;
      case 2: slideTwo(),hide(),console.log(index),$("#1").removeClass("active") ,$("#2").addClass("active"),$("#3").removeClass("active"); // LSSWG
      break;
      case 3: slideThree(),hide(),console.log(index),$("#2").removeClass("active") ,$("#3").addClass("active"),$("#4").removeClass("active"); // 4 landing sites
      break;
      case 4: slideFour(),hide(),console.log(index),$("#3").removeClass("active") ,$("#4").addClass("active"),$("#5").removeClass("active"); // aram dorsum
      break;
      case 5: slideFive(),hide(),console.log(index),$("#4").removeClass("active") ,$("#5").addClass("active"),$("#6").removeClass("active");// HRSC / aram dorsum
      break
      case 6: slideSix(),hide(),console.log(index),$("#5").removeClass("active") ,$("#6").addClass("active"),$("#7").removeClass("active"); //  landing site aram dorsum 2018
      break;
      case 7: slideSeven(),hide(),console.log(index), $("#6").removeClass("active") ,$("#7").addClass("active"),$("#8").removeClass("active");//  landing site aram dorsum 2020
      break;
      case 8: slideEight(),hide(),console.log(index),$("#7").removeClass("active") ,$("#8").addClass("active"),$("#9").removeClass("active"); // Hypanis Vallis
      break;
      case 9: slideNine(),hide(),console.log(index), $("#8").removeClass("active") ,$("#9").addClass("active"),$("#10").removeClass("active");// Hypanis Vallis
      break;
      case 10: slideTen(),hide(),console.log(index),$("#9").removeClass("active") ,$("#10").addClass("active"),$("#11").removeClass("active"); // Oxia Planum
      break;
      case 11: slideEleven(),hide(),console.log(index),$("#10").removeClass("active") ,$("#11").addClass("active"),$("#12").removeClass("active"); // HiRISE / Oxia Planum
      break;
      case 12: slideTwelve(),hide(),console.log(index), $("#11").removeClass("active") ,$("#12").addClass("active"),$("#13").removeClass("active");// Oxia Planum
      break;
      case 13: slideThirteen(),hide(),console.log(index),$("#12").removeClass("active") ,$("#13").addClass("active"),$("#14").removeClass("active"); // Mawrth Vallis
      break;
      case 14: slideFourteen(),hide(),console.log(index), $("#13").removeClass("active") ,$("#14").addClass("active"),$("#15").removeClass("active");// HiRISE / Mawrth Vallis
      break;
      case 15: slideFifteen(),hide(),console.log(index), $("#14").removeClass("active") ,$("#15").addClass("active"),$("#16").removeClass("active");// Mawrth Vallis
      break;
      case 16: slideSixteen(),hide(),console.log(index), $("#15").removeClass("active") ,$("#16").addClass("active"),$("#17").removeClass("active");// End
      break;
      case 17: slideSeventeen(),hide(),console.log(index), $("#16").removeClass("active") ,$("#17").addClass("active"),$("#18").removeClass("active");// End
      break;
      case 18: slideEighteen(),hide(),console.log(index), $("#17").removeClass("active") ,$("#18").addClass("active"),$("#19").removeClass("active");// End
      break;
      case 19: slideNineteen(),show(),console.log(index), $("#18").removeClass("active") ,$("#19").addClass("active"),$("#0").removeClass("active");// End
      break;

    };

  }

  // intro
function slideZero() {
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
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();

};
// MOLA
  function slideOne() {
  el.landingSite8.hide();
  el.geoNoOkContraint.show();
  el.nomenclatorGlobal.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.landingSite.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.nomenclatorRegional.hide();
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
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};
// LSSWG
function slideTwo() {
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.geoNoOkContraint.show();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.nomenclatorRegional.hide();
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
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();

};
// latitude constraint landing sites
function slideThree() {
  el.latConstraint.show();
  el.geoConstraint.hide();
  el.geoNoOkContraint.hide();
  el.elevationConstraint.hide();
  el.landingSite8.hide();
  el.duneConstraint.hide();
  el.nomenclatorRegional.hide();
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
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};
// elevation constraint landing sites
function slideFour() {
  //el.map.addLayer(el.basemapShadedColor);
  //el.map.removeLayer(basemapCelestia);
  el.elevationConstraint.show();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.geoNoOkContraint.hide();
  el.landingSite8.hide();
  el.duneConstraint.hide();
  el.nomenclatorRegional.hide();
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
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();

};
// Mix of constraints
function slideFive() {
  el.elevationConstraint.hide();
  el.latConstraint.show();
  el.geoConstraint.show();
  el.geoNoOkContraint.hide();
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
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};
// 4 landing sites
function slideSix() {
  el.landingSite.show();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.geoNoOkContraint.hide();
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
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};
// Aram Dorsum
function slideSeven(){
  el.landingSite.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.ellipses1.hide();
  el.ellipses5.hide();
  el.dashellipses1.hide();
  el.nomenclatorRegional.show();
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
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};
// HRSC
function slideEight() {
  el.map.removeLayer(el.hrsc[0]);
  el.ellipses1.hide();
  el.ellipses5.hide();
  el.dashellipses1.hide();
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.elevationConstraint.hide();
  el.geoNoOkContraint.hide();
  el.landingSite8.hide();
  el.landingSite.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
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
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};
// HiRISE
function slideNine(){
  el.map.addLayer(el.hrsc[0]);
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.landingSite8.hide();
  el.landingSite.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.elevationConstraint.hide();
  el.geoNoOkContraint.hide();
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses4.hide();
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
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};
// Aram Dorsum landing site 2018
function slideTen() {
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
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.landingSite8.hide();
  el.landingSite.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
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
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();


};
// Aram Dorsum landing site 2020
function slideEleven() {
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
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.landingSite8.hide();
  el.landingSite.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
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

};
  // Hypanis Vallis
function slideTwelve() {
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.dashellipses2.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.torqueEllipses2.hide();
  el.torqueEllipses2.stop();
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
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();

};
// Hypanis Vallis landing sites
function slideThirteen() {
  el.ellipses2.show();
  el.ellipses3.hide();
  el.ellipses6.show();
  el.dashellipses2.show();
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
  el.ellipses1.hide();
  el.ellipses4.hide();
  el.ellipses5.hide();
  el.ellipses7.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses3.hide();
  el.dashellipses4.hide();
  el.dashellipses5.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};
  // Oxia Planum
function slideFourteen() {
  el.ellipses2.hide();
  el.ellipses3.hide();
  el.ellipses6.hide();
  el.ellipses7.hide();
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
  el.ellipses1.hide();
  el.ellipses4.hide();
  el.ellipses5.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses3.hide();
  el.dashellipses4.hide();
  el.dashellipses5.hide();
  el.dashellipses7.hide();
  el.dashellipses8.hide();
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};

// Oxia Planum landing sites
function slideFifteen() {
  el.ellipses3.show();
  el.ellipses4.hide();
  el.ellipses7.show();
  el.dashellipses3.show();
  el.dashellipses4.hide();
  el.dashellipses7.show();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.landingSite8.hide();
  el.landingSite.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.elevationConstraint.hide();
  el.geoNoOkContraint.hide();
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses8.hide();
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};
// Mawrth Vallis
function slideSixteen() {
  el.ellipses3.hide();
  el.ellipses7.hide();
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
  el.ellipses1.hide();
  el.ellipses2.hide();
  el.ellipses4.hide();
  el.ellipses5.hide();
  el.ellipses6.hide();
  el.ellipses8.hide();
  el.dashellipses1.hide();
  el.dashellipses2.hide();
  el.dashellipses4.hide();
  el.dashellipses5.hide();
  el.dashellipses6.hide();
  el.dashellipses8.hide();
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};
// Mawrth Vallis HiRISE
function slideSeventeen() {
  el.ellipses4.hide();
  el.ellipses8.hide();
  el.dashellipses4.hide();
  el.dashellipses8.hide();
// layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
  el.landingSite8.hide();
  el.landingSite.hide();
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
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};
// Mawrth Vallis landing sites
function slideEighteen() {
  el.ellipses4.show();
  el.ellipses8.show();
  el.dashellipses4.show();
  el.dashellipses8.show();
  el.landingSite.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.landingSite8.hide();
  el.latConstraint.hide();
  el.geoConstraint.hide();
  el.duneConstraint.hide();
  el.nomenclatorGlobal.hide();
  el.nomenclatorRegional.hide();
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
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
};
  // End of the story/overview
function slideNineteen() {
  el.nomenclatorRegional.hide();
  el.ellipses4.hide();
  el.ellipses8.hide();
  el.landingSite.show();
  el.dashellipses4.hide();
  el.dashellipses8.hide();
  // layers to hide when clicking buttons (not following the story order)
  el.nomenclatorGlobal.hide();
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
  el.torqueEllipses1.stop();
  el.torqueEllipses1.hide();
  el.torqueEllipses2.stop();
  el.torqueEllipses2.hide();
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
            el.map.actions.setView(el.center,3),
            slides.activate(6),
            O.Location.changeHash('6'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(7),
          O.Parallel(
            el.map.actions.setView(el.Aram,7),
            slides.activate(7),
            O.Location.changeHash('7'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(8),
          O.Parallel(
            el.map.actions.setView(el.Aram,7),
            slides.activate(8),
            O.Location.changeHash('8'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(9),
          O.Parallel(
            el.map.actions.setView(el.Aram,10),
            slides.activate(9),
            O.Location.changeHash('9'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(10),
          O.Parallel(
            el.map.actions.setView(el.Aram,8),
            slides.activate(10),
            O.Location.changeHash('10'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(11),
          O.Parallel(
            el.map.actions.setView(el.Aram,8),
            slides.activate(11),
            O.Location.changeHash('11'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(12),
          O.Parallel(
            el.map.actions.setView(el.Hypanis,8),
            slides.activate(12),
            O.Location.changeHash('12'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(13),
          O.Parallel(
            el.map.actions.setView(el.Hypanis,9),
            slides.activate(13),
            O.Location.changeHash('13'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(14),
          O.Parallel(
            el.map.actions.setView(el.Oxia,8),
            slides.activate(14),
            O.Location.changeHash('14'),
            emitSlideChange
          )
    )

    .addState(
        seq.step(15),
          O.Parallel(
            el.map.actions.setView(el.Oxia,9),
            slides.activate(15),
            O.Location.changeHash('15'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(16),
          O.Parallel(
            el.map.actions.setView(el.Mawrth,8),
            slides.activate(16),
            O.Location.changeHash('16'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(17),
          O.Parallel(
            el.map.actions.setView(el.Mawrth,10),
            slides.activate(17),
            O.Location.changeHash('17'),
            emitSlideChange
          )
    )
    .addState(
        seq.step(18),
          O.Parallel(
          el.map.actions.setView(el.Mawrth,9),
          slides.activate(18),
          O.Location.changeHash('18'),
          emitSlideChange
          )
    )
    .addState(
        seq.step(19),
          O.Parallel(
            el.map.actions.setView(el.center,3,true),
            slides.activate(19),
            O.Location.changeHash('19'),
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
    $("li#12").click(function(){
      el.story.go(12,seq.step(12));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#13").click(function(){
      el.story.go(13,seq.step(13));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#14").click(function(){
      el.story.go(14,seq.step(14));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#15").click(function(){
      el.story.go(15,seq.step(15));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#16").click(function(){
      el.story.go(16,seq.step(16));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#17").click(function(){
      el.story.go(17,seq.step(17));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#18").click(function(){
      el.story.go(18,seq.step(18));
      $("li").removeClass("active");
      $(this).addClass("active");
    });
    $("li#19").click(function(){
      el.story.go(19,seq.step(19));
      $("li").removeClass("active");
      $(this).addClass("active");
    });

  }
