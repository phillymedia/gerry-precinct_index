$(document).ready(function(){


var overlay = require("./turzai_12-s1.1.json");
var geojsonLayer = new L.GeoJSON(overlay);

var map = L.map('map').setView([40.9526, -77.5652], 7);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}'+ (L.Browser.retina? '@2x': '') +'.png', {
    maxZoom: 8,
    minZoom: 7,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);


function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
        layer.bindPopup("<strong>Voting District:</strong> " + feature.properties.NAMELSAD + "<br><strong>Municipality:</strong> " + feature.properties.MCDNAME10 + "<br><strong>County:</strong> " + feature.properties.CONAMELSAD + "<br><hr><strong>2004 Index:</strong> " + feature.properties.turzai_index_link_INDEX04+ "<br><strong>2008 Index:</strong> " + feature.properties.turzai_index_link_INDEX08);
}

L.geoJson(overlay, {
  onEachFeature: onEachFeature,
  style: function (feature) {
        if(feature.properties.turzai_index_link_INDEX08 > 0 ){
          return {color: '#f06449', "weight": 1 };
        } else {
          return { color: '#083d77', weight: 1 };
        }
      }
}).addTo(map);
// map.scrollWheelZoom.disable();


});
