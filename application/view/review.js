let map;
let places;
var currPlace;
var aveInclusivity;
var aveEnjoyability;
var aveSafety;
var location;


function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: -41.291257, lng: 174.776879 },
		zoom: 16
	});
	places = new google.maps.places.PlacesService(map);
	document.getElementById("placeLabel").innerHTML = currPlace.name;
}

function backButtonClick() {
	alert("Back Button Clicked")
	// TODO : Return to main screen
}

function setAverageReviews() {
	alert("This will be a review")
}

function reviewOnClick() {
	console.log(currPlace.name)
}

function reportOnClick() {
	let reported = confirm("Are You Sure?")
	console.log(reported)
	if (reported) {
		alert("place.name is reported.")
	}
}

function findGetParameter(parameterName) {
	var result = null,
		tmp = [];
	location.search
		.substr(1)
		.split("&")
		.forEach(function (item) {
			tmp = item.split("=");
			if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
		});
	return result;
}

function doPlaceReq(placeID)
{
	req = { "placeId": placeID };
	places.getDetails(req, function(place, status) {
		if(status == google.maps.places.PlacesServiceStatus.OK) {
			currPlace = place;
		}
	});
}

// doPlaceReq(findGetParameter(placeID))