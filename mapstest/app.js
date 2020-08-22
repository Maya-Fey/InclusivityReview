let map;
let places;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -41.291257, lng: 174.776879 },
    zoom: 16
  });
  places = new google.maps.places.PlacesService(map);
  map.addListener("click", onClick);
}

function onClick(event) {
	if(event.placeId != undefined) {
		doPlaceReq(event.latLng, event.placeId);
	}
}

function doPlaceReq(lonLat, placeID)
{
	req = { "placeId": placeID };
	places.getDetails(req, function(place, status) { 
		if(status == google.maps.places.PlacesServiceStatus.OK) {
			onPlaceSelected(lonLat, place);
		}
	});
}

function onPlaceSelected(lonLat, place)
{
	alert(place.name);
}

