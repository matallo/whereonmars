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

    el.basemap = new L.tileLayer('http://gislab.esac.esa.int/data/whereonmars/mola-gray/{z}/{x}/{y}.png', {
     attribution: 'GISLAB',
     tms:true,
     maxNativeZoom: 9,
    }).addTo(el.map).setZIndex(0);

    // basemap2 is the map used to create the mini map

    el.basemap2 = new L.tileLayer('http://gislab.esac.esa.int/data/whereonmars/mola-gray/{z}/{x}/{y}.png', {
     attribution: 'GISLAB',
     tms:true,
     maxNativeZoom: 9,
    });

    // create a Mini map of the basemap2 layer
    var rect1 = {color: "#CAFF70", weight: 3, opacity: 0.8}; // rect1 to define rectangle options
    var miniMap = new L.Control.MiniMap(el.basemap2, { toggleDisplay: true, position: 'bottomright',aimingRectOptions : rect1}).addTo(el.map);
    // define color basemap
    el.basemapColor = new L.tileLayer('http://gislab.esac.esa.int/data/whereonmars/mola-color/{z}/{x}/{y}.png', {
     attribution: 'GISLAB',
     maxNativeZoom: 7,
    }).setZIndex(0);


  // call the SQL API from cartodb
  var sql = new cartodb.SQL({ user: 'whereonmars'});
   sql.execute("SELECT * FROM raster_tiles_HRSC")
   .done(function(data){
     el.hrsc = {};
     // loop that read each row of cartodb table and add  hrsc layers
         for (i = 0; i < data.total_rows; i++){
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
        } // finish the  raster_tiles_HRSC loop

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
    }); // finish .done(function()) where all the layers are called

    sql.execute("SELECT * FROM raster_tiles_HIRISE")
    .done(function(data){
      el.hirise = {};
      for (i = 0; i < data.total_rows; i++){
        el.hirise[i] = new L.tileLayer(data.rows[i].url,{
          tms:true,
          opacity: 0.5,
          minZoom: 9,
          unloadInvisibleTiles: true, // If true, all the tiles that are not visible after panning are removed
          updateWhenIdle: true, // If false, new tiles are loaded during panning, otherwise only after it (when true)
          maxNativeZoom: 16
        }).setZIndex(2);
            if(i > 0){
              el.hirise[i].addTo(el.map);
            };
        } // finish the raster_tiles_HIRISE loop

        // attach HIRISE layers to th checkbox defined in the html file
        var checkbox = $('input.raster:checkbox'),
        $HIRISE1 = $('#HIRISE1') // calls the checkbox with the id = landingSite4
        $HIRISE1.change(function(){
                  if ($HIRISE1.is(':checked')){ // if checkbox is selected, then show layer
                    el.map.addLayer(el.hirise[0]);
                  }else{ // else (not selected), hide layer
                    el.map.removeLayer(el.hirise[0]);
                    }
        });
        $HIRISE2 = $('#HIRISE2') // calls the checkbox with the id = landingSite4
        $HIRISE2.change(function(){
                  if ($HIRISE2.is(':checked')){ // if checkbox is selected, then show layer
                    el.map.addLayer(el.hirise[1]);
                  }else{ // else (not selected), hide layer
                    el.map.removeLayer(el.hirise[1]);
                  }
        });
        $HIRISE3 = $('#HIRISE3')
        $HIRISE3.change(function(){
                  if ($HIRISE3.is(':checked')){ // if checkbox is selected, then show layer
                    el.map.addLayer(el.hirise[2]);
                  }else{ // else (not selected), hide layer
                    el.map.removeLayer(el.hirise[2]);
                  }
        });
      });
  // define coordinates of the center of the different Landing Sites
  el.Aram = new L.LatLng(7.87, -11.2);
  el.Hypanis = new L.LatLng(11.8, -45.04);
  el.Oxia = new L.LatLng(18.2, -24.55);
  el.Mawrth = new L.LatLng(22.16, -17.95);
  el.center = new L.LatLng(15,-11);


} // finish initMap function
