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

public class SaveGameServlet extends HttpServlet {
	
	protected void doGet(HttpServletRequest request,
						HttpServletResponse response) throws ServletException {
		String uID = request.getParameter("uID");
		String gID = request.getParameter("gID");
		
		try {		
			if (uID != null && gID != null){
				Class.forName("com.mysql.jdbc.Driver");
				String mysqlUrl = "jdbc:mysql://localhost:3306/elec3610";
				Properties userInfo = new Properties();
				userInfo.put("user", "root");
				userInfo.put("password", "root");
				Connection connection = DriverManager.getConnection(mysqlUrl,userInfo);
				Statement stmt = connection.createStatement();
								
				String sql = "INSERT INTO usergamelist() VALUES("+uID+","+gID+");";
				
				try{
					stmt.executeUpdate(sql);
					System.out.println("Inserted records into the table...");
					
				    PrintWriter out = response.getWriter();  
				    response.setContentType("text/html");  
				    out.println("<script type=\"text/javascript\">");
				    out.println("alert('Game sucessfully saved!')"); 
				    out.println("window.location = 'account_page.html';");  
				    out.println("</script>");
				}
				catch (Exception e) {
					PrintWriter out = response.getWriter();  
				    response.setContentType("text/html");  
				    out.println("<script type=\"text/javascript\">");
				    out.println("alert('Game has already been saved before!')"); 
				    out.println("window.location = 'game_info_page.html?gID="+gID+"';");  
				    out.println("</script>");
				}
			}
			else {
				PrintWriter out = response.getWriter();  
			    response.setContentType("text/html");  
			    out.println("<script type=\"text/javascript\">");
			    out.println("alert('Save Game unsuccessful! Please try again.')"); 
			    out.println("window.location = 'game_info_page.html?gID="+gID+"';");  
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