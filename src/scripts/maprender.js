
//import { useGeographic } from '../../lib/v7.4.0-package/proj.js'
ol.proj.useGeographic();
//window.onload = init;   

function init(lat, long){

  const place = [long, lat];

  const map = new ol.Map({
    view: new ol.View({
      center: place,
      zoom: 17
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'js-map'
  }) 

  map.on('click', function(data){
    console.log(data);
    console.log(data.coordinate[0]);
  })
}

function execute(){
  navigator.geolocation.getCurrentPosition( (position) => { init(position.coords.latitude, position.coords.longitude); }, (err) => {console.log(error);});
  document.getElementById("execBtn").className += " hidden";
  //document.getElementById("execBtn").className.match(/(?:^|\s)MyClass(?!\S)/)
}
