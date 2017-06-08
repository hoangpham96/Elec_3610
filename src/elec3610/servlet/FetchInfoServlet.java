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

public class FetchInfoServlet extends HttpServlet {
protected void doGet(HttpServletRequest request,
					HttpServletResponse response) throws ServletException {
	
	String username = request.getParameter("username");
	int uid = 1;
	String name = "";
	String gender = "";
	String address = "";
	String email = "";
	
	String user = "";
	String games = "";
	String payments = "";
	
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
			
			uid = result.getInt(1);
			name = result.getString(4)+" "+result.getString(5);
			gender = result.getString(6);
			address = result.getString(7);
			email = result.getString(8);
			
			user = name+"-"+gender+"-"+address+"-"+email;
			System.out.println(user);
			result.close();
			
			Statement stmt2 = connection.createStatement();
			String sql2 = "SELECT G.name, G.imgID FROM Game G JOIN usergamelist UG ON (G.id = UG.gameID) WHERE userid = '"+uid+"';";
			ResultSet result2 = stmt2.executeQuery(sql2);
			result2.first();
			if (result2.getRow() > 0){
				while(!result2.isAfterLast()){
					String gameInfo = result2.getString(1)+"-"+result2.getString(2);
					System.out.println(gameInfo);
					games+=gameInfo+", ";
					result2.next();
				}
			}
			result2.close();
			
			Statement stmt3 = connection.createStatement();
			String sql3 = "SELECT paymentType, cardNum, cardExp, cardCCV FROM paymentDetail WHERE userid = '"+uid+"';";
			ResultSet result3 = stmt3.executeQuery(sql3);
			result3.first();
			if (result3.getRow() > 0){
				while(!result3.isAfterLast()){
					String paymentInfo = result3.getString(1)+"-"+result3.getString(2)+"-"+result3.getString(3)+"-"+result3.getString(4);
					System.out.println(paymentInfo);
					payments+=paymentInfo+", ";
					result3.next();
				}
			}
			result3.close();
		}
		System.out.println("-----------");
		System.out.println(user);
		System.out.println(games);
		System.out.println(payments);
		
		Cookie userDetail = new Cookie("userDetail",user);
		Cookie gamesDetail = new Cookie("gameDetail",games);
		Cookie paymentsDetail = new Cookie("paymentDetail",payments);
		response.addCookie(userDetail);
		response.addCookie(gamesDetail);
		response.addCookie(paymentsDetail);
		
	    PrintWriter out = response.getWriter();  
	    response.setContentType("text/html");  
	    out.println("<script type=\"text/javascript\">");  
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