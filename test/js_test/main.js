var app =  {};
	// 2. define ExoMars object. The value of the property is a function.
	app.exomars = (function(w,d,$,O){
			// define object that have all the elements and layers
			var el = {
				map: null,
				basemap: null,
				basemap2: null,
				basemapColor: null,
				torqueLayer: null,
				torqueEllipses1: null,
				torqueEllipses2: null,
				story: null,
				hirise: null,
				hrsc: null,
				Aram: null,
				Hypanis:null,
				Oxia: null,
				Mawrth: null,
				center: null,
				landingSite: null,
				landingSite8: null,
				latConstraint: null,
				geoConstraint: null,
				duneConstraint: null,
				nomenclator: null,
				ellipses1: null,
				ellipses2: null,
				ellipses3: null,
				ellipses4: null,
				ellipses5: null,
				ellipses6: null,
				ellipses7: null,
				ellipses8: null,
				dashellipses1: null,
				dashellipses2: null,
				dashellipses3: null,
				dashellipses4: null,
				dashellipses5: null,
				dashellipses6: null,
				dashellipses7: null,
				dashellipses8: null,
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
  				var miniMap = new L.Control.MiniMap(el.basemap2, { toggleDisplay: true, position: 'bottomright' }).addTo(el.map);
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

      				} // finish the loop

							// in the next block the raster layers called with cartodb.js
							// are attach to the checkbox menu in the html file
							var checkbox = $('input.raster:checkbox'),
							$MOLA1 = $('#MOLA1') // calls the checkbox with the id = landingSite4
							$MOLA1.change(function(){
									if ($MOLA1.is(':checked')){ // if checkbox is selected, then show layer
										el.map.addLayer(el.basemap);
									}else{ // else (not selected), hide layer
										el.map.removeLayer(el.basemap);
									};
							});
							$MOLA2 = $('#MOLA2') // calls the checkbox with the id = landingSite4
							$MOLA2.change(function(){
										if ($MOLA2.is(':checked')){ // if checkbox is selected, then show layer
											el.map.addLayer(el.basemapColor);
										}else{ // else (not selected), hide layer
											el.map.removeLayer(el.basemapColor);
										}
									});
							$HRSC1 = $('#HRSC1') // calls the checkbox with the id = landingSite4
							$HRSC1.change(function(){
												if ($HRSC1.is(':checked')){ // if checkbox is selected, then show layer
													el.map.addLayer(el.hrsc[0]);
												}else{ // else (not selected), hide layer
													el.map.removeLayer(el.hrsc[0]);
												}
											});
							$HRSC2 = $('#HRSC2') // calls the checkbox with the id = landingSite4
							$HRSC2.change(function(){
												if ($HRSC2.is(':checked')){ // if checkbox is selected, then show layer
													el.map.addLayer(el.hrsc[1]);
												}else{ // else (not selected), hide layer
													el.map.removeLayer(el.hrsc[1]);
												}
											});
							$HRSC3 = $('#HRSC3') // calls the checkbox with the id = landingSite4
							$HRSC3.change(function(){
												if ($HRSC3.is(':checked')){ // if checkbox is selected, then show layer
													el.map.addLayer(el.hrsc[2]);
												}else{ // else (not selected), hide layer
													el.map.removeLayer(el.hrsc[2]);
												}
											});
							$HRSC4 = $('#HRSC4') // calls the checkbox with the id = landingSite4
							$HRSC4.change(function(){
												if ($HRSC4.is(':checked')){ // if checkbox is selected, then show layer
													el.map.addLayer(el.hrsc[3]);
												}else{ // else (not selected), hide layer
													el.map.removeLayer(el.hrsc[3]);
												}
											});
							// attach HIRISE layers to th checkbox defined in the html file
							$HIRISE1 = $('#HIRISE1') // calls the checkbox with the id = landingSite4
							$HIRISE1.change(function(){
												if ($HIRISE1.is(':checked')){ // if checkbox is selected, then show layer
													el.map.addLayer(el.hirise[4]);
												}else{ // else (not selected), hide layer
													el.map.removeLayer(el.hirise[4]);
													}
												});
							$HIRISE2 = $('#HIRISE2') // calls the checkbox with the id = landingSite4
							$HIRISE2.change(function(){
												if ($HIRISE2.is(':checked')){ // if checkbox is selected, then show layer
													el.map.addLayer(el.hirise[5]);
												}else{ // else (not selected), hide layer
													el.map.removeLayer(el.hirise[5]);
												}
											});

      		}); // finish .done(function()) where all the layers are called

				// define coordinates of the center of the different Landing Sites
				el.Aram = new L.LatLng(7.87, -11.2);
				el.Hypanis = new L.LatLng(11.8, -45.04);
				el.Oxia = new L.LatLng(18.2, -24.55);
				el.Mawrth = new L.LatLng(22.16, -17.95);
				el.center = new L.LatLng(15,-11);


			} // finish initMap function



			// call data from cartoDB
	  		var cartodbData = function(){
				var layerURL = 'http://whereonmars.cartodb.com/api/v2/viz/03ec7c7c-bc6a-11e4-b600-0e4fddd5de28/viz.json';
				// create cartoDB layer from vizjson url
				cartodb.createLayer(el.map, layerURL)
				.on('done', function(layer) {
		  			layer.setZIndex(100); // all cartoDB layer will be above all the baselayers
		  			var sublayer = layer.getSubLayer(0);
						// we define the torque layer for the landing ellipses in Aram Dorsum
						cartodb.createLayer(el.map,{
						type: "torque",
						options: {
							user_name: "whereonmars",
							table_name: "ls_ellipses_2018_aram",
							cartocss:
							'Map { '
											+'  -torque-frame-count:512; '
											+'  -torque-animation-duration:15; -torque-time-attribute:"cartodb_id"; '
											+'  -torque-aggregation-function:"count(cartodb_id)"; '
											+' -torque-resolution:2; -torque-data-aggregation:linear} '
							+'#ls_ellipses_2018_aram{ '
											+'  comp-op: xor; marker-fill-opacity: 1; '

											+'  marker-line-opacity: 1; marker-type: ellipse; '
											+'  marker-width: 3.5; marker-fill: #f11810; }'
										}
						}).done(function(layer){

							el.torqueEllipses1 = layer;
					});
					// we define the torque layer for the landing ellipses in Aram Dorsum
					cartodb.createLayer(el.map,{
					type: "torque",
					options: {
						user_name: "whereonmars",
						table_name: "ls_ellipses_2020_aram",
						cartocss:
						'Map { '
										+'  -torque-frame-count:512; '
										+'  -torque-animation-duration:15; -torque-time-attribute:"cartodb_id"; '
										+'  -torque-aggregation-function:"count(cartodb_id)"; '
										+' -torque-resolution:2; -torque-data-aggregation:linear} '
						+'#ls_ellipses_2018_aram{ '
										+'  comp-op: xor; marker-fill-opacity: 1; '
										+'  marker-line-opacity: 1; marker-type: ellipse; '
										+'  marker-width: 3.5; marker-fill: #f11810; }'
									}
					}).done(function(layer){

						el.torqueEllipses2 = layer;
					});

					// Define the styles for the layer and the labels. It will be used to
					//  define the cartocss style for the landing sites. style1 define the
					//cartocss of the layer landingSite and style2 define the cartocss
					// of the layer landingSite8
					var style1 = [
						'#exomars_landing_sites_four{',
					  	'	 marker-placement: point;',

							'	 marker-width: 15;',

							'	 marker-line-width: 1;',
							'	 marker-type: ellipse;',
							'	 marker-fill: #f11810;',
							'	 marker-fill-opacity: 1;',
							'	 text-name: [name];',
							'  text-face-name: "DejaVu Sans Book";',
							'  text-size: 10;',
							'  text-label-position-tolerance: 0;',
							'  text-fill: #FFF;',
							'  text-halo-fill: #000;',
							'  text-halo-radius: 8;',
							'  text-dx: 20;',
							'  text-allow-overlap: true;',
							'  text-placement: point;',
							'	[cartodb_id = 3]{',
									'  text-dx: -20;',
								'}',
								'	[cartodb_id = 6]{',
										'  text-dx: -20;',
									'}',
						'}'

					].join('\n');


					var style2 = [
						'#exomars_landing_sites_eight{',
					  	'	 marker-placement: point;',
							'	 marker-width: 15;',
							'	 marker-line-width: 1;',
							'	 marker-type: ellipse;',
							'	 marker-fill: #f11810;',
							'	 marker-fill-opacity: 1;',
							'	 text-name: [name];',
							'  text-face-name: "DejaVu Sans Book";',
							'  text-size: 10;',
							'  text-fill: #FFF;',
							'  text-halo-fill: #000;',
							'  text-halo-radius: 8;',
							'  text-dx: 20;',
							'  text-allow-overlap: false;',
							'  text-placement: point;',
							'	 text-placement-type: simple;',
							'	[cartodb_id = 1]{',
									'  text-dy: -0.3;',
									'  text-dx: -20;',
								'}',
								'	[cartodb_id = 2]{',
										'  text-dy: -6;',
										'  text-dx: 12;',
									'}',
							'	[cartodb_id = 3]{',
									'  text-dy: -0.3;',
									'  text-dx: 15;',
								'}',
								'	[cartodb_id = 4]{',
										'  text-dx: -20;',
									'}',
								'	[cartodb_id = 5]{',
											'  text-dy: 10;',
											'  text-dx: 10;',
										'}',
								'	[cartodb_id = 6]{',
										'  text-dx: -20;',
									'}',
									'	[cartodb_id = 9]{',
											'  text-dx: -20;',
										'}',
						'}'
					].join('\n');

					var style3 = [
						'#mars_nomenclature_webmercator_ls{',
							'	 marker-placement: point;',
							'	 marker-line-color: #31a354;',
							'	 marker-width: 1;',
							'	 marker-line-opacity: 1;',
							'	 marker-line-width: 3;',
							'	 marker-type: ellipse;',
							'	 marker-fill: #fff;',
							'	 marker-fill-opacity: 0;',
							'	 text-name: [name];',
							'  text-face-name: "DejaVu Sans Book";',
							'  text-size: 10;',
							'  text-label-position-tolerance: 0;',
							'  text-fill: #FFF;',
							'  text-halo-fill: #000;',
							'  text-halo-radius: 1;',
							'  text-dx: 0;',
							'  text-allow-overlap: true;',
							'  text-placement: point;',
							'	[cartodb_id = 84]{',
									'  text-dy: 10;',

								'}',
								'	[cartodb_id = 62]{',
										'  text-dy: -5;',


									'}',
							'}'


						].join('\n');

							el.landingSite8 = layer.createSubLayer({
								sql: "SELECT * FROM exomars_landing_sites_eight",
								cartocss: style2,
								interactivity: ['name','coordinates']
							});

		  	   		el.landingSite = layer.createSubLayer({
		  	   			sql: "SELECT * FROM exomars_landing_sites_four",
		  					cartocss: style1,
		  					interactivity: ['name','coordinates']
		  	   		});

		  	   		el.latConstraint = layer.createSubLayer({
		  					sql: "SELECT * FROM lat_constraints",
		  					cartocss: '#lat_constraints{polygon-fill: #000000;polygon-opacity: 0.4;line-color: #f40202;line-width: 1;line-opacity: 1;}',
		  				});
							el.geoConstraint = layer.createSubLayer({
									sql: "SELECT * FROM restricted_geology_latitude_webmercator",
									cartocss: '#restricted_geology_latitude_webmercator{polygon-fill:  #5CA2D1;polygon-opacity: 0.4;line-color: #f40202;line-width: 1;line-opacity: 0;}'
							});
							el.duneConstraint = layer.createSubLayer({
								sql: "SELECT * FROM dune_field_usgs",
								cartocss: '#dune_field_usgs{polygon-fill: #c3834c;polygon-opacity: 0.7;line-color: #F11810;line-width: 1;line-opacity: 0;}'
							});
							el.nomenclator = layer.createSubLayer({
								sql: "SELECT * FROM mars_nomenclature_webmercator_ls",
								cartocss:  style3
							});
							el.dashellipses1 = layer.createSubLayer({
								sql: "SELECT * FROM exomars_landing_sites_ellipses_2018 WHERE id IN (1,6)",
								cartocss: "#exomars_landing_sites_ellipses_2018{line-color: #FCDC3B; line-width: 2;line-opacity: 0.3; line-dasharray: 10, 4;}"
							});
							el.dashellipses2 = layer.createSubLayer({
								sql: "SELECT * FROM exomars_landing_sites_ellipses_2018 WHERE id IN (2,7)",
								cartocss: "#exomars_landing_sites_ellipses_2018{line-color: #FCDC3B; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
							});
							el.dashellipses3 = layer.createSubLayer({
								sql: "SELECT * FROM exomars_landing_sites_ellipses_2018 WHERE id IN (4,8)",
								cartocss: "#exomars_landing_sites_ellipses_2018{line-color: #FCDC3B; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
							});
							el.dashellipses4 = layer.createSubLayer({
								sql: "SELECT * FROM exomars_landing_sites_ellipses_2018 WHERE id IN (5,9)",
								cartocss: "#exomars_landing_sites_ellipses_2018{line-color: #FCDC3B; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
							});
							el.dashellipses5 = layer.createSubLayer({
								sql: "SELECT * FROM exomars_landing_sites_ellipses_2020 WHERE id IN (10,15,19,23)",
								cartocss: "#exomars_landing_sites_ellipses_2020{line-color: #00B2EE; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
							});
							el.dashellipses6 = layer.createSubLayer({
								sql: "SELECT * FROM exomars_landing_sites_ellipses_2020 WHERE id IN (11,16,20,24)",
								cartocss: "#exomars_landing_sites_ellipses_2020{line-color: #00B2EE; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
							});
							el.dashellipses7 = layer.createSubLayer({
								sql: "SELECT * FROM exomars_landing_sites_ellipses_2020 WHERE id IN (13,17,21,25)",
								cartocss: "#exomars_landing_sites_ellipses_2020{line-color: #00B2EE; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
							});
							el.dashellipses8 = layer.createSubLayer({
								sql: "SELECT * FROM exomars_landing_sites_ellipses_2020 WHERE id IN (14,18,22,26)",
								cartocss: "#exomars_landing_sites_ellipses_2020{line-color: #00B2EE; line-width: 2;line-opacity:  0.3; line-dasharray: 10, 4;}"
							});

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

							/*
							// infowindow appears when hover on the landing sites layer and the ellipses layer
							var i = new cdb.geo.ui.Tooltip({
								layer: layer,
								template: '<div class="cartodb-tooltip-content-wrapper"> <div class="cartodb-tooltip-content"><h4>{{name}}</h4><p>{{coordinates}}</p></div></div>',
								width: 200,
								position: 'top|right'
							});

							$('body').append(i.render().el);
							*/

							// attach layers to the checkbox
							//activate checkboxes for all layer that have the name LS
							var checkbox = $('input.vector:checkbox'),
							$landingSite4 = $('#landingSite4') // calls the checkbox with the id = landingSite4
								$landingSite4.change(function(){
									if ($landingSite4.is(':checked')){ // if checkbox is selected, then show layer
										el.landingSite.show();
									}else{ // else (not selected), hide layer
										el.landingSite.hide();
									}
								});
							$landingSite8 = $('#landingSiteEight') // calls the checkbox with the id = landingSite4
								$landingSite8.change(function(){
									if ($landingSite8.is(':checked')){ // if checkbox is selected, then show layer
										el.landingSite8.show();
									}else{ // else (not selected), hide layer
										el.landingSite8.hide();
									}
								});
							$ellipsesAram1 = $('#ellipsesAram1')
							$ellipsesAram1.change(function(){
								if ($ellipsesAram1.is(':checked')){
									el.ellipses1.show();
									el.dashellipses1.show();
								}else{
									el.ellipses1.hide();
									el.dashellipses1.hide();
								}
							});
							$ellipsesHypanis1 = $('#ellipsesHypanis1')
							$ellipsesHypanis1.change(function(){
								if ($ellipsesHypanis1.is(':checked')){
									el.ellipses2.show();
									el.dashellipses2.show();
								}else{
									el.ellipses2.hide();
									el.dashellipses2.hide();
								}
							});
							$ellipsesOxia1 = $('#ellipsesOxia1')
							$ellipsesOxia1.change(function(){
								if ($ellipsesOxia1.is(':checked')){
									el.ellipses3.show();
									el.dashellipses3.show();
								}else{
									el.ellipses3.hide();
									el.dashellipses3.hide();
								}
							});
							$ellipsesMawrth1 = $('#ellipsesMawrth1')
							$ellipsesMawrth1.change(function(){
								if ($ellipsesMawrth1 .is(':checked')){
									el.ellipses4.show();
									el.dashellipses4.show();
								}else{
									el.ellipses4.hide();
									el.dashellipses4.hide();
								}
							});
							$ellipsesAram2 = $('#ellipsesAram2')
							$ellipsesAram2.change(function(){
								if ($ellipsesAram2.is(':checked')){
									el.ellipses5.show();
									el.dashellipses5.show();
								}else{
									el.ellipses5.hide();
									el.dashellipses5.hide();
								}
							});
							$ellipsesHypanis2 = $('#ellipsesHypanis2')
							$ellipsesHypanis2.change(function(){
								if ($ellipsesHypanis2.is(':checked')){
									el.ellipses6.show();
									el.dashellipses6.show();
								}else{
									el.ellipses6.hide();
									el.dashellipses6.hide();
								}
							});
							$ellipsesOxia2 = $('#ellipsesOxia2')
							$ellipsesOxia2.change(function(){
								if ($ellipsesOxia2.is(':checked')){
									el.ellipses7.show();
									el.dashellipses7.show();
								}else{
									el.ellipses7.hide();
									el.dashellipses7.hide();
								}
							});
							$ellipsesMawrth2 = $('#ellipsesMawrth2')
							$ellipsesMawrth2.change(function(){
								if ($ellipsesMawrth2 .is(':checked')){
									el.ellipses8.show();
									el.dashellipses8.show();
								}else{
									el.ellipses8.hide();
									el.dashellipses8.hide();
								}
							});
							$constraint1 = $('#constraint1')
							$constraint1.change(function(){
								if ($constraint1.is(':checked')){
									el.latConstraint.show();
								}else{
									el.latConstraint.hide();
								}
							});
							$constraint2 = $('#constraint2')
							$constraint2.change(function(){
								if ($constraint2.is(':checked')){
									el.geoConstraint.show();
								}else{
									el.geoConstraint.hide();
								}
							});



 	  		    	var map = el.map;
		 				// define LayerAction to add or remove the layers
		  			el.LayerActions = {
							hrscAram: function(){
								var hrscAram = el.hrsc[0];
								if (map.hasLayer(hrscAram)){
									map.removeLayer(hrscAram);
								}else{
									map.addLayer(hrscAram)
								};
							},

		  				HiRISEOxia: function(){
		  					var HiRISEOxia = el.hirise[4];
		  					if (map.hasLayer(HiRISEOxia)){
		  						map.removeLayer(HiRISEOxia);
		  					}else{
		  						map.addLayer(HiRISEOxia)
		  					};
		  				}
					}
		  			// hide layers when load the map element
		  			el.landingSite8.hide();
		  			el.landingSite.hide();
		  			el.latConstraint.hide();
						el.geoConstraint.hide();
						el.duneConstraint.hide();
						el.nomenclator.hide();
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


						// add all cartoDB subLayers into the map
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
							}),
							$("#hide_story").css({
								align : "center",
								"margin-top" : 10,
								"margin-left": -5
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

				// functions to resize the slide_container
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
				// functions to resize the menu with the layers
				function heightSmallMenu(){
					$("#layerMenu").height('5%')
				};
				function widthSmallMenu(){
					$("#layerMenu").width(110)
				};
				function heightNormalMenu(){
					$("#layerMenu").height('50%')
				};
				function widthNormalMenu(){
					$("#layerMenu").width(300)
				};


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
        			case 6: slideSix(),console.log(index),$(".progress-bar").css("width","39.96%"); //  landing site aram dorsum 2018
        			break;
							case 7: slideSeven(),console.log(index),$(".progress-bar").css("width","39.96%"); //  landing site aram dorsum 2020
        			break;
        			case 8: slideEight(),console.log(index),$(".progress-bar").css("width","46.62%"); // Hypanis Vallis
        			break;
        			case 9: slideNine(),console.log(index),$(".progress-bar").css("width","53.28%"); // Hypanis Vallis
        			break;
        			case 10: slideTen(),console.log(index),$(".progress-bar").css("width","66.6%"); // Oxia Planum
        			break;
        			case 11: slideEleven(),console.log(index),$(".progress-bar").css("width","73.26%"); // HiRISE / Oxia Planum
        			break;
        			case 12: slideTwelve(),console.log(index),$(".progress-bar").css("width","79.92%"); // Oxia Planum
        			break;
        			case 13: slideThirteen(),console.log(index),$(".progress-bar").css("width","86.58%"); // Mawrth Vallis
        			break;
        			case 14: slideFourteen(),console.log(index),$(".progress-bar").css("width","93.24%"); // Mawrth Vallis
        			break;
        			case 15: slideFifteen(),console.log(index),$(".progress-bar").css("width","100%"); // End
        			break;
      			};
   			 }

      		// intro
      	function slideZero() {
      		el.landingSite.hide();
					el.dashellipses4.hide();

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
	 				el.ellipses4.hide();
	 				el.ellipses7.hide();
	 				el.ellipses8.hide();
					el.dashellipses3.hide();
					el.dashellipses7.hide();
					el.dashellipses4.hide();
					el.dashellipses8.hide();
    		};
    		// Mawrth Vallis landing sites
    		function slideFourteen() {
	 				el.ellipses4.show();
	 				el.ellipses8.show();
					el.dashellipses4.show();
					el.dashellipses8.show();
					el.landingSite.hide();

    		};
      		// End of the story/overview
      	function slideFifteen() {
	 				el.ellipses4.hide();
	 				el.ellipses8.hide();
	 				el.landingSite.show();
					el.dashellipses4.hide();
					el.dashellipses8.hide();
					el.nomenclator.hide();

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
            				el.map.actions.setView(el.Oxia,8),
            				slides.activate(11),
            				emitSlideChange
          				)
        		)
        		.addState(
          			seq.step(12),
          				O.Parallel(
            				el.map.actions.setView(el.Oxia,8),
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
            			el.map.actions.setView(el.Mawrth,8),
            			slides.activate(14),
            			emitSlideChange
          				)
        		)
        		.addState(
          			seq.step(15),
          				O.Parallel(
            				el.map.actions.setView(el.center,3,true),
            				slides.activate(15),
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
