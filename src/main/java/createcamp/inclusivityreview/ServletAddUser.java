package createcamp.inclusivityreview;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONTokener;


public class ServletAddUser extends HttpServlet {
	
	private static final long serialVersionUID = -5595471112661348949L;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
	{
		resp.setHeader("Access-Control-Allow-Origin", "*");
		JSONTokener token;
		try {
			token = new JSONTokener(req.getReader()); 
			JSONObject obj = new JSONObject(token);
			
			try {
				String username = obj.getString("username");
				String fullname = obj.getString("fullname");
				JSONArray tagsJ = obj.getJSONArray("tags");
				List<String> tags = new ArrayList<>();
				for(int i = 0; i < tagsJ.length(); i++)
					tags.add(tagsJ.getString(i));
				User user = new User(username, fullname, tags);
				Data.users.put(username, user);
				
				resp.setStatus(HttpServletResponse.SC_OK);
			} catch(JSONException e) {
				resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			}
		} catch (IOException e1) {
			resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
	}
	
}
