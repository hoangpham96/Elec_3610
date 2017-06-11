package elec3610.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class RegisterServlet extends HttpServlet {
	
	protected void doGet(HttpServletRequest request,
						HttpServletResponse response) throws ServletException {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String firstname = request.getParameter("firstname");
		String lastname = request.getParameter("lastname");
		String gender = request.getParameter("gender");
		String email = request.getParameter("email");
		String address = request.getParameter("address");
		
		try {		
			if (username != null && password != null){
				Class.forName("com.mysql.jdbc.Driver");
				String mysqlUrl = "jdbc:mysql://localhost:3306/elec3610";
				Properties userInfo = new Properties();
				userInfo.put("user", "root");
				userInfo.put("password", "root");
				Connection connection = DriverManager.getConnection(mysqlUrl,userInfo);
				Statement stmt = connection.createStatement();
				String sql = "INSERT INTO user() VALUES(NULL, '"+username+"', '"+password+"', '"+firstname
						+"', '"+lastname+"', '"+gender+"', '"+address+"', '"+email+"');";
				try{
					stmt.executeUpdate(sql);
					
				    PrintWriter out = response.getWriter();  
				    response.setContentType("text/html");  
				    out.println("<script type=\"text/javascript\">");
				    out.println("alert('Register successful! Logging in...')"); 
				    out.println("window.location = 'login?username="+username+"&password="+password+"';");  
				    out.println("</script>");
				}
				catch (Exception e) {
					PrintWriter out = response.getWriter();  
				    response.setContentType("text/html");  
				    out.println("<script type=\"text/javascript\">");
				    out.println("alert('Register unsuccessful! There was an error handling your registration. Please try again.')"); 
				    out.println("window.location = 'register.html';");  
				    out.println("</script>");
				}
			}
			else {
				PrintWriter out = response.getWriter();  
			    response.setContentType("text/html");  
			    out.println("<script type=\"text/javascript\">");
			    out.println("alert('Register unsuccessful! There was an error handling your registration. Please try again.')"); 
			    out.println("window.location = 'register.html';");  
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