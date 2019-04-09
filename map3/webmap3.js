let map = L.map('baseMap').setView([36, -95], 3.5)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
let grayBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(map)
let streetsBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(map)
let basemaps = {
  'Streets': streetsBasemap,
  'Gray canvas': grayBasemap
}
L.control.layers(basemaps).addTo(map)
let statesLayer = L.layerGroup().addTo(map)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
let stateStyle = function (feature) {
  let population = feature.properties.POP2010 // get the current state's 2010 population attribute
  let stateColor = '#131ED0' // let the initial color be blue
  let stateOpacity = 0.6
  if ( population < 6390183.943 ) {
    stateColor = '#F75EF2', // if the state's population is less than the average, color it pink
    stateOpacity = 0.3
  }
  return {
    opacity: 1, //line darkness
    color: stateColor, //use the color variable above for the value
    weight: 1,
    fillOpacity: stateOpacity
  }
}
let onEachFeature = function (feature, layer) {
  let name = feature.properties.STATE_NAME
  let white = feature.properties.WHITE
  let black = feature.properties.BLACK
  let asian = feature.properties.ASIAN
  let hispanic = feature.properties.HISPANIC
  let totalPop = feature.properties.POP2010
  layer.bindPopup('2010 Race/Ethnicity Populations of ' + name
  + ': <br><br>White: ' + white
  + '<br>Black: ' + black
  + '<br>Asian: ' + asian
  + '<br>Hispanic: ' + hispanic
  + '<br><br>Total: ' + totalPop)
  statesLayer.addLayer(layer)
}
let layers = {
  'Populations': statesLayer
}
L.control.layers(basemaps, layers).addTo(map)
let stateGeojsonOptions = {
  style: stateStyle,
  onEachFeature: onEachFeature
 }

jQuery.getJSON(stateDemographicsUrl, function (data) {
  L.geoJSON(data, stateGeojsonOptions).addTo(map)
})
