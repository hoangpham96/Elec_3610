package elec3610.servlet;

import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class RegisterServlet extends HttpServlet {
	
	protected void doGet(HttpServletRequest request,
						HttpServletResponse response) throws ServletException {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String passwordcfm = request.getParameter("passwordcfm");
		String gender = request.getParameter("gender");
		String year = request.getParameter("year");
		// response to the client
		try {
			PrintWriter out = response.getWriter();
			 response.setContentType("text;html;charset=utf-8");
			 out = response.getWriter();
			out.print("this is the response from the server\n");
			out.print("password:" + password+ "\n");
			out.print("gender:" + gender+ "\n");
			out.print("year:" + year+ "\n");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	protected void doPost(HttpServletRequest request,
						HttpServletResponse response) throws ServletException {
		doGet(request, response);
	}
}