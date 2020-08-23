package createcamp.inclusivityreview;

public class Review implements java.io.Serializable {
	
	private static final long serialVersionUID = -3340601855744716533L;
	
	public String username;
	public String placeID;
	public float safety;
	public float inclusivity;
	public float enjoyability;
	public String reviewText;
	/**
	 * @param username
	 * @param placeID
	 * @param safety
	 * @param inclusivity
	 * @param enjoyability
	 * @param reviewText
	 */
	public Review(String username, String placeID, float safety, float inclusivity, float enjoyability,
			String reviewText) {
		this.username = username;
		this.placeID = placeID;
		this.safety = safety;
		this.inclusivity = inclusivity;
		this.enjoyability = enjoyability;
		this.reviewText = reviewText;
	}

}

