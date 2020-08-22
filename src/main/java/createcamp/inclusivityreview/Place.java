package createcamp.inclusivityreview;

public class Place implements java.io.Serializable {
   public String placeID;
   public String name;
   public double latitude;
   public double longitude;
   
	public Place(String placeID, String name, double latitude, double longitude) {
		super();
		this.placeID = placeID;
		this.name = name;
		this.latitude = latitude;
		this.longitude = longitude;
	}
}

