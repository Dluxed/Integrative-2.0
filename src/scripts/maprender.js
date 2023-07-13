window.onload = execute;

function init(lat, lon) {

  const place = [lat, lon];

  var map = L.map('js-map').setView(place, 13);

  /*
    map.on('click', function(data){
    console.log(data);
    console.log(data.coordinate[0]);
  })
  */

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  var marker = L.marker(place).addTo(map);

  marker.bindPopup("<b>Wenas!</b>").openPopup();
}

async function execute() {
  await navigator.geolocation.getCurrentPosition((position) => { init(position.coords.latitude, position.coords.longitude); }, (err) => { console.log(error); });
  //document.getElementById("execBtn").className += " hidden";
  //document.getElementById("execBtn").className.match(/(?:^|\s)MyClass(?!\S)/)
}
