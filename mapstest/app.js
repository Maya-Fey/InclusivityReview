let map;
let places_API = "AIzaSyDa7-5gJY3YYxgPWY7YtSCyKOBucVJpEbw";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -41.291257, lng: 174.776879 },
    zoom: 16
  });
  map.addListener("click", onClick);
}

function onClick(event) {
	if(event.placeId != undefined) {
		onPlaceSelected(event.latLng, event.placeId);
	}
}

function onPlaceSelected(lonLat, placeID)
{
	alert("Selected " + placeID);
}

