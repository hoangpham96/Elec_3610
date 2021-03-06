
$(document).ready(function(){
	var fetched = false;
	var userStr = getCookie("userDetail");
	var gameStr = getCookie("gameDetail");
	var paymentStr = getCookie("paymentDetail");
	
	if (userStr!=null && gameStr!=null && paymentStr!=null){
		fetched = true;
	}
	
	if (fetched){
		//Remove the quotes at the beginning and end
		if(userStr[0] == "\""){
			userStr = removeQuotes(userStr);
		}
		if(gameStr[0] == "\""){
			gameStr = removeQuotes(gameStr);
		}
		if(paymentStr[0] == "\""){
			paymentStr = removeQuotes(paymentStr);
		}
	
		var user = userStr.split("-");
		var games = gameStr.split("_ ");
		var payments = paymentStr.split("_ ");
		
		//Remove empty sets
		games.pop();
		payments.pop();
		
		//Replacing user details placeholder
		var gender = "";
		if (user[1]=="M"){
			gender = "Male";
		}
		else{
			gender = "Female";
		}
		
		$("#u1323").replaceWith("<div id='u1323' class='text' style='visibility: visible;'><p><span>"+user[0]+", "+gender+"</span></p><p><span>"+user[2]+"</span></p><p><span>"+user[3]+"</span></p></div>");
		
		//Replacing card info with main card if there's a card
		if(payments.length > 0){
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
			$("#u1389").replaceWith("<div id='u1389' class='text' style='visibility: visible;'><p><span>XXXX - XXXX - XXXX - "+lastFour+"</span></p></div>");	
		}
		
		//Change game list
		if(games.length > 0){
			var htmlCode = "<div id='gameList'>\n";
			
			//Add remove button
			for(var i=0; i< games.length; i++){
				var game = games[i].split('-');
				var htmlDiv = "\n<div class='ax_default image gameInList' style='left:"+220*i+"px;'>\n<a href='game_info_page.html?imgID="+game[2]+"'><img class='imageInList' src='images/games/"+game[2]+".jpg'/></a>\n<div id='remove-"+game[0]+"-"+game[1]+"' class='ax_default primary_button removeButton'>\n<div class='removeButtonBgr'></div>\n<div class='text removeButtonText' style='visibility: visible;'>\n<p><span>Remove</span></p>\n</div>\n</div></div>\n ";
				htmlCode += htmlDiv;
			}
			
			//Add removeAll button
		    htmlCode += "<div id='removeAll'class='ax_default primary_button'>\n<div id='removeAllBgr'></div>\n<div id='removeAllText' class='text' style='visibility: visible;'>\n<p><span>Remove All</span></p>\n</div>\n</div>";
		      
			htmlCode += "</div>";
			$("#gameList").replaceWith(htmlCode);
		}
	}
	
	//Fetch info
	else{
		$.post("/Elec_3610/fetch", {uID: getCookie("uID")}, function(data){
			location.reload();
		});
	}
});