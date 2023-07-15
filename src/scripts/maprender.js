window.onload = execute;

function init(lat, lon) {

  const place = [lat, lon];

  var map = L.map('js-map').setView(place, 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  var marker = L.marker(place).addTo(map);
  marker.bindPopup("<b>You!</b>").openPopup();

  
  map.on('click', onMapClick);

}

function onMapClick(e){
    
  document.getElementById("lat").vlaue = e.latlng.lat;

  console.log( typeof(document.getElementById("lat").vlaue));

  console.log(document.getElementById("lat").vlaue);

  document.getElementById("lng").vlaue = e.latlng.lng.toString();
  console.log(document.getElementById("lng").vlaue);


}

async function execute() {
  await navigator.geolocation.getCurrentPosition( (position) => { init(position.coords.latitude, position.coords.longitude); }, (err) => { console.log(error); });
  //document.getElementById("execBtn").className += " hidden";
  //document.getElementById("execBtn").className.match(/(?:^|\s)MyClass(?!\S)/)
}
