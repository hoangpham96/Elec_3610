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

public class RemoveGameServlet extends HttpServlet {
	
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
				String sql = "";
				System.out.println(gID);
				
				if(gID.equals("all")){
					sql = "DELETE FROM usergamelist WHERE userID = "+uID+";";
				}
				else{
					sql = "DELETE FROM usergamelist WHERE userID = "+uID+" AND gameID = "+gID+";";
				}
							
				try{
					System.out.println(sql);
					int completed = stmt.executeUpdate(sql);
					System.out.println(completed);

					
					//If the SQL doesn't succeed
					if(completed == 0){
					    PrintWriter out = response.getWriter();  
					    response.setContentType("text");  
					    out.println("false");
					}
					//If the SQL succeeds
					else{
						System.out.println("Deleted records from the table...");
					    PrintWriter out = response.getWriter();  
					    response.setContentType("text");  
					    out.println("true");
					}
				}
				//If there's any error with the SQL
				catch (Exception e) {
				    PrintWriter out = response.getWriter();  
				    response.setContentType("text");  
				    out.println("false");
				}
			}
			else {
				//If the input is missing
			    PrintWriter out = response.getWriter();  	
			    response.setContentType("text");  
			    out.println("false");
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