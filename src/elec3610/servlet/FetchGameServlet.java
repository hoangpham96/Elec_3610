package elec3610.servlet;

import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.Properties;

import javax.servlet.*;
import javax.servlet.http.*;

public class FetchGameServlet extends HttpServlet {
protected void doGet(HttpServletRequest request,
					HttpServletResponse response) throws ServletException {
	
	String imgID = request.getParameter("imgID");
	String gName = request.getParameter("gameName");
	System.out.println(imgID);
	System.out.println(gName);
	
	try {		
		Class.forName("com.mysql.jdbc.Driver");
		String mysqlUrl = "jdbc:mysql://localhost:3306/elec3610";
		Properties userInfo = new Properties();
		userInfo.put("user", "root");
		userInfo.put("password", "root");
		Connection connection = DriverManager.getConnection(mysqlUrl,userInfo);
		Statement stmt = connection.createStatement();
		if (imgID != null && gName == null){
			String sql = "SELECT name FROM game WHERE imgID = '"+imgID+"';";
			ResultSet result = stmt.executeQuery(sql);
			result.first();
			if (result.getRow() > 0){
				gName = result.getString(1);
			}
			result.close();
		}
		if (gName != null && imgID == null){
			String sql = "SELECT imgID FROM game WHERE name = '"+gName+"';";
			ResultSet result = stmt.executeQuery(sql);
			result.first();
			if (result.getRow() > 0){
				imgID = result.getString(1);
			}
			result.close();
		}	
	    PrintWriter out = response.getWriter();  
	    response.setContentType("text");
	    out.println("game_info_page.html?imgID="+imgID+"&gName="+gName);
	    
	} catch (Exception e) {
		e.printStackTrace();
	}
	
}

protected void doPost(HttpServletRequest request,
					HttpServletResponse response) throws ServletException {
		doGet(request, response);
	}
}