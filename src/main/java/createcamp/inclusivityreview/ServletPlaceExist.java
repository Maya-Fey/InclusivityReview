package createcamp.inclusivityreview;


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;


public class ServletPlaceExist extends HttpServlet {
	
	private static final long serialVersionUID = -5595471112661348949L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
	{
		resp.setHeader("Access-Control-Allow-Origin", "*");
		
		//get java object storing data required
		
		String reqPlaceID = req.getParameter("placeID");
		
		//Place place = new Place("1111", "Home", 0.82, 90.2);
		
		
		
		boolean exist = false;
  

		//add Java object data into json
		JSONObject obj = new JSONObject();
		obj.put("exist", exist);
		/*
		obj.put("placeID", place.placeID);
		obj.put("name", place.name);
		*/
		
		try(PrintWriter writer = resp.getWriter()) {
			
			writer.write(obj.toString());
		} catch (IOException e) {
			e.printStackTrace();
		}
		resp.setStatus(HttpServletResponse.SC_OK);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
	{
		//req.getParameter("myparam")
	}
}
