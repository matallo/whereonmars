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


// A group of functions to resize the slide_container
  function heightSmall(){
    $('#slides_container').height('5%')
  };
  function widthSmall(){
    $('#slides_container').width('110')
  }
  function heightNormal(){
    $('#slides_container').height('auto')
  };
  function widthNormal(){
    $('#slides_container').width(430)
  };

// buttons inside slide container
  $('.button').click(function() {
    $('.button').removeClass('selected');
    $(this).addClass('selected');
    el.LayerActions[$(this).attr('id')]();
  }); // end of click event
