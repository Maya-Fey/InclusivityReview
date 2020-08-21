let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -41.291257, lng: 174.776879 },
    zoom: 16
  });
}