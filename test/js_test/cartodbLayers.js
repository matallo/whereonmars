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
        '	 marker-width: 10;',
        '	 marker-line-width: 1;',
        '	 marker-type: ellipse;',
        '	 marker-fill: #f11810;',
        '	 marker-fill-opacity: 1;',
        '	 text-name: [name];',
        '  text-face-name: "DejaVu Sans Book";',
        '  text-size: 9;',
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
        '	 marker-width: 10;',
        '	 marker-line-width: 1;',
        '	 marker-type: ellipse;',
        '	 marker-fill: #f11810;',
        '	 marker-fill-opacity: 1;',
        '	 text-name: [name];',
        '  text-face-name: "DejaVu Sans Book";',
        '  text-size: 9;',
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
        el.elevationContraint = layer.createSubLayer({
          sql: "SELECT * FROM elevation_constraint",
          cartocss: "#elevation_constraint{ polygon-fill: #000000;polygon-opacity: 0.9;line-color: #FFF; line-width: 0.5;line-opacity: 1;}"
        });
        el.geoOkConstraint = layer.createSubLayer({
          sql: "SELECT * FROM geological_age_ok",
          cartocss: "#geological_age_ok{polygon-fill: #229A00;polygon-opacity: 0.7;line-color: #FFF;line-width: 0.5;line-opacity: 1;}"
        });
        el.geoNoOkContraint = layer.createSubLayer({
          sql: "SELECT * FROM geological_age_not_ok",
          cartocss: "#geological_age_not_ok{ polygon-fill: #000000;polygon-opacity: 1;line-color: #FFF;line-width: 0.5;line-opacity: 1;}"
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
  // define LayerAction to add or remove the layers when click buttons that are inside the slide container
      el.LayerActions = {
        hrscAram: function(){
          var hrscAram = el.hrsc[0];
          if (map.hasLayer(hrscAram)){
            map.removeLayer(hrscAram);
          }else{
            map.addLayer(hrscAram)
          };
        },

        HiRISEAram: function(){
          var HiRISEAram = el.hirise[0];
          if (map.hasLayer(HiRISEAram)){
            map.removeLayer(HiRISEAram);
          }else{
            map.addLayer(HiRISEAram)
          };
        }
    }
      // hide all cartodb layers when the map element is loaded
      el.landingSite8.hide();
      el.landingSite.hide();
      el.latConstraint.hide();
      el.elevationContraint.hide();
      el.geoConstraint.hide();
      el.duneConstraint.hide();
      el.nomenclator.hide();
      el.geoOkConstraint.hide();
      el.geoNoOkContraint.hide();
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
