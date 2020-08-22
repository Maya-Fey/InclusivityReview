let map;
let places_API = "AIzaSyDa7-5gJY3YYxgPWY7YtSCyKOBucVJpEbw";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -41.291257, lng: 174.776879 },
    zoom: 16
  });
}

