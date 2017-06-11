$(document).ready(function(){		
   $("#regSubmit").click(function(){
	   var pass = true;
		var username = $("#rf1textbox").val();
		var password = $("#rf2textbox").val();
		var firstname = $("#rf3textbox").val();
		var lastname = $("#rf4textbox").val();
		var address = $("#rf6textbox").val();
		var email = $("#rf7textbox").val();

		
	   	   
	   if (username.length == 0 || password.length == 0 ||firstname.length == 0 ||lastname.length == 0){
		   alert("Please enter your required details.\nNote: Required details are marked with *.");
		   pass = false;
	   }
	   else if (username.length < 4 || password.length < 4){
		   alert("Username and password must be 4 characters or more.");
		   pass = false;
	   }
	   else if (!email.includes('@')){
		   alert("Invalid email.\n Email must include @ sign.");
		   pass = false;
	   }
	   else if(!$('#rfradio1').is(':checked') && !$('#rfradio2').is(':checked')){
		   alert("Please select a gender.");
		   pass = false;
	   }
	   

	   if (pass){
   			$("#registerInput").submit();
	   }
   });
});