package createcamp.inclusivityreview;


import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONTokener;


public class ServletPlaceAdd extends HttpServlet {
	
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
				String placeID = obj.getString("placeID");
				String name = obj.getString("name");
				double lat = obj.getDouble("lat");
				double lng = obj.getDouble("lng");
				
				Place place = new Place(placeID, name, lat, lng);
				
				Data.places.put(placeID, place);
				
				resp.setStatus(HttpServletResponse.SC_OK);
			} catch(JSONException e) {
				resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			}
		} catch (IOException e1) {
			resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
	}
	
}
