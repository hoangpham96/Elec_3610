$(document).ready(function(){		
   $("#u1430").click(function(){
	   var user = getCookie("uID");
	   	var password = $("#editPasswordInput").val();
		var firstname = $("#editFirstnameInput").val();
		var lastname = $("#editLastnameInput").val();
		var email = $("#editEmailInput").val();
		
		console.log(password);
		console.log(firstname);
		console.log(lastname);
		console.log(email);
		
		if(password == '' && firstname == '' && lastname == '' && lastname == ''){
			alert("Please enter at least 1 detail");
		}
		else{
			$.post("/Elec_3610/editUser", {uID: user, first: firstname, last: lastname, pw:password, em: email}, function(data){
				if(data.includes("true")){
					alert("Sucessfully changed details");
					deleteCookie("userDetail");
					location.reload()
				}
				else{
					alert("There was an issue editing your details")
				}
			})
		}
   });
});