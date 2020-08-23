package createcamp.inclusivityreview;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;


public class ServletGetReviews extends HttpServlet {
	
	private static final long serialVersionUID = -5595471112661348949L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
	{
		resp.setHeader("Access-Control-Allow-Origin", "*");
		String reqPlaceID = req.getParameter("placeID");
		
		List<Review> reviews = Data.reviews.get(reqPlaceID);
		JSONArray array = new JSONArray();
		for(Review review : reviews) {
			JSONObject obj = new JSONObject();
			obj.put("username", review.username);
			obj.put("placeID", review.placeID);
			obj.put("safety", review.safety);
			obj.put("inclusivity", review.inclusivity);
			obj.put("enjoyability", review.enjoyability);
			obj.put("reviewtext", review.reviewText);
			array.put(obj);
		}
		
		try(PrintWriter writer = resp.getWriter()) {
			writer.write(array.toString());
		} catch (IOException e) {
			e.printStackTrace();
			resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return;
		}
		resp.setStatus(HttpServletResponse.SC_OK);
	}
	
}
