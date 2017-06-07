package elec3610.servlet;

import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.Properties;
import java.util.ArrayList;

import javax.servlet.*;
import javax.servlet.http.*;

/***
 * Get the information of the user without storing into cookies
 * @author Hoang
 *
 */
public class FetchInfoServlet extends HttpServlet {
protected void doGet(HttpServletRequest request,
					HttpServletResponse response) throws ServletException {
	
	String username = request.getParameter("username");
	String name = "";
	String gender = "";
	String address = "";
	String email = "";
	
	ArrayList gameID = new ArrayList<Integer>();
	
	ArrayList paymentType = new ArrayList<String>();
	
	try {		
		if (username != null){
			Class.forName("com.mysql.jdbc.Driver");
			String mysqlUrl = "jdbc:mysql://localhost:3306/elec3610";
			Properties userInfo = new Properties();
			userInfo.put("user", "root");
			userInfo.put("password", "root");
			Connection connection = DriverManager.getConnection(mysqlUrl,userInfo);
			Statement stmt = connection.createStatement();
			String sql = "SELECT * FROM user WHERE username = '"+username+"';";
			ResultSet result = stmt.executeQuery(sql);
			result.first();
			if (result.getRow() > 0){
				name = result.getString(4)+" "+result.getString(5);
				gender = result.getString(6);
				address = result.getString(6);
				email = result.getString(8);
			}
			result.close();
		}
		
		Cookie usernameCookie = new Cookie("username",username);
	    response.addCookie(usernameCookie);
	    Cookie nameCookie = new Cookie("name",name);
	    response.addCookie(nameCookie);
	    
	    PrintWriter out = response.getWriter();  
	    response.setContentType("text/html");  
	    out.println("<script type=\"text/javascript\">");  
	    out.println("alert('Log in successful!');");
	    out.println("window.location = 'account_page.html';");  
	    out.println("</script>");


	} catch (Exception e) {
		e.printStackTrace();
	}
}

protected void doPost(HttpServletRequest request,
					HttpServletResponse response) throws ServletException {
		doGet(request, response);
	}
}