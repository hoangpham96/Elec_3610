$(document).ready(function(){
	var loggedIn = false;
	var name = "";
	
	if (getCookie("uID")!=null){
		loggedIn = true;
	}
	if (getCookie("name")!=null){
		name = getCookie("name");
	}

	showUserPage(loggedIn,name);
	
   $("#u185").click(function(){
   		$("#loginInput").submit();
   });

});