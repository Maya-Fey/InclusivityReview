var place;
var aveInclusivity;
var aveEnjoyability;
var aveSafety;

function backButtonClick() {
	alert("Back Button Clicked")
	// TODO : Return to main screen
}

function setAverageReviews() {
	alert("This will be a review")
}

function reviewOnClick() {
	alert("This will be a review")
}

function reportOnClick() {
	let reported = confirm("Are You Sure?")
	console.log(reported)
	if (reported) {
		alert("place.name is reported.")
	}
}
