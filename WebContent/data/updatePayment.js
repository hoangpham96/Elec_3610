function reloadPayments(user,payments){
	var nPayment = payments.length;
	//Configuring the sizes
	$("#addPayment").css({"top":130+nPayment*75});
	$("#paymentOK").css({"top":130+nPayment*75+75});
	$("#centerBox").css({"height":130+nPayment*75+75+75});
	
	//Change game list
	if(nPayment > 0){
		var htmlCode = "<div id='payments'><!-- For all payments -->\n";
		
		//List payment options
		for(var i=0; i< payments.length; i++){
			var payment = payments[i].split('-');
			var cardTypeName = payment[0];
			switch(cardTypeName){
				case "AMEX":
					cardTypeName = "amex";
					break;
				case "VISA":
					cardTypeName = "visa";
					break;
				case "MAST":
					cardTypeName = "mastercard";
					break;
			}
			lastFour = payment[1].substring(payment[1].length-4,payment[1].length);

			//Adding each payment option
			var paymentPlacement = 75*i;
			var htmlDiv = "\n<div class='payment' style='top: "+paymentPlacement+"px'><!-- For one payment -->\n" +
						  "\n<div  class='ax_default icon cardType'>\n" +
						  "<img class='img cardTypeimg' src='images/cards/"+cardTypeName+".png'/>\n" +
						  "</div>\n" +
						  "\n<div class='ax_default box_3 cardName'>\n<div class='cardNamediv'>\n</div>\n" +
						  "<div class='text cardNameText'>\n<p><span>XXXX-XXXX-XXXX-"+lastFour+"</span></p>\n</div>\n" +
						  "</div>\n" +
						  "\n<div id='cardEdit-"+(i+1)+"' class='ax_default primary_button cardEdit'>\n" +
						  "<div class='cardEditdiv'></div>\n" +
						  "<div class='text cardEditText'>\n" +
						  "<p><span>EDIT</span></p>\n" +
						  "</div>\n" +
						  "</div>\n" +
						  "<div id='cardRemove-"+(i+1)+"' class='ax_default primary_button cardRemove'>\n" +
						  "<div class='cardRemovediv'></div>\n" +
						  "<div class='text cardRemoveText'>\n" +
				          "<p><span>REMOVE</span></p>\n" +
				          "</div>\n"+
				          "</div>\n"+
				          "</div>\n";
			htmlCode += htmlDiv;
		}			      
		htmlCode += "\n</div>";
		$("#payments").replaceWith(htmlCode);
	}
	

	//When edit is clicked
	$(".cardEdit").click(function(){
		var cardToEdit = $(this).attr('id').split('-')[1];
		var card = payments[cardToEdit-1];
		var cardType = card.split('-')[0];
		var cardOldNum = card.split('-')[1];
		var cardExpMonth = card.split('-')[2];
		var cardExpYear = card.split('-')[3];
		var cardCCV = card.split('-')[4];

		$("#addPayment").css("visibility","hidden");
		$(".payment").css("visibility","hidden");
		$("#paymentOK").css("visibility","hidden");
		$("#centerBox").css("height","320px");
		$("#editpaymentOK").css("visibility","visible");
		$("#boxHeader").css({"top": "30px", "left": "270px"});
		$("#boxHeaderText").replaceWith("<div id='boxHeaderText' class='text'><p><span>Edit card</span></p></div>");
		$("#addPaymentForm").css("visibility","visible");
		$("#addPaymentInput").css("visibility","visible");
		
		$("#rf1textbox").val(cardType);
		$("#rf2textbox").val(cardOldNum);
		$("#rf31textbox").val(cardExpMonth);
		$("#rf32textbox").val(cardExpYear);
		$("#rf4textbox").val(cardCCV);
		
		$("#editpaymentOK").click(function(){
			var pass = true;
		
			cardType = $("#rf1textbox").val();
			cardNum = $("#rf2textbox").val();
			cardExp = $("#rf31textbox").val()+'-'+$("#rf32textbox").val();
			cardCCV = $("#rf4textbox").val();
			
			//Filter
			if(cardType == null || cardNum == null || cardExp == null || cardCCV == null || cardOldNum == null){
				alert("Please enter all details.");
				pass = false;
			}
			else if (cardCCV.length > 3) {
				alert("Please enter the month AND the year of the card's expiry");
				pass = false;
			}
			
			if(pass){

				$.post("/Elec_3610/editPayment", {uID: user, type: cardType, num:cardNum, exp: cardExp, ccv:cardCCV, oldNum: cardOldNum}, function(data){
		   			if(data.includes("true")){
		   				alert("Card has been edited.");
		   				$("#addPayment").css("visibility","visible");
		   				$("#paymentOK").css("visibility","visible");
		   				$("#editpaymentOK").css("visibility","hidden");
		   				$("#boxHeader").css({"top": "66px", "left": "216px"});
		   				$("#boxHeaderText").replaceWith("<div id='boxHeaderText' class='text'><p><span>Payment Information</span></p></div>");
		   				$("#addPaymentForm").css("visibility","hidden");
		   				$("#addPaymentInput").css("visibility","hidden");
		   				
		   				payments.splice(cardToEdit-1,1,cardType+"-"+cardNum+"-"+cardExp+"-"+cardCCV);
		   				var paymentStr = "";
		   				for(var i = 0; i < payments.length; i++){
		   					paymentStr += payments[i] + "_ ";
		   				}
		   				console.log(paymentStr)
		   				deleteCookie("paymentDetail");
		   				createCookie("paymentDetail",paymentStr,1);
		   				console.log(getCookie("paymentDetail"));
		   				reloadPayments(user,payments);
		   				$(".payment").css("visibility","visible");
		   			}
		   			else{
		   				alert("We had some trouble editing your card. Please try again");
		   			}
		   		});
			}
		})
	})
	
	
	
	//When remove is clicked
	$(".cardRemove").click(function(){
		var cardToRemove = $(this).attr('id').split('-')[1];
		var cardNum = payments[cardToRemove-1].split('-')[1];
	   	var agree = confirm("This will remove card number "+cardToRemove+".\nDo you wish to continue ?");
	   	if(agree){
	   		$.post("/Elec_3610/removePayment", {uID: user, num: cardNum}, function(data){
	   			if(data.includes("true")){
	   				alert("Card number "+ cardToRemove + " has been removed.");
	   				payments.splice(cardToRemove-1,1);
	   				var paymentStr = "\"";
	   				for(var i = 0; i < payments.length; i++){
	   					paymentStr += payments[i] + "_ ";
	   				}
	   				paymentStr += "\"";
	   				deleteCookie("paymentDetail");
	   				createCookie("paymentDetail",paymentStr,1);
	   				reloadPayments(user,payments);
	   			   	if(payments.length == 0){
	   			   		$(".payment").css("visibility","hidden");
	   			   	}
	   			   	else{
	   			   		$(".payment").css("visibility","visible");
	   			   	}
	   			}
	   			else{
	   				alert("We had some trouble deleting your card. Please try again");
	   			}
	   		});
	   	}

	})
}

/**
 * When click on update in payment section
 */
$(document).ready(function(){
	var paymentStr = getCookie("paymentDetail")
	if(paymentStr[0] == "\""){
		paymentStr = removeQuotes(paymentStr);
	}
	var payments = paymentStr.split("_ ");

	var user = getCookie("uID");
	payments.pop();

	reloadPayments(user,payments);
	
	
	$("#u1390").click(function(){
		//Show everything once update is clicked
		$("#bgrblur").css("visibility","visible");
		$("#paymentBox").css("visibility","visible");
		$("#boxHeader").css("visibility","visible");
		$("#addPayment").css("visibility","visible");
		$(".payment").css("visibility","visible");
		$("#paymentOK").css("visibility","visible");
		
	});
	
	//When OK is clicked
	$("#paymentOK").click(function(){
		$("#bgrblur").css("visibility","hidden");
		$("#paymentBox").css("visibility","hidden");
		$("#boxHeader").css("visibility","hidden");
		$("#addPayment").css("visibility","hidden");
		$(".payment").css("visibility","hidden");
		$("#paymentOK").css("visibility","hidden");
		location.reload();
	});
	
	//When add card is clicked
	$("#addPayment").click(function(){
		$("#addPayment").css("visibility","hidden");
		$(".payment").css("visibility","hidden");
		$("#paymentOK").css("visibility","hidden");
		$("#centerBox").css("height","320px");
		$("#addpaymentOK").css("visibility","visible");
		$("#boxHeader").css({"top": "30px", "left": "260px"});
		$("#boxHeaderText").replaceWith("<div id='boxHeaderText' class='text'><p><span>Add new card</span></p></div>");
		$("#addPaymentForm").css("visibility","visible");
		$("#addPaymentInput").css("visibility","visible");
		
		
	})
	
	$("#addpaymentOK").click(function(){
			var pass = true;
		
			var cardType = $("#rf1textbox").val();
			var cardNum = $("#rf2textbox").val();
			var cardExp = $("#rf31textbox").val()+'-'+$("#rf32textbox").val();
			var cardCCV = $("#rf4textbox").val();
			
			//Filter
			if(cardType == null || cardNum == null || cardExp == null || cardCCV == null){
				alert("Please enter all details.");
				pass = false;
			}
			else if (cardCCV.length != 3) {
				alert("The length of CCV must be 3");
				pass = false;
			}
			
			if(pass){
				$.post("/Elec_3610/addPayment", {uID: user, type: cardType, num:cardNum, exp: cardExp, ccv:cardCCV}, function(data){
		   			if(data.includes("true")){
		   				alert("Card has been added.");
		   				
		   				$("#rf1textbox").val("");
						$("#rf2textbox").val("");
						$("#rf31textbox").val("");
						$("#rf32textbox").val("");
						$("#rf4textbox").val("");
		   				
		   				$("#addPayment").css("visibility","visible");
		   				$("#paymentOK").css("visibility","visible");
		   				$("#addpaymentOK").css("visibility","hidden");
		   				$("#boxHeader").css({"top": "66px", "left": "216px"});
		   				$("#boxHeaderText").replaceWith("<div id='boxHeaderText' class='text'><p><span>Payment Information</span></p></div>");
		   				$("#addPaymentForm").css("visibility","hidden");
		   				$("#addPaymentInput").css("visibility","hidden");
		   				
		   				payments.push(cardType+"-"+cardNum+"-"+cardExp+"-"+cardCCV);
		   				var paymentStr = "\"";
		   				for(var i = 0; i < payments.length; i++){
		   					paymentStr += payments[i] + "_ ";
		   				}
		   				paymentStr += "\"";
		   				deleteCookie("paymentDetail");
		   				createCookie("paymentDetail",paymentStr,1);
		   				reloadPayments(user,payments);
		   				$(".payment").css("visibility","visible");
		   			}
		   			else{
		   				alert("We had some trouble adding your card. Please try again");
		   			}
		   		});
			}
		})
	

	

})	
