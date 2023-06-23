window.onload = init;   

function init(){
  const map = new ol.Map({
    view: new ol.View({
      center: [-11804502.080502147, 3332763.301556854],
      zoom: 17
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'js-map'
  }) 

  map.on('click', function(e){
    console.log(e.coordinate);
  })
}
