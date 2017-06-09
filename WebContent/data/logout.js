$(document).ready(function(){
	$("#logOut").click(function(){
		alert("Log out successfully!");
		deleteAllCookies();
		window.location="main_page.html";
	})
});