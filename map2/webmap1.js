let map = L.map('baseMap').setView([22.39, 114.10], 8)
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg').addTo(map)
let marker = L.marker([22, 114]).addTo(map)
let polygon = L.polygon([
  [22.532, 114.453],
  [22.511, 114.013],
  [22.1709, 113.8737],
  [22.181, 114.4585]
]).addTo(map);
let line = L.polyline([
    [20.145347, 106.189696],
    [22.844540, 112.735081],
    [23.369994, 114.492096]
], {color: 'purple'}).addTo(map);
marker.bindPopup('Area of interest')
polygon.bindPopup('Hong Kong')
