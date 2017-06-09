function removeQuotes(str){
	if (str.charAt(0) === '"' && str.charAt(str.length -1) === '"')
	{
	    return str.substr(1,str.length -2);
	}
}



$(document).ready(function(){
	var fetched = false;
	var userStr = getCookie("userDetail");
	var gameStr = getCookie("gameDetail");
	var paymentStr = getCookie("paymentDetail");
	
	if (userStr!=null){
		fetched = true;
	}
	
	if (fetched){

		
		//Remove the quotes at the beginning and end
		userStr = removeQuotes(userStr);
		gameStr = removeQuotes(gameStr);
		paymentStr = removeQuotes(paymentStr);
	
		var user = userStr.split("-");
		var games = gameStr.split(", ");
		var payments = paymentStr.split(", ");
		
		//Remove empty sets
		games.pop();
		payments.pop();
		
		console.log(user);
		console.log(games);
		console.log(payments);
			
		//Replacing user details placeholder
		var gender = "";
		if (user[1]=="M"){
			gender = "Male";
		}
		else{
			gender = "Female";
		}
		
		$("#u1323").replaceWith("<div id='u1323' class='text' style='visibility: visible;'><p><span>"+user[0]+", "+gender+"</span></p><p><span>"+user[2]+"</span></p><p><span>"+user[3]+"</span></p></div>");
		
		//Replacing card info
		var mainPayment = payments[0].split("-");
		switch(mainPayment[0]){
			case "AMEX":
				$("#u1386_img").replaceWith("<img id='u1386_img' class='img' src='images/cards/amex.png'>");
				break;
			case "VISA":
				$("#u1386_img").replaceWith("<img id='u1386_img' class='img' src='images/cards/visa.png'>");
				break;
			case "MAST":
				$("#u1386_img").replaceWith("<img id='u1386_img' class='img' src='images/cards/mastercard.png'>");
				break;
			default:
				$("#u1386_img").replaceWith("<img id='u1386_img' class='img' src='images/cards/mastercard.png'>");
		}
		
		lastFour = mainPayment[1].substring(mainPayment[1].length-4,mainPayment[1].length);
		console.log(lastFour);
		$("#u1389").replaceWith("<div id='u1389' class='text' style='visibility: visible;'><p><span>XXXX - XXXX - XXXX - "+lastFour+"</span></p></div>");	
		
		//Change game list
		var htmlCode = "<div id='gameList'>\n";
		
		for(var i=0; i< games.length; i++){
			var game = games[i].split('-');
			var htmlDiv = "\n<div class='ax_default image gameInList' style='left:"+220*i+"px;'>\n<img class='imageInList' src='images/games/"+game[1]+".jpg'/>\n</div>\n";
			htmlCode += htmlDiv;
		}
		htmlCode += "</div>";
		console.log(htmlCode);
		$("#gameList").replaceWith(htmlCode);
	}
	
	//Fetch info
	else{
		$.post("/Elec_3610/fetch", {uID: getCookie("uID")}, function(data){
			location.reload();
		});
	}
});