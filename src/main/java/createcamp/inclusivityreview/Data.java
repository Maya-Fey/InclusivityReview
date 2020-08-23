package createcamp.inclusivityreview;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Data {
	
	public static final Map<String, User> users = new HashMap<>();
	public static final Map<String, Place> places = new HashMap<>();
	public static final Map<String, List<Review>> reviews = new HashMap<>();
	
	static {
		List<String> tags = new ArrayList<String>();
		tags.add("Queer");
		users.put("Alice", new User("alice", "Alice Anderson", tags));
	}
	
	public static final void addReview(Review review)
	{
		if(!reviews.containsKey(review.placeID)) {
			reviews.put(review.placeID, new ArrayList<>());
		}
		reviews.get(review.placeID).add(review);
	}
	
	public static final List<Review> getReviews(String place) {
		if(!reviews.containsKey(place)) {
			return new ArrayList<>();
		}
		return reviews.get(place);
	}
	

}
