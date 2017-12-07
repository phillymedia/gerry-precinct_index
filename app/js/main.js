$(document).ready(function(){


var overlay = require("./turzai_12-s5.json");
var geojsonLayer = new L.GeoJSON(overlay);

var map = L.map('map').setView([39.9526, -75.1652], 15);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}'+ (L.Browser.retina? '@2x': '') +'.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

L.geoJSON(overlay).addTo(map);

// map.scrollWheelZoom.disable();
});
