function init () {
  // Begin map 1
  let map1 = L.map('map1').setView([34.0522, -118.2437], 10)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map1)
  let worthUrl = 'https://hayleyma.github.io/finalMap/worth.geojson'
  let popUp = function (feature, layer) {
    layer.bindPopup(feature.properties.Restaurant_Name+'<br>'
                    + feature.properties.Food_Type+'<br>'
                    + feature.properties.Price);
  }
  
  let options = {
    onEachFeature: popUp
   }
   jQuery.getJSON(worthUrl, function (data) {
     L.geoJSON(data, options).addTo(map1)
   })
  // Begin map 2
  let map2 = L.map('map2').setView([37.566, 126.9784], 7)
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png').addTo(map2)
  jQuery.getJSON(worthUrl, function (data) {
    L.geoJSON(data, options).addTo(map2)
  })
  //Map 3
  let map3 = L.map('map3').setView([40.76581, -73.97939], 11)
  L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png').addTo(map3)
  jQuery.getJSON(worthUrl, function (data) {
    L.geoJSON(data, options).addTo(map3)
  })
//Map 4
let map4 = L.map('map4').setView([36.113708, -115.172768], 10)
L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 8,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
}).addTo(map4);
jQuery.getJSON(worthUrl, function (data) {
  L.geoJSON(data, options).addTo(map4)
})
}
window.addEventListener('load', init)
