$(document).ready(function(){
	var loggedIn = false;
	var name = "";
	
	if (getCookie("uID")!=null){
		loggedIn = true;
	}
	if (getCookie("name")!=null){
		name = getCookie("name");
	}

	
	function showUserPage(){
	   if (loggedIn) {
	  		$("#loginSect").replaceWith("<div id='userWelcome' class='ax_default box_2'><div id='u46_div' class=''></div><div id='userPageLink' class='text' style='visibility: visible;'><p><span> <a href=account_page.html>"+"Welcome, "+name+" !"+"</a> </span></p></div></div>");
	  }
	}
	
	showUserPage();
	
   $("#u185").click(function(){
   		$("#loginInput").submit();
   });

});