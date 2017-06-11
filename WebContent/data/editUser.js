$(document).ready(function(){		
   $("#u1430").click(function(){
	   var user = getCookie("uID");
	   	var password = $("#editPasswordInput").val();
		var firstname = $("#editFirstnameInput").val();
		var lastname = $("#editLastnameInput").val();
		var email = $("#editEmailInput").val();
		
		if(password == '' && firstname == '' && lastname == '' && lastname == ''){
			alert("Please enter at least 1 detail");
		}
		else if(!email.includes('@')){
			alert("Invalid email.\n Email must include @ sign.");
		}
		else{
			$.post("/Elec_3610/editUser", {uID: user, first: firstname, last: lastname, pw:password, em: email}, function(data){
				if(data.includes("true")){
					if(password!=''){
						alert("Sucessfully changed details. Since password was changed, you will now be logged out.");
						deleteAllCookies();
						window.location="main_page.html";
					}
					else{					
						alert("Sucessfully changed details.");
						deleteCookie("userDetail");
						location.reload()
					}
				}
				else{
					alert("There was an issue editing your details")
				}
			})
		}
   });
});