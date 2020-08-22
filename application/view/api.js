reviewexample = {
	username: "claire",
	placeID: "",
	safety: 4.0,
	inclusivity: 4.0,
	enjoyability: "Repudiandae minima earum rerum ratione molestiae maxime dolorem ut. Tempora quod est quaerat unde corporis nisi. Quidem quibusdam inventore laudantium impedit repellat. Vel libero voluptas accusamus quis dolore ipsum saepe."
};

placeexample = {
	placeID: "ChIJ90utGdevOG0Rhmjc02ajcJo",
	name: "Ivy Bar & Cabaret",
	lat: -41.29098399999999,
	lng: 174.7771863
}

userexample = {
	username: "claire",
	fullname: "Claire Chambers",
	tags = [
		"trans", "female", "queer"
	];
};

function placeExists(placeID)
{
	//TODO: Put things here
	return { exists: false};
}

function addPlace(place)
{
	//Write to place
}

function getReviewsByPlace(placeId)
{
	//TODO: do read
	return [
		reviewexample,
		reviewexample,
		reviewexample
	];
}

function getUserByUsername(username)
{
	return userexample;
}