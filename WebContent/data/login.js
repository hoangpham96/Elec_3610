$(document).ready(function(){
	var loggedIn = false;
	if (getCookie("username")!=null){
		loggedIn = true;
	}
	
	
//	if (getCookie("loginSuccess")!=null){
//		if (getCookie("loginSuccess") == "true"){
//			alert("Log in successful!");
//		}
//		else if (getCookie("loginSuccess") == "false"){
//			alert("Log in unsuccessful!");
//		}
//		createCookie("loginSuccess",null,-1);
//		console.log(getCookie("loginSuccess"));
//	}
	
	
	function showUserPage(){
	   if (loggedIn) {
		   var username = getCookie("username")
	  		$("#loginSect").replaceWith("<div id='userWelcome' class='ax_default box_2'><div id='u46_div' class=''></div><div id='userPageLink' class='text' style='visibility: visible;'><p><span> <a href=account_page.html>"+"Welcome, "+username+" !"+"</a> </span></p></div></div>");
	  }
	}
	
	showUserPage();
	
   $("#u185").click(function(){
//   		var username = $("#u186_input").val();
//   		var password = $("#u187_input").val();
   		
   		$("#loginInput").submit();
   		
//   		//TODO: verify username and password with the server
//   		alert("Login: "+username+" "+password);
//   		
//   		createCookie("username",username,1);
//   		loggedIn = true;
//   		showUserPage();

   });

});