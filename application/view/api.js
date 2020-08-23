reviewexample = {
	username: "claire",
	placeID: "ChIJ90utGdevOG0Rhmjc02ajcJo",
	safety: 4.0,
	inclusivity: 4.0,
	enjoyability: 4.0,
	reviewtext: "Repudiandae minima earum rerum ratione molestiae maxime dolorem ut. Tempora quod est quaerat unde corporis nisi. Quidem quibusdam inventore laudantium impedit repellat. Vel libero voluptas accusamus quis dolore ipsum saepe."
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
	tags: [
		"trans", "female", "queer"
	]
};

function placeExists(placeID)
{
	return getFromServer("http://127.0.0.1:8080/exist?placeID=" + placeID);
}

function addPlace(place)
{
	fetch("http://127.0.0.1:8080/addplace", {
		method: "POST",
		body: JSON.stringify(place)
	}).then(function(res) { res.json(); });
}

function getReviewsByPlace(placeId)
{
	return getFromServer("http://127.0.0.1:8080/review?placeID=" + placeID);
}

function addReview(review)
{
	fetch("http://127.0.0.1:8080/addreview", {
		method: "POST",
		body: JSON.stringify(review)
	}).then(function(res) { res.json(); });
}

function getUserByUsername(username)
{
	return userexample;
}

async function getFromServer(url) {
    try {
    const res = await (await fetch(url)).json();
    return res;
  } catch(e) { console.log(e); }
}

function getAverages(reviews)
{
	let safety = 0.0;
	let inclusivity = 0.0;
	let enjoyability = 0.0;
	for(let i = 0; i < reviews.length; i++)
	{
		safety += reviews[i].safety;
		inclusivity += reviews[i].inclusivity;
		enjoyability += reviews[i].enjoyability;
	}
	safety /= reviews.length;
	inclusivity /= reviews.length;
	enjoyability /= reviews.length;
	return {
		"safety": safety,
		"inclusivity": inclusivity,
		"enjoyability": enjoyability
	};
}