var app =  {};
	app.exomars = (function(w,d,$,O){

	  		function init() {
      			initMap();
      			cartodbData();
      			initOdyssey(O);
      			listenSlideChange();
						
      		}
      		return {
      			init : init,
      		}
  	})(window, document, jQuery,O);
	// 3. when the document has been completely loaded and parsed it applies the function to the window element
	window.addEventListener("DOMContentLoaded", function(){
    	app.exomars.init();
  });
