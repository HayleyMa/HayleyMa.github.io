let map = L.map('baseMap').setView([36, -95], 3.5)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

L.esri.dynamicMapLayer({
  url: 'https://mapservices.nps.gov/arcgis/rest/services/LandResourcesDivisionTractAndBoundaryService/MapServer',
  attribution: 'National Park Service'
}).addTo(map)

L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer', {
  layers: '2',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA'
}).addTo(map)
