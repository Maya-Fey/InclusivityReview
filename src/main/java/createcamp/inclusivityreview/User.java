package createcamp.inclusivityreview;

import java.util.List;

public class User  implements java.io.Serializable {
	public String username;
	public String fullName;
	public List<String> tags;
	
	public User(String username, String fullName, List<String> tags) {
		super();
		this.username = username;
		this.fullName = fullName;
		this.tags = tags;
	}
	
	


}
