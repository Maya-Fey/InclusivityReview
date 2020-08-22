let map;
let places;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: -41.291257, lng: 174.776879 },
		zoom: 16
	});
	places = new google.maps.places.PlacesService(map);
	map.addListener("click", onClick);
	
	searchtext = document.getElementById("searchtext");

	searchtext.addEventListener('keyup', function onEvent(e) {
		if(e.keyCode === 13) {
			doSearch()
		}
	});
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

function centerOnLocation()
{
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			map.setCenter(pos);
		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	}
}

function placesQueryFromStr(str)
{
	return {
		name: str,
		radius: '1000', 
		location: map.getCenter()
	};
}

markers = [];
function showNearby(str)
{
	places.nearbySearch(placesQueryFromStr(str), function(e) { 
		markers.forEach(function(marker) {
			marker.visible = false;
		});
		markers = [];
		e.forEach(function(place) {
			markers.push(new google.maps.Marker({
				position: { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }, 
				label: place.name,
				placeId: place.place_id,
				map: map
			}));
		});
		markers.forEach(function(marker) {
			marker.addListener("click", function(loc) {
				doPlaceReq(marker.position, marker.placeId);
			});
		});
	});
}

function doSearch()
{
	showNearby(searchtext.value);
}

function newReview()
{
	let rev = document.createElement("div");
	rev.setAttribute("class", "review");
	let title = document.createElement("h4");
	title.setAttribute("class", "reviewtitle");
	let safety = document.createElement("span");
	safety.setAttribute("class", "score");
	let inclusivity = document.createElement("span");
	inclusivity.setAttribute("class", "score");
	let enjoyability = document.createElement("span");
	enjoyability.setAttribute("class", "score");
	let text = document.createElement("p");
	text.setAttribute("class", "reviewtext");
	rev.appendChild(title);
	rev.appendChild(safety);
	rev.appendChild(inclusivity);
	rev.appendChild(enjoyability);
	rev.appendChild(text);
	document.getElementById("leftinner").appendChild(rev);
}