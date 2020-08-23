package createcamp.inclusivityreview;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

public class ServletGetUser extends HttpServlet {
	
	private static final long serialVersionUID = -5595471112661348949L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
	{
		resp.setHeader("Access-Control-Allow-Origin", "*");
		String username = req.getParameter("username");
		
		User user = Data.users.get(username);
		if(user == null) {
			resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return;
		}
		
		JSONObject obj = new JSONObject();
		obj.put("username", user.username);
		obj.put("fullname", user.fullName);
		JSONArray arr = new JSONArray();
		for(String tag : user.tags)
			arr.put(tag);
		obj.put("tags", arr);
		
		try(PrintWriter writer = resp.getWriter()) {
			writer.write(obj.toString());
		} catch (IOException e) {
			e.printStackTrace();
			resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return;
		}
		resp.setStatus(HttpServletResponse.SC_OK);
	}
	
}
