
  /* Widget accordion */

  // Define interactivity of the JQuery widget accordion
  $(function(){
    $("#accordion").accordion({
      collapsible:true,
      heightStyle: "content"
    });
  });

    // when click the hide/show option it toggles the menu
    $("#hide_menu img").bind('mouseup',function(){
      if ($('#accordion').css('display') != 'none'){
        $('#accordion').css({
          display: 'none'
        })
      } else{
        $('#accordion').css({
          display:'block'
        });
      }
    });

  /* Slide container */

  // If there is scroll, the scroll up to the y = 0 position of the slides_containers when click the nav buttons.
    $("#navButtons").click(function() {
      $('#slides_container #slides').scrollTop(0);
    });

  // when click the hide/show option it toggles the slides_container
  $("#hide_story a").bind('mouseup',function(){
    if ($('#slides').css('display') != 'none'){
      $('#slides').css({
        display: 'none'
      }),
      $("#hide_story").css({
        align : "center",
        "margin-top" : 10,
        "margin-left": -5
      });
      heightSmall();
      widthSmall();
    } else{
      $('#slides').css({
        display:'block'
      });
      heightNormal();
      widthNormal();
    }
  });

    // A group of functions to resize the slide_container
    function heightSmall(){
      $('#slides_container').height('4%')
    };
    function widthSmall(){

      $('#slides_container')
      .width('80')
      .css({
        'padding-left' : '10px',
        'padding-top' : '0px',
        'padding-bottom' : '0px'
      })
    }
    function heightNormal(){
      $('#slides_container').height('auto')
    };
    function widthNormal(){
      $('#slides_container')
      .width(500)
      .css({
        'padding-top': '5px',
        'padding-left': '25px'
      })
    };

    // buttons inside slide container
      $('.button').click(function() {
        $('.button').removeClass('selected');
        $(this).addClass('selected');
        el.LayerActions[$(this).attr('id')]();
      }); // end of click event



  /* Navigation buttons */

  // when the user move the mouse on the navButtons it changes the opacity of the button itself
  $("#navButtons .prev")
  .mouseover(function(){
    $("#circlePrev").css({
      "background-color": "#b2df8a",
      "opacity": 1
    })
  })
  .mouseleave(function(){
    $("#circlePrev").css({
      "background-color": "#b2df8a",
      "opacity": 0.5
    })
  });
  $("#navButtons .next")
    .mouseover(function(){
      $("#circleNext").css({
        "background-color": "#b2df8a",
        "opacity": 1
      })
    })
    .mouseleave(function(){
      $("#circleNext").css({
        "background-color": "#b2df8a",
        "opacity": 0.5
      })
    });
