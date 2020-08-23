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
		String reqPlaceID = req.getParameter("placeID");
		
		boolean exist = Data.places.containsKey(reqPlaceID);
		JSONObject obj = new JSONObject();
		obj.put("exist", exist);
		
		try(PrintWriter writer = resp.getWriter()) {
			
			writer.write(obj.toString());
		} catch (IOException e) {
			e.printStackTrace();
		}
		resp.setStatus(HttpServletResponse.SC_OK);
	}
	
}
