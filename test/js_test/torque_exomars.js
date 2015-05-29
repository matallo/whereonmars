var app =  {};
	// 2. define ExoMars object. The value of the property is a function.
	app.exomars = (function(w,d,$,O){
			// define object that have all the elements and layers
			var el = {
				map: null,
				basemap: null, // MOLA basemap grey_scale
				basemap2: null,
				basemapColor: null,
				torqueLayer: null,
				torqueEllipses: null,
				story: null,
				hirise: null,
				hrsc: null,
				// landing sites
				Aram: null,
				Hypanis:null,
				Oxia: null,
				Mawrth: null,
				// center of the landingSite
				center: null,
				// CartoDB layers
				landingSite: null,
				landingSite8: null,
				latConstraint: null,
				geoConstraint: null,
				ellipses1: null,
				ellipses2: null,
				ellipses3: null,
				ellipses4: null,
				ellipses5: null,
				ellipses6: null,
				ellipses7: null,
				ellipses8: null,
				LayerActions: null
			};
			// 	define function that initiates the map element
			var initMap = function(){
				// define map
				el.map =  new L.Map('map', {
      				center: [15,-11],
      				zoom: 3,
      				minZoom: 3,
      				zoomControl: false

      			});
      		new L.control.zoom({position : 'bottomright'}).addTo(el.map);
    			new L.control.scale({metric: true,imperial: false}).addTo(el.map);

    			// define basemap
    			el.basemap = new L.tileLayer('http://gislab.esac.esa.int/data/whereonmars/tiles/mola-gray/{z}/{x}/{y}.png', {
 					attribution: 'GISLAB',
 					tms:true,
 					maxNativeZoom: 9,
  				}).addTo(el.map).setZIndex(0);

  				// basemap2 is the map used to create the mini map
  				el.basemap2 = new L.tileLayer('http://gislab.esac.esa.int/data/whereonmars/tiles/mola-gray/{z}/{x}/{y}.png', {
 					attribution: 'GISLAB',
 					tms:true,
 					maxNativeZoom: 9,
  				});

  				// create a Mini map of the basemap2 layer
  				new L.Control.MiniMap(el.basemap2, { position: 'topright' }).addTo(el.map);
					// define color basemap
  				el.basemapColor = new L.tileLayer('http://gislab.esac.esa.int/data/whereonmars/tiles/mola-color/{z}/{x}/{y}.png', {
 					attribution: 'GISLAB',
 					maxNativeZoom: 7,
  				}).setZIndex(0);


  			// define overlays from cartodb database
  			var sql = new cartodb.SQL({ user: 'whereonmars'});
		 		sql.execute("SELECT * FROM overlays_table")
		 		.done(function(data){
		 			el.hrsc = {};
		 			el.hirise = {};
		 			// loop that read each row of cartodb table and add each hrsc layer
       				for (i = 0; i < data.total_rows; i++){
      					if (i < 4){
      						el.hrsc[i]= L.tileLayer(data.rows[i].url,{
  								tms:true,
  								minZoom: 7,
  								opacity: 0.5,
  								unloadInvisibleTiles: true, // If true, all the tiles that are not visible after panning are removed
  								updateWhenIdle: false, // If false, new tiles are loaded during panning, otherwise only after it (when true)
  								maxNativeZoom: 10
								}).setZIndex(1);
									if(i > 0){
										el.hrsc[i].addTo(el.map);
									};
      					} else {
      						el.hirise[i] = new L.tileLayer(data.rows[i].url,{
 								tms:true,
 								opacity: 0.5,
 								minZoom: 9,
 								unloadInvisibleTiles: true, // If true, all the tiles that are not visible after panning are removed
  								updateWhenIdle: true, // If false, new tiles are loaded during panning, otherwise only after it (when true)
 								maxNativeZoom: 18
							}).setZIndex(2);
      							if(i > 4){
											el.hirise[i].addTo(el.map);
										};
      					}
      				}
							var baseMaps = [{
								groupName:"MOLA maps",
								expanded: true,
								layers :{
									"Grayscale map": el.basemap,
									"Color map" : el.basemapColor
								}
							}];
							var overLays = [{
								groupName: "HRSC images",
								expanded: true,
								layers :{
									"Aram Dorsum" : el.hrsc[0],
									"Hypanis Vallis" : el.hrsc[1],
									"Oxia Planum" : el.hrsc[2],
									"Mawrth Vallis" : el.hrsc[3]
								}
							},{
								groupName: "HIRISE images",
								expanded: true,
								layers:{
									"Oxia Planum": el.hirise[4],
									"Mawrth Vallis ": el.hirise[5]
								}
							},{
								groupName : "blabla",
								expanded: true,
								layers:{
									"test":el.landingSite
								}
							}];
							var options = {
								container_width: "300px",
								group_maxHeight : "30%",
								//container_maxHeight : "350px",
								exclusive: false
							};
							var control = L.Control.styledLayerControl(baseMaps,overLays,options);
							el.map.addControl(control);
      		});

				// define coordinates of the center of the different Landing Sites
				el.Aram = new L.LatLng(7.87, -11.2);
				el.Hypanis = new L.LatLng(11.8, -45.04);
				el.Oxia = new L.LatLng(18.2, -24.55);
				el.Mawrth = new L.LatLng(22.16, -17.95);
				el.center = new L.LatLng(15,-11);

			}
	  		// call data from cartoDB
	  		var cartodbData = function(){
				var layerURL = 'http://whereonmars.cartodb.com/api/v2/viz/03ec7c7c-bc6a-11e4-b600-0e4fddd5de28/viz.json';
				// create cartoDB layer from vizjson url
				cartodb.createLayer(el.map, layerURL)
				.on('done', function(layer) {
		  			layer.setZIndex(100); // all cartoDB layer will be above all the baselayers
		  			var sublayer =layer.getSubLayer(0);

		  	   		el.landingSite8 = layer.createSubLayer({
		  	   			sql: "SELECT * FROM exomars_landing_sites_eight",
		  				cartocss: '#exomars_landing_sites_four{marker-placement: point;marker-line-color: #FFF;marker-width: 15; marker-line-opacity: 0;marker-line-width: 3;marker-type: ellipse;marker-fill: #fc9272;marker-fill-opacity: 0;}',
		  				interactivity: ['name','coordinates']
		  	   		});

							// we define the torque layer of the landing sites
		  	   		cartodb.createLayer(el.map,{
		  	   		type: "torque",
      				options: {
        				user_name: "whereonmars",
        				table_name: "exomars_landing_sites_eight",
        				cartocss:
        				'Map { '
                   			+'  -torque-frame-count:512; '
                   			+'  -torque-animation-duration:10; -torque-time-attribute:"timestamp"; '
                   			+'  -torque-aggregation-function:"count(cartodb_id)"; '
                   			+' -torque-resolution:4; -torque-data-aggregation:linear} '
                   		+'#exomars_landing_sites_eight{ '
                   			+'  comp-op: lighter; marker-opacity: 1; '
                   			+'  marker-line-color:   #FFFFFF; marker-line-width: 0.25; '
                   			+'  marker-line-opacity: 1; marker-type: ellipse; '
                   			+'  marker-width: 4; marker-fill:  #FF0000; }'
                   		+'#exomars_landing_sites_eight[frame-offset=1] {'
                   			+'marker-width:6;'
                   			+' marker-fill-opacity:0.5; }'
                   		+'#exomars_landing_sites_eight[frame-offset=2] {'
 							+'marker-width:4;'
 							+'marker-fill-opacity:0.15; }'

        				}
    				})
    				.done(function(layer){

    					el.torqueLayer  = layer;
    				});

						// we define the torque layer for the landing ellipses in Aram Dorsum
						cartodb.createLayer(el.map,{
						type: "torque",
						options: {
							user_name: "whereonmars",
							table_name: "ls_ellipses_2018_aram",
							cartocss:
							'Map { '
											+'  -torque-frame-count:512; '
											+'  -torque-animation-duration:20; -torque-time-attribute:"cartodb_id"; '
											+'  -torque-aggregation-function:"count(cartodb_id)"; '
											+' -torque-resolution:2; -torque-data-aggregation:linear} '
							+'#ls_ellipses_2018_aram{ '
											+'  comp-op: xor; marker-fill-opacity: 0.9; '
											+'  marker-line-color: #FFF; marker-line-width: 1.5; '
											+'  marker-line-opacity: 1; marker-type: ellipse; '
											+'  marker-width: 6; marker-fill: #F11810; }'


										}
						}).done(function(layer){

							el.torqueEllipses = layer;
					});

		  	   		el.landingSite = layer.createSubLayer({
		  	   			sql: "SELECT * FROM exomars_landing_sites_four",
		  					cartocss: '#exomars_landing_sites_four{marker-placement: point;marker-line-color: #31a354;marker-width: 15; marker-line-opacity: 1;marker-line-width: 3;marker-type: ellipse;marker-fill: #fc9272;marker-fill-opacity: 0;}',
		  					interactivity: ['name','coordinates']
		  	   		});
		  	   		el.latConstraint = layer.createSubLayer({
		  					sql: "SELECT * FROM lat_constraints",
		  					cartocss: '#lat_constraints{polygon-fill: #000000;polygon-opacity: 0.4;line-color: #f40202;line-width: 1;line-opacity: 1;}',
		  				});
							el.geoConstraint = layer.createSubLayer({
									sql: "SELECT * FROM restricted_geology_latitude_webmercator",
									cartocss: '#restricted_geology_latitude_webmercator{polygon-fill:  #5CA2D1;polygon-opacity: 0.4;line-color: #f40202;line-width: 1;line-opacity: 0;}'
							})

 	  		    	el.ellipses1 = layer.createSubLayer({
		  					sql: "SELECT * FROM exomars_landing_sites_ellipses_union WHERE id =1 ",
		  					cartocss: '#exomars_landing_sites_ellipses_union{line-color: #FCDC3B; line-width: 2;line-opacity: 1;}',
		  					interactivity: ['name']
 	  		    	});

 	  		    	el.ellipses2 = layer.createSubLayer({
		  					sql: "SELECT * FROM exomars_landing_sites_ellipses_union WHERE id = 2",
		  					cartocss: '#exomars_landing_sites_ellipses_union{line-color: #FCDC3B; line-width: 2;line-opacity: 1;}',
		  					interactivity: ['name']
 	  		   		});
 	  		    	el.ellipses3 = layer.createSubLayer({
		  					sql: "SELECT * FROM exomars_landing_sites_ellipses_union WHERE id =3",
		  					cartocss: '#exomars_landing_sites_ellipses_corrected{line-color: #FCDC3B; line-width: 2;line-opacity: 1;}',
		  					interactivity: ['name']
 	  		    	});
 	  		    	el.ellipses4 = layer.createSubLayer({
		  					sql: "SELECT * FROM exomars_landing_sites_ellipses_union WHERE  id = 4",
		  					cartocss: '#exomars_landing_sites_ellipses_union{line-color: #FCDC3B; line-width: 2;line-opacity: 1;}',
		  					interactivity: ['name']
 	  		    	});
 	  		    	el.ellipses5 = layer.createSubLayer({
		  					sql: "SELECT * FROM exomars_landing_sites_ellipses_union WHERE  id = 5",
		  					cartocss: '#exomars_landing_sites_ellipses_union{line-color: #00B2EE; line-width: 2;line-opacity: 1;}',
		  					interactivity: ['name']
 	  		    	});
 	  		    	el.ellipses6 = layer.createSubLayer({
		  					sql: "SELECT * FROM exomars_landing_sites_ellipses_union WHERE  id = 6",
		  					cartocss: '#exomars_landing_sites_ellipses_union{line-color: #00B2EE; line-width: 2;line-opacity: 1;}',
		  					interactivity: ['name']
 	  		    	});
 	  		    	el.ellipses7 = layer.createSubLayer({
		  					sql: "SELECT * FROM exomars_landing_sites_ellipses_union WHERE  id = 7",
		  					cartocss: '#exomars_landing_sites_ellipses_union{line-color: #00B2EE; line-width: 2;line-opacity: 1;}',
		  					interactivity: ['name']
 	  		    	});
 	  		    	el.ellipses8 = layer.createSubLayer({
		  					sql: "SELECT * FROM exomars_landing_sites_ellipses_union WHERE  id = 8",
		  					cartocss: '#exomars_landing_sites_ellipses_union{line-color: #00B2EE; line-width: 2;line-opacity: 1;}',
		  					interactivity: ['name']
 	  		    	});


 	  		    	// allows infowindow when click on the points
 	  		    	el.landingSite8.setInteraction(true);
							el.landingSite.setInteraction(true);
 	  		    	el.ellipses1.setInteraction(true);
 	  		    	el.ellipses2.setInteraction(true);
 	  		    	el.ellipses3.setInteraction(true);
 	  		    	el.ellipses4.setInteraction(true);
 	  		    	el.ellipses5.setInteraction(true);
 	  		    	el.ellipses6.setInteraction(true);
 	  		    	el.ellipses7.setInteraction(true);
 	  		    	el.ellipses8.setInteraction(true);



 	  		    	// infowindow appears when hover on the landing sites layer and the ellipses layer
 	  		    	var i = new cdb.geo.ui.Tooltip({
                	layer: layer,
                	template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><h4>{{name}}</h4><p>{{coordinates}}</p></div></div>',
                	width: 200,
                	position: 'top|right'
            		});

            		$('body').append(i.render().el);

 	  		    	var base = el.basemap;
 	  		    	var baseColor = el.basemapColor;
 	  		    	var map = el.map;
		 			// define LayerAction to add or remove the layers
		  			el.LayerActions = {
							// raster data
		  				MOLA: function(){
		  					if (map.hasLayer(base)){
		  						map.removeLayer(base);
		  					}else{
		  						map.addLayer(base)
		  					};
		  					if (map.hasLayer(baseColor)){
		  						map.removeLayer(baseColor);
		  					}else{
		  						map.addLayer(base)
		  					};
		  				},
							MOLA_color: function(){
		  					if (map.hasLayer(baseColor)){
		  						map.removeLayer(baseColor);
		  					}else{
		  						map.addLayer(baseColor)
		  					};
		  					if (map.hasLayer(base)){
		  						map.removeLayer(base);
		  					}else{
		  						map.addLayer(baseColor)
		  					};
						},
						hrscAram: function(){
		  					var hrscAram = el.hrsc[0];
		  					if (map.hasLayer(hrscAram)){
		  						map.removeLayer(hrscAram);
		  					}else{
		  						map.addLayer(hrscAram)
		  					};
		  				},
						hrscHypanis: function(){
		  					var hrscHypanis = el.hrsc[1];
		  					if (map.hasLayer(hrscHypanis)){
		  						map.removeLayer(hrscHypanis);
		  					}else{
		  						map.addLayer(hrscHypanis)
		  					};
		  				},
						hrscOxia: function(){
		  					var hrscOxia = el.hrsc[2];
		  					if (map.hasLayer(hrscOxia)){
		  						map.removeLayer(hrscOxia);
		  					}else{
		  						map.addLayer(hrscOxia)
		  					};
		  				},
						hrscMawrth: function(){
		  					var hrscMawrth = el.hrsc[3];
		  					if (map.hasLayer(hrscMawrth)){
		  						map.removeLayer(hrscMawrth);
		  					}else{
		  						map.addLayer(hrscMawrth)
		  					};
		  				},
		  				HiRISEOxia: function(){
		  					var HiRISEOxia = el.hirise[4];
		  					if (map.hasLayer(HiRISEOxia)){
		  						map.removeLayer(HiRISEOxia);
		  					}else{
		  						map.addLayer(HiRISEOxia)
		  					};
		  				},
		  				HiRISEMawrth: function(){
		  					var HiRISEMawrth = el.hirise[5];
		  					if (map.hasLayer(HiRISEMawrth)){
		  						map.removeLayer(HiRISEMawrth);
		  					}else{
		  						map.addLayer(HiRISEMawrth)
		  					};
		  				},
							// vector/CartoDB data
		  				constraint1 : function() {
      						el.latConstraint.toggle();
      					},
							constraint2 : function() {
								el.geoConstraint.toggle();
	      			},
    					ellipses: function(){
    						el.ellipses.toggle();
    					},
   						ellipses1: function(){
    						el.ellipses1.toggle();
    					},
     					ellipses2: function(){
    						el.ellipses2.toggle();
    					},
    					ellipses3: function(){
    						el.ellipses3.toggle();
    					},
    					ellipses4: function(){
    						el.ellipses4.toggle();
    					},
    					ellipses5: function(){
    						el.ellipses5.toggle();
    					},
    					ellipses6: function(){
    						el.ellipses6.toggle();
    					},
    					ellipses7: function(){
    						el.ellipses7.toggle();
    					},
    					ellipses8: function(){
    						el.ellipses8.toggle();
    					}

					}
		  			// hide layers when load the map element
		  			el.landingSite8.hide();
		  			el.landingSite.hide();
		  			el.latConstraint.hide();
						el.geoConstraint.hide();
		  			el.ellipses1.hide();
		  			el.ellipses2.hide();
		  			el.ellipses3.hide();
		  			el.ellipses4.hide();
		  			el.ellipses5.hide();
						el.ellipses6.hide();
						el.ellipses7.hide();
						el.ellipses8.hide();

						// add cartoDB layers into the map
		  			el.map.addLayer(layer, false);
		  		});

		 		}
	  		// when click the nav buttons, the scroll up to the y = 0 position of the slides_containers

					$("#navButtons").click(function() {
  		 			$('#slides_container #slides').scrollTop(0);
 					});

					// when click the hide/show option it toggles the slides_container
					$("#hide_story a").bind('mouseup',function(){
						if ($('#slides').css('display') != 'none'){
							$('#slides,#navButtons').css({
								display: 'none'
							});
							heightSmall();
							widthSmall();
						} else{
							$('#slides,#navButtons').css({
								display:'block'
							});
							heightNormal();
							widthNormal();
						}
					})

				function heightSmall(){
					$('#slides_container').height('5%')
				};
				function widthSmall(){
					$('#slides_container').width(120)
				}
				function heightNormal(){
					$('#slides_container').height('80%')
				};
				function widthNormal(){
					$('#slides_container').width(350)
				}
 				// buttons inside slide container
  	  		$('.button').click(function() {
  				$('.button').removeClass('selected');
  				$(this).addClass('selected');
  				el.LayerActions[$(this).attr('id')]();
			}); // end of click event

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
        			case 0: slideZero(), console.log(index), $(".progress-bar").css("width","0%"); // introduction
        			break;
        			case 1: slideOne(),console.log(index), $(".progress-bar").css("width","6.66%"); // MOLA
        			break;
        			case 2: slideTwo(),console.log(index),$(".progress-bar").css("width","13.32%"); // LSSWG
        			break;
        			case 3: slideThree(),console.log(index),$(".progress-bar").css("width","19.98%"); // 4 landing sites
        			break;
        			case 4: slideFour(),console.log(index),$(".progress-bar").css("width","26.64%"); // aram dorsum
        			break;
        			case 5: slideFive(),console.log(index),$(".progress-bar").css("width","33.3%"); // HRSC / aram dorsum
        			break
        			case 6: slideSix(),console.log(index),$(".progress-bar").css("width","39.96%"); // aram dorsum
        			break;
        			case 7: slideSeven(),console.log(index),$(".progress-bar").css("width","46.62%"); // Hypanis Vallis
        			break;
        			case 8: slideEight(),console.log(index),$(".progress-bar").css("width","53.28%"); // Hypanis Vallis
        			break;
        			case 9: slideNine(),console.log(index),$(".progress-bar").css("width","66.6%"); // Oxia Planum
        			break;
        			case 10: slideTen(),console.log(index),$(".progress-bar").css("width","73.26%"); // HiRISE / Oxia Planum
        			break;
        			case 11: slideEleven(),console.log(index),$(".progress-bar").css("width","79.92%"); // Oxia Planum
        			break;
        			case 12: slideTwelve(),console.log(index),$(".progress-bar").css("width","86.58%"); // Mawrth Vallis
        			break;
        			case 13: slideThirteen(),console.log(index),$(".progress-bar").css("width","93.24%"); // Mawrth Vallis
        			break;
        			case 14: slideFourteen(),console.log(index),$(".progress-bar").css("width","100%"); // End
        			break;
      			};
   			 }

      		// intro
      		function slideZero() {
      			el.landingSite.hide();
      		};
	  		// MOLA
      		function slideOne() {
    			el.landingSite8.hide();
    			el.torqueLayer.hide();
    			el.torqueLayer.stop();

    		};
    		// LSSWG
    		function slideTwo() {

    			el.landingSite8.show();
    			el.map.addLayer(el.torqueLayer); // adds torque layer to the map
    			el.torqueLayer.setZIndex(1000);
    			el.torqueLayer.show();
    			el.torqueLayer.play();
    			el.landingSite.hide();
    			el.latConstraint.hide();
					el.geoConstraint.hide();
    		};
    		// 4 landing sites
    		function slideThree() {
    			el.landingSite.show();
    			el.latConstraint.show();
					el.geoConstraint.show();
    			el.landingSite8.hide();
    			el.torqueLayer.hide();
    			  el.torqueLayer.stop();
    		};
      	// Aram Dorsum
      	function slideFour() {
     			el.latConstraint.hide();
					el.geoConstraint.hide();
	 				el.ellipses1.hide();
	 				el.ellipses5.hide();

    		};
    		// HRSC / Aram Dorsum
    		function slideFive() {
	 				el.ellipses1.hide();
	 				el.ellipses5.hide();
					el.torqueEllipses.hide();
					el.torqueEllipses1.stop();
    		};
    		// HRSC / Aram Dorsum
    		function slideSix() {
	 				el.ellipses1.show();
	 				el.ellipses5.show();
					el.map.addLayer(el.torqueEllipses); // adds torque layer to the map
					el.torqueEllipses.setZIndex(1000);
					el.torqueEllipses.show();
					console.log(el.torqueEllipses);
					el.torqueEllipses.play();
    		};
      		// Hypanis Vallis
      		function slideSeven() {
	 			el.ellipses1.hide();
	 			el.ellipses2.hide();
	 			el.ellipses5.hide();
	 			el.ellipses6.hide();
				el.torqueEllipses.hide();
				el.torqueEllipses.stop();
    		};
    		// Hypanis Vallis
      		function slideEight() {
	 			el.ellipses2.show();
	 			el.ellipses3.hide();
	 			el.ellipses6.show();
    		};
      		// Oxia Planum
      		function slideNine() {
	 			el.ellipses2.hide();
	 			el.ellipses3.hide();
	 			el.ellipses6.hide();
	 			el.ellipses7.hide();
    		};
    		// Oxia Planum
      		function slideTen() {
	 			el.ellipses2.hide();
	 			el.ellipses3.hide();
	 			el.ellipses6.hide();
	 			el.ellipses7.hide();
    		};
    		// Oxia Planum
      		function slideEleven() {
	 			el.ellipses3.show();
	 			el.ellipses4.hide();
	 				el.ellipses7.show();
    		};
      		// Mawrth Vallis
      		function slideTwelve() {
	 				el.ellipses3.hide();
	 				el.ellipses4.hide();
	 				el.ellipses7.hide();
	 				el.ellipses8.hide();
    		};
    		// Mawrth Vallis
    		function slideThirteen() {
	 				el.ellipses4.show();
	 				el.ellipses8.show();

    		};
      		// End of the story/overview
      	function slideFourteen() {
	 				el.ellipses4.hide();
	 				el.ellipses8.hide();
	 				el.landingSite.show();

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
            				el.map.actions.setView(el.Aram,8),
            				slides.activate(4),
            				emitSlideChange
          				)
        		)
        		.addState(
          			seq.step(5),
          				O.Parallel(
            				el.map.actions.setView(el.Aram,8),
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
            				el.map.actions.setView(el.Hypanis,8),
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
            				el.map.actions.setView(el.Oxia,8),
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
            				el.map.actions.setView(el.Oxia,8),
            				slides.activate(11),
            				emitSlideChange
          				)
        		)
        		.addState(
          			seq.step(12),
          				O.Parallel(
            				el.map.actions.setView(el.Mawrth,8),
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
            				el.map.actions.setView(el.center,3,true),
            				slides.activate(14),
            				emitSlideChange
            			)
          		)
      			el.story.go(0);
      		}
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
