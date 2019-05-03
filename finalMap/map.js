function init () {
  // Begin map 1
  let map1 = L.map('map1').setView([32.18, -99.14], 4)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // attribution: 'Thunderforest'
  }).addTo(map1)
  // let worthUrl = "worth.geojson"
  // // L.geoJSON('worth.geojson').addTo(map);
  // jQuery.getJSON(worthUrl, function (data) {
  // L.geoJSON(data).addTo(map1)
  // })
  //L.geoJSON(data, { style: { color: 'green' } }).addTo(map1)
  function popUp(feature, layer) {
    layer.bindPopup(feature.properties.Restaurant_Name);
  }
  var geojsonLayer = new L.GeoJSON.AJAX("worth_0.geojson", {onEachFeature:popUp});

  //var geojsonLayer = new L.GeoJSON.AJAX("./worth.geojson");
  geojsonLayer.addTo(map1);

  // let stateStyle = function (data) {
  //   let age = feature.properties.MED_AGE // get the current state's Median Age attribute
  //   let stateColor = 'olive' // let the initial color be a darker green
  //   if ( age < 38 ) { stateColor = 'green' } // if the state's median age is less than the average, color it a lighter green
  //   return {
  //     color: stateColor, //use the color variable above for the value
  //     weight: 1,
  //     fillOpacity: 0.2
  //   }
  // }



  let city = L.marker([30, -90]).addTo(map1)
  let area = L.polygon([
    [31, -88],
    [35, -88],
    [32, -82]
  ]).addTo(map1)
  area.bindPopup('A polygon')
  city.bindPopup('A marker')

  // Begin map 2
  let map2 = L.map('map2').setView([37, -95], 4)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map2)
  L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    attribution: 'NOAA, Iowa State University'
  }).addTo(map2)
  L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/wwa.cgi', {
    layers: 'warnings_c',
    format: 'image/png',
    transparent: true,
    attribution: 'NOAA, Iowa State University'
  }).addTo(map2)
}
window.addEventListener('load', init)
