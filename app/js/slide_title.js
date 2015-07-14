/*
  This script define the text that shows the element, from the index.html file, with the id "title".
  Several functions have been defined to name each slide.
*/

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
