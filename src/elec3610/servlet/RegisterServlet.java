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
		try{
			PrintWriter out1 = response.getWriter();  
			response.setContentType("text");
			out1.println(username);
			out1.println(password);
			out1.println(firstname);
			out1.println(lastname);
			out1.println(gender);
			out1.println(address);
			out1.println(email);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		
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
				System.out.println(sql);
				try{
					stmt.executeUpdate(sql);
					System.out.println("Inserted records into the table...");
					
				    PrintWriter out = response.getWriter();  
				    response.setContentType("text/html");  
				    out.println("<script type=\"text/javascript\">");
				    out.println("alert('Register successful')"); 
				    out.println("window.location = 'main_page.html';");  
				    out.println("</script>");
				}
				catch (Exception e) {
					PrintWriter out = response.getWriter();  
					response.setContentType("text");
					out.println("Test page");
					e.printStackTrace();
				}
			}
			else {
				 PrintWriter out = response.getWriter();  
				 response.setContentType("text");
				 out.println("Test page");
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