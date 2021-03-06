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
public class EditPaymentServlet extends HttpServlet {
	
	protected void doGet(HttpServletRequest request,
						HttpServletResponse response) throws ServletException {
		String uID = request.getParameter("uID");
		String type = request.getParameter("type");
		String oldNum = request.getParameter("oldNum");
		String num = request.getParameter("num");
		String exp = request.getParameter("exp");
		String ccv = request.getParameter("ccv");

		try {		
			if (type != null && num != null && exp != null && ccv != null){
				Class.forName("com.mysql.jdbc.Driver");
				String mysqlUrl = "jdbc:mysql://localhost:3306/elec3610";
				Properties userInfo = new Properties();
				userInfo.put("user", "root");
				userInfo.put("password", "root");
				Connection connection = DriverManager.getConnection(mysqlUrl,userInfo);
				Statement stmt = connection.createStatement();
				
				String sql = "UPDATE paymentDetail SET paymentType = '"+type+"', cardNum = '"+num+"', cardExp = '"+exp+"', cardCCV = '"+ccv+"' WHERE userid = '"+uID+"' AND cardNum = '"+oldNum+"';";
				try{
					int completed = stmt.executeUpdate(sql);

					//If the SQL doesn't succeed
					if(completed == 0){
					    PrintWriter out = response.getWriter();  
					    response.setContentType("text");  
					    out.println("false");
					}
					//If the SQL succeeds
					else{
					    PrintWriter out = response.getWriter();  
					    response.setContentType("text");  
					    out.println("true");
					}

				}
				catch (Exception e) {
					PrintWriter out = response.getWriter();  
				    response.setContentType("text");  
				    out.println("false");
				}
			}
			else {
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