let map;
let places;
var currPlace;
var currPlaceID;
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
	reviewPlaceReq(findGetParameter("placeID"));


}

function backButtonClick() {
	window.location = "index.html"
}

function reviewOnClick() {
	reviewData = {
		username: "claire",
		placeID: currPlaceID,
		safety: parseFloat(document.getElementById("inclusivityRating").value),
		inclusivity: parseFloat(document.getElementById("safetyRating").value),
		enjoyability: parseFloat(document.getElementById("enjoyabilityRating").value),
		reviewtext: document.getElementById("reviewBox").value
	};
	addReview(reviewData)
}

function reportOnClick() {
	let reported = confirm("Are You Sure?")
	console.log(reported)
	if (reported) {
		alert(currPlace.name + " is reported.");
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

function reviewPlaceReq(placeID)
{
	req = { "placeId": placeID };
	places.getDetails(req, function(place, status) {
		if(status == google.maps.places.PlacesServiceStatus.OK) {
			currPlace = place;
			currPlaceID = placeID;
			photo = place.photos;
			console.log(photo)
			document.getElementById("placeLabel").innerHTML = place.name;
			document.getElementById("placeImage").src = photo[0].getUrl();
			reviews = getReviewsByPlace(placeID).then(function(vals) {
			});
			// FIXME Get actual reviews
			// showReviewRatings(getAverages(reviews));
			showReviewRatings({
				"safety": 5.0,
				"inclusivity": 2.5,
				"enjoyability": 2.0 });
		}
	});


}

function showReviewRatings(aveReviews) {
	for(let i = 0; i < aveReviews["safety"]; i++)
	{
	}
	document.getElementById("inclusivityRating").innerHTML;
}

