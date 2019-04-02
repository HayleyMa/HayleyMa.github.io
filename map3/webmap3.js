let map = L.map('baseMap').setView([36, -95], 3.5)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  L.geoJSON(data).addTo(stateMap)
})
L.geoJSON(data, { style: { color: 'green' } }).addTo(stateMap)
let stateStyle = {
  color: 'green',
  weight: 1,
  fillOpacity: 0.2
}
