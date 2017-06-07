package elec3610.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.Properties;
import java.util.Timer;
import java.util.TimerTask;

import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {
protected void doGet(HttpServletRequest request,
					HttpServletResponse response) throws ServletException {
	
	String username = request.getParameter("username");
	String password = request.getParameter("password");
	boolean success = false;
	
	try {
//		PrintWriter out = response.getWriter();
//		response.setContentType("text;html;charset=utf-8");
//		out = response.getWriter();
//		out.print(username + "\n");
//		out.print(password + "\n");
		
		if (username != null && password != null){
			Class.forName("com.mysql.jdbc.Driver");
			String mysqlUrl = "jdbc:mysql://localhost:3306/elec3610";
			Properties userInfo = new Properties();
			userInfo.put("user", "root");
			userInfo.put("password", "root");
			Connection connection = DriverManager.getConnection(mysqlUrl,userInfo);
			Statement stmt = connection.createStatement();
			String sql = "SELECT * FROM user WHERE username = '"+username+"' and password = '"+password+"';";
			ResultSet result = stmt.executeQuery(sql);
			result.first();
			if (result.getRow() > 0){
				success = true;
			}
		}
		else{
			success = false;
		}

		
		if (success){
			Cookie usernameCookie = new Cookie("username",username);
		    response.addCookie(usernameCookie);
		    PrintWriter out = response.getWriter();  
		    response.setContentType("text/html");  
		    out.println("<script type=\"text/javascript\">");  
		    out.println("alert('Log in successful!');");
		    out.println("window.location = 'account_page.html';");  
		    out.println("</script>");

		}
		else{
		    PrintWriter out = response.getWriter();  
		    response.setContentType("text/html");  
		    out.println("<script type=\"text/javascript\">");  
		    out.println("alert('Log in unsuccessful! Try again!');");
		    out.println("window.location = 'main_page.html';");  
		    out.println("</script>");
		}

	} catch (Exception e) {
		e.printStackTrace();
	}
}

protected void doPost(HttpServletRequest request,
					HttpServletResponse response) throws ServletException {
		doGet(request, response);
	}
}