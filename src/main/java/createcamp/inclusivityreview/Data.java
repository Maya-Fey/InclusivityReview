package createcamp.inclusivityreview;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Data {
	
	public Map<String, User> users = new HashMap<>();
	
	public Data() {
		List<String> tags = new ArrayList<String>();
		tags.add("Queer");
		users.put("Alice", new User("alice", "Alice Anderson", tags));
		
		
		
		
	}
	

}
